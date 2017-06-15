# Reset Styles for Scales

A companion to [Normalize.css](http://necolas.github.io/normalize.css/) that resets a few things that are still useful from a traditional reset. Borrows from [HTML5 Boilerplate](http://h5bp.com) and [Reset Restarted](http://csswizardry.com/2011/10/reset-restarted).

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/generic-reset`

## Usage

Should be loaded immediately after Normalize.css. View the .scss file to see what the reset is doing.

## Available Variables

* `$selection-bg-color`
* `$selection-text-color`
* `$table-border-collapse`
* `$pre-overflow`

### Namespace Variables

#### The Scales Namespace Variable

All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

#### Class Level Namespace Variable

Class level namespace variables allow you to namespace a selector based on the type e.g. `b-` for "base", `o-` for "objects", `u-` for utilities, and `c-` for "components".

This pattern exposes the `$scales-base-class-namespace` variable.

`$scales-base-class-namespace` accepts a string that will prefix any classes in this pattern and follow the Scales Namespace Variable if it is not null. The default value is `null`.

#### Namespace Variable Usage

To set either of these namespaces, you will need to set the variables in a file that is imported before any scales files. For example:

```
@import your-project/settings; // Namespace variables are set in this file
@import your-project/scalescss; // Imports all of the Scales packages
@import your-project/project // The rest of your project imports
```
