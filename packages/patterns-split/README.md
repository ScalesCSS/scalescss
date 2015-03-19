# Split Pattern for Scales

A pattern for aligning two elements away from each other.

## Requirements

Scales patterns use the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [Bower](http://bower.io/): `bower install --save scales-patterns-split`

## Usage

The Split pattern can be used on any elements but works best in a `<dl>` or `<ul/ol>`. For example:

```
<dl class="split">
    <dt class="split__title">Google</dt>
    <dd>google.com</dd>
    <dt class="split__title">Wikipedia</dt>
    <dd>wikipedia.org</dd>
    <dt class="split__title">CNN</dt>
    <dd>cnn.com</dd>
</dl>
```
```
<ul class="split">
    <li><span class="split__title">Google</span> google.com</li>
    <li><span class="split__title">Wikipedia</span> wikipedia.org</li>
    <li><span class="split__title">CNN</span> cnn.com</li>
</ul>​
```

## Available Classes

* `.split`
* `.split__title`

## Available Variables

### The Scales Namespace Variable

All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

To give all Scales classes a namespace, you will need to set this variable in a file that is imported before any scales files. For example:

```
@import your-project/settings; // $scales-namespace is set in this file
@import your-project/scales; // Imports the Scales library
@import your-project/project // The rest of your project imports
```
