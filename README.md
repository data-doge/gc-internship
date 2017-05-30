# greetings, prospective intern

as you already know, [good call](https://goodcall.nyc) is looking for [software development interns](https://gist.github.com/data-doge/99a37c98b7e5339d4189b0b16852e52f) for the summer.

to get a clearer picture of your technical abilities, i've prepared a programming exercise for you to complete. feel free to use stackoverflow/google/etc for help, but please don't consult with your peers. we want to see how you solve problems _on your own_.

in this exercise, you will be building a web client for an already-prepared json api.

please complete as much of the exercise as you can, and push your work to github by **June 5th, 10:00AM**. if you have any questions, please send an email to eugene@goodcall.nyc. i will respond promptly.

## a quick tour through our boilerplate code

our project's file structure looks like this:

```
.
├── README.md
├── client
│   └── index.js
├── css
│   ├── index.css
│   └── normalize.css
├── index.html
├── package.json
└── server
    ├── call-data.js
    ├── index.js
    └── user-data.js
```

`server` contains a tiny express app which powers the json-api that your client will consume. do not modify any code inside this directory.

`client` is where you will be writing all of your client-side javascript. do whatever you want in this directory.

`css` contains our css. all of your css will go inside `index.css`. for this exercise, please do not use any css frameworks (bootstrap, material design, etc.)

`index.html`, `README.md` are self-explanatory.

now, take a look inside `package.json`. our `client` script uses [budo](https://github.com/mattdesl/budo) to run our client-side code on a [browserify](https://github.com/substack/node-browserify) development server.

in case you don't already know, browserify is a tool that lets you `require` node modules on the client-side. you may have heard of [webpack](https://github.com/webpack/webpack). you can think of browserify as a less-powerful, but simpler, analog of webpack. browserify is  useful for a number of reasons, namely:

1. it gives you access to everything on https://npmjs.com. just run `npm i --save <module-name>`, and \~boom\~, you can `require` the module in your client-side code. minimal-friction developer experience.
2. just like with typical server-side node.js, we can package our client-side code into modules and `require` them into other files as needed.
3. browserify supports a number of [source transforms](https://github.com/substack/node-browserify/wiki/list-of-transforms). for example, this project comes with the [es2040](https://github.com/ahdinosaur/es2040) transform which compiles select ES6 features into valid ES5, allowing us to take advantage of fancy ES6 syntax like arrow functions, template strings, destructuring, etc.

also, our budo development server is live-reloading. meaning, when you save changes in your client-side js/css in your text editor, your browser automagically updates.

## setup

- fork and clone this project
- `cd` into the project and run `npm install`
- run `npm run server` to spin up our already-built server on `localhost:3000`
- in another terminal window, run `npm run client` to spin up our client on `localhost:9966`

now, browse to http://localhost:9966/. you should see an empty page that says: `greetings, prospective intern`. in your browser's console you should see `hello world`.

## now let's get building

you will build a client that will allow a user to log in and see a list of phone calls provided by our json-api. if a user provides invalid credentials during login, an error should be displayed.

the end result should look like this:

![GIF](http://g.recordit.co/IBM8wHkWaF.gif)

**some things to keep in mind:**

- you will need to examine [./server/index.js](./server/index.js) to learn what api endpoints are available to you, and how to work with them. 
- you will find that the call data returned by our json-api contains a good amount of information. as the above gif shows, we are only concerned with displaying the `sid`, `from`, and `result` properties of each call. 
- notice that everything in the above gif happens on a single page. to keep things simple, we are not implementing routing. when a user successfully logs in, just hide the login form and show the calls table.
- don't worry about persisting user login. ordinarily, on login success, we'd store a user's credentials in a cookie or session. but for this exercise, we're not worrying about that.
- your code needs to be well-formatted and easy to read. good call, and [many other tech companies](https://standardjs.com/#who-uses-javascript-standard-style) use [javascript standard style](https://standardjs.com). i'll ask that you do the same. many text editors have [linter plugins](https://github.com/feross/standard#are-there-text-editor-plugins) to enforce standard style in your code.
- to give me greater insight into your thought/build process, make your commits relatively small and frequent.
- your css styling must very closely match the styles in the above gif.
- as mentioned before, this project comes pre-configured with the [es2040](https://github.com/ahdinosaur/es2040) transform, meaning that you can use a decent selection of es6 features in your client-side code. i'd advise you to take advantage of these features, _especially template strings_.
