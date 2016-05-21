---
author: Cody Reichert
category: programming, javascript
date: 2016-03-12
title: JSX - The Basics
---

When most people get started with
[React.js](https://facebook.github.io/react/), JSX is the first thing
that comes as a surprise. JSX is a templating language inside
JavaScript. Remeber all those string template you to write with
*(insert frontend framework here)*?, well JSX to the rescue.


**Table of Contents:**

- [What is JSX](#what-is-jsx)
- [Comments in JSX](#comments-in-jsx)
- [Passing Props](#passing-props)
- [Boolean Props](#boolean-props)


### What is JSX

> JSX is a JavaScript syntax extension that looks similar to XML. You
> can use a simple JSX syntactic transform with React.

Picture this. Instead of writing HTML strings within your code, you
can use a preprocessor that allow you to write (basically) pure HTML
with some compile-time checking? Brilliant, let's look at the examples
from Facebook's
[Displaying Data](https://facebook.github.io/react/docs/displaying-data.html)
post:

Without JSX:
```javascript
React.createElement('a', {href: 'https://facebook.github.io/react/'}, 'Hello!')
```

With JSX:
```javascript
<a href="https://facebook.github.io/react/">Hello!</a>
```

Great! We've improved readability by 10,000%.

Now that we've got a solid introduction<sup>;)</sup> to JSX, let's
take a look at some common gotchas.


## Comments in JSX

It's common to want to write comments within your markup. Inside of
JSX, there are a couple of 'rules' to follow:

### In between JSX elements, wrap your comments in `{}`

*valid*:

```javascript
<div>
    {/** A comment about the component below */}
    <span>Hello, JSX</span>
</div>
```

*invalid*:

```javascript
<div>
    /** A comment about the component below */
    <span>Hello, JSX</span>
</div>
```

### Inside of a JSX tag you can use normal comments:

*valid*:
```javascript
<div>
    <AwesomeComponent
        /** Some commentsabout the props below */
        prop1="jsxRocks"
        booly={true}
    />
</div>
```

*invalid*:
```javascript
<div>
    <AwesomeComponent
        {/** Some commentsabout the props below */}
        prop1="jsxRocks"
        booly={true}
    />
</div>
```

## Passing Props

JSX also makes passing `props` (arguments) to other components with
simple HTML-like syntax. If you're not familiar with nesting
components and receiving components, you should check out
[JSX In Depth](https://facebook.github.io/react/docs/jsx-in-depth.html)
first.

### String Props

Normal, string value props are easy to pass to child components:

```javascript
<AwesomeComponent
    name="jsxRocks"
/>
```

Now inside of `AwesomeComponent` you have access to `this.props.name`
that references the value `jsxRocks`.

### Functions

Passing functions as callback is also common practice when writing JSX components.
A basic example would look like:

```javascript
<AwesomeComponent
    handleNameChange={data => myAction(data)}
/>
```

Whoah, let's not a couple of things here:

- `{}`. Where did that come from?
  JSX can take JavaScript expressions as arguments to props. This
  means that you're not restricted to string props. You can pas
  functions to children that make handling callback easier.

  To extend the example, this means we can use any logic we want inside of component's attributes.
  Need computed data at render time? Not problem

```javascript
<AwesomeComponent
    conditionalProp={thing === true ? 'thisprop' : 'thatprop'}
/>
```

- No quotes?
  When using expressions as a value to a prop, you don't need to do
  any fancy string interpolation - React will take care of rendering
  the result of the expression.

### Basic function optimizations

Keep in mind that when creating functions inside of components
`render` method (like we're doing with the expressions in props), that
a new function is created on each re-render.

This is a pretty minor thing for most apps, but as the size of
application grows and you start thinking about performance, minimizing
the amount of work on the client can be idea.

If we take our two examples from above, they would be better written
so a new function is not created and the class intsance can take care
of re-computing the value:

```javascript
class AwesomeComponent extends React.Component {

    conditionalProp() {
        return this.props.thing ? 'prop1' : 'prop2'
    }

    render() {

        const { thing } = this.props

        return (
            <AwesomeComponent
                conditionalProp={this.conditionalProp()}
            />
        )
    }
}
```

### Function reference vs Function unwrapping

When the `render` method of a component is called, functions inside of
the JSX are executed and their return values are used in place of the
props. That brings up two common use-cases for using expression in
components:

**Using a reference to a function**

Sometimes you will need to provide a callback method to child
component - and sometimes you will need to provide the first argument
to a function and let the child provide the rest. In those cases,
anonymouse functions work perfectly:

```javascript
<AwesomeComponent
    conditionalProp={data => myCallback(id, data)}
/>
```

What we're doing in the above example is called *partial function
application*. In a nutshell, we create a `unary` function that returns
a `binary` function with the first argument already given (so really,
we get a `unary` function again).

When the `render` method of the component is called, functions are
executed. With the example above again, what we actually get *after*
the render is:

```javascript
<AwesomeComponent
    handleCallback={data => myCallback(id, data)}
/>
```

And inside of `AwesomeComponent`, you can simply call:

```javascript
this.props.handleCallback(arg)
```



**Using the value of a function**

````javascript
class AwesomeComponent extends React.Component {

    conditionalProp() {
        return this.props.thing ? 'prop1' : 'prop2'
    }

    render() {

        const { thing } = this.props

        return (
            <AwesomeComponent
                conditionalProp={this.conditionalProp()}
            />
        )
    }
}
```

## Boolean Props

Passing boolean properties to JSX components is simple. The only thing
you need to know is that they are *JavaScript Booleans*, not *String
Booleans*. In other words:

This is correct:

```javascript
<AwesomeComponent
    handleCallback={true}
/>
```

This is not:

```javascript
<AwesomeComponent
    handleCallback="true"
/>
```

<small>
*Just a quick note that the second one actually _is_ valid, but it's
not considered a `boolean` it's considered a `string`.*
</small>

### Alternative syntax

An alternative for passing `true` is to simply provide the prop name without a value:

```javascript
<Input disabled/>
```

My professional opinion is to always use the full `true` or `false`
value for the sake of readability.

## Final Thoughts

Are there any pieces of JSX where you got caught up first starting?
Let's chat - shoot me a message on twitter
[@CodyReichert](https://twitter.com/CodyReichert) and I'll add it!

:: Cody Reichert
