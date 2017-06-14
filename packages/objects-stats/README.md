# Stats Object for Scales

An object to display statistic-like information.

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Dependencies

* `utilities-clearfix`

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/objects-stats`

## Usage

Stats should be used with a `<dl>` and individual `<div>`s to group the stat title and value. The `--big` variation can be used when the title or values are too long to sit next to each other in a row. For example:

```
<dl class="Stats">
  <div class="Stat">
    <dt class="Stat__title">RBI</dt>
    <dd class="Stat__value">127</dd>
  </div>

  <div class="Stat">
    <dt class="Stat__title">BA</dt>
    <dd class="Stat__value">.369</dd>
  </div>

  <div class="Stat">
    <dt class="Stat__title">HR</dt>
    <dd class="Stat__value">25</dd>
  </div>
</dl>
```
```
<dl class="Stats--big">
  <div class="Stat">
    <dt class="Stat__title">Total Runs Batted In</dt>
    <dd class="Stat__value">127</dd>
  </div>

  <div class="Stat">
    <dt class="Stat__title">Total Batting Average</dt>
    <dd class="Stat__value">.369</dd>
  </div>

  <div class="Stat">
    <dt class="Stat__title">Total Home Runs</dt>
    <dd class="Stat__value">25</dd>
  </div>
</dl>
```

## Available Classes

* `.Stats`
* `.Stats--big`
* `.Stat` - wrapper for each stat pair
* `.Stat__title`
* `.Stat__value`

## Available Variables

* `$stat-spacing` - space to the right of each stat

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
