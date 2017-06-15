# Clearfix Utility for Scales

A super minimal clearfix utility.

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/utilities-clearfix`

## Usage

Clearfix is used to force an element to self-clear its floated children.

It should be extended in your sass files, but can be used as a class. I recommend only using it this way for debugging purposes in you browser dev tools.

```
.parent-class {
  @extend %ClearFix
}
```

For debugging:
```
<div class="ClearFix">
  <some floated elements>
</div>
```

## Available Classes

* `%ClearFix` - extend in your sass files
* `.ClearFix` - For debugging, change with the `$clearfix-class` variable.

## Available Variables

* `$clearfix-class`

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
