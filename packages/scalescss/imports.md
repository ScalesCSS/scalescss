# Scales Imports

This is an example file that imports Scales. The files are required to be imported in this order. It follows the [ITCSS architecture](http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528).

I recommend creating a file called `_scalescss.scss` and copying these imports into that.

For simplicity, it is assumed that the files being imported are in the same directory as this file. When you install using NPM, this will not be the case and you will need to update the paths in your `_scalescss.scss` file to point to where the files live in your node_modules directory.

## The Imports

### These are global utility styles

```
@import "@scalescss/generic-normalize/normalize";
@import "@scalescss/generic-reset/reset";
```

### These are the base structure styles for standard HTML elements

```
@import "@scalescss/base-typography/typography";
@import "@scalescss/base-images/images";
@import "@scalescss/base-lists/lists";
@import "@scalescss/base-blockquotes/blockquotes";
@import "@scalescss/base-forms/forms";
@import "@scalescss/base-tables/tables";
```

### These are OOCSS based design patterns.

If you come up with new one's, please contribute on github!

```
@import "@scalescss/objects-box/box";
@import "@scalescss/objects-centered-column/centered-column";
@import "@scalescss/objects-horizontal-list/horizontal-list";
@import "@scalescss/objects-vertical-list/vertical-list";
@import "@scalescss/objects-media-object/media-object";
@import "@scalescss/objects-flag/flag";
@import "@scalescss/objects-split/split";
@import "@scalescss/objects-stack/stack";
@import "@scalescss/objects-stats/stats";
@import "@scalescss/objects-multi-col-list/multi-col-list";
```

### Components

```
@import "@scalescss/components-buttons/buttons";
```

### Utilities that need come later in the cascade

```
@import "@scalescss/utilities-clearfix/clearfix";
@import "@scalescss/utilities-width/width";
@import "@scalescss/utilities-spacing/spacing";
```

## Order without headings in the way for easier copy/paste

```
@import "@scalescss/generic-normalize/normalize";
@import "@scalescss/generic-reset/reset";
@import "@scalescss/base-typography/typography";
@import "@scalescss/base-images/images";
@import "@scalescss/base-lists/lists";
@import "@scalescss/base-blockquotes/blockquotes";
@import "@scalescss/base-forms/forms";
@import "@scalescss/base-tables/tables";
@import "@scalescss/objects-box/box";
@import "@scalescss/objects-centered-column/centered-column";
@import "@scalescss/objects-horizontal-list/horizontal-list";
@import "@scalescss/objects-vertical-list/vertical-list";
@import "@scalescss/objects-media-object/media-object";
@import "@scalescss/objects-flag/flag";
@import "@scalescss/objects-split/split";
@import "@scalescss/objects-stack/stack";
@import "@scalescss/objects-stats/stats";
@import "@scalescss/objects-multi-col-list/multi-col-list";
@import "@scalescss/components-buttons/buttons";
@import "@scalescss/utilities-clearfix/clearfix";
@import "@scalescss/utilities-width/width";
@import "@scalescss/utilities-spacing/spacing";
```
