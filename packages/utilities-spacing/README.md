# Spacing Utilities for Scales

A set of utility classes for changing the margin and padding on an element.

## Requirements

Scales uses the [Sass CSS preprocessor](http://sass-lang.com/), you'll need either Ruby Sass or LibSass.

## Installation

* [NPM](http://npmjs.com): `npm install --save @scales/overrides-spacing`

## Usage

Spacing classes can be used to modify the default padding and margins on elements These should be used sparingly. You should be using your project defaults most of the time, these are exceptions!

The class name format is `<type><location><size>`

`type`: p,m = padding,margin

`location`: a,t,r,b,l,h,v = all,top,right,bottom,left,horizontal,vertical

`size`: s,m,l,h,n = small ($space-s),medium ($space-m),large ($space-l),huge (space-h),none (0)

```
<p class="pan mls">This changes the padding on all sides to 0 and the margin on the left to the default small size.</p>
```

## Available Classes

* `.ptn,.pvn,.pan`
* `.pts,.pvs,.pas`
* `.ptm,.pvm,.pam`
* `.ptl,.pvl,.pal`
* `.pth,.pvh,.pah`
* `.prn,.phn,.pan`
* `.prs,.phs,.pas`
* `.prm,.phm,.pam`
* `.prl,.phl,.pal`
* `.prh,.phh,.pah`
* `.pbn,.pvn,.pan`
* `.pbs,.pvs,.pas`
* `.pbm,.pvm,.pam`
* `.pbl,.pvl,.pal`
* `.pbh,.pvh,.pah`
* `.pln,.phn,.pan`
* `.pls,.phs,.pas`
* `.plm,.phm,.pam`
* `.pll,.phl,.pal`
* `.plh,.phh,.pah`
* `.mtn,.mvn,.man`
* `.mts,.mvs,.mas`
* `.mtm,.mvm,.mam`
* `.mtl,.mvl,.mal`
* `.mth,.mvh,.mah`
* `.mrn,.mhn,.man`
* `.mrs,.mhs,.mas`
* `.mrm,.mhm,.mam`
* `.mrl,.mhl,.mal`
* `.mrh,.mhh,.mah`
* `.mbn,.mvn,.man`
* `.mbs,.mvs,.mas`
* `.mbm,.mvm,.mam`
* `.mbl,.mvl,.mal`
* `.mbh,.mvh,.mah`
* `.mln,.mhn,.man`
* `.mls,.mhs,.mas`
* `.mlm,.mhm,.mam`
* `.mll,.mhl,.mal`
* `.mlh,.mhh,.mah`

## Available variables

* `$space-s`
* `$space-m`
* `$space-l`
* `$space-h`
