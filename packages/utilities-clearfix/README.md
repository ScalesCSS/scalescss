# Clearfix Utility for Scales

A super minimal clearfix utility.

## Requirements

Scales patterns use the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save scales-utilities-clearfix`
* [Bower](http://bower.io/): `bower install --save scales-utilities-clearfix`

## Usage

Clearfix is used to force an element to self-clear its floated children.

It should be extended in your sass files, but can be used as a class. I recommend only using it this way for debugging purposes in you browser dev tools.

```
.parent-class {
    @extend %clearfix
}
```

For debugging:
```
<div class="clearfix">
    <some floated elements>
</div>
```

## Available Classes

* `%clearfix` - extend in your sass files
* `.clearfix` - For debugging, change with the `$clearfix-class` variable.

## Available Variables

* `$clearfix-class`

### The Scales Namespace Variable
All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

To give all Scales classes a namespace, you will need to set this variable in a file that is imported before any scales files. For example:

```
@import your-project/settings; // $scales-namespace is set in this file
@import your-project/scales; // Imports the Scales library
@import your-project/project // The rest of your project imports
```
