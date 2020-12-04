---
slug: "/tools/pdfjoin"
category: "tools"
date: "2019-04-21"
icon: "fas/terminal"
title: "PdfJoin"
cli: "npx pdfjoin"
description: "Quickly join PDF files from the command line."
tags: NPM, CLI, PDF, React Ink, TypeScript
github: "lukasbach/pdfjoin"
npm: 
    - pdfjoin
---

> Note: I've recently launched [Toolbelt](https://lukasbach.github.io/toolbelt/),
> a tool that also allows merging PDFs online without having to download
> anything. No size limit and super quick!

This commandline-tool allows you to quickly merge multiple
PDF files into one.

It searches the current work directory and all subdirectories 
recursively for PDF files and lists them to you. You can then
select and deselect files that you want and rearrange them.

After that, you can specify the outputname and PDFJoin does
the rest for you.

To get started, you need NodeJS and Java v6+ installed.

You can call the app in the directory in which you want to search
for PDF files directly with 

    $ npx pdfjoin
     
without installing anything, or you can install it globally and 
invoke it from there:

    $ npm i -g pdfjoin
    $ pdfjoin

![PDFJoin usage demo](https://raw.githubusercontent.com/lukasbach/pdfjoin/master/demo.gif "PDFJoin usage demo")
