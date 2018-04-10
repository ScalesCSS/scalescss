# Box Object for Scales

A simple object for boxing off content and separating it visually from the surrounding content.

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Dependencies

* `utilities-clearfix`

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/objects-box`

## Usage

The box object can be used on any element that you want. For example:

```
<div class="Box">
  <p>The content in here will be boxed off from the surrounding content and will have a default amount of padding (based on the class used) to visually separate it.</p>
</div>
```

### Other uses

Since there are times when you want any element to be boxed off, possibly with different amounts of padding at different breakpoints, the box object is also able to be used as a mixin.

```
@include Box($padding);
```

## Available Classes

* `.Box`
* `.Box--flush`
* `.Box--tiny`
* `.Box--small`
* `.Box--large`
* `.Box--huge`

## Available Variables

* `$box-padding`
* `$box-padding-tiny`
* `$box-padding-small`
* `$box-padding-large`
* `$box-padding-huge`

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
@import your-project/scalescss/objects-box/box

//
// Error Box (extends box)
///
.Box--error {
  background-color: pink;
  border: 2px dashed red;
  color: red;
}
```
```
<div class="Box Box--error">
  <p>This is a really ugly error message in an alert box!!!!!</p>
</div>
```
