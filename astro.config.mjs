import { defineConfig } from 'astro/config';

// The deployment workflow supplies the URL returned by GitHub Pages itself.
// Local previews keep the project path to exercise asset routing before publication.
const pagesURL = new URL(process.env.PAGES_URL ?? 'https://mint-lab.github.io/cohe/');
export default defineConfig({
  output: 'static',
  site: pagesURL.origin,
  base: pagesURL.pathname,
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
