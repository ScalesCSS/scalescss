# Base Lists for Scales

Simple list modifier to remove margin and bullets from a list.

## Requirements

Scales patterns use the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [Bower](http://bower.io/): `bower install --save scales-base-lists`

## Usage

Sometimes you need a list without any margin or padding and no bullets.

### Bare List
```
<ul class="list--bare">
     <li>Scales</li>
     <li>Patterns</li>
     <li>Lists</li>
</ul>
```

### Other uses

Since there are times when you might want to make a list bare without using a class, list--bare is also able to be used as a mixin or extended as a placeholder.

```
@include list--bare;

@extend %list--bare;
```

## Available Classes

* `.list--bare`

### The Scales Namespace Variable

All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

To give all Scales classes a namespace, you will need to set this variable in a file that is imported before any scales files. For example:

```
@import your-project/settings; // $scales-namespace is set in this file
@import your-project/scales-base; // Imports the Scales library
@import your-project/project // The rest of your project imports
```
