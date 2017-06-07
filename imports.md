# Scales Imports

This is an example file that imports all of the scales patterns, utilities, overrides, and base project settings. The files are required to be imported in this order.

I recommend creating a file called `_scales.scss` and copying these imports into that.

It is assumed that the files being imported are in the same directory as this file. If you install using Bower or NPM, this will not be the case and you will need to update the paths in your `_scales.scss` file.

## The Imports

### These are global utility styles
```
@import "scales-utilities-normalize/normalize";
@import "scales-utilities-reset/reset";
@import "scales-utilities-clearfix/clearfix";
```
### These are the base structure styles for standard HTML elements
```
@import "scales-base-typography/typography";
@import "scales-base-images/images";
@import "scales-base-lists/lists";
@import "scales-base-blockquotes/blockquotes";
@import "scales-base-forms/forms";
@import "scales-base-tables/tables";
```

### These are OOCSS based design patterns.
If you come up with new one's, please contribute on github!
```
@import "scales-patterns-box/box";
@import "scales-patterns-horizontal-list/horizontal-list";
@import "scales-patterns-vertical-list/vertical-list";
@import "scales-patterns-media-object/media-object";
@import "scales-patterns-flag/flag";
@import "scales-patterns-buttons/buttons";
@import "scales-patterns-split/split";
@import "scales-patterns-stats/stats";
@import "scales-patterns-multi-col-list/multi-col-list";
```

### Overrides that need come later in the cascade
```
@import "scales-overrides-size/size";
@import "scales-overrides-spacing/spacing";
```

## Order without headings in the way for easier copy/paste
```
@import "scales-utilities-normalize/normalize";
@import "scales-utilities-reset/reset";
@import "scales-utilities-clearfix/clearfix";
@import "scales-base-typography/typography";
@import "scales-base-images/images";
@import "scales-base-lists/lists";
@import "scales-base-blockquotes/blockquotes";
@import "scales-base-forms/forms";
@import "scales-base-tables/tables";
@import "scales-patterns-box/box";
@import "scales-patterns-horizontal-list/horizontal-list";
@import "scales-patterns-vertical-list/vertical-list";
@import "scales-patterns-media-object/media-object";
@import "scales-patterns-flag/flag";
@import "scales-patterns-buttons/buttons";
@import "scales-patterns-split/split";
@import "scales-patterns-stats/stats";
@import "scales-patterns-multi-col-list/multi-col-list";
@import "scales-overrides-size/size";
@import "scales-overrides-spacing/spacing";
```
