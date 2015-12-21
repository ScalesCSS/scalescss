# Media Object Pattern for Scales

A simple pattern for placing variable amounts of content next to a fixed image or other media. This is based on the Media Object created by [Nicole Sullivan](http://twitter.com/stubbornella).

The media object is probably the most useful OOCSS abstraction. Read more here: http://stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code

## Requirements

Scales patterns use the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Dependencies

* `utilities-clearfix`

## Installation

* [NPM](http://npmjs.com): `npm install --save scales-patterns-media-object`
* [Bower](http://bower.io/): `bower install --save scales-patterns-media-object`

## Usage
The media object can be used in many situations for positioning any type of image or other media next to some other content. Read [Nicole Sullivan's](http://twitter.com/stubbornella) post on the topic http://stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code.

Basic usage:
```
<div class="media">
    <a class="media__figure" href="http://scalescss.github.io/scales">
        <img src="http://placekitten.com/g/150/150/">
    </a>
    <div class="media__body">
        <p>The domestic cat is a small, usually furry, domesticated, and carnivorous mammal. It is often called the housecat when kept as an indoor pet, or simply the cat when there is no need to distinguish it from other felids and felines.</p>
    </div>
</div>
```

Example using `figure` with the media object:
```
<figure class="media">
    <a class="media__figure" href="http://scalescss.github.io/scales">
        <img src="http://placekitten.com/g/150/150/">
    </a>
    <figcaption class="media__body">
        <p>The domestic cat is a small, usually furry, domesticated, and carnivorous mammal. It is often called the housecat when kept as an indoor pet, or simply the cat when there is no need to distinguish it from other felids and felines.</p>
    </figcaption>
</figure>
```

To move the image to the opposite side:
```
<div class="media media--rev">
```

To stack image above the text on small screens:
```
<div class="media media--stacked">
```


## Available Classes

* `.media`
* `.media--rev`
* `.media__figure`
* `.media__body`
* `.media--stacked`

### For changing the space between the image and the content
* `.media--flush`
* `.media--tiny`
* `.media--small`
* `.media--large`
* `.media--huge`

## Available Variables

* `$media-gutter`
* `$media-gutter-tiny`
* `$media-gutter-small`
* `$media-gutter-large`
* `$media-gutter-huge`
* `$media-stacked-breakpoint`

### The Scales Namespace Variable
All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

To give all Scales classes a namespace, you will need to set this variable in a file that is imported before any scales files. For example:

```
@import your-project/settings; // $scales-namespace is set in this file
@import your-project/scales; // Imports the Scales library
@import your-project/project // The rest of your project imports
```
