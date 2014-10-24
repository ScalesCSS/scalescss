# Button Pattern for Scales

A simple baseline for creating buttons. The button pattern can easily be extended with modifiers in your project or theme.

## Requirements

Scales patterns use the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either:
* Sass 3.2 or greater
* LibSass 2.0 or greater

## Usage

Buttons should be used with links, buttons, and submit inputs for best results

```
<a href="#" class="btn">Link Button</a>
<button class="btn">Button Button</button>
<input class="btn is-disabled" type="submit" value="Input Button">
```

## Available Classes

* `.btn` - The main button class
* `.is-disabled` - Disabled state for buttons

## Available Variables

* `$btn-background-color`
* `$btn-border-width`
* `$btn-border-color`
* `$btn-border-style`
* `$btn-text-color`
* `$btn-font`
* `$btn-padding`
* `$btn-disabled-opacity`

### The Scales Namespace Variable
All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

To give all Scales classes a namespace, you will need to set this variable in a file that is imported before any scales files. For example:

```
@import your-project/settings; // $scales-namespace is set in this file
@import your-project/scales-base; // Imports the Scales library
@import your-project/project // The rest of your project imports
```
## Extending

The button pattern simply provides a base for buttons. In your project or theme, you can easily extend the button pattern for your own purposes. For example:

```
@import scalescss/pattern-buttons/buttons

//
// Primary buttons
///
.btn--primary {
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
.btn--small {
    font-size: 85%;
    padding: .2em .5em;
}
```
```
<button class="btn btn--primary">Primary Button</button>

<button class="btn btn--small">Small Button</button>
```
