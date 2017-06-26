# Scales Variables
Scales comes with _a lot_ of variables so you can customize the defaults easily. I have organized them into groups below in the order that the files are imported in Scales. For more details, see the README file in the particular Scales repo.

## The Scales Namespace Variable

All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

## Class Level Namespace Variable

Class level namespace variables allow you to namespace a selector based on the type e.g. `b-` for "base", `o-` for "objects", `u-` for utilities, and `c-` for "components". The default value is `null`.

## The Variables

### All Files
* `$scales-namespace`

### Class Level Namespace Variables
* `$scales-base-class-namespace`
  * Reset
  * Blockquotes
  * Forms
  * Lists
  * Tables
  * Typography
* `$scales-components-class-namespace`
  * Buttons
* `$scales-objects-class-namespace`
  * Box
  * Flag
  * Horizontal List
  * Media Object
  * Multi Column List
  * Split
  * Stats
  * Vertical List
* `$scales-utilities-class-namespace`
  * Clearfix
  * Size
  * Spacing

### _reset.scss
* `$scales-base-class-namespace
* `$selection-bg-color`
* `$selection-text-color`
* `$horizontal-rule-color`
* `$table-border-collapse`
* `$pre-overflow`

### _typography.scss
* `$scales-base-class-namespace
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
* `$pre-wordwrap`
* `$reset-heading-sizes`
* `$system-body-fonts`
* `$system-heading-fonts`
* `$system-font-stack`
* `$monospaced-font-stack`
* `$base-font-stack`
* `$heading-font-stack`
* `$heading-font-weight`
* `$font-size-unit`
* `$base-font-size`
* `$base-line-height`
* `$lede-font-size`
* `$h1-size`
* `$h2-size`
* `$h3-size`
* `$h4-size`
* `$h5-size`
* `$h6-size`
* `$custom-h1-utility-class`
* `$custom-h2-utility-class`
* `$custom-h3-utility-class`
* `$custom-h4-utility-class`
* `$custom-h5-utility-class`
* `$custom-h6-utility-class`

### _blockquotes.scss
* `$scales-base-class-namespace
* `$source-prefix`

### _forms.scss
* `$scales-base-class-namespace
* `$fieldset-padding`
* `$text-input-padding`
* `$text-input-border-width`
* `$text-input-border-style`
* `$text-input-border-color`
* `$text-input-border-radius`
* `$select-background-color`
* `$input-container-margin-bottom`
* `$input-container-inline-valign`
* `$input-disabled-border-color`
* `$input-disabled-background-color`
* `$input-disabled-text-color`
* `$input-readonly-border-color`
* `$input-readonly-background-color`
* `$input-readonly-text-color`
* `$helper-text-hidden`

### _tables.scss
* `$scales-base-class-namespace
* `$table-padding-large`
* `$table-padding-medium`
* `$table-padding-small`
* `$table-border-width`
* `$table-border-style`
* `$table-border-color`
* `$table-stripe-color`
* `$table-highlight-color`
* `$table-highlight-text-color`

### _box.scss
* `$scales-objects-class-namespace`
* `$box-padding`
* `$box-padding-tiny`
* `$box-padding-small`
* `$box-padding-large`
* `$box-padding-huge`

### _horizontal-list.scss
* `$scales-objects-class-namespace`
* `$horizontal-list-delimiter`

### _vertical-list.scss
* `$scales-objects-class-namespace`
* `$vertical-list-delimiter`

### _media-object.scss
* `$scales-objects-class-namespace`
* `$media-gutter`
* `$media-gutter-tiny`
* `$media-gutter-small`
* `$media-gutter-large`
* `$media-gutter-huge`
* `$media-stacked-breakpoint`

### _flag.scss
* `$scales-objects-class-namespace`
* `$flag-gutter`
* `$flag-gutter-tiny`
* `$flag-gutter-small`
* `$flag-gutter-large`
* `$flag-gutter-huge`
* `$flag-stacked-breakpoint`

### _stats.scss
* `$scales-objects-class-namespace`
* `$stat-spacing`

### _buttons.scss
* `$scales-components-class-namespace`
* `$btn-background-color`
* `$btn-border-width`
* `$btn-border-color`
* `$btn-border-style`
* `$btn-border-radius`
* `$btn-text-color`
* `$btn-font`
* `$btn-padding`
* `$btn-hover-background-color`
* `$btn-hover-text-color`
* `$btn-disabled-opacity`
* `$btn-disabled-background-color`
* `$btn-disabled-border-width`
* `$btn-disabled-border-color`
* `$btn-disabled-border-style`
* `$btn-disabled-text-color`

### _clearfix.scss
* `$scales-utilities-class-namespace`
* `$clearfix-class`

### _size.scss
* `$scales-utilities-class-namespace`
* `$size-range-start`
* `$size-range-end`
* `$size-step-value`

### _spacing.scss
* `$scales-utilities-class-namespace`
* `$space-s`
* `$space-m`
* `$space-l`
* `$space-h`
