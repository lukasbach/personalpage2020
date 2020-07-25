---
slug: "/games/slyder"
category: "games"
date: "2019-08-19"
title: "Slyder"
description: "Free-to-play puzzle game. Slide your tile into the goal, with a twist."
tags: Dashboard, CLI, OAuth, Extensible
icon: "/logos/slyder/color.png"
iconMonochromatic: "logos/slyder/monochromatic.png"
website: "https://lukasbach.github.io/slyder/"
github: lukasbach/slyder
travis: com/lukasbach/slyder
---

Slyder is a web-based puzzle game based around the idea of mirrored
tile moving playable at 
[lukasbach.github.io/slyder/](https://lukasbach.github.io/slyder/).
It was developed using TypeScript and the Konva library.

There are not a lot of levels to play, but you can define your own
levels as described [here](./level-creation.md).

## Screenshots
![Screenshot](https://raw.githubusercontent.com/lukasbach/slyder/master/screenshots/intro.PNG "Main Menu")

![Screenshot](https://raw.githubusercontent.com/lukasbach/slyder/master/screenshots/level0.PNG "Ingame")

![Screenshot](https://raw.githubusercontent.com/lukasbach/slyder/master/screenshots/level1.PNG "Ingame")

![Screenshot](https://raw.githubusercontent.com/lukasbach/slyder/master/screenshots/level2.PNG "Ingame")


## Developing and Deploying

If you want to download and run the game locally, you can
do so by following the usual npm/yarn workflow, ``yarn && yarn start``
to run the game and ``yarn && yarn run build`` to build independent
deployment artifacts.