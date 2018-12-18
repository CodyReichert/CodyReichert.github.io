---
layout: post
title: "Fun with Bash expansions"
author: Cody Reichert
---

Using bash a lot in your daily work can be monotonous, but you can
have more **fun with bash expansions**! Here's a few things I picked
up over the years that are helpful for being more efficient on the
command line:

- [Repeat the last command](#repeat-the-last-command)
  - [Prepend/append to the last command](#pro-tip-1-prependappend-to-the-last-command)
  - [Edit the last command before executing](#pro-tip-2-edit-the-last-command-before-executing)
- [Replace part of the last command](#replace-part-of-the-last-command)
- [Execute a command in the Bash history](#execute-a-command-in-the-bash-history)

### Repeat the last command
To run the previous command again, you can of course type
<kbd>up</kbd>. But what's more fun is using `!!`.

```sh
$ echo "Hello, world!"
Hello, world!
$ !!
Hello, world!
```

#### **Pro-tip 1** prepend/append to the last command
You can add more arguments before and after the last command like this:
```sh
$ !! <and more things here>
```

#### **Pro-tip 2** edit the last command before executing
There's an option you can set in your bash settings that allows you to
edit the command before executing it:

```bash
# in your .bashrc
shopt -s histverify
```

Now when you type `!!`, you get this behavior:

```bash
$ !!
$ echo "Hello, world!" # you can edit this command before executing it!
```

### Replace part of the last command
Another great bash features is the ability to replace part of the last
command, and then re-execute it. To do this, you use the
`^before^after` syntax:

```sh
$ echo "Hello, worl!"
Hello, worl! # <-- woops, there's a typo. Let's fix it!
$ ^worl^world
Hello, world!
```

Nice!

### Execute a command in the bash history
One common use-case is to execute a command that has been run
before. To do this, you need to know the number of the command by
looking at the output of `history`:

```
$ history
98 echo "Hello, worl!"
99 echo "Hello, world!"
```

To run command number 99 again, prefix it with a `!`:

```sh
$ !99
Hello, world!
```

### More fun with bash
I have a few more tricks up my bash sleeve that I'll add to this post,
but these are by far the most useful and common commands. Have any
expansions that I should add to the list? Hit me up via any of the
methods below.

:: Cody Reichert
