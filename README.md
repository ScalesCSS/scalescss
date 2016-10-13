# Scales

Scales is a collection of OOCSS patterns, framework settings, & utilities to quickly build mobile-first, responsive web projects. It clocks in at only 4kb when minified and gzipped.

It is purposely "design-free" so that there is nothing you will have to change. Instead, you will build your design on top of the foundation that Scales provides.

This is a framework for serious developers and designers who aren't afraid to get their hands dirty with advanced and sometimes challenging CSS concepts. A framework shouldn't do your work for you or make all of the decisions. Scales tries it's best to stay out of your way.

Scales is a highly _scalable_ CSS architecture, it contains design _patterns_ (scales in nature form patterns), and it is responsive so it _scales_ to the width of the viewport. So clever it hurts.

![Deal With It](http://i3.kym-cdn.com/photos/images/original/000/432/894/648.gif)

### Looking for the previous version of scales?
[Scales 1.0.2](https://github.com/ScalesCSS/scales/tree/1.x)

## Techniques/Concepts Used in Scales
* Object Oriented CSS Design Patterns
* Responsive Design
* Sass/scss
* BEM (Block, Element, Modifier)-style naming convention

## Browser Support
Scales uses `box-sizing: border-box;`, and `display: table-cell;`, neither of which are supported in IE7 and under. There are a few media queries, but they are an enhancement. Thus, Scales is only for IE9+ and any modern browser, but IE8 is also mostly covered.

## Dependencies
* [Sass](http://sass-lang.com/) - Either Ruby Sass or Libsass.
* [NPM](http://npmjs.com) or [Bower](http://bower.io/) - To pull all of the scales repositories together. Not technically required as you could manually install each repo.

## Setup
Make sure you have the dependencies installed on your system and then, from the root directory of your project, run:

```
npm install --save scalescss
```
or
```
bower install --save scalescss
```

Next you will want to create 3 files (name them whatever you want):

1. A settings/variables file. ex. `_settings.scss`
1. A file to import all of the scales repo. ex. `_scales.scss`
1. A main file to import the settings, scales repos, and all of your project partials. ex. `styles.scss`

### Settings/Variables
Scales exposes a large number of variables that allow you to customize nearly everything.

Have a look at all of the [available variables](https://github.com/ScalesCSS/scales/blob/master/vars.md).

### The Scales Repos
Each piece of Scales is in its own repo. Once you have all of the repos in your project, you will need to import them into a single place. I recommend creating a `_scales.scss` file that imports everything.

**The order of the imports is very important!**

See an example of the [correct import order](https://github.com/ScalesCSS/scales/blob/master/imports.md).

### Main Sass File

Once you have these files sorted out, you will want to create a main Scss file that will import your settings, Scales, and the rest of your project partials. This is the file that will get compiled into CSS:

```
@import your-project/settings;
@import your-project/scales;
@import your-project/project-partial;
@import your-project/project-partial;
@import your-project/project-partial;
@import your-project/project-partial;
```

## Manual Installation
If you don't want to use a package manager to install Scales, you can clone each repo individually. A full list of repos is in the [imports.md](https://github.com/ScalesCSS/scales/blob/master/imports.md) file. All repos can be found at the [Scales organization page](https://github.com/ScalesCSS) on Github.

## Compile to CSS
Once you have these things set up you simply need to tell Sass what to compile:

```
$ sass your-project/styles.scss your-project/css/styles.css
```

There are many other options for compiling that you can find in the  [Sass Documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html). You can also look into using a task runner like [Gulp](http://gulpjs.com/) or [Grunt](http://gruntjs.com/).

## Pattern Library
This repo includes an `index.html` file that serves are a basic pattern library for Scales. It shows all of the available base settings and patterns. This can be used as a reference or styled into a more complete pattern library with your project's patterns as well.

## Props
This couldn't have been done without the amazing work of [Harry Roberts](https://github.com/csswizardry) on [Inuit.css](https://github.com/csswizardry/inuit.css). A number of the design patterns and techniques in Scales were borrowed or adapted from Inuit.css.

I also wanted to thank [Nicole Sullivan](https://github.com/stubbornella) for her work on [OOCSS](https://github.com/stubbornella/oocss), without which I would not be the developer I am today.

A special note of thanks also goes out to [Vince Speelman](https://github.com/VinSpee), [Rob Copeland](https://github.com/RCopeland), and [Jen May](https://github.com/jenmay) who pushed me to rewrite Scales in a more modular way and who are always willing to listen to my bad ideas.

## Sites using Scales

### v2
* [myql.com](https://www.myql.com/)
* [rocket.quickenloans.com](https://rocket.quickenloans.com/)
* [grandcircus.co](http://www.grandcircus.co/)
* [davidgillhespy.com](http://davidgillhespy.com/)
* [rockframework.org](http://www.rockframework.org/)

### v1
* [realestateagent.quickenloans.com](https://realestateagent.quickenloans.com/#!/)
* [toflexornottoflex.com](http://toflexornottoflex.com/#/)

## Meta
* Follow me on twitter [@yodasw16](http://twitter.com/yodasw16)
* Detroit people: Check out [Devtroit](http://devtroit.com/)

![Devtroit](http://devtroit.com/img/badges/badge-medium.png)
