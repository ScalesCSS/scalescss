# Width Utilities for Scales

A set of utility classes for changing the width of an element.

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/utilities-width`

## Usage

By default there is a class for every 5% step from 5 to 100 in the format `.Width-[percent]`. Simply put a class in your HTML and the width will change by that percentage.

```
<p class="Width-50">This changes the width of the element to 50%</p>
```

## Available Classes

* `.Width-5`
* `.Width-10`
* `.Width-15`
* `.Width-20`
* `.Width-25`
* `.Width-30`
* `.Width-35`
* `.Width-40`
* `.Width-45`
* `.Width-50`
* `.Width-55`
* `.Width-60`
* `.Width-65`
* `.Width-70`
* `.Width-75`
* `.Width-80`
* `.Width-85`
* `.Width-90`
* `.Width-95`
* `.Width-100`

## Available variables

* `$width-range-start`
  * Value of the first class
  * Default: 5
* `$width-range-end`
  * Value of the last class
  * Default: 100
* `$width-step-value`
  * Increment between values
  * Default: 5

### Namespace Variables

#### The Scales Namespace Variable

All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

#### Class Level Namespace Variable

Class level namespace variables allow you to namespace a selector based on the type e.g. `b-` for "base", `o-` for "objects", `u-` for utilities, and `c-` for "components".

This pattern exposes the `$scales-utilities-class-namespace` variable.

`$scales-utilities-class-namespace` accepts a string that will prefix any classes in this pattern and follow the Scales Namespace Variable if it is not null. The default value is `null`.

#### Namespace Variable Usage

To set either of these namespaces, you will need to set the variables in a file that is imported before any scales files. For example:

```
@import your-project/settings; // Namespace variables are set in this file
@import your-project/scalescss; // Imports all of the Scales packages
@import your-project/project // The rest of your project imports
```
