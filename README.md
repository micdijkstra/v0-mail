# v0 — Mail

## What you need to know

Uses [CodeKit]() to compile the Sass from `stylesheets` to `application.css`.

Uses [gulp-email-builder ](https://www.npmjs.com/package/gulp-email-builder) to inline the HTML emails.

## Getting started
+ Clone the repo
+ Setup CodeKit to point at the project folder
+ run `$ npm install`

## Development
+ Edit the `html` files in the root of the project
+ Inline emails with `$ gulp inline` (they will output into `/inline/`
+ Send test emails with `$ gulp test` (update the email address in the gulpfile)