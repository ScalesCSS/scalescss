# Stats Pattern for Scales

A pattern to display statistic-like information.

## Requirements

Scales patterns use the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Dependencies

* `utilities-clearfix`

## Installation

* [Bower](http://bower.io/): `bower install --save scales-patterns-stats`

## Usage

Stats should be used with `<dl>`s to group the stat title and value. The `--big` variation can be used when the title or values are too long to sit next to each other in a row. For example:

```
<div class="stat-group">
    <dl class="stat">
        <dt class="stat__title">RBI</dt>
        <dd class="stat__value">127</dd>
    </dl>

    <dl class="stat">
        <dt class="stat__title">BA</dt>
        <dd class="stat__value">.369</dd>
    </dl>

    <dl class="stat">
        <dt class="stat__title">HR</dt>
        <dd class="stat__value">25</dd>
    </dl>
</div>
```
```
<div class="stat-group--big">
    <dl class="stat">
        <dt class="stat__title">Total Runs Batted In</dt>
        <dd class="stat__value">127</dd>
    </dl>

    <dl class="stat">
        <dt class="stat__title">Total Batting Average</dt>
        <dd class="stat__value">.369</dd>
    </dl>

    <dl class="stat">
        <dt class="stat__title">Total Home Runs</dt>
        <dd class="stat__value">25</dd>
    </dl>
</div>
```

## Available Classes

* `.stat-group`
* `.stat-group--big`
* `.stat` - wrapper for each stat pair
* `.stat__title`
* `.stat__value`

## Available Variables

* `$stat-spacing` - space to the right of each stat

### The Scales Namespace Variable

All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

To give all Scales classes a namespace, you will need to set this variable in a file that is imported before any scales files. For example:

```
@import your-project/settings; // $scales-namespace is set in this file
@import your-project/scales; // Imports the Scales library
@import your-project/project // The rest of your project imports
```
