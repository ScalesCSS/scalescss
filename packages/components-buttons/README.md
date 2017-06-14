# Button Component for Scales

A simple baseline for creating buttons. The button component can easily be extended with modifiers in your project or theme.

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/components-buttons`

## Usage

Buttons should be used with links, buttons, and submit inputs for best results.

```
<a href="#" class="Button">Link Button</a>
<button class="Button">Button Button</button>
<input class="Button is-disabled" type="submit" value="Input Button">
```

## Available Classes

* `.Button` - The main button class
* `.is-disabled` - Disabled state for buttons (`disabled` attribute is preferred)

## Available Variables

* `$btn-background-color`
* `$btn-border-width`
* `$btn-border-color`
* `$btn-border-style`
* `$btn-border-radius`
* `$btn-text-color`
* `$btn-font`
* `$btn-padding`
* `$btn-hover-background-color`
* `$btn-hover-text-color`
* `$btn-disabled-opacity`
* `$btn-disabled-background-color:`
* `$btn-disabled-border-width:`
* `$btn-disabled-border-color:`
* `$btn-disabled-border-style:`
* `$btn-disabled-text-color:`

### Namespace Variables

#### The Scales Namespace Variable

All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

#### Class Level Namespace Variable

Class level namespace variables allow you to namespace a selector based on the type e.g. `b-` for "base", `o-` for "objects", `u-` for utilities, and `c-` for "components".

This pattern exposes the `$scales-components-class-namespace` variable.

`$scales-components-class-namespace` accepts a string that will prefix any classes in this pattern and follow the Scales Namespace Variable if it is not null. The default value is `null`.

#### Namespace Variable Usage

To set either of these namespaces, you will need to set the variables in a file that is imported before any scales files. For example:

```
@import your-project/settings; // Namespace variables are set in this file
@import your-project/scalescss; // Imports all of the Scales packages
@import your-project/project // The rest of your project imports
```

## Extending

The button component simply provides a base for buttons. In your project or theme, you can easily extend the button pattern for your own purposes. For example:

```
@import your-project/scalescss/components-buttons/buttons

//
// Primary buttons
///
.Button--primary {
  background-color: #0074D9;
  border: 2px solid #001F3F;
  border-radius: 5px;
  color: #fff;

  &:hover,
  &:active,
  &:focus {
    background-color: #001F3F;
    border-color: #0074D9;
  }
}

//
// Small buttons
///
.Button--small {
  font-size: 85%;
  padding: .2em .5em;
}
```
```
<button class="Button Button--primary">Primary Button</button>

<button class="Button Button--small">Small Button</button>
```
