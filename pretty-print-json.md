---
author: Cody Reichert
category: programming, javascript
date: 2016-05-19
title: Pretty Printing JSON in JavaScript
---

I frequently look up how to pretty pring JSON in JavaScript. Whether it be
for debugging in the console, to display some output to the user, or any other
reason.

`JSON.stringify()` is usually used to simply convert a JSON object to a string
for use elsewhere in the application. It also takes 2 additional parameters:
`replacer` and `space`.

**Replacer**

The replacer argument tells JSON.stringify to parse your JSON object in a
custom way -- eg, replace all `"true"` and `"false"` strings with the
Boolean version `true` or `false`. You can do a million other things here,
but we're not too concered about this parameter when all we want to do is
pretty print.

**Space**

The `space` argument, though a little oddly named, tells JSON.stringify() to
add spacing to the string output -- like a newline, tab, or single space.

Using this parameter, we can print out our stringified JSON in a readable
format:

```javascript
JSON.stringify({ a: 1, b:2 }, null, 2)

// "{
//    "a": 1,
//    "b": 2
//  }"
```

And there we go - a nice, readable JSON object as a string. There's more
information on the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) page about what you can pass to
this function - so check those out and start pretty printing!

:: Cody Reichert
