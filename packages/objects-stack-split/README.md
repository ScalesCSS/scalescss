# Stack Split Object for Scales

A simple pattern for keeping items stacked until theres enough room for them to be side by side.

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/objects-stack-split`

## Usage

```
<div class="StackSplit">
  <div class="StackSplit__item"><button>Button</button></div>
  <div class="StackSplit__item"><a href="">Link</a></div>
</div>
```

## Available Classes

* `.StackSplit`
* `.StackSplit__item`

## Available Variables

* `$stack-split-gutter`

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

