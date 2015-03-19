# Horizontal List Pattern for Scales

A pattern for making a list horizontal instead of vertical.

## Requirements

Scales patterns use the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [Bower](http://bower.io/): `bower install --save scales-patterns-horizontal-list`

## Usage

Horizontal List should be used whenever you need to make an ordered or unordered list horizontal instead of vertical. You can extend it with `--delimited` to semantically mark up a character delimited list for things like tags, etc. You can also center, right align, or have the list fill the available space.

### Default

```
<ul class="horizontal-list">
    <li>Sass</li>
    <li>CSS</li>
    <li>HTML</li>
</ul>
```

### Character delimited

```
<ul class="horizontal-list horizontal-list--delimited">
    <li>Sass</li>
    <li>CSS</li>
    <li>HTML</li>
</ul>
```

### Centered

```
<ul class="horizontal-list horizontal-list--center">
    <li>Sass</li>
    <li>CSS</li>
    <li>HTML</li>
</ul>
```

### Right aligned

```
<ul class="horizontal-list horizontal-list--right">
    <li>Sass</li>
    <li>CSS</li>
    <li>HTML</li>
</ul>
```

### Fill

```
<ul class="horizontal-list horizontal-list--fill">
    <li>Sass</li>
    <li>CSS</li>
    <li>HTML</li>
</ul>
```

### Other uses

Since there are times when you want a list to be horizontal at some media queries and vertical at others, the horizontal list pattern is also able to be used as a mixin or extended as a placeholder.

```
@include horizontal-list;

@extend %horizontal-list;
```

## Available Classes

* `.horizontal-list`
* `.horizontal-list--delimited`
* `.horizontal-list--center`
* `.horizontal-list--right`
* `.horizontal-list--fill` - forces the list to take up 100% of it's parent.

## Available Variables

* `$horizontal-list-delimiter`

### The Scales Namespace Variable

All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

To give all Scales classes a namespace, you will need to set this variable in a file that is imported before any scales files. For example:

```
@import your-project/settings; // $scales-namespace is set in this file
@import your-project/scales-base; // Imports the Scales library
@import your-project/project // The rest of your project imports
```
