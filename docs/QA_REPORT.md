# Website validation

## CSV examples, reporting outcomes and copy revision

The current revision separates “Run COHE on your CSVs” from “Reproduce the paper,” adds the four input schemas and verified G1/G2/G3 command examples, explains all six final reporting outcomes, and defines non-transitivity from the manuscript introduction. The hero now has a qualitative TL;DR. DINOv2 dependence and prediction appear once in the results text, and its selection deltas appear in the results chart. The full abstract is linked in the unchanged PDF. The two difference plots share one accessible interpretation note.

The original protocol figure displays five outcome names, so the homepage uses a new web SVG listing all six names from the final manuscript and artifact guide. The original paper figure files, paper PDF, numerical records, seed coverage and plot geometry are unchanged. The CSV schema table and code block scroll within their own containers on mobile.

Final `npm run check` and `npm run build` pass with the existing Node 22.23.3 runtime. Production-browser checks at 1280 and 375 px verify no document overflow, zero WCAG 2 A/AA and 2.1 AA axe violations, loaded figures, citation copying, mobile navigation, unchanged chart values and a JavaScript-disabled mobile visit. All three commands copied from the rendered page execute successfully against the artifact's existing toy inputs; the displayed `paper_results` command also passes against completed released records. No scoring or training is launched. Reports, screenshots, copied interface scripts and generated toy summaries are retained in ignored `qa/content-revision/`.

The scripts were checked byte-for-byte against artifact revision `54c201bb79800cedcfd4842b8f5fbc652555da3e`. G2 is a one-dimensional linear interface; G3 summarizes supplied mean accuracies without paired inference or confidence intervals. The page describes these limits and the additional criteria/uncertainty required before assigning a final reporting outcome.

Retained attempts: the initial build check used host-default Node 18 and stopped at Astro's minimum-version check; checks then used the existing compatible runtime. The first browser assertion mistakenly treated the digit in “DINOv2” as a numerical result; its failure report is preserved in `qa/content-revision/report-initial-failure.json`, and the assertion was narrowed to numerical results. After the code block became horizontally scrollable, axe found missing keyboard access; the block now has a tab stop and a named region, and `qa/content-revision/report-scroll-accessibility-failure.json` retains that finding. The paper-statistic command passes but emits a host NumPy/SciPy version-compatibility warning, retained in the final report; no dependency versions were changed. Earlier sections below describe previous revisions and deployments. This revision is a local commit; it has not been pushed or deployed.

## Homepage polish, 375 px and 1280 px

The current revision adds a fixed four-link navigation with a native mobile menu, a question-led hero with data-backed metrics, three always-visible gate steps, a collapsed full abstract, a consolidated four-point Scope box, and a reproduction-coverage table checked against the artifact documentation. The updated social preview is 1200×630. Whisker plot geometry and every `src/data/` file are preserved.

`npm run check` and `npm run build` pass. Production-browser verification at 375 and 1280 px confirms exact metric and chart values, full abstract text, metadata decoding, all local resources, citation copying, navigation, absence of overflow, and zero WCAG 2 A/AA and 2.1 AA axe violations. A JavaScript-disabled mobile visit also passes. Screenshots, logs, data hashes and the check report are retained in `../NeurIPS/homepage_polish_20261008/`; these local evidence files are not published with the website.

The previous sections below describe earlier versions. Their interactive gate tabs have been replaced by static step cards. No new Lighthouse result is claimed. Publication uses the existing GitHub Actions workflow for `mint-lab.github.io/cohe/`; live verification and deployment records are retained in `../NeurIPS/homepage_polish_20261008/deployment/`.

## Final revision, local validation

This camera-ready revision changes the question-led hero, separates DINOv2 first-learning prediction from selection accuracy, clarifies endpoint-specific Gate 3, adds a verified three-step Apply COHE section, consolidates scope, and adds a local PDF and 1200×630 social preview. It preserves the existing academic design, numerical result records, author order, and artifact release.

Final-revision logs and browser evidence are retained in `../NeurIPS/final_revision_20261008/`. The current revision is checked at 1440, 768, and 390 px with nine axe scans, gate keyboard controls, clipboard copying, local PDF/image resources, and a JavaScript-disabled visit. `npm run check` and `npm run build` are rerun after the final PDF copy. The project has no lint script. No deployment, commit, push, training, or scientific experiment rerun is part of this revision.

The earlier performance measurement and four-width checks below describe the preceding website version and have not been rerun as Lighthouse results for this revision. The old statement that the Paper action only links the conference record is superseded: the revised local site also serves the matching author PDF. Publication still requires resolution of the author decisions in the final revision report.

## Earlier website validation

Validation date: 2026-10-08. Scientific records were read and verified without model training or modification of the COHE artifact.

## Build and scientific verification

