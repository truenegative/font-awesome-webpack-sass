[![GitHub release](https://img.shields.io/github/release/truenegative/font-awesome-webpack-sass.svg?maxAge=2592000?style=flat-square)](https://github.com/truenegative/zonesync/releases) 
[![license](https://img.shields.io/github/license/truenegative/font-awesome-webpack-sass.svg?maxAge=2592000)](https://www.gnu.org/licenses/gpl-3.0.en.html)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/truenegative/font-awesome-webpack-sass.svg?maxAge=2592000?style=flat-square)](https://img.shields.io/github/license/truenegative/zonesync.svg?maxAge=2592000)

# font-awesome-webpack-sass
Font awesome configuration and loading package for webpack, using font-awesome (sass)

Based on [font-awesome-webpack](https://github.com/gowravshekar/font-awesome-webpack) (@gowravshekar)


Usage
-----

To properly load font-awesome fonts, you need to configure loaders in your `webpack.config.js`. Example:

``` javascript
module.exports = {
  module: {
    loaders: [
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
};
```

Font awesome font urls are of the format `[dot][extension]?=[version-number]`, for example `.woff?v=4.2.0`

The Regex for font types are adjusted to support these formats. Regex also support urls ending with .woff, .ttf, .eot and .svg (Used by Bootstrap).

### Complete Font-Awesome

To use the complete font-awesome package including all styles with the default settings:

``` javascript
require("font-awesome-webpack-sass");
```

The `require` statement should be present in your application code(Entry file or any other file required in entry file) and not in webpack.config.js.

### Custom configuration

You can configurate font-awesome-webpack with two configuration files:

* `font-awesome.config.js`
* `font-awesome.config.scss`

``` javascript
require("font-awesome-webpack-sass!./path/to/font-awesome.config.js");
```

Or simple add it as entry point to your `webpack.config.js`:

``` javascript
module.exports = {
  entry: [
    "font-awesome-webpack-sass!./path/to/font-awesome.config.js",
    "your-existing-entry-point"
  ]
};
```

#### `font-awesome.config.js`

Example:

``` javascript
module.exports = {
  styles: {
    "mixins": true,

    "core": true,
    "icons": true,

    "larger": true,
    "path": true,
  }
};
```

#### `font-awesome.config.scss`

Imported after Font-Awesome's default variables, but before anything else.

You may customize Font-Awesome here.

Example:

``` scss
$fa-inverse: #eee;
$fa-border-color: #ddd;
```

### extract-text-webpack-plugin

Configure style loader in `font-awesome.config.js`.

Example:

``` javascript
module.exports = {
  styleLoader: require('extract-text-webpack-plugin').extract('style-loader', 'css-loader!sass'),
  styles: {
    ...
  }
};
```

Install `extract-text-webpack-plugin` before using this configuration.


### Thanks!

Thanks to everyone who helped out with this project!

If you would like to help contribute to this project, feel free to fork it and submit pull requests to help out!


### About TN Labs

TN Labs is the brainchild of hosting company, [True Negative](https://truenegative.com) that develops web apps, mobile apps, and more. The TN Labs community is a place where you can find information on our in-house apps, games & more, our open-source projects, as well as a collection of various development & system administration tutorials.

[![Twitter Follow](https://img.shields.io/twitter/follow/tn_labs.svg?style=social&label=Follow&maxAge=2592000?style=flat-square)]()

##### Last Updated 2016/09/07
