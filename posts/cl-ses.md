---
author: Cody Reichert
category: programming, common lisp
date: 2015-08-02
title: cl-ses - Sending Emails from Common Lisp with AWS SES
---

I've been enjoying using Common Lisp lately. After going through the
first half of
[Practical Common Lisp](http://www.gigamonkeys.com/book/) (highly
recommended), I wanted to write some scripts to automate some of my
own tasks. We use AWS for most of our infrastraucture at
[SimplyRETS](https://simplyrets.com) and
[Reichert Brothers](http://reichertbrothers.com), and run jobs to
check how our API's are holding up. Naturally, I wanted to automate
some of that and send out an email when reports are generated.

In case you don't want to read the rest:
[Here's the code](https://github.com/CodyReichert/cl-ses)

## Options

There are a few AWS libraries out there for Common Lisp<sup>1</sup>, but I
couldn't find one that supported SES - except for
[aws-ses](http://www.obrezan.com/lisp/aws-ses/). The problem I had
with aws-ses is that it only works with LispWorks - which is perfectly
fine, but I've been using SBCL and wanted something with a bit more
flexibility.

One a side note, if you *are* using LispWorks - `aws-ses` is really
cool since the author wrote his own hmac, sha1, and base64 algorithms
with 0 dependencies.

## CL-SES

The app I wanted to send email from was running in SBCL - so I decided
a port of aws-ses would be the right thing to do.

I put up [cl-ses](https://github.com/CodyReichert/cl-ses) on GithHub
the other day after porting all of the LispWorks specific
function. Specifically, the use of `comm` for the tcp connection was
the major blocker. I decided against porting `comm` to `sb-bsd-ports`
and opted for bringing in [Drakma](http://weitz.de/drakma/), which is
an awesome HTTP Library that has already hashed out the differences
between Lisp implementations.

Losing the "no dependency" badge and adding the "1 dependency, but
multiple implementations" badge was the best route - especially since
there seems to be a lack of any high level email libraries.

### Usage

I changed up a bit of code in order to get the signing algorthims to
work with Drakma's headers, but the library stayed very simple - only
exposing one `send-email` function. Here's all it takes to send an
email:

```lisp
  (cl-ses:send-email :from "me@example.com"
                     :to "you@example.com"
                     :subject "Hello from CL-SES"
                     :message "The body of the email message"
                     :aws-access-key "XXXXXX"

```

`send-email` returns `T` if the status was 200 (OK), and `NIL`
otherwise. In the future I'll hopefully have implemented better
error reporting.

You can easily send to multiple recipients:

```lisp
  (cl-ses:send-email :from "me@example.com"
                     :to "first@example.com,second@example.com,third@example.com"
                     :subject "Hello from CL-SES"
                     :message "The body of the email message"
                     :aws-access-key "XXXXXX"
                     :aws-secret-key "XXXXXXXXXXX")
```

I'm working on extending this to support more of AWS's features, allow
for a lot of the obvious settings (like the AWS region), provide
better error hanlding, and built in support for HTML emails - but
other than that it's working great so far.

## Footnotes

1 - [zpb-aws](https://github.com/xach/zpb-aws) and
[hh-aws](https://github.com/hargettp/hh-aws) are the two I found.


:: Cody Reichert
