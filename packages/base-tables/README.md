# Base Tables for Scales

These are the base styles for creating tables.

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/base-tables`

## Usage

Tables can get pretty crazy. Take a look at this example with some of the classes that Scales provides and how to use them:

```
<table class="Table--bordered Table--striped-odd Table--fixed">
  <thead>
    <tr>
      <th>Lorem</th>
      <th>Ipsum</th>
      <th>Dolor</th>
      <th>Sit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th rowspan="3">Sit</th>
      <td>Dolor</td>
      <td class="Numerical">03.788</td>
      <td>Lorem</td>
    </tr>
    <tr>
      <td class="TableHighlight">Dolor</td>
      <td class="Numerical">32.210</td>
      <td>Lorem</td>
    </tr>
    <tr>
      <td>Dolor</td>
      <td class="Numerical">47.797</td>
      <td>Lorem</td>
    </tr>
    <tr>
      <th rowspan="2">Sit</th>
      <td>Dolor</td>
      <td class="Numerical">09.640</td>
      <td>Lorem</td>
    </tr>
    <tr>
      <td>Dolor</td>
      <td class="Numerical">12.117</td>
      <td>Lorem</td>
    </tr>
  </tbody>
</table>
```

## Available Classes

* `.Table`
* `.Numerical`
* `.Table--spacing-large`
* `.Table--spacing-medium`
* `.Table--spacing-small`
* `.Table--bordered`
* `.Table--bordered-inside`
* `.Table--bordered-rows`
* `.Table--bordered-rows-inside`
* `.Table--bordered-columns`
* `.Table--bordered-columns-inside`
* `.Table--striped-odd`
* `.Table--striped-even`
* `.TableHighlight`
* `.Table--fixed`

## Available Variables

* `$table-padding-large`
* `$table-padding-medium`
* `$table-padding-small`
* `$table-border-width`
* `$table-border-style`
* `$table-border-color`
* `$table-stripe-color`
* `$table-highlight-color`
* `$table-highlight-text-color`
* `$table-heading-alignment`
* `$table-cell-alignment`

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

## Extending

These table styles simply provide a base for tables. In your project or theme, you can easily extend tables for your own purposes. For example:

```
// Change variables before importing
$table-border-color: red;
$table-border-style: dashed;

// Import tables partial
@import your-project/scalescss/base-tables/tables

//
// Primary table styles
///
.Table--primary {
  th {
    background-color: #0074D9;
    color: #fff;
    border: 0;
  }

  tr:hover {
    background-color: #f8fb9b;
    color: #333;
  }
}
```
```
<table class="Table--primary Table--bordered-rows">
  <thead>
    <tr>
      <th>Lorem</th>
      <th>Ipsum</th>
      <th>Dolor</th>
      <th>Sit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="3">Sit</th>
      <td>Dolor</td>
      <td class="Numerical">03.788</td>
      <td>Lorem</td>
    </tr>
    <tr>
      <td>Dolor</td>
      <td class="Numerical">32.210</td>
      <td>Lorem</td>
    </tr>
    <tr>
      <td>Dolor</td>
      <td class="Numerical">47.797</td>
      <td>Lorem</td>
    </tr>
    <tr>
      <th rowspan="2">Sit</th>
      <td>Dolor</td>
      <td class="Numerical">09.640</td>
      <td>Lorem</td>
    </tr>
    <tr>
      <td>Dolor</td>
      <td class="Numerical">12.117</td>
      <td>Lorem</td>
    </tr>
  </tbody>
</table>
```
