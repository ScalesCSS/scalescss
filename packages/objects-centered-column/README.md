# Box Object for Scales

A simple pattern for establishing a centered column layout.

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/objects-centered-column`

## Usage

The Centered Column layout object is intended to wrap main content when the desired effect is one column that
centers itself on large displays. The current max-width is 1024px / 64rem;

```
<div class="CenteredColumn">
  <p>The content in the centered column is restricted to a max-width. If the viewport is greater, the column is horizontally
  centered.</p>
</div>
```

## Available Classes

* `.CenteredColumn`

## Available Variables

* `$centered-column-width`

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

## Extending

In your project or theme, you can easily extend the box object for your own purposes. The size variations are already an example of extending this class. Another is an error box:

```
@import your-project/scalescss/objects-centered-column/centered-column
