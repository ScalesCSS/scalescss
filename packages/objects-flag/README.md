# Flag Object for Scales

A simple object for placing variable amounts of content next to a fixed image or other media. Similar to the media object, the flag object allows you to control the vertical alignment of the content.

Based on [The Flag Object](http://csswizardry.com/2013/05/the-flag-object/), by [Harry Roberts](https://twitter.com/csswizardry).

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/objects-flag`

## Usage
The flag object can be used in many situations for positioning any type of image or other media next to some other content.

Basic usage:
```
<div class="Flag">
  <div class="Flag__figure">
    <img src="http://placekitten.com/g/150/150">
  </div>
  <div class="Flag__body">
    <p>The domestic cat is a small, usually furry, domesticated, and carnivorous mammal. It is often called the housecat when kept as an indoor pet, or simply the cat when there is no need to distinguish it from other felids and felines.</p>
  </div>
</div>
```

To move the image to the opposite side:
```
<div class="Flag--rev">
```

To change the vertical alignment of the text to middle or bottom:
```
<div class="Flag Flag--middle">

<div class="Flag Flag--bottom">
```

To stack image above the text on small screens:
```
<div class="Flag Flag--stacked">
```

## Available Classes

* `.Flag`
* `.Flag--rev`
* `.Flag__figure`
* `.Flag__body`
* `.Flag--stacked`

### For controlling vertical alignment
* `.Flag--middle`
* `.Flag--bottom`

### For changing the space between the image and the content
* `.Flag--flush`
* `.Flag--tiny`
* `.Flag--small`
* `.Flag--large`
* `.Flag--huge`

## Available Variables

* `$flag-gutter`
* `$flag-gutter-tiny`
* `$flag-gutter-small`
* `$flag-gutter-large`
* `$flag-gutter-huge`
* `$flag-stacked-breakpoint`

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
