//must use at top to use the fs file module
const fs = require('fs');

//must use with other pages module to link them together
const generatePage = require('./src/page-template.js');

//array that holds the user command-line argument
const profileDataArgs = process.argv.slice(2);
console.log(profileDataArgs);

const [name, github] = profileDataArgs;
console.log(name, github);

const pageHTML = generatePage(name, github);

//arg 1: name-'index.html' 
//arg 2: the data- function from generatePage---with parameters (name, github)
//arg 3: callback function "if" statement to handle any errors and if not what to do with 
//console log
/* the arrow function only needs parenthesis if there is more than 1 argument*/
fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete, Check out index.html to see the output!');
})
;