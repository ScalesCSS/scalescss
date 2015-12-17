# Base Block Quotes for Scales

These are the base styles for block quotes.

## Requirements

Scales patterns use the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save scales-base-blockquotes`
* [Bower](http://bower.io/): `bower install --save scales-base-blockquotes`

## Usage

A nice semantic way to markup a blockquote is using the `figure` element. See http://alistapart.com/blog/post/more-thoughts-about-blockquotes-than-are-strictly-required for the rationale behind this approach.

### Default blockquote
```
<figure>
    <blockquote class="blockquote">
        <p class="blockquote__quote">For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring.</p>
    </blockquote>
    <figcaption class="blockquote__source">Carl Sagan, <cite>The Demon-Haunted World</cite></figcaption>
</figure>
```

## Available Classes

* `.blockquote`
* `.blockquote__quote`
* `.blockquote__source`

## Available Variables

* `$source-prefix`

### The Scales Namespace Variable

All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

To give all Scales classes a namespace, you will need to set this variable in a file that is imported before any scales files. For example:

```
@import your-project/settings; // $scales-namespace is set in this file
@import your-project/scales; // Imports the Scales library
@import your-project/project // The rest of your project imports
```
