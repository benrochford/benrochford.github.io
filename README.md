# Ben Rochford's website

Personal academic website built with [Academic Pages](https://github.com/academicpages/academicpages.github.io), a Jekyll template based on Minimal Mistakes.

## Content

- `index.md`: homepage, preserving the original introduction and background.
- `cv.md`: CV page, embedding the existing PDF in `content/PDF/`.
- `_config.yml`: profile, contact links, site settings, and theme selection.
- `_data/navigation.yml`: header navigation.
- `_sass/_custom.scss`: local style adjustments.

Existing dashboards, PDFs, and the Mii Plaza keep their original paths.

## Local preview

Use Ruby 3.3 and Bundler. On a Mac with Homebrew Ruby, add it to the shell path first:

```sh
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload
```

Open <http://localhost:4000>. Content and style edits rebuild automatically; restart after changing `_config.yml`.

## Template source

Theme files were imported from Academic Pages commit `9e19e6318817bd3a6060a76d5af98124d394f3a0`. Its MIT license is retained in `LICENSE`. Demo pages and sample biographies were omitted.

The supplied JavaScript sources are bundled in `assets/js/main.min.js` (unminified for review). After editing them, regenerate the bundle with `node scripts/build-js.mjs`.

The Pages workflow uses the same Jekyll build as the local preview. When ready to publish, select **GitHub Actions** as the source in the repository's **Settings → Pages**. The local migration itself does not publish anything.
