# Base Forms for Scales

These are the base styles for creating forms.

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/base-forms`

## Usage

Scales provides default stacked forms, forms using an unordered/ordered list, inline forms, and inline form containers with stacked label/input:

### Default stacked
```
<form>
  <label for="account">Account #<small class="FormLabel--additional">(Cannot Change)</small></label>
  <input class="TextInput" id="account" type="num" value="123456789" readonly>

  <label for="email">Email</label>
  <input class="TextInput" id="email" type="email" placeholder="Email">
  <span class="HelperText">Enter your email address</span>

  <label for="password">Password</label>
  <input class="TextInput" id="password" type="password" placeholder="Password" disabled>

  <label for="age">Age</label>
  <select id="age">
    <option>18-40</option>
    <option>41-60</option>
    <option>61-80</option>
    <option>81+</option>
  </select>

  <label>Introduce yourself</label>
  <textarea></textarea>

  <label for="newsletter">
    <input id="newsletter" type="checkbox"> Send me the newsletter
  </label>

  <button type="submit" class="Button">Sign in</button>
</form>
```

### Using a list
```
<form>
  <ul class="FormList">
    <li class="InputContainer">
      <label for="account">Account #<small class="FormLabel--additional">(Cannot Change)</small></label>
      <input class="TextInput" id="account" type="num" value="123456789" readonly>
    </li>
    <li class="InputContainer">
      <label for="email">Email</label>
      <input class="TextInput" id="email" type="email" placeholder="Email">
    </li>
    <li class="InputContainer">
      <label for="password">Password</label>
      <input class="TextInput" id="password" type="password" placeholder="Password" disabled>
    </li>
    <li class="InputContainer">
      <label for="age">Age</label>
      <select id="age">
        <option>18-40</option>
        <option>41-60</option>
        <option>61-80</option>
        <option>81+</option>
      </select>
    </li>
    <li class="InputContainer">
      <label>Introduce yourself</label>
      <textarea></textarea>
    </li>
    <li class="InputContainer">
      <label for="newsletter">
        <input id="newsletter" type="checkbox"> Send me the newsletter
      </label>
    </li>
  </ul>
  <button type="submit" class="Button">Sign in</button>
</form>
```

### Inline
```
<form class="FormInline">
  <label for="account">Account #<small class="FormLabel--additional">(Cannot Change)</small></label>
  <input class="TextInput" id="account" type="num" value="123456789" readonly>

  <label for="email">Email</label>
  <input class="TextInput" id="email" type="email" placeholder="Email">
  <span class="HelperText">Enter your email address</span>

  <label for="password">Password</label>
  <input class="TextInput" id="password" type="password" placeholder="Password" disabled>

  <label for="age">Age</label>
  <select id="age">
    <option>18-40</option>
    <option>41-60</option>
    <option>61-80</option>
    <option>81+</option>
  </select>

  <label>Introduce yourself</label>
  <textarea></textarea>

  <label for="newsletter">
    <input id="newsletter" type="checkbox"> Send me the newsletter
  </label>

  <button type="submit" class="Button">Sign in</button>
</form>
```

### Inline input containers with stacked label/input
```
<form>
  <ul class="FormList">
    <li class="InputContainer InputContainer--inline">
      <label for="account">Account #<small class="FormLabel--additional">(Cannot Change)</small></label>
      <input class="TextInput" id="account" type="num" value="123456789" readonly>
    </li>
    <li class="InputContainer InputContainer--inline">
      <label for="email">Email</label>
      <input class="TextInput" id="email" type="email" placeholder="Email">
    </li>
    <li class="InputContainer InputContainer--inline">
      <label for="password">Password</label>
      <input class="TextInput" id="password" type="password" placeholder="Password" disabled>
    </li>
    <li class="InputContainer InputContainer--inline">
      <label for="age">Age</label>
      <select id="age">
        <option>18-40</option>
        <option>41-60</option>
        <option>61-80</option>
        <option>81+</option>
      </select>
    </li>
    <li class="InputContainer InputContainer--inline">
      <label>Introduce yourself</label>
      <textarea></textarea>
    </li>
    <li class="InputContainer InputContainer--inline">
      <label for="newsletter">
        <input id="newsletter" type="checkbox"> Send me the newsletter
      </label>
    </li>
    <li class="InputContainer InputContainer--inline">
      <button type="submit" class="Button">Sign in</button>
    </li>
  </ul>
</form>
```

## Available Classes

* `.FormList`
* `.InputContainer`
* `.InputContainer--inline`
* `.FormLabel`
* `.FormLabel--additional`
* `.TextInput`
* `.FormInline`
* `.is-Disabled`
* `.is-ReadOnly`
* `.HelperText`

## Available Variables

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
* `$helper-text-hidden` - change from `true` to be visible by default

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
