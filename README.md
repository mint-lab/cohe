# COHE project website

An independent, static Astro/TypeScript website for Dayena Jeong and Sunglok Choi's NeurIPS 2026 Evaluations & Datasets paper. The scientific artifact is maintained separately at https://github.com/DayenaJeong/cohe-artifact and is not changed by this repository.

Use Node 22.12+ and npm 9.6.5+:

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

The website is published at https://mint-lab.github.io/cohe/ from https://github.com/mint-lab/cohe. The local route is `/cohe/`. GitHub Actions gets the real URL from `actions/configure-pages` and supplies `PAGES_URL` to Astro, deriving its site origin and base path. Local builds default to the same canonical organization URL. Pages is configured for GitHub Actions.

This repository preserves the academic website published by DayenaJeong/cohe-project-page at commit 60519483459d851250ae88627c0c7ff90363fbfc. The original site remains available, with no redirect enabled. Earlier QA documents describe the original hosting location; see [migration validation](docs/MIGRATION_REPORT.md) for the organization deployment.

Scientific values live in `src/data/verified-results.json`, with publicly released input records and hashes under `src/data/records`. See [content provenance](docs/CONTENT_SOURCES.md) and [validation report](docs/QA_REPORT.md).

To update scientific data from a separately checked-out public artifact and verified camera-ready source:

```sh
python scripts/derive-results.py --artifact /path/to/public-artifact --paper /path/to/neurips_2026.tex
```

The script computes and verifies paired statistics only. It does not train models or modify either canonical source. Check the source commit, endpoint policy, prose, captions, and provenance documentation before publishing changes.
