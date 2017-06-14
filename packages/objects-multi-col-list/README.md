# Multi Column List Object for Scales

An object that makes a multi-column list out of a single list.

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Dependencies

* `utilities-clearfix`

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/objects-multi-col-list`

## Usage

Multi column lists can be used when you have a single list that you want to split into multiple columns.

### Two Columns

```
<ul class="MultiColList MultiColList--two-columns">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
  <li>Javascript</li>
  <li>PHP</li>
  <li>Python</li>
</ul>
```

### Three Columns

```
<ul class="MultiColList MultiColList--three-columns">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
  <li>Javascript</li>
  <li>PHP</li>
  <li>Python</li>
</ul>
```

### Four Columns

```
<ul class="MultiColList MultiColList--four-columns">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
  <li>Javascript</li>
  <li>PHP</li>
  <li>Python</li>
</ul>
```

### Five Columns

```
<ul class="MultiColList MultiColList--five-columns">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
  <li>Javascript</li>
  <li>PHP</li>
  <li>Python</li>
</ul>
```

### Six Columns

```
<ul class="MultiColList MultiColList--six-columns">
  <li>Sass</li>
  <li>CSS</li>
  <li>HTML</li>
  <li>Javascript</li>
  <li>PHP</li>
  <li>Python</li>
</ul>
```

### Other uses

Since there are situations where you want a list have a different number of columns at different media queries, the multi column list object is also able to be used as a mixin or extended as a placeholder.

```
@include MultiColList(2);

@extend %MultiColList--two-columns;
```

## Available Classes

* `.MultiColList`
* `.MultiColList--two-columns`
* `.MultiColList--three-columns`
* `.MultiColList--four-columns`
* `.MultiColList--five-columns`
* `.MultiColList--six-columns`

### Namespace Variables

#### The Scales Namespace Variable

All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

#### Class Level Namespace Variable

Class level namespace variables allow you to namespace a selector based on the type e.g. `b-` for "base", `o-` for "objects", `u-` for utilities, and `c-` for "components".

This pattern exposes the `$scales-objects-class-namespace` variable.

`$scales-objects-class-namespace` accepts a string that will prefix any classes in this pattern and follow the Scales Namespace Variable if it is not null. The default value is `null`.

#### Namespace Variable Usage

To set either of these namespaces, you will need to set the variables in a file that is imported before any scales files. For example:

```
@import your-project/settings; // Namespace variables are set in this file
@import your-project/scalescss; // Imports all of the Scales packages
@import your-project/project // The rest of your project imports
```

## Extending

In your project or theme, you can easily extend the multi column list object to add more columns. For example:

```
@import your-project/scalescss/objects-multi-col-list/multi-col-list

//
// 12 columns
///
.MultiColList--twelve-columns {

  > li {
    width: 8.333333333%
  }
}
```

You may also want to change the number of columns depending on the screen width. For example:

```
.MyList {
  @include MultiColList(2);

  @media all and (min-width: 35em) {
    @include MultiColList(5);
  }
}
```
