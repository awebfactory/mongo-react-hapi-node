# Dev Diary

[very rough notes indeed]

## 04/21/16 13:39:08

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

## 04/21/16 14:12:36

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

Then, three terminal windows open, 1 for git and housekeeping, one for watch and one running server (with or without browsersync):

Terminal #2

```
$ npm run watch
$ npm start
```

Terminal #3

```
$ npm start
```

testing by changing scss and js src files, then refreshing the runing browser.

Committed:

commit 8a565d36f1045052497eb36295792c7faaa7d5b7
Author: Victor Kane <victorkane@gmail.com>
Date:   Thu Apr 21 15:39:28 2016 -0300

    hapi server lifts up react with everything, statically

## 04/21/16 15:40:00

Invoking http://localhost:3000/about manually from the address bar gets: `{statusCode: 404, error: "Not Found"}`

This used to work in Express, by giving everything (*) to the static index.html

Everything is set up correctly but no matter what I do, I get 404 on the /about url manual placed into the address bar.

I think the problem is with react-router, have to see whether hapi is imposing a 404 or whether react router is returning a 404

## 04/21/16 17:49:22

I have confirmed on a local `tryexpress` branch that it is a `hapi` problem and not a problem with react-router. Using the index-express that uses the traditional * catch all, everything works fine:

```
// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
```

So I definitely can't get `hapi` to play ball with a react router that's working great with express. 



