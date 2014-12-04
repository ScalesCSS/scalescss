# Base Forms for Scales

These are the base styles for creating forms.

## Requirements

Scales patterns use the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either:
* Sass 3.2 or greater
* LibSass 2.0 or greater

## Usage

Scales provides default stacked forms, inline forms, and forms using an unordered/ordered list:

### Default stacked
```
<form>
    <label for="account">Account #<small class="label--additional">(Cannot Change)</small></label>
    <input class="text-input" id="account" type="num" value="123456789" readonly>

    <label for="email">Email</label>
    <input class="text-input" id="email" type="email" placeholder="Email">
    <span class="helper-text">Enter your email address</span>

    <label for="password">Password</label>
    <input class="text-input" id="password" type="password" placeholder="Password" disabled>

    <label for="gender">Gender</label>
    <select id="gender">
        <option>Female</option>
        <option>Male</option>
        <option>Other</option>
    </select>

    <lable>Introduce yourself</lable>
    <textarea></textarea>

    <label for="newsletter">
        <input id="newsletter" type="checkbox"> Send me the newsletter
    </label>

    <button type="submit" class="btn">Sign in</button>
</form>
```

### Inline
```
<form class="form--inline">
    <label for="account">Account #<small class="label--additional">(Cannot Change)</small></label>
    <input class="text-input" id="account" type="num" value="123456789" readonly>

    <label for="email">Email</label>
    <input class="text-input" id="email" type="email" placeholder="Email">
    <span class="helper-text">Enter your email address</span>

    <label for="password">Password</label>
    <input class="text-input" id="password" type="password" placeholder="Password" disabled>

    <label for="gender">Gender</label>
    <select id="gender">
        <option>Female</option>
        <option>Male</option>
        <option>Other</option>
    </select>

    <lable>Introduce yourself</lable>
    <textarea></textarea>

    <label for="newsletter">
        <input id="newsletter" type="checkbox"> Send me the newsletter
    </label>

    <button type="submit" class="btn">Sign in</button>
</form>
```

### Using a list
```
<form>
    <ul class="form--list">
        <li class="input-container">
            <label for="account">Account #<small class="label--additional">(Cannot Change)</small></label>
            <input class="text-input" id="account" type="num" value="123456789" readonly>
        </li>
        <li class="input-container">
            <label for="email">Email</label>
            <input class="text-input" id="email" type="email" placeholder="Email">
        </li>
        <li class="input-container">
            <label for="password">Password</label>
            <input class="text-input" id="password" type="password" placeholder="Password" disabled>
        </li>
        <li class="input-container">
            <label for="gender">Gender</label>
            <select id="gender">
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
            </select>
        </li>
        <li class="input-container">
            <lable>Introduce yourself</lable>
            <textarea></textarea>
        </li>
        <li class="input-container">
            <label for="newsletter">
                <input id="newsletter" type="checkbox"> Send me the newsletter
            </label>
        </li>
    </ul>
    <button type="submit" class="btn">Sign in</button>
</form>
```

## Available Classes

* `.form--list`
* `.input-container`
* `.label`
* `.label--additional`
* `.text-input`
* `.form--inline`
* `.is-disabled`
* `.is-readonly`
* `.helper-text`

## Available Variables

* `$fieldset-padding`
* `$text-input-padding`
* `$text-input-border-width`
* `$text-input-border-style`
* `$text-input-border-color`
* `$text-input-border-radius`
* `$input-container-margin-bottom`
* `$input-disabled-border-color`
* `$input-disabled-background-color`
* `$input-disabled-text-color`
* `$input-readonly-border-color`
* `$input-readonly-background-color`
* `$input-readonly-text-color`

### The Scales Namespace Variable

All Scales patterns expose the `$scales-namespace` variable.

`$scales-namespace` accepts a string that will prefix all Scales classes. The default value is `null`.

To give all Scales classes a namespace, you will need to set this variable in a file that is imported before any scales files. For example:

```
@import your-project/settings; // $scales-namespace is set in this file
@import your-project/scales-base; // Imports the Scales library
@import your-project/project // The rest of your project imports
```
