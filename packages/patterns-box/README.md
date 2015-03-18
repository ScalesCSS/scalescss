# Box Pattern for Scales

A simple pattern for boxing off content and separating it visually from the surrounding content.

## Requirements

Scales patterns use the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either:
* Sass 3.2 or greater
* LibSass 2.0 or greater

## Dependencies

* `utilities-clearfix.scss`

## Usage

The box pattern can be used on any element that you want. For example:

```
<div class="box">
    <p>The content in here will be boxed off from the surrounding content and will have a default amount of padding (based on the class used) to visually separate it.</p>
</div>
```

### Other uses

Since there are times when you want any element to be boxed off, possibly with different amounts of padding at different breakpoints, the box pattern is also able to be used as a mixin.

```
@include box($padding);
```

## Available Classes

* `.box`
* `.box--flush`
* `.box--tiny`
* `.box--small`
* `.box--large`
* `.box--huge`

## Available Variables

* `$box-padding`
* `$box-padding-tiny`
* `$box-padding-small`
* `$box-padding-large`
* `$box-padding-huge`

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

In your project or theme, you can easily extend the box pattern for your own purposes. The size variations are already an example of extending this class. Another is an error box:

```
@import scalescss/pattern-box/box

//
// Error Box (extends box)
///
.box--error {
    background-color: pink;
    border: 2px dashed red;
    color: red;
}
```
```
<div class="box box--error">
    <p>This is a really ugly error message in an alert box!!!!!</p>
</div>
```
