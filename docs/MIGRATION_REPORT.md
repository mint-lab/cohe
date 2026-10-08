# MINT Lab hosting migration — pre-publication validation

Target repository: https://github.com/mint-lab/cohe

Canonical website: https://mint-lab.github.io/cohe/

Source repository: https://github.com/DayenaJeong/cohe-project-page

Copied source commit: 60519483459d851250ae88627c0c7ff90363fbfc

## Access and Pages configuration

The website is developed and maintained by Dayena Jeong (DayenaJeong).
The public cohe repository was created after organization repository-creation
access was verified. GitHub Pages publishing was configured with repository
administration access.

Pages was enabled through the repository API with build_type=workflow.
The returned Pages URL is https://mint-lab.github.io/cohe/. The existing workflow
retains contents:read, pages:write, and id-token:write, Node 22, npm ci, Astro
type-checking, a production build, and the official Pages artifact/deploy actions.

The Astro configuration preserves PAGES_URL-derived origin and pathname.
Its local fallback is now https://mint-lab.github.io/cohe/, providing the same
canonical site and /cohe/ base during local testing. No custom DNS or CNAME was
introduced.

## Preserved website

All source components, CSS, fonts, scientific data, original paper SVG figures,
favicon, interactions, and content provenance are unchanged from the copied
source commit. Only Astro URL configuration, README hosting instructions, and
this migration report were changed.

The original DayenaJeong website and repository remain available. No redirect
has been enabled. A later, separately requested redirect can be implemented on
the old project site after the new URL has been verified.

The research artifact, fixed release, and MINT Lab homepage were read only for
verification. No writes were made to those repositories.

## Completed pre-publication checks

- npm ci completed from the unchanged lockfile: zero reported vulnerabilities.
- npm run check: zero errors, warnings, or hints.
- npm run build: successful production build using the organization URL.
- 296 browser checks passed at 1440, 1024, 768, and 390 pixels.
- 12 axe WCAG A/AA scans: zero violations.
- All gate states, click and keyboard navigation, BibTeX clipboard copy and
  denied-clipboard fallback, expandable details, and no-JavaScript evidence
  visibility passed.
- Canonical and Open Graph URLs both equal https://mint-lab.github.io/cohe/.
- All built local asset paths use /cohe/ and resolve to actual output files.
- Internal anchors resolve, and the former base path is absent from production
  HTML. JavaScript is generated inline and its execution is verified by the
  gate and clipboard interaction checks.
- All eight unique external resource/evidence links returned HTTP 200. The
  NeurIPS paper URL follows its official Sydney-location redirect successfully.
- No browser runtime errors, failed asset requests, or page overflow.
- Original content, source URLs, abstract, citation, and confidence intervals
  passed preservation comparisons.
- Desktop hero, full page, framework, results, mobile hero, and full mobile
  screenshots are byte-for-byte identical to the approved original screenshots.

Local evidence is in the ignored qa/migration directory:

- baseline.json: copied-file hashes and unchanged original-site baseline.
- pre-publication/report.json: browser checks and accessibility scans.
- pre-publication/: desktop/mobile screenshots.
- path-link-report.json: metadata, asset paths, anchors, and all external links.
- screenshot-comparison.json: six identical screenshot comparisons.
- published/: live-site verification and screenshots, recorded after deployment.

This record describes validation completed before pushing the migration.
Deployment is considered complete only after the workflow succeeds and the
new live URL is independently verified; those outcomes are reported at handoff.
