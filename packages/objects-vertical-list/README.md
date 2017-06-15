# Vertical List Object for Scales

An object for making a list vertical after it's been made horizontal.

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/objects-vertical-list`

## Usage

Vertical List should be used whenever you need to make an ordered or unordered list vertical instead of horizontal. You can extend it with `--delimited` to semantically mark up a character delimited list for things like tags, etc.

### Default

```
<ul class="VerticalList">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
```

### Character delimited

```
<ul class="VerticalList VerticalList--delimited">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
```

### Character delimited override

```
<ul class="VerticalList VerticalList--delimited">
  <li data-delimiter=" | ">Sass</li>
  <li data-delimiter=" | ">CSS</li>
  <li>HTML</li>
</ul>
```

### Other uses

Since there are times when you want a list to be vertical at some media queries and horizontal at others, the vertical list object is also able to be used as a mixin or extended as a placeholder.

```
@include VerticalList;

@extend %VerticalList;
```

## Available Classes

* `.VerticalList`
* `.VerticalList--delimited`

## Available Data Attributes

* `data-delimiter`

## Available Variables

* `$vertical-list-delimiter`

### Namespace Variables

#### The Scales Namespace Variable

All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

#### Class Level Namespace Variable

Class level namespace variables allow you to namespace a selector based on the type e.g. `b-` for "base", `o-` for "objects", `u-` for utilities, and `c-` for "components".

This pattern exposes the `$scales-objects-class-namespace` variable.

`$scales-objects-class-namespace` accepts a string that will prefix any classes in this pattern and follow the Scales Namespace Variable if it is not null. The default value is `null`.

#### Namespace Variable Usage

To set either of these namespaces, you will need to set the variables in a file that is imported before any scales files. For example:

```
@import your-project/settings; // Namespace variables are set in this file
@import your-project/scalescss; // Imports all of the Scales packages
@import your-project/project // The rest of your project imports
```
