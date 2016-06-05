---
author: Cody Reichert
category: javascript, tips
date: 2016-06-03
title: "JavaScript: Anything to boolean"
---

Double negatives aren't _not_ bad, but the
[Logical NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT)
operator is pretty cool. You're probably familiar with it, `!`. It's a
unary operator that returns `false` if it's argument can be coerced to
`true`, and vice versa:

```javascript
    !true // false
    !false // true

    // with coercion
    !1 = // false
    !0 = // true
    ![] = // false
```

And since `!` returns a single boolean, we can pass it's result to another `!`: `!!`:

```javascript
    !!true // true
    !!false // false

    // with coercion
    !!1 = // true
    !!0 = // false
    !![] = // true
```

You should know the rules of what can be converted to `true`
([truthy](https://developer.mozilla.org/en-US/docs/Glossary/truthy))
and to `false`
([falsy](https://developer.mozilla.org/en-US/docs/Glossary/falsy)).
