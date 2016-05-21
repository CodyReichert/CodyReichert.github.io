---
author: Cody Reichert
category: programming
date: 2015-07-07
title: "Managing Your Dotfiles with GNU Stow"
---

I see questions and posts almost every day (Eg,
[One](http://www.reddit.com/r/archlinux/comments/3cad2o/best_way_to_share_config_files/),
[Two](https://www.reddit.com/r/commandline/comments/3c0bvk/when_you_have_multiple_systems_and_your_own_bin/),
[Three](https://www.reddit.com/r/bash/comments/370kh9/extensive_dotfiles_w_focus_on_tmux_vim_ack_git/))
on the best way to manage configuration files between machines or
workplaces. There's a lot of (ok) solutions out there. However,
they're all setup-specific bash scripts that aren't very reproducible.

I wanted to write this to hopefully prevent people from maintaining
their Makefiles, and to keep their dots pristine.

## Welcome GNU Stow
[GNU Stow](https://www.gnu.org/software/stow/) is a symlink-farm
manager. Wait, I thought we were talking about dotfiles? Well, we
are. To quote the original site:

> GNU Stow is a symlink farm manager which takes distinct packages of
> software and/or data located in separate directories on the
> filesystem, and makes them appear to be installed in the same place

When it comes to configuration files, this means that we can do
things like: create a directory anywhere on our system that
imitates the structure of our `$HOME` directory, and then have Stow
symlink them from the imitated directory, to the real `$HOME`.

## Directory Structure

There's a lot of good examples out there, but one of the most
common questions I see is still, "Wait, so how does it
work?". Hopefully this will clarify.

Create a directory anywhere on your system called `dotfiles/`, and
`cd` into it. Now pretend for a minute that you're *actually* in
your `$HOME` directory. Where would you find your `.bashrc`?
Probably some place like this:

```screen
     └── ~/
         └── .bashrc
```

With Stow, you imitate that structure:

```screen
     └── dotfiles/
         └── bash/
              └── .bashrc
```

Not all configuration files live in the top-level of your
home-directory, so what about a program that keeps in config file
in the `$XDG_CONFIG_HOME`?

The key to Stow is remembering that, you have a subdirectory (eg,
`dotfiles/bash`) for each program that wish to store configuration
files. So in essence, we end up imitating our home directory each
time we add something new. Here's a bigger example with more
nesting:

```screen
   ── dotfiles/
      │
      ├── awesomewm/
      ├──── .config/
      ├──────── awesome/
      ├─────────── rc.lua
      │
      ├── bash/
      ├──── .bashrc
      │
      ├── emacs/
      ├──── .emacs.d/
      ├──────── init.el
      │
      ├── zsh/ # we can name these dirs whatever we want
```

There's a few different things going on up there, but they all
follow the same pattern.

First, note that we can name the first-level directories whatever
we want, but it makes sense to call them the name of the program
they contain. Second, see how directly under each first-level
directory, we start placing files exactly where they should show up
in our `$HOME` directory.

Repeat those steps for any other configuration files you
want to Stow away.

## Using Stow
Now that the dotfiles folder is set up, we can actually use
Stow. Let's with only using the `.bashrc` from above.

Remove, backup, rename, your original .bashrc (the one that's *not
in your dotfiles*), because we need that name for Stow.

`cd` into your new dotfiles directory, and run:

```sh
  stow bash
```

That will create a symlink from your dotfiles repo, to the correct
place at home:

```sh
  ls -al ~/.bashrc
  # outputs:
  # .bashrc -> dotfiles/bash/.bashrc
```

The stow command simply takes the name of the directory you wish to
symlink. You can do the same for the other configurations in your
dotfiles repo, and you successfully have them all managed.

## Advanced Usage

Using Stow in combination with git (or any other VC) is really the
best part. It allows you to have your entire configuration on any
system in just a matter of seconds.

And when you leave, if you don't want to leave your config files
there, stow comes with a nice flag to unstow:

```sh
  stow -D bash
```

For a more complex and complete example, you can chekout
[my dotfiles](https://github.com/CodyReichert/dotfiles) on Github.

My hope here is that I'll now be able to point people to this article
to help them understand Stow little better without needing to actually
set it up. If you've found any other cool uses for this tool, or some
other programs manange your dotfiles - leave it in the comments!


:: Cody Reichert
