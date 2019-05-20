# Personal Website

Suitable starting point for purely static websites. Oddly enough I did not find equivalent elsewhere.

- Develop using Webpack's devserver
- Deploy with `now` (on zeit.co)
- Zeit.co will serve the static pages from ./build/html (check ./now.json)
- Build your static site using CSS, HTML (w/ nunjucks) and Javascript.
- Live reloading of your img, html, css and js files. Simple.


# Set up:

Assuming you have [nvm](https://github.com/nvm-sh/nvm#installation-and-update) and [now (cli)](https://zeit.co/download) installed.

```
git clone git@github.com:hhursev/personal-website.git &&
cd personal-website &&
nvm install v12.2.0 &&
nvm use &&
npm install &&
npm run devserver
```

Open [0.0.0.0:3000](http://0.0.0.0:3000). Start writing your html / css / javascript, things will live-update.


Deploy with `npm run deploy`
