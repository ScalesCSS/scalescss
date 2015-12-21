# Reset Styles for Scales

A companion to [Normalize.css](http://necolas.github.io/normalize.css/) that resets a few things that are still useful from a traditional reset. Borrows from [HTML5 Boilerplate](http://h5bp.com) and [Reset Restarted](http://csswizardry.com/2011/10/reset-restarted).

## Installation

* [NPM](http://npmjs.com): `npm install --save scales-utilities-reset`
* [Bower](http://bower.io/): `bower install --save scales-utilities-reset`

## Usage

Should be loaded immediately after Normalize.css.

It is recommended that you include the `scales.scss` file as untouched
library code.

## Available Variables

* `$selection-bg-color`
* `$selection-text-color`

### The Scales Namespace Variable

All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

To give all Scales classes a namespace, you will need to set this variable in a file that is imported before any scales files. For example:

```
@import your-project/settings; // $scales-namespace is set in this file
@import your-project/scales; // Imports the Scales library
@import your-project/project // The rest of your project imports
```
