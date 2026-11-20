# Free AI Explorer

A static explorer of free, local, and privacy-friendly computing, AI, and robotics tools for K-12 schools.
An AI-assisted experiment by Jeremy Riel, PhD, UIC TRAILblazer Lab (https://www.trailblazerlab.org).

Generative AI helped research and write this content. Some details may be wrong. Check with each provider before use.

## Hosting

- Plain static files. No database and no server code.
- GitHub Pages: serve this folder from the main branch.
- LAMP or any web server: copy the folder. The `.htaccess` file sets security headers on Apache.
- WordPress: install the plugin in `wp-plugin/free-ai-explorer/` and add `[free_ai_explorer src="https://your-host/path/"]` to a page.

## Files

- `index.html` explorer, `tools/` one page per tool, `why.html`, `about.html`, `mylist.html`.
- `data/products.json` the search index. `data/products/*.md` page sources. `data/items/*.json` My List data.

This folder is generated. The build pipeline lives in a separate private workspace.
