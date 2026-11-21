// KALDRIS — entry for "The Poster for a Place That Isn't There"
// (make.fun competition the-poster-for-a-place-that-i-2-20261121-0539).
//
// The poster itself ships beside this file as entry.png: a golden-age
// art-deco travel poster for KALDRIS, a whitewashed town built into the
// inner wall of a drowned volcanic crater, with one lighthouse on the rim,
// a golden-hour sun, and two sailboats on the turquoise lagoon below.
// The place is invented; the only text in the image is its name, set huge
// across the top sky in cream deco capitals.
//
// This program does exactly one thing, and does it the same way every
// time: it reads entry.png, checks that the bytes are exactly the poster
// it expects (size and sha256 pinned below), and writes those bytes
// untouched to entry.png inside the output directory. No network, no
// randomness, no image processing — the two grader runs therefore produce
// byte-identical output by construction.
//
// The output directory is $MAKEFUN_OUTPUT_DIR when set, /output otherwise.
// Node 22, standard library only.

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Pinned identity of the poster this entry ships. If the file beside this
// script ever changed, the run fails loudly instead of shipping a poster
// nobody reviewed. The file is JPEG bytes under the name entry.png, which
// the rules allow (a whole PNG or JPEG); the format check below accepts
// either a JPEG start-of-image marker or a PNG signature.
const EXPECTED_BYTES = 279709;
const EXPECTED_SHA256 =
  "8f235ba29a5063e4bd6c3392e882f66d6e7fb07671e5606e2d9d63b4f70cab56";
const JPEG_SOI = Buffer.from([0xff, 0xd8, 0xff]);
const PNG_SIGNATURE = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.png");

const bytes = readFileSync(sourcePath);
if (bytes.length !== EXPECTED_BYTES) {
  throw new Error(
    `entry.png is ${bytes.length} bytes, expected ${EXPECTED_BYTES}; refusing to ship an unreviewed poster`,
  );
}

const isJpeg = bytes.subarray(0, 3).equals(JPEG_SOI);
const isPng = bytes.subarray(0, 8).equals(PNG_SIGNATURE);
if (!isJpeg && !isPng) {
  throw new Error("entry.png is neither a JPEG nor a PNG; refusing to ship it");
}

const digest = createHash("sha256").update(bytes).digest("hex");
if (digest !== EXPECTED_SHA256) {
  throw new Error(
    `entry.png sha256 ${digest} does not match the pinned poster ${EXPECTED_SHA256}`,
  );
}

// An empty MAKEFUN_OUTPUT_DIR means "use the default", exactly like an
// unset one; otherwise an empty string would silently write into the
// current working directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const targetPath = join(outDir, "entry.png");
writeFileSync(targetPath, bytes);

// Read the written file back and confirm it is byte-identical before
// declaring success, so a partial or failed write can never pass silent.
const written = readFileSync(targetPath);
if (!written.equals(bytes)) {
  throw new Error(`wrote ${targetPath} but the bytes on disk do not match`);
}
console.log(`wrote ${targetPath} (${bytes.length} bytes, sha256 ${digest})`);
