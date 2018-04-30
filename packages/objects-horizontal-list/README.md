# Horizontal List Object for Scales

An object for making a list horizontal instead of vertical.

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/objects-HorizontalList`

## Usage

Horizontal List should be used whenever you need to make an ordered or unordered list horizontal instead of vertical. You can extend it with `--delimited` to semantically mark up a character delimited list for things like tags, etc. You can also center, right align, or have the list fill the available space. The spacing between elements can also be adjusted
with tiny, small, medium, large, and huge modifiers.

### Default

```
<ul class="HorizontalList">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
```

### Tiny Spacing

```
<ul class="HorizontalList HorizontalList--spacing-tiny">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
```

### Small Spacing

```
<ul class="HorizontalList HorizontalList--spacing-small">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
```

### Medium Spacing

```
<ul class="HorizontalList HorizontalList--spacing-medium">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
```

### Large Spacing

```
<ul class="HorizontalList HorizontalList--spacing-large">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
```

### Huge Spacing

```
<ul class="HorizontalList HorizontalList--spacing-huge">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
```

### Character delimited - Split spacing distribution

```
<ul class="HorizontalList HorizontalList--delimited-split-distribution">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
```

### Character delimited - Left spacing distribution

```
<ul class="HorizontalList HorizontalList--delimited-left-distribution">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
```

### Character delimited - Right spacing distribution

```
<ul class="HorizontalList HorizontalList--delimited-right-distribution">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
```

### Character delimiter override

```
<ul class="HorizontalList HorizontalList--delimited-split-distribution HorizontalList--spacing-medium">
  <li data-delimiter="|">Sass</li>
  <li data-delimiter="|">CSS</li>
  <li>HTML</li>
</ul>
```

### Centered horizontal list

```
<ul class="HorizontalList HorizontalList--center">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
```

### Right aligned horizontal list

```
<ul class="HorizontalList HorizontalList--right">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
```

### Left aligned horizontal list

```
<ul class="HorizontalList HorizontalList--left">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
```

### Fill style horizontal list

```
<ul class="HorizontalList HorizontalList--fill">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
```

### Other uses

Since there are times when you want a list to be horizontal at some media queries and vertical at others, the horizontal list object is also able to be used as a mixin or extended as a placeholder.

```
@include HorizontalList;

@extend %HorizontalList;
```

## Available Classes

* `.HorizontalList`
* `.HorizontalList--spacing-tiny`
* `.HorizontalList--spacing-small`
* `.HorizontalList--spacing-medium`
* `.HorizontalList--spacing-large`
* `.HorizontalList--spacing-huge`
* `.HorizontalList--delimited-split-distribution` - Combined with a spacing class, splits the space on either side of the delimiter.
* `.HorizontalList--delimited-left-distribution` - Combined with a spacing class, adds space on the left of the delimiter.
* `.HorizontalList--delimited-right-distribution` - Combined with a spacing class, adds space on the right of the delimiter.
* `.HorizontalList--center`
* `.HorizontalList--right`
* `.HorizontalList--left`
* `.HorizontalList--fill` - forces the list to take up 100% of the available space.

## Available Data Attributes

* `data-delimiter`

## Available Variables

* `$horizontal-list-spacing`
* `$horizontal-list-spacing-tiny`
* `$horizontal-list-spacing-small`
* `$horizontal-list-spacing-medium`
* `$horizontal-list-spacing-large`
* `$horizontal-list-spacing-huge`
* `$horizontal-list-delimiter`

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
