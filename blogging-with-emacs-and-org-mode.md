---
author: Cody Reichert
category: emacs, org-mode
date: 2015-07-05
title: Blogging with Emacs and Org Mode
---

I've finally got my new blog up! I've been wanting to migrate from
Middleman, a static-site generator written in Ruby. The problem was
that it was too many steps to post a new article - so I just never
did.

I've been eyeing
[a few solutions for blogging completely from within Emacs](http://orgmode.org/worg/org-blog-wiki.html). There's
some good (and some outdated) software on the wiki to accomplish that.

I finally came across [org-page](https://github.com/kelvinh/org-page),
which seemed to be exactly what I wanted. The documentation was a
little terse, but it's a simple setup so I decided to give it a shot.

Here's what I was able to get set up, with a few snippets to accompany
the
[official documentation](https://github.com/kelvinh/org-page/wiki/Quick-Guide-to-Org-page).

- Write blogs completely in `org-mode` (obviously)
- Publish to GitHub pages (or anywhere you can push static files).
- One command publish
- Ability to customize a theme, or write my own
- Tags, RSS Feed, and all the other blog goodies.
- Never have to leave Emacs


# Installation

Org-page is [available on MELPA](http://melpa.org/#/org-page), so the
install is simple:

```sh
  M-x package-install RET org-page RET
```

That will give you org-page and a few commands (which is all you need)
to create a repo, add a new post, and publish.

*For manual installation, see the
[documentation](https://github.com/kelvinh/org-page/wiki/Quick-Guide-to-Org-page)*

# Set up a repo

Org-page also handles this for you, with the available command
`op/new-repository`. So find a place on your system you want

```emacs-lisp
M-x op/new-repository RET /path/to/new/blog RET
```

This sets up a new git repository, with a few pages already laid
out for you (index.org, about.org, readme, etc).

# Org-page in your init.el

There are few things you'll need to set up in your Emacs config
file to get things working correctly. Here's an annotated example:

```lisp
  (require 'org-page)
  (setq op/repository-directory "~/workspace/play/newblog")
  (setq op/site-domain "http://codyreichert.github.io")
  (setq op/personal-github-link "https://github.com/CodyReichert")
  (setq op/site-main-title "The One True Blog")
  (setq op/site-sub-title "Emacs, Programming, and Arch Linux")
  (setq op/personal-disqus-shortname "theonetrueblog")
```

   Kelvin used very sane variable names, so most of that should be
   self-explanatory.  Not all of those are required, but if you leave
   out things like the GitHub Link, it just won't show at all -
   perfect.

   *Reload your Emacs config and let's move on*

# Creating a new post

You'll probably first want to fill out some of the generated
pages, like `about.org` and `index.org`.

> Pro-tip: If you remove the =index.org= it will default to a list of
> posts, like mine. It's preferable since there is already an about page.

Once again, org-page has another built in command to get a new post
started. The best thing about it is that is handles the description,
file name, post uri, tags, and more. Meaning you can get to just
writing articles, not boilerplate.

```sh
M-x op/new-post RET
```

It will run you through a few steps to generate all of those fields
for you post, and put your cursor where you can start writing.
[op/new-post gif example](../img/op-new-post.gif)


# Publishing your new blog

Yet again...built in to org-page. And since we're in Emacs, we can
make it do whatever we want. First, make sure you set the remote in
your blogs git repo:

```sh
    git remote add origin git@github.com:CodyReichert/CodyReichert.github.io
    git remote -v
```

Org-page has a command `op/do-publication`. It asks a couple of
questions, and compiles the org mode pages for you. When you set up
your repository, org-page created two branches: source and
master. This is a good setup for GitHub-pages and probably most
other hosts. All of your org files live on the source branch, and
org-page will add and commit the compiled files to the mater branch.

*The questions:*

1) Publish all org-files (y or n)
2) Publish to directory? (original repo if not) (y or n)
   This on is particularly useful for sending the compiled files to
   another directory, which you can watch with a simple HTTP server
   and quickly view changes when your writing.
3) Auto-commit to repo? (y or n)
4) Auto-push to repo? (y or n)

The last two are great, because all I need to do run
`op/do-publication` and the new post is live within a few
seconds. *That's* the Emacs way.

[Here's a GIF](../img/op-do-publication.gif) of how I published this
blog, right after I wrote this part.


# Other setup

I have a few other snippets for using a custom theme with org-page,
and a couple other nice settings I'll share eventually.

My recommendation is to `C-h f RET ___ RET` on some of the org-page
functions, they're documented well.

You can also view my org-page setup
[on Github](https://github.com/CodyReichert/dotfiles).


:: Cody Reichert
