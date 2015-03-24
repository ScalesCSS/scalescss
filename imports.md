# Scales Imports

This is an example file that imports all of the scales patterns, utilities, overrides, and base project settings. The files are required to be imported in this order.

I recommend creating a file called `_scales.scss` and copying these imports into that.

It is assumed that the files being imported are in the same directory as this file. If you install using Bower or NPM, this will not be the case and you will need to update the paths in your `_scales.scss` file.

## The Imports

### These are global utility styles
```
@import "utilities-normalize/normalize";
@import "utilities-reset/reset";
@import "utilities-clearfix/utilities-clearfix";
```
### These are the base structure styles for standard HTML elements
```
@import "base-typography/typography";
@import "base-images/images";
@import "base-lists/lists";
@import "base-blockquotes/blockquotes";
@import "base-forms/forms";
@import "base-tables/tables";
```

### These are OOCSS based design patterns.
If you come up with new one's, please contribute on github!
```
@import "patterns-box/box";
@import "patterns-horizontal-list/horizontal-list";
@import "patterns-vertical-list/vertical-list";
@import "patterns-media-object/media-object";
@import "patterns-flag/flag";
@import "patterns-buttons/buttons";
@import "patterns-split/split";
@import "patterns-stats/stats";
@import "patterns-multi-col-list/multi-col-list";
```

### Overrides that need come later in the cascade
```
@import "overrides-size/size";
@import "overrides-spacing/spacing";
```
