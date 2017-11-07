# Base Typography for Scales

These are the base styles for typographic elements.

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/base-typography`

## Usage

Scales provides default typography for headings, text elements, lede paragraphs, and code blocks. It also has utility classes for headings and to control measure and truncation.

### Lede Paragraph
```
<p class="Lede">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna quis nulla ultrices, sed efficitur risus elementum. Vivamus semper ex a lorem sodales, rhoncus rhoncus augue cursus. Sed vestibulum felis vel euismod aliquet. Suspendisse sit amet euismod nibh, eget fermentum arcu. Aliquam lacinia, sem eu ultricies auctor, velit nunc commodo sapien, pharetra maximus augue dui eget dui.</p>
```

### Code Block
```
<pre><code>
function padZeros(num, totalLen) {
  var numStr = num.toString();
  var numZeros = totalLen - numStr.length;
  for (var i = 1; i <= numZeros; i++) {
    numStr = "0" + numStr;
  }
  return numStr;
}
</code></pre>
```

### Measure
Measure is the length of a line of text. For maximum readability, this should optimally be set between 45 and 75 characters. With multiple columns of text the measure should be narrower, between 40 and 50 characters.

```
<p class="Measure">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna quis nulla ultrices, sed efficitur risus elementum. Vivamus semper ex a lorem sodales, rhoncus rhoncus augue cursus.</p>

<p class="Measure--narrow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna quis nulla ultrices, sed efficitur risus elementum. Vivamus semper ex a lorem sodales, rhoncus rhoncus augue cursus.</p>
```

### Truncation
This allows you to cut text off if it exceeds the width of the viewport and adds an ellipsis. This works even better when combined with [utilities-size](https://github.com/ScalesCSS/scalescss/tree/master/packages/utilities-size) to control where it cuts off by applying a width to the container.

```
<p class="Truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna quis nulla ultrices, sed efficitur risus elementum. Vivamus semper ex a lorem sodales, rhoncus rhoncus augue cursus.</p>
```

## Available Classes

* `.Lede` or `.Lead`
* `.Measure`
* `.Measure--narrow`
* `.Truncate`

### Heading Utility Classes

* `.H1`
* `.H2`
* `.H3`
* `.H4`
* `.H5`
* `.H6`
* `.Alpha`
* `.Beta`
* `.Gamma`
* `.Delta`
* `.Epsilon`
* `.Zeta`

## Available Variables

* `$base-text-color`
* `$heading-color`
* `$text-margins`
* `$heading-margins`
* `$measure`
* `$narrow-measure`
* `$code-block-padding`
* `$code-block-margins`
* `$code-block-bg-color`
* `$code-block-text-color`
* `$pre-wordwrap` - Set to 'true' to make text in a code block wrap to new lines when it reaches the bounds of the container.
* `$reset-heading-sizes` - Set to 'true' to make the default heading sizes match the base font size.
* `$system-body-fonts` - Set to 'false' to use the `$base-font-stack` instead of using system fonts.
* `$system-heading-fonts` - Set to 'false' to use the `$heading-font-stack` instead of using system fonts.
* `$system-font-stack`
* `$monospaced-font-stack`
* `$base-font-stack`
* `$heading-font-stack`
* `$heading-font-weight`
* `$font-size-unit`
* `$base-font-size`
* `$base-line-height`
* `$heading-line-height`
* `$lede-font-size`
* `$h1-size`
* `$h2-size`
* `$h3-size`
* `$h4-size`
* `$h5-size`
* `$h6-size`
* `$h1-line-height`
* `$h2-line-height`
* `$h3-line-height`
* `$h4-line-height`
* `$h5-line-height`
* `$h6-line-height`
* `$anchor-link-color`
* `$anchor-visited-color`
* `$anchor-hover-color`
* `$anchor-active-color`
* `$anchor-link-decoration`
* `$anchor-hover-decoration`

## Custom heading utility class variables (overrides Greek alphabet classes)
* `$custom-h1-utility-class`
* `$custom-h2-utility-class`
* `$custom-h3-utility-class`
* `$custom-h4-utility-class`
* `$custom-h5-utility-class`
* `$custom-h6-utility-class`

### Namespace Variables

#### The Scales Namespace Variable

All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

#### Class Level Namespace Variable

Class level namespace variables allow you to namespace a selector based on the type e.g. `b-` for "base", `o-` for "objects", `u-` for utilities, and `c-` for "components".

This pattern exposes the `$scales-base-class-namespace` variable.

`$scales-base-class-namespace` accepts a string that will prefix any classes in this pattern and follow the Scales Namespace Variable if it is not null. The default value is `null`.

#### Namespace Variable Usage

To set either of these namespaces, you will need to set the variables in a file that is imported before any scales files. For example:

```
@import your-project/settings; // Namespace variables are set in this file
@import your-project/scalescss; // Imports all of the Scales packages
@import your-project/project // The rest of your project imports
```
