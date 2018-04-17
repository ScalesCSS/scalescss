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



### Character delimited styles

```
<ul class="HorizontalList HorizontalList--delimited">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>

```

<h3>Character delimited styles spacing override</h3>

```
<ul class="HorizontalList HorizontalList--delimited HorizontalList--spacing-huge">
  <li data-delimiter="|">Sass</li>
  <li data-delimiter="|">CSS</li>
  <li>HTML</li>
</ul>
```

### Space added to the left of the delimiter

```
<ul class="HorizontalList HorizontalList--delimited-left-distribution">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
```

### Space added to the right of the delimiter

```
<ul class="HorizontalList HorizontalList--delimited-right-distribution">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
```

### Character delimited override

```
<ul class="HorizontalList HorizontalList--delimited">
  <li data-delimiter=" | ">Sass</li>
  <li data-delimiter=" | ">CSS</li>
  <li>HTML</li>
</ul>
```

### Centered

```
<ul class="HorizontalList HorizontalList--center">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
```

### Right aligned

```
<ul class="HorizontalList HorizontalList--right">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
```

### Left aligned

```
<ul class="HorizontalList HorizontalList--left">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
```

### Fill

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
* `.HorizontalList--delimited`
* `.HorizontalList--center`
* `.HorizontalList--right`
* `.HorizontalList--left`
* `.HorizontalList--fill` - forces the list to take up 100% of it's parent.

## Available Data Attributes

* `data-delimiter`

## Available Variables

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