- Astro 7.3.7, TypeScript, static output, Node 22.23.3. `npm run check`: zero errors, warnings, or hints. `npm run build`: successful one-page static build.
- `scripts/derive-results.py` verifies all four DINOv2 five-seed conditions, all eight completed DDPM paired records, both ImageNet five-pair endpoints, DINOv2 relational summaries, and camera-ready abstract extraction. Paired means and confidence intervals agree with authoritative released statistics.
- All eight distinct external resource/provenance links return HTTP 200, including the official conference record, frozen release, and commit-pinned numerical source links.
- Public source and generated output were checked for local absolute paths, private data, credentials, missing files, draft/anonymity/rebuttal wording, and invented paper identifiers. No private data or secrets are included. The only external page links are intentional research resources; fonts are self-hosted and no tracking scripts load.
- Final site dependency audit: zero vulnerabilities. Initial Astro 5 dependency findings were resolved by using the verified current patched 7.3.7 release before final browser QA.

## Browser and accessibility

Chromium/Playwright inspected production output at 1440, 1024, 768, and 390 px. At every width:

- No document horizontal overflow, browser exceptions, or console errors.
- All three gate tabs work by pointer and keyboard; ArrowLeft/ArrowRight, Home/End, selected state, roving tabindex, and single visible panel are verified.
- Navigation and citation anchors work. BibTeX clipboard content is verified, including author order. Clipboard-denied cases provide a selection fallback and readable status.
- Original SVG figures load; expanded endpoint/baseline details work. Original figures use their true aspect ratios. On narrow screens they scroll within their own labeled figure region and can open at full vector resolution.
- axe checks WCAG 2 A/AA and 2.1 AA for each gate state at every width: zero violations in all 12 scans.
- Reduced-motion configuration is exercised; the CSS removes animation and smooth scrolling under the preference.
- A separate JavaScript-disabled visit verifies that all three gate explanations remain readable.

Automated accessibility checks do not replace a manual screen-reader audit. Formal assistive-technology testing was not conducted.

## Screenshot review and refinement

Initial and final screenshots are retained locally in ignored `qa/` directories. Desktop home, findings, interactive gates and original figures, plus mobile home, interactive section, findings and figures, were visually inspected. Laptop/tablet screenshots were captured and checked for layout and overflow.

The mandatory screenshot-based refinement pass increased scientific annotation/caption readability, adapted the mobile inference diagram to readable rows, fixed spaces at mobile heading line breaks, corrected signed-difference prose, preserved exact SVG proportions, and made original paper figures locally scrollable rather than shrinking scientific labels. The development-only toolbar was disabled for clean previews.

Representative final screenshots, relative to the local website directory:

- `qa/final/home-1440.png`
- `qa/final/findings-full-1440.png`
- `qa/final/home-390.png`
- `qa/final/framework-390.png`
- `qa/final/protocol-390.png`

Raw four-width results: `qa/final/report.json`. Screenshot assets and browser tooling are not shipped to GitHub Pages.

## Measured performance

Local production mobile Lighthouse 13.5.0, one measured run:

| Category / metric | Result |
| --- | --- |
| Performance | 100 |
| Accessibility | 100 |
| Best practices | 100 |
| SEO | 100 |
| First contentful paint | 1.2 s |
| Largest contentful paint | 1.2 s |
| Total blocking time | 0 ms |
| Cumulative layout shift | 0.001 |

Raw report: local `qa/lighthouse-mobile.json`. This is a localhost measurement with Lighthouse's mobile simulation, not a measured live-site guarantee. The static output is about 880 KiB uncompressed including the two original vectors; the Latin font is 48 KiB, CSS 23 KiB, and HTML 31 KiB. Original figures load lazily. The page uses small inline scripts and no SPA framework or backend.

## Retained failed or interrupted attempts

No failed attempt is treated as a passing run or silently removed:

1. Initial source patch attempts failed because the patch tool could not resolve the workspace symlink. Source edits subsequently used the resolved physical checkout with `apply_patch`.
2. First browser run (`qa/initial/`) stopped at a clipboard assertion that read status before the asynchronous copy finished. The harness was corrected to await the visible status; later runs verify both status and clipboard content.
3. Second initial run (`qa/initial-complete/`) was interrupted by a development-server configuration reload while axe was executing. It is not counted as passing. The settled initial run (`qa/initial-stable/`) and final production run (`qa/final/`) both completed successfully at all four widths.
4. A generated refinement patch used unsupported unified-diff hunk coordinates and was rejected without changing the page. It was reapplied in the patch tool's supported format before the final production build and audit.

## Publication behavior and remaining boundaries

GitHub Actions builds from the separate website repository and receives the actual Pages origin/base from `actions/configure-pages`. It performs a clean install, type check, production build, artifact upload, and Pages deployment. A live smoke check is performed after deployment, independently of workflow start.

The Paper action links the verified official NeurIPS record. Direct OpenReview/PDF accessibility could not be verified in this environment; no author PDF was republished and no DOI was fabricated. The research artifact's experiment-dependent reproduction gaps remain explicit. Scientific scope and provenance are documented in [CONTENT_SOURCES.md](CONTENT_SOURCES.md).
