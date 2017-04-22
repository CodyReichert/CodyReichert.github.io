---
author: Cody Reichert
category: programming, tips
date: 2017-04-21
title: "Automatically check links on GitHub pages site"
---

I'm not good at checking my own code, and I've accidentally pushed
broken links and bad HTML on numerous occasions. To solve this, I set
up [Assertible](https://assertible.com) to automatically check the
links and HTML on this blog every time I make a change.

## Link check and HTML validation

Assertible has test assertions
for
[checking links](https://assertible.com/docs/guide/assertions#assert-link-check) and
[HTML validation](https://assertible.com/docs/guide/assertions#assert-html-validation) on
a website. These assertions are perfect for this blog; it's a simple static site, heavy on content. I want to make sure that the links stay in tact and the markup is accessible.

The Assertible link checker assertion also checks `<img>`, `<script>`,
`<link>`, etc tags in addition to `<a>` tags - so I get the free
benefit of making sure all of the site's assets are available.

## Automated checks and monitoring

First, I set up
an
[hourly test schedule](https://assertible.com/docs/guide/automation#schedules) to
run the assertions and notify me if anything fails. Failure alerts are
sent to a [Slack](https://slack.com) channel, and email.

But when you think about, it makes sense to **check links immediately
after every change to the site**. Links may go bad over time, but by
far the most common occurrence is when I'm pushing something
new. Assertible's
[GitHub Deployments integration](https://assertible.com/docs/guide/automation#github-deployments) actually
works out of the box with GitHub pages, so all I had to do was install
the integration
and
[create an environment](https://assertible.com/docs/guide/web-services#environments) called
`github-pages`.

Now, every time I push to the `master` branch of this repository,
GitHub deploys the site to GitHub Pages (automatically), sends a
deployment event to Assertible, and Assertible then runs these smoke
tests on the website. In addition, the tests are run hourly, and every
failure will alert me over Slack or email. Cool, right?

:: [@CodyReichert](https://twitter.com/CodyReichert)
