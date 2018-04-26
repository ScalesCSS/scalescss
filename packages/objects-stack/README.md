# Stack Object for Scales

The Stack object lays items out in a column and can be modified to lay items out in a row at a certain breakpoint.

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/objects-stack`

## Usage

```
<div class="Stack Stack--split@xs">
  <div class="Stack__item"><button>Button</button></div>
  <div class="Stack__item"><a href="">Link</a></div>
  <div class="Stack__item"><a href="">Link</a></div>
  <div class="Stack__item"><a href="">Link</a></div>
  <div class="Stack__item"><a href="">Link</a></div>
</div>
```

## Available Classes

* `.Stack`
* `.Stack__item`
* `.Stack--split@xs`
* `.Stack--split@s`
* `.Stack--split@m`
* `.Stack--split@l`
* `.Stack--split@xl`
* `.Stack--tiny`
* `.Stack--small`
* `.Stack--medium`
* `.Stack--large`
* `.Stack--huge`

## Available Variables

* `$stack-spacing-tiny`
* `$stack-spacing-small`
* `$stack-spacing-medium`
* `$stack-spacing-large`
* `$stack-spacing-huge`
* `$split-breakpoint-xs`
* `$split-breakpoint-s`
* `$split-breakpoint-m`
* `$split-breakpoint-l`
* `$split-breakpoint-xl`

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

In your project or theme, you can easily extend the stack object for your own purposes.

```
@import your-project/scalescss/objects-stack/stack
