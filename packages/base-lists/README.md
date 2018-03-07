# Base Lists for Scales

These are the base styles for lists.

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/base-lists`

## Usage

Indent a list from the left by setting the $list-margin-left variable in your settings file.

### Base List
```
<ul class="List">
   <li>Scales</li>
   <li>Patterns</li>
   <li>Lists</li>
</ul>
```

## Usage

Simple list modifier to remove margin, padding and bullets from a list.

### Bare List
```
<ul class="List--bare">
   <li>Scales</li>
   <li>Patterns</li>
   <li>Lists</li>
</ul>
```

### Other uses

Since there are times when you might want to make a list bare without using a class, `List--bare` is also able to be used as a mixin or extended as a placeholder.

```
@include List--bare;

@extend %List--bare;
```

## Available Classes

* `.List`
* `.List--bare`

## Available Variables

* `$list-margin-left`

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
