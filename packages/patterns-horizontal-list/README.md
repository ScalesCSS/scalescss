# Horizontal List Pattern for Scales

A pattern for making a list horizontal instead of vertical.

## Requirements

Scales patterns use the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either:
* Sass 3.2 or greater
* LibSass 2.0 or greater

## Usage

Horizontal List should be used whenever you need to make an ordered or unordered list horizontal instead of vertical. You can extend it with `--delimited` to semantically mark up a character delimited list for things like tags, etc.

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

### Other uses

Since there are times when you want a list to be horizontal at some media queries and vertical at others, the horizontal list pattern is also able to be used as a mixin or extended as a placeholder.

_**The mixin is a temporary solution until Sass allows the use of `@extend` in media queries.**_

```
@include horizontal-list;

@extend %horizontal-list;
```

## Available Classes

* `.horizontal-list`
* `.horizontal-list--delimited`

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
