# Media Object for Scales

A simple object for placing variable amounts of content next to a fixed image or other media. This is based on the Media Object created by [Nicole Sullivan](http://twitter.com/stubbornella).

The media object is probably the most useful OOCSS abstraction. Read more here: http://stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Dependencies

* `utilities-clearfix`

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/objects-media-object`

## Usage
The media object can be used in many situations for positioning any type of image or other media next to some other content. Read [Nicole Sullivan's](http://twitter.com/stubbornella) post on the topic http://stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code.

Basic usage:
```
<div class="Media">
  <a class="Media__figure" href="http://scalescss.github.io/scales">
    <img src="http://placekitten.com/g/150/150/">
  </a>
  <div class="Media__body">
    <p>The domestic cat is a small, usually furry, domesticated, and carnivorous mammal. It is often called the housecat when kept as an indoor pet, or simply the cat when there is no need to distinguish it from other felids and felines.</p>
  </div>
</div>
```

Example using `figure` with the media object:
```
<figure class="Media">
  <a class="Media__figure" href="http://scalescss.github.io/scales">
    <img src="http://placekitten.com/g/150/150/">
  </a>
  <figcaption class="Media__body">
    <p>The domestic cat is a small, usually furry, domesticated, and carnivorous mammal. It is often called the housecat when kept as an indoor pet, or simply the cat when there is no need to distinguish it from other felids and felines.</p>
  </figcaption>
</figure>
```

To move the image to the opposite side:
```
<div class="Media Media--rev">
```

To stack image above the text on small screens:
```
<div class="Media Media--stacked">
```


## Available Classes

* `.Media`
* `.Media--rev`
* `.Media__figure`
* `.Media__body`
* `.Media--stacked`

### For changing the space between the image and the content
* `.Media--flush`
* `.Media--tiny`
* `.Media--small`
* `.Media--large`
* `.Media--huge`

## Available Variables

* `$media-gutter`
* `$media-gutter-tiny`
* `$media-gutter-small`
* `$media-gutter-large`
* `$media-gutter-huge`
* `$media-stacked-breakpoint`

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
