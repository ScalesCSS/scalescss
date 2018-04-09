# Side By Side Object for Scales

A simple pattern for displaying content side by side.

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/objects-side-by-side`

## Usage

The Side by Side object can be used on any elements that you want. For example:

```
<div class="SideBySide">
  <div class="SideBySide__item">
    <p>The content here will stay alongside other content within the parent container.</p>
  </div>
  <div class="SideBySide__item">
    <p>The content here will stay alongside other content within the parent container.</p>
  </div>
</div>
```

### Other uses

You may wish to split the items in a way other than 50/50. Below are modifier classes that allow
splitting the content by 25/75 or 75/25.

## Available Classes

* `.SideBySide`
* `.SideBySide__item`
* `.SideBySide__item--one-quarter`
* `.SideBySide__item--three-quarters`

## Available Variables

* `$side-by-side-gutter`

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

In your project or theme, you can easily extend the side-by-side object for your own purposes.

```
@import your-project/scalescss/objects-side-by-side/side-by-side

