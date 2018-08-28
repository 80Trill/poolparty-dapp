# PoolParty UI

## Major libraries
* React 16.4.2
* Webpack 4.16.2

## Running the project locally
1. `npm install`
2. from the project root, run `npm run develop`. Webpack dev server will be launched at [http://localhost:2000]
3. [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) will generate `report.html` after each build

## Creating a build
`npm run build` will produce two sets of production files in the **/dist** directory, one of which is gzipped. If this behavior is not desired, comment out the references to [compression-webpack-plugin](https://github.com/webpack-contrib/compression-webpack-plugin) in [webpack.config.js](./webpack.config.js). You can also elect to only produce gzipped files if you set `deleteOriginalAssets` to **true** in the plugin's config.

`npm run preview` will run the build, start a [http-server](https://www.npmjs.com/package/http-server) at [http://localhost:8080], and open your web browser; you may need to follow the `/dist` link manually.

## Code style
### CSS / SCSS
SCSS is in use on this project, along with [CSS Modules](https://github.com/css-modules/css-modules). See [webpack.config.js](./webpack.config.js) for configuration.

[Autoprefixer](https://github.com/postcss/autoprefixer/) is in the build pipeline, so there is no need to use vendor prefixes. CSS is further processed with [cssnano](http://cssnano.co/) during non-development builds.

### js/JSX/React
More or less follows [Airbnb’s](https://github.com/airbnb/javascript/tree/master/react/) style guide. See [.eslintrc](./.eslintrc) for details.

#### Polyfills
- [babel-polyfill](https://babeljs.io/docs/usage/polyfill/)
- [focus-visible](https://github.com/WICG/focus-visible)

#### ESLint plugins
- [https://github.com/yannickcr/eslint-plugin-react/](https://github.com/yannickcr/eslint-plugin-react/)
- [https://github.com/evcohen/eslint-plugin-jsx-a11y/](https://github.com/evcohen/eslint-plugin-jsx-a11y/)
