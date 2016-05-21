---
author: Cody Reichert
category: webpack, javascript
date: 2015-07-04
title: "Webpack: Create Multiple Bundles Using Entry Points"
---

[Webpack](http://webpack.github.io/) is module bundler that generates
static assets for almost all of your front-end dependencies, and their
dependencies. It's primary use-case is for creating optimized bundles
for you Javascript, but it's quickly been extended to handle
everything from fonts, images, and even a compilation step for
CoffeeScript, LESS, and pretty much anything else you can think of.

A common use case for Webpack is single page applications, but another
large one is for *multi* page applications. Loading a large JavaScript
bundle on every page is not ideal, so let's set up Webpack to create
multiple bundles for us.

## A basic setup
So let's say the front-end JavaScript/Stylesheets structure of our
site looks like this:

```text
    └── static
        ├── dist
        └── src
            ├── js
            │   ├── Account.js
            │   └── Front.js
            ├── node_modules
            ├── package.json
            ├── stylesheets
            │   └── main.scss
            └── webpack.config.js
```

Most importantly, We have a main Javascript file for Front and
Account.

The goal is to have Webpack generate a `front-bundle.js` and
`account-bundle.js` bundle. The advantage here is that new visitors
who aren't logged in don't need to load a huge JavaScript bundle
just for visiting the homepage.

## Single Entry Point

With a goal in mind, we can dig into Webpack and see what it offers.
By default, Webpack makes you define an `entry-point`, basically the
root JavaScript file for you app:

```js
    module.exports = {
        entry: {
            app: "./static/src/app.js"
        },
        output: {
            path: "./static/dist",
            filename: "app-bundle.js"
        }
    };
```

Our site structure doesn't match up with that. With this, we would
have to load all the account panel JavaScript on the homepage too -
which is far from ideal.

## Multiple Entry Points

Webpack supports
[multiple entry points](http://webpack.github.io/docs/multiple-entry-points.html)
for this reason. Here's a new configuration more suited to our site
structure:

```js
     module.exports = {
         entry: {
             front: "./static/src/js/Front.js",
             account: "./static/src/js/Account.js"
         },
         output: {
             path: "./static/dist",
             filename: "[name]-bundle.js"
         }
     };
```

Much better. What's happening here is that Webpack is now looking
for both `Front.js` and `Account.js`, and will create a separate
bundle, including the Webpack runtime and dependencies, for each of
those. In the output object, we export the bundle to `static/dist`
and use the `[name]` variable to name each bundle.

We end up with `/static/dist/front-bundle.js` and
`/static/dist/account-bundle.js`. Great, so now we can the script
tag to each page and we're done!

**Almost...**

Even though the bundles contain different code, there are a few
libraries/modules that we use in both Front and Account. So, what
about the use-case where a new user *does* end up logging in?

We wouldn't want to make them re-download the same JavaScript!

## Common Chunks

While the solution above is good, it can be better.

Ideally, we have Front-bundle.js and Account-bundle.js - but we
also have a Common-bundle.js that contains the modules we use
*everywhere*. The browser will cache Common-bundle.js, so when a
user transitions from the Front to the Account, they've already got
most of what they need.

Say hello to the
[CommonChunksPlugin](http://webpack.github.io/docs/list-of-plugins.html#1-commons-chunk-for-entries)*.

## Configuring CommonChunksPlugin
The common chunks plugin will look for and find all common modules
and dependencies between your entry points, and automatically
bundle them. All we need to is a little configuration:

```js
      let commonsPlugin = new webpack.optimize.CommonsChunkPlugin(
          'commons',  // Just name it
          'common.js' // Name of the output file
                      // There are more options, but we don't need them yet.
      );

      module.exports = {
          entry: {
              front: "./static/src/js/Front.js",
              account: "./static/src/js/Account.js"
          },
          output: {
              path: "./static/dist",
              filename: "[name]-bundle.js"
          },
          plugins: [ commonsPlugin ]
          // more config options
      };
```

We initialize a new instance of the `CommonChunksPlugin` and pass
a couple parameters (annotated). After that, the Webpack will do
the rest.

The `commons` bundle will also be output to `static/dist/`, with
the name that we gave it (`common.js`).


## Wrapping Up
*Now* we're done! Remeber to add the `<script>` for both the entry
bundle and the common bundle to the correct pages, and Webpack will
do the rest.

It's a powerful tool, and I think does a great job of cleaning up
the mess that is front-end dependency management. There's an endless
amount of plugins and extentions already out there, so we'll see
where Webpack ends up in 6 months to a year.


:: Cody Reichert
