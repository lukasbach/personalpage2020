---
slug: "/projects/devsession"
category: "projects"
date: "2019-05-04"
title: "DevSession"
description: "Open-Source collaborative IDE with many features and extremely quick setup!"
icon: "/logos/devsession/ds-icon-white.svg#"
tags: IDE, CLI/fab/npm
sonar: "lukasbach_devsession"
github: "lukasbach/devsession"
website: "https://devsession.js.org"
cli: "npx devsession ."
npm:
    - "devsession"
    - "@devsession/common"
    - "@devsession/guibuilder"
    - "@devsession/guistarter"
    - "@devsession/backend"
    - "@devsession/frontend"
actions:
    - { title: 'Download', href: 'https://github.com/lukasbach/devsession/releases/latest/download/devsession-win.zip', icon: 'download' }
attachements:
    - textblock: |
        Lorem ipsum
        doloret *amet*
        abc
    - card:
        title: Title of the card
        content: Content of the card
        href: abc
    - linklist:
        title: Title of the linklist
        items:
            - { title: 'Slide 0', href: '/', icon: 'download' }
            - { title: 'Slide 0', href: '/', icon: 'download' }
            - { title: 'Slide 0', href: '/', icon: 'download' }
    - gallery:
        title: Title of the gallery
        items:
            - { title: 'Item title', description: 'Item description', image: '/header.jpg' }
            - { title: 'Item title', description: 'Item description', image: '/header.jpg' }
            - { title: 'Item title', description: 'Item description', image: '/header.jpg' }
    - video:
        id: F4MQybDLVto
        autoplay: 0
        loop: 1
---

Open-Source collaborative IDE with many features and extremely quick setup!

Currently work-in-progress/early alpha, but you can try it out with ``npx devsession`` in
the directory in which you want to start a coding session, or by downloading the GUI starter
from the [latest release](https://github.com/lukasbach/devsession/releases/latest).

More details are available on the devsession website: 
[https://lukasbach.github.io/devsession/](https://lukasbach.github.io/devsession/)

## CLI

You can run devsession from anywhere by entering ``npx devsession``, which will automatically download, 
install and run devsession. You can install it globally by entering ``npm i -g devsession``, so you can
just invoke ``devsession`` at any time.

You can also install devsession as a dev dependency to your project and create an npm script in your
``package.json`` with preset CLI arguments to quickly enter a session that fits the projects needs.

You can use the following arguments:

* ``-p, --port [port]``, The port on which to run the server. Defaults to 8020.
* ``-k, --adminkey [key]``, This key can be used to register a user as an admin. Defaults to a random string.
* ``-d, --dir [dir]``, The project directory. Defaults to the current directory.
* ``-v, --verbose``, Log all socket messages for debugging.
* ``-a, --autosave``, Duration (in seconds) of periodic auto saving of all open files. 0 = disabled. Defaults to 120.

## Building/Contributing

The project is set up as a monorepo using Lerna. Note that, prior to doing anything else and 
especially prior to installing dependencies, you need to run ``npx lerna link`` to establish
symlinks between the packages.

 * To start developing, run ``yarn && yarn start`` in the root directory. This will start
   a development server for the backend and the frontend and automatically recompile if
   changes are detected. The backend starts on port 8020, the frontend on port 3000.
   To debug, open the frontend from the url:
   ``http://localhost:3000/?adminkey=adminkey&backend=http://localhost:8020``
   
 * To run a new build, run ``yarn && yarn build``. This will build the common package,
   the backend, the frontend, the website and the guistarter app.
   
 * To release a new version, run ``yarn && yarn pub``. This will build everything, bump
   versions for all packages, upload new versions for the packages which are deployed
   on npm and commit and push the version bumps. The CI pipeline will pick that up and
   redeploy the website and attach the guistarter binaries with the github release.
   
## Acknowledgements

Notable third-party frameworks used are:

 * Microsofts Monaco as editor frontend
 * Microsofts Typescript as primary programming language
 * Facebooks React for frontend development
 * Redux and Palantirs Redoodle for state management
 * Palantirs BlueprintJs as UI library
 * ExpressJS for the backend
 * Socket.io for real-time communication between frontend and backend
 * Electron for creating a standalone binary of the GUI starter
 * ngrok and localtunnel as built-in port-forwarding service
 * Node-pty for running terminals in the backend
 * xterm for displaying terminals in the frontend
 
 ...as well as many others.