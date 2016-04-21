# Diary

04/21/16 13:39:08

hapi dependencies:

```
npm install --save hapi path inert
```

So starting from scratch, let's have hapi lift up static bare-bones html home page

```
commit bbebf321dcedc94be896db640d782d91d3441dce
Author: Victor Kane <victorkane@gmail.com>
Date:   Thu Apr 21 14:11:30 2016 -0300

    hapi server serves bare-bones index.html home page
```

04/21/16 14:12:36

Let's get react up from the html, via npm scripts.

Dev dependencies:

```
$ npm install --save-dev babel-core babel-preset-es2015 babel-preset-react babelify browser-sync browserify mkdirp node-sass npm-run-all watchify
```

React dependencies:

```
$ npm install --save react react-dom react-redux react-router redux redux-form node-uuid
```

Then, add babel section to package.json in lieu of having to have a `./babelrc` file:

```
  "babel": {
    "presets": [
      "es2015",
      "react"
    ]
  }
```

Then created npm run scripts, no npm start or run server yet.

Tested:

```
$ npm run build
$ npm start
```

```
got bundle.js:26769 Warning: Automatically setting basename using <base href> is deprecated and will be removed in the next major release. The semantics of <base href> are subtly different from basename. Please pass the basename explicitly in the options to createHistory
```

Removed <base href> from index.html

Then:

```
$ npm run watch
$ npm start
```

testing by changing scss and js src files, then refreshing the runing browser.



```

