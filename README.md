# Bytes
A small mixin and function helper library for Sass projects.

## Installation

Install Bytes with [Bower](http://bower.io) package manager:

```bash
bower install bytes
```

Import Bytes into your stylesheet:

```scss
@import "path/to/bytes/bytes";
```

It’s not recommended to add or modify files so that you can update
them easily.

## Documentation
Bytes uses [Sassdoc](http://sassdoc.com/) for documentation. Docs can be generated via the command line using [Grunt](http://gruntjs.com/).

Install dependencies:

```bash
npm install
```

Generate and open docs in your browser:

```bash
grunt
```

Generate docs:

```bash
grunt docs
```

## What's included with Bytes?

**Functions**

* [`get`](#get)
* [`strip-unit`](#strip-unit)
* [`em`](#em-function)
* [`rem`](#rem-function)
* [`tint`](#tint)
* [`shade`](#shade)
* [`transparent`](#transparent)
* [`chroma`](#chroma)
* [`color`](#color)
* [`dynamic-color`](#dynamic-color)
* [`z-index`](#z-index-function)
* [`path`](#path)
* [`animate`](#animate)

**Mixins**

* [`em`](#em-mixin)
* [`rem`](#rem-mixin)
* [`font-face`](#font-face)
* [`center`](#center)
* [`circle`](#circle)
* [`hide-text`](#hide-text)
* [`opacity`](#opacity)
* [`triangle`](#triangle)
* [`list-unstyled`](#list-unstyled)
* [`truncate`](#truncate)
* [`word-wrap`](#word-wrap)
* [`hidpi`](#hidpi)
* [`placeholder`](#placeholder)
* [`set`](#set)
* [`width`](#width)
* [`paper-depth`](#paper-depth)
* [`paper-ripple`](#paper-ripple)
* [`z-index`](#z-index-mixin)
* [`breakpoint-check`](#breakpoint-check)

### Global settings
Here are all of Bytes global settings with their default value:

```scss
$bytes: (
  'animate-easing' : cubic-bezier(.4, 0, .2, 1),
  'animate-timing' : .4s,
  'black'          : rgb(0, 0, 0),
  'font-size'      : 16px,
  'media-path'     : '../assets',
  'white'          : rgb(255, 255, 255),
);
```

You can set your own global defaults. Create a `$bytes` variable containing any key/value you need.

```scss
$bytes: (
  'font-size'      : 14px,
  'media-path'     : '../../img',
);
```

### Functions

#### `get`
```scss
$map: (
  'foo': 'bar',
);

.test {
  content: get($map, 'foo');
}
```

#### `strip-unit`
```scss
.test {
  line-height: strip-unit(2rem);
}
```

#### `em` function
```scss
.test {
  padding: em(6px 12px);
}
```

#### `rem` function
```scss
.test {
  padding: rem(6px 12px);
}
```

#### `tint`
```scss
.test {
  color: tint(#bada55, 15%);
}
```

#### `shade`
```scss
.test {
  color: shade(#bada55, 15%);
}
```

#### `transparent`
```scss
.test {
  color: transparent(#bada55, 85%);
}
```

#### `chroma`
```scss
.test {
  color: chroma(#bada55, -10%);
}
```

#### `color`
```scss
.test {
  color: color(#bada55, 10%, -35%);
}
```

#### `dynamic-color`
```scss
.test {
  color: dynamic-color(#bada55);
}
```

#### `z-index` function
```scss
$list: ('header', 'modal');

.test {
  z-index: z-index($list, 'modal');
}

.test {
  z-index: z($list, 'modal');
}
```

#### `path`
```scss
.test {
  background: path('kitten.jpg') no-repeat 0 0;
}
```

#### `animate`
```scss
.test {
  transition: animate(all, .5s);
}
```

### Mixins

#### `em` mixin
```scss
.test {
  @include em(padding, 10px);
}
```

#### `rem` mixin
```scss
.test {
  @include rem(padding, 10px);
}
```

#### `font-family`
```scss
.test {
  @include font-family('Open Sans', '../fonts');
}
```

#### `center`
```scss
.test {
  @include center('both', 'absolute');
}
```

#### `circle`
```scss
.test {
  @include circle(20px, 10px);
}
```

#### `hide-text`
```scss
.test {
  @include hide-text();
}
```

#### `opacity`
```scss
.test {
  @include opacity(30%);
}
```

#### `triangle`
```scss
.test {
  @include triangle(20px, 10px, #bada55, 'bottom');
}
```

#### `list-unstyled`
```scss
.test {
  @include list-unstyled();
}
```

#### `truncate`
```scss
.test {
  @include truncate();
}
```

#### `word-wrap`
```scss
.test {
  @include word-wrap();
}
```

#### `hidpi`
```scss
.test {
  @include hidpi() {
    // CSS styles
  };
}
```

#### `placeholder`
```scss
.test {
  @include placeholder() {
    // CSS styles
  };
}
```

#### `set`
```scss
$map: (
  'background': black;
  'hover': (
    'color': white
  )
);

.test {
  @include set($map);

  &:hover {
    @include set($map, 'hover');
  }
}
```

#### `width`
```scss
.test {
  @include width(200px, 500px);
}
```

#### `paper-depth`
```scss
.test {
  @include paper-depth(3);
}
```

#### `paper-ripple`
```scss
.test {
  @include paper-ripple(black white);
}
```

#### `z-index` mixin
```scss
$list: ('header', 'modal');

.test {
  @include z-index($list, 'modal');
}
```

#### `breakpoint-check`
```scss
$map: (
  'mobile': 320px,
  'tablet': 740px,
  'laptop': 980px,
);

@include breakpoint-check($map);
```

## TODO

* Add testing suite
