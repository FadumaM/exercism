# exercism

## JavaScript

#### After configuring exercism command-line client and fetching your first JavaScript exercise (see command-line interface overview) is time to run some tests. Move to the folder where that exercise's files are located (a path similar to <EXERCISM_HOME_DIR>/<TRACK_ID>/<EXERCISE>) and run the tests with the jasmine-node command you should have installed on Installing JavaScript step:

```
cd ~/exercism/javascript/bob
jasmine-node bob_test.spec.js
```
#### Note that ~/exercism is the default folder for EXERCISM_HOME_DIR. Be sure you use your configured folder for it

## Making Your First Node Module

#### To create a module that can be loaded with var Bob = require('./bob.js');, put this code in bob.js:

```
var Bob = function() {};

Bob.prototype.hey = function(what) {
  //
  // Your solution to the exercise goes here
  //
};

module.exports = Bob;

```

#### You can find more information about modules in the node documentation. To make it easier to get started, there's a "skeleton" bob.js file in the directory for the first exercise.
