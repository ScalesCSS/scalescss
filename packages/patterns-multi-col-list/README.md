# Multi Column List Pattern for Scales

A pattern that makes a multi-column list out of a single list.

## Requirements

Scales patterns use the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Usage

Multi column lists can be used when you have a single list that you want to split into multiple columns.

### Two Columns

```
<ul class="multi-col-list two-columns">
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
<ul class="multi-col-list three-columns">
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
<ul class="multi-col-list four-columns">
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
<ul class="multi-col-list five-columns">
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
<ul class="multi-col-list six-columns">
    <li>Sass</li>
    <li>CSS</li>
    <li>HTML</li>
    <li>Javascript</li>
    <li>PHP</li>
    <li>Python</li>
</ul>
```



### Other uses

Since there are situations where you want a list have a different number of columns at different media queries, the multi column list pattern is also able to be used as a mixin or extended as a placeholder.

```
@include columns(2);

@extend %two-columns;
```

## Available Classes

* `.multi-col-list`
* `.two-columns`
* `.three-columns`
* `.four-columns`
* `.five-columns`
* `.six-columns`

### The Scales Namespace Variable

All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

To give all Scales classes a namespace, you will need to set this variable in a file that is imported before any scales files. For example:

```
@import your-project/settings; // $scales-namespace is set in this file
@import your-project/scales-base; // Imports the Scales library
@import your-project/project // The rest of your project imports
```

## Extending

In your project or theme, you can easily extend the multi column list pattern to add more columns. For example:

```
@import scalescss/pattern-multi-col-list/multi-col-list

//
// 12 columns
///
.twelve-columns {

    > li {
        width: 8.333333333%
    }
}
```

You may also want to change the number of columns depending on the screen width. For example:

```
.my-list {
    @extend %two-columns;

    @media all and (min-width: 35em) {
        // use the columns mixin here because @extend
        // isn't supported in media queries
        ///
        @include columns(5);
    }
}
```
