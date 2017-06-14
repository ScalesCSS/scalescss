# Size Utilities for Scales

A set of utility classes for changing the width of an element.

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/utilities-size`

## Usage

By default there is a class for every 5% step from 5 to 100 in the format `.Size-[percent]`. Simply put a class in your HTML and the width will change by that percentage.

```
<p class="Size-50">This changes the width of the element to 50%</p>
```

## Available Classes

* `.Size-5`
* `.Size-10`
* `.Size-15`
* `.Size-20`
* `.Size-25`
* `.Size-30`
* `.Size-35`
* `.Size-40`
* `.Size-45`
* `.Size-50`
* `.Size-55`
* `.Size-60`
* `.Size-65`
* `.Size-70`
* `.Size-75`
* `.Size-80`
* `.Size-85`
* `.Size-90`
* `.Size-95`
* `.Size-100`

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
