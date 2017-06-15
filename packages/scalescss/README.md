# Scales

Scales is a modular CSS framework for quickly building responsive web projects. It clocks in at only 3.7kb when minified and gzipped.

It is purposely "design-free" so that there is nothing you will have to change. Instead, you will build your design on top of the foundation that Scales provides.

This is a framework for serious developers and designers who aren't afraid to get their hands dirty with advanced and sometimes challenging CSS concepts. A framework shouldn't do your work for you or make all of the decisions. Scales tries it's best to stay out of your way.

Scales is a highly _scalable_ CSS architecture, it contains design _patterns_ (scales in nature form patterns), and it is responsive so it _scales_ to the width of the viewport. So clever it hurts.

## Monorepo

Scales is managed as a monorepo. All of the Scales source code lives in a single repo, but is released as separate packages using [Lerna](https://github.com/lerna/lerna).

### Looking for the previous version of scales?
[Scales 2.6.1](https://github.com/ScalesCSS/scalescss/tree/v2.6.1)

## Techniques/Concepts Used in Scales
* [ITCSS](http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528) (Inverted Triangle CSS) architecture
* Object Oriented CSS Design Patterns
* Responsive Design
* Sass/scss
* BEM (Block, Element, Modifier)-style naming convention

## Browser Support
Scales uses `box-sizing: border-box;`, and `display: table-cell;`, neither of which are supported in IE7 and under. There are a few media queries, but they are an enhancement. Thus, Scales is only for IE9+ and any modern browser, but IE8 is also mostly covered.

## Dependencies
* [Sass](http://sass-lang.com/) - Either Ruby Sass or Libsass.
* [NPM](http://npmjs.com) - To pull all of the scales packages together.

## Setup
Make sure you have the dependencies installed on your system and then, from the root directory of your project, run:

```
npm install --save @scalescss/scalescss
```

Next you will want to create 3 files (name them whatever you want):

1. A settings/variables file. ex. `_settings.scss`
1. A file to import all of the Scales packages. ex. `_scalescss.scss`
1. A main file to import the settings, Scales packages, and all of your project partials. ex. `styles.scss`

### Settings/Variables
Scales exposes a large number of variables that allow you to customize nearly everything.

Have a look at all of the [available variables](https://github.com/ScalesCSS/scalescss/tree/master/packages/scalescss/blob/master/vars.md).

### The Scales Packages
Each piece of Scales is its own package on npm. Once you have all of the packages in your project, you will need to import them into your project. I recommend creating a `_scalescss.scss` file that imports everything.

**The order of the imports is very important!**

See an example of the [correct import order](https://github.com/ScalesCSS/scalescss/tree/master/packages/scalescss/blob/master/imports.md).

### Main Sass File

Once you have these files sorted out, you will want to create a main Scss file that will import your settings, Scales, and the rest of your project partials. This is the file that will get compiled into CSS:

```
@import your-project/settings;
@import your-project/scalescss;
@import your-project/project-partial;
@import your-project/project-partial;
@import your-project/project-partial;
@import your-project/project-partial;
```

## Compile to CSS
Once you have these things set up you simply need to tell Sass what to compile:

```
$ sass your-project/styles.scss your-project/css/styles.css
```

There are many other options for compiling that you can find in the  [Sass Documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html). You can also look into using a task runner like [Gulp](http://gulpjs.com/) or a module bundler like [Webpack](https://webpack.github.io/).

## Pattern Library
The [scalescss](https://github.com/ScalesCSS/scalescss/tree/master/packages/scalescss/) package includes an `index.html` file that serves as a basic pattern library for Scales. It shows all of the available patterns in their default state. This can be used as a reference, for testing, or styled into a more complete pattern library with your project's patterns as well.

## Props
This couldn't have been done without the amazing work of [Harry Roberts](https://csswizardry.com/) on [inuitcss](https://github.com/inuitcss). A number of the design patterns and techniques in Scales were borrowed or adapted from inuitcss.

I also wanted to thank [Nicole Sullivan](http://www.stubbornella.org/) for her work on [OOCSS](https://github.com/stubbornella/oocss/wiki), without which I would not be the developer I am today.

## Sites using Scales

### v2
* [rocket.quickenloans.com](https://rocket.quickenloans.com/)
* [quickenloans.com](https://quickenloans.com/)
* [myql.com](https://www.myql.com/)
* [davidgillhespy.com](http://davidgillhespy.com/)
* [rockframework.org](http://www.rockframework.org/)

### v1
* [realestateagent.quickenloans.com](https://realestateagent.quickenloans.com/#!/)
* [toflexornottoflex.com](http://toflexornottoflex.com/#/)

## Meta
* Follow me on twitter [@yodasw16](http://twitter.com/yodasw16)
* Check out [my website](http://davidgillhespy.com/)
* Detroit people: Check out [Devtroit](http://devtroit.com/)

![Devtroit](http://devtroit.com/img/badges/badge-medium.png)
