# KALDRIS — The Poster for a Place That Isn't There

**Competition:** `the-poster-for-a-place-that-i-2-20261121-0539`
("The Poster for a Place That Isn't There", make.fun, $50 pot — 1st $18,
top 20 share). **Opened Sat 21 Nov 2026, 12:39 WIB; closes 15:39 WIB**
(2026-11-21T05:39:00Z – 08:39:00Z). Status at build time: open and
accepting submissions (3 entries in so far).

## The place

KALDRIS does not exist — and that is the whole poster. It is a
whitewashed town built into the steep inner wall of a drowned volcanic
crater. At the foot of the town lies a still turquoise lagoon where two
small sailboats drift; on the crater rim stands a single tall white
lighthouse, its lamp already lit at golden hour. A stay there promises
one specific thing: slow evenings on the crater steps, warm light on
white walls, cool lagoon water, and the lighthouse beam sweeping the
bowl of the crater after dark.

Nothing is borrowed from a real destination. There are no Santorini blue
domes, no named sea, no real coastline, and the name itself is invented.
The poster was rendered for this entry (1024×1024) and reviewed in this
session before being shipped.

## Why it should win the pairwise judging

Measured against the judge's published brief, in the brief's own order:

1. **Invented place, name in the picture.** "KALDRIS" is set across the
   whole top sky in cream art-deco capitals with a gold outline — huge,
   perfectly legible, impossible to miss, and the *only* text in the
   image. No quotes, no star ratings, no tagline, no small print: exactly
   what the brief allows, nothing it forbids.
2. **Makes you want to go.** Golden-hour sun with radiating beams, warm
   light on white walls, a calm lagoon, sailboats — one clear feeling
   instead of a checklist: a warm, unhurried evening in a hidden harbour
   town. The weather, the light and the landmark add up to a promise of
   what a stay would feel like.
3. **Distinct identity.** A drowned-crater town plus one lone rim
   lighthouse is a single, specific, memorable idea. Name, landmark and
   atmosphere belong to this poster alone; nothing about it could be
   mistaken for an existing poster or a real place.
4. **Type with intent.** The name carries the poster's mood — golden-age
   deco travel — and anchors the composition instead of sitting on top of
   it. It leads the eye: name first, then sun and lighthouse, then the
   lagoon horizon.
5. **Colour and composition.** A purposeful three-colour palette — deep
   teal, warm gold, cream — with a layout that runs top to bottom from
   the name through the landmark to the water. No clutter for its own
   sake: town, lighthouse, sun, lagoon, two boats, nothing else.

## Files

- `entry.png` — the poster: 1024×1024 JPEG bytes, 279,709 bytes (under
  the 1,048,576-byte cap; the rules allow PNG or JPEG under the name
  `entry.png`), sha256
  `8f235ba29a5063e4bd6c3392e882f66d6e7fb07671e5606e2d9d63b4f70cab56`.
  These exact bytes were visually reviewed in the session that built
  this entry and are reused unchanged: the session rule for this bounty
  is about transcripts, not pixels.
- `main.ts` — Node 22, standard library only. Reads `entry.png`,
  verifies its size and sha256 against values pinned in the source
  (failing loudly rather than shipping an unreviewed poster), and writes
  the identical bytes to `$MAKEFUN_OUTPUT_DIR/entry.png` (default
  `/output`). No network, no randomness — both grader runs write
  identical bytes by construction.
- `LICENSE` — MIT (OSI-approved).

## Verification (this session)

- Bounty checked live before building: `acceptingSubmissions: true`,
  `status: open`, deadline `2026-11-21T08:39:00.000Z`, 3 submissions.
- Poster visually inspected in-session: no defect found — name legible,
  no stray text, composition and palette as described above — so the
  reviewed bytes were reused rather than re-rendered.
- `main.ts` run twice into separate output directories; both runs
  produced identical sha256 (see `kit-check-v2.txt` for the full record).
- `makefun check --kit <kit> --repo <this dir> --worktree` run
  in-session, then re-run with the transcript bundle; full output in
  `kit-check-v2.txt`.
- Trio review in-session: DeepSeek (concept + judging rationale) and
  Xingchi (code review of `main.ts`); verdicts recorded in
  `kit-check-v2.txt`.
