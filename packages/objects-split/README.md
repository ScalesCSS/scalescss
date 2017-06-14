# Split Object for Scales

An object for aligning two elements away from each other.

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/objects-split`

## Usage

The Split object can be used on any elements but works best in a `<dl>` or `<ul/ol>`. For example:

```
<dl class="Split">
  <dt class="Split__title">Google</dt>
  <dd>google.com</dd>
  <dt class="Split__title">Wikipedia</dt>
  <dd>wikipedia.org</dd>
  <dt class="Split__title">CNN</dt>
    <dd>cnn.com</dd>
</dl>
```
```
<ul class="Split">
  <li><span class="Split__title">Google</span> google.com</li>
  <li><span class="Split__title">Wikipedia</span> wikipedia.org</li>
  <li><span class="Split__title">CNN</span> cnn.com</li>
</ul>​
```

## Available Classes

* `.Split`
* `.Split__title`

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
