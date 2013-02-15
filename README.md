# Scales

Scales is a Mobile-First, Responsive, Sass-based, OOCSS framework.

It is purposely "design-free" so that there is nothing you will have to change. Instead, you will build your design on top of the foundation that Scales provides.

This is a framework for serious developers and designers who aren't afraid to get their hands dirty with advanced and sometimes challenging CSS concepts.

Scales is a highly _scalable_ CSS architecture, it contains design _patterns_ (scales in nature form patterns), and it is responsive so it _scales_ to the width of the viewport. So clever it hurts.

## Techniques used in Scales
* Mobile-First and Responsive Design
* SASS and Compass
* Object Oriented CSS Design Patterns
* Vertical Rhythm and Modular Scale
* BEM (Block, Element, Modifier)-style naming convention

## Browser Support
Scales uses `box-sizing: border-box;`, and `display: table-cell;`, neither of which are supported in IE7 and under. Thus, Scales is only for IE8+ and any modern browser.

## Dependencies
* [SASS](http://sass-lang.com/) and [Compass](http://compass-style.org/install/)
* [Modular-Scale](https://github.com/scottkellum/modular-scale)

## Setup
Make sure you have the dependencies installed on your system and then either clone Scales or download and unpack the [latest version](https://github.com/yodasw16/scales/archive/master.zip) and put it into the root directory of your project.

On the command line, you simply need to `cd` into your project directory and run:
```
$ compass watch
```

Whenever you save an `.scss` file, Compass will compile to `css/style.css`. You can change this location in the `config.rb` file. You can also change the output style and many other options.

**By default, the output is set to `:compact`, but for production use, you should change it to `:compressed`**. Scales has a _lot_ of comments that you are going to want removed for performance reasons.

## Getting Started

This documentation is meant to point you to the files that are most important to understand when you are getting started. The real documentation is in the Scales `.scss` files themselves. Spend some time browsing around the files so you know everything Scales is capable of. Start with `scales/scales.scss`, `style.scss`, and `_vars.scss`.

### scales/scales.scss
Once you have everything set up, you should start by looking at `sclaes/scales.scss`. This is where all of the base styles, design patterns, and utilities get imported. You can comment out individual design patterns that you don't intend to use and they wont be included in the outputted CSS. You can also add new design patterns that you might come up with. Other than that, you should leave this file alone so nothing breaks!

### style.scss
Next, take a look at `style.scss`. This is the file that imports everything before Compass compiles to `css/style.css`. At the bottom of the file is where you should import any new `.scss` files that you create.

I recommend creating a directory in your project called "partials". Everything in Scales is broken into separate `.scss` files, so if you want to add your own styles for forms, for example, simply create a new partial in your partials directory and then import it in `style.scss`.

### _vars.scss
The next place you should look is `_vars.scss`. This is where you can change many default values without having to touch anything in the `scales/` directory.

## Props
This couldn't have been done without the amazing work of [Harry Roberts](http://csswizardry.com/) on [Inuit.css](https://github.com/csswizardry/inuit.css). A number of the design patterns and techniques in Scales were borrowed from Inuit.css.

I also wanted to thank [Nicole Sullivan](http://stubbornella.com) for her work on [OOCSS](https://github.com/stubbornella/oocss), without which I would not be the developer I am today.

A special note of thanks also goes out to [Vince Speelman](https://github.com/VinSpee), who pushes me constantly to be a better developer and shames me when I try to take the easy route.

## Meta
* Follow me on twitter [@yodasw16](http://twitter.com/yodasw16)
* Detroit people: Check out [Devtroit](http://devtroit.com/)

![Devtroit](http://devtroit.com/img/badges/badge-medium.png "Devtroit")