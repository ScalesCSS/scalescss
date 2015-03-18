# Base Tables for Scales

These are the base styles for creating tables.

## Requirements

Scales patterns use the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Usage

Tables can get pretty crazy. Take a look at this example with some of the classes that Scales provides and how to use them:

```
<table class="table--bordered table--striped table--fixed">
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
            <td class="numerical">03.788</td>
            <td>Lorem</td>
        </tr>
        <tr>
            <td>Dolor</td>
            <td class="numerical">32.210</td>
            <td>Lorem</td>
        </tr>
        <tr>
            <td>Dolor</td>
            <td class="numerical">47.797</td>
            <td>Lorem</td>
        </tr>
        <tr>
            <th rowspan="2">Sit</th>
            <td>Dolor</td>
            <td class="numerical">09.640</td>
            <td>Lorem</td>
        </tr>
        <tr>
            <td>Dolor</td>
            <td class="numerical">12.117</td>
            <td>Lorem</td>
        </tr>
    </tbody>
</table>
```

## Available Classes

* `.table`
* `.numerical`
* `.table--spacing-large`
* `.table--spacing-medium`
* `.table--spacing-small`
* `.table--bordered`
* `.table--bordered-rows`
* `.table--bordered-columns`
* `.table--striped`
* `.table--fixed`

## Available Variables

* `$table-padding-large`
* `$table-padding-medium`
* `$table-padding-small`
* `$table-border-width`
* `$table-border-style`
* `$table-border-color`
* `$table-stripe-color`

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

These table styles simply provide a base for tables. In your project or theme, you can easily extend tables for your own purposes. For example:

```
// Change variables before importing
$table-border-color: #0074D9;
$table-border-style: dashed;

// Import tables partial
@import scalescss/base-tables/tables

//
// Primary table styles
///
.table--primary {
    th {
        background-color: #0074D9;
        color: #fff;
    }

    tr:hover {
        background-color: #f8fb9b;
        color: #333;
    }
}
```
```
<table class="table--primary table--bordered-rows">
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
            <td class="numerical">03.788</td>
            <td>Lorem</td>
        </tr>
        <tr>
            <td>Dolor</td>
            <td class="numerical">32.210</td>
            <td>Lorem</td>
        </tr>
        <tr>
            <td>Dolor</td>
            <td class="numerical">47.797</td>
            <td>Lorem</td>
        </tr>
        <tr>
            <th rowspan="2">Sit</th>
            <td>Dolor</td>
            <td class="numerical">09.640</td>
            <td>Lorem</td>
        </tr>
        <tr>
            <td>Dolor</td>
            <td class="numerical">12.117</td>
            <td>Lorem</td>
        </tr>
    </tbody>
</table>
```
