# Media Object Pattern for Scales

A simple pattern for placing variable amounts of content next to a fixed image or other media.

The media object is probably the most useful OOCSS abstraction. Read more here: http://stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code

## Requirements

Scales patterns use the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either:
* Sass 3.2 or greater
* LibSass 2.0 or greater

## Dependencies

* `utilities-clearfix.scss`

## Usage
The media object can be used in many situations for positioning any type of image or other media next to some other content. Read [Nicole Sullivan's](http://twitter.com/stubbornella) post on the topic http://stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code.

Example using `figure` with the media object:
```
<div class="media">
    <figure>
        <a href="http://scalescss.github.io/scales">
            <img class="media__fig" src="http://placekitten.com/g/150/150/">
        </a>
        <figcaption class="media__body">
            <p>The domestic cat is a small, usually furry, domesticated, and carnivorous mammal. It is often called the housecat when kept as an indoor pet, or simply the cat when there is no need to distinguish it from other felids and felines.</p>
        </figcaption>
    </figure>
</div>
```



## Available Classes

* `.media`
* `.media__fig`
* `.media__fig--rev` (puts the image on the right)
* `.media__body`

## Available Variables

* `$media-space`

### The Scales Namespace Variable
All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

To give all Scales classes a namespace, you will need to set this variable in a file that is imported before any scales files. For example:

```
@import your-project/settings; // $scales-namespace is set in this file
@import your-project/scales-base; // Imports the Scales library
@import your-project/project // The rest of your project imports
```
