# Base Typography for Scales

These are the base styles for typographic elements.

## Requirements

Scales patterns use the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save scales-base-typography`
* [Bower](http://bower.io/): `bower install --save scales-base-typography`

## Usage

Scales provides default typography for headings, text elements, lede paragraphs, and code blocks.

### Lede Paragraph
```
<p class="lede">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna quis nulla ultrices, sed efficitur risus elementum. Vivamus semper ex a lorem sodales, rhoncus rhoncus augue cursus. Sed vestibulum felis vel euismod aliquet. Suspendisse sit amet euismod nibh, eget fermentum arcu. Aliquam lacinia, sem eu ultricies auctor, velit nunc commodo sapien, pharetra maximus augue dui eget dui.</p>
```

### Code Block
```
<pre><code>
&lt;h1&gt;This is an H1&lt;/h1&gt;
&lt;h2&gt;This is an H2&lt;/h2&gt;
&lt;h3&gt;This is an H3&lt;/h3&gt;
&lt;h4&gt;This is an H4&lt;/h4&gt;
&lt;h5&gt;This is an H5&lt;/h5&gt;
&lt;h6&gt;This is an H6&lt;/h6&gt;
</code></pre>
```

## Available Classes

* `.lede` or `.lead`

### Heading Utility Classes
* `.h1`
* `.h2`
* `.h3`
* `.h4`
* `.h5`
* `.h6`
* `.alpha`
* `.beta`
* `.gamma`
* `.delta`
* `.epsilon`
* `.zeta`

## Available Variables

* `$base-text-color`
* `$code-block-padding`
* `$code-block-bg-color`
* `$code-block-text-color`
* `$pre-wordwrap` - Set to true to make text in a code block wrap to new lines when it reaches the bounds of the container.
* `$monospaced-font-stack`
* `$base-font-stack`
* `$heading-font-stack`
* `$heading-font-weight`
* `$base-font-size`
* `$base-line-height`
* `$lede-font-size`
* `$h1-size`
* `$h2-size`
* `$h3-size`
* `$h4-size`
* `$h5-size`
* `$h6-size`

### The Scales Namespace Variable

All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

To give all Scales classes a namespace, you will need to set this variable in a file that is imported before any scales files. For example:

```
@import your-project/settings; // $scales-namespace is set in this file
@import your-project/scales; // Imports the Scales library
@import your-project/project // The rest of your project imports
```
