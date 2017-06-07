# Size Utilities for Scales

A set of utility classes for changing the width of an element.

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/utilities-size`

## Usage

By default there is a class for every 5% step from 5 to 100 in the format `.size-[percent]`. Simply put a class in your HTML and the width will change by that percentage.

```
<p class="size-50">This changes the width of the element to 50%</p>
```

## Available Classes

* `.size-5`
* `.size-10`
* `.size-15`
* `.size-20`
* `.size-25`
* `.size-30`
* `.size-35`
* `.size-40`
* `.size-45`
* `.size-50`
* `.size-55`
* `.size-60`
* `.size-65`
* `.size-70`
* `.size-75`
* `.size-80`
* `.size-85`
* `.size-90`
* `.size-95`
* `.size-100`

## Available variables

* `$size-range-start`
    * Value of the first class
    * Default: 5
* `$size-range-end`
    * Value of the last class
    * Default: 100
* `$size-step-value`
    * Increment between values
    * Default: 5

### The Scales Namespace Variable

All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

To give all Scales classes a namespace, you will need to set this variable in a file that is imported before any scales files. For example:

```
@import your-project/settings; // $scales-namespace is set in this file
@import your-project/scales; // Imports the Scales library
@import your-project/project // The rest of your project imports
```
