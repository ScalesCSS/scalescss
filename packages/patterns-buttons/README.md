# Button Patterns for Scales

A simple baseline for creating buttons. The button pattern can easily be extended with modifiers in your project or theme.

## Usage

Buttons should be used with links, buttons, and submit inputs

```
<a href="#" class="btn">Link Button</a>
<button class="btn">Button Button</button>
<input class="btn disabled" type="submit" value="Input Button">
```

## Available Classes

* `.btn` - The main button class
* `.disabled` - Disabled state for buttons

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
@import _settings.scss; // $scales-namespace is set in this file
@import _scales-base.scss; // Imports the Scales library
@import _project.scss // The rest of your project imports
```
## Extending

The button pattern simply provides a base for buttons. In your project or theme, you can easily extend the button pattern for your own purposes. For example:

```
@import scalescss/pattern-buttons/_buttons.scss

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
