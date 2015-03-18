# Flag Pattern for Scales

A simple pattern for placing variable amounts of content next to a fixed image or other media. Similar to the Media Object, the Flag pattern allows you to control the vertical alignment of the content.

Based on [The Flag Object](http://csswizardry.com/2013/05/the-flag-object/), by [Harry Roberts](https://twitter.com/csswizardry).

## Requirements

Scales patterns use the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Usage
The flag object can be used in many situations for positioning any type of image or other media next to some other content.

Basic usage:
```
<div class="flag">
    <div class="flag__figure">
        <img src="http://placekitten.com/g/150/150">
    </div>
    <div class="flag__body">
        <p>The domestic cat is a small, usually furry, domesticated, and carnivorous mammal. It is often called the housecat when kept as an indoor pet, or simply the cat when there is no need to distinguish it from other felids and felines.</p>
    </div>
</div>
```

To move the image to the opposite side:
```
<div class="flag--rev">
```

To change the vertical alignment of the text to middle or bottom:
```
<div class="flag flag--middle">

<div class="flag flag--bottom">
```

To stack image above the text on small screens:
```
<div class="flag flag--stacked">
```

## Available Classes

* `.flag`
* `.flag--rev`
* `.flag__figure`
* `.flag__body`
* `.flag--stacked`

### For controlling vertical alignment
* `.flag--middle`
* `.flag--bottom`

### For changing the space between the image and the content
* `.flag--flush`
* `.flag--tiny`
* `.flag--small`
* `.flag--large`
* `.flag--huge`

## Available Variables

* `$flag-gutter`
* `$flag-gutter-tiny`
* `$flag-gutter-small`
* `$flag-gutter-large`
* `$flag-gutter-huge`
* `$flag-stacked-breakpoint`

### The Scales Namespace Variable
All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

To give all Scales classes a namespace, you will need to set this variable in a file that is imported before any scales files. For example:

```
@import your-project/settings; // $scales-namespace is set in this file
@import your-project/scales-base; // Imports the Scales library
@import your-project/project // The rest of your project imports
```
