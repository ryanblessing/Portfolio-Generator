//Try to group by source: npm packages, personal modules, and core library modules often get grouped together.
const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
// always use a console.log here to make sure inquirer was actually downloaded-9.3.5
const promptUser = () => {
  return inquirer.prompt([{
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your Github Username'
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some Information about yourself:'
    }
  ]);

};
promptUser().then(answers => console.log(answers));

const promptProject = () => {
  console.log(`
  ==================
  add a new project
  ==================
  `);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?'

    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)'
    },
    {
      type: 'checkbox',
      name: 'language',
      message: 'What did you build this project with? (Check all that apply!)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'BOOTSTRAP', 'NODE']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the Github link to your project (Required)'
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this Project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to Enter another Project?',
      default: false
    }
  ]);
};

//must use at top to use the fs file module
//const fs = require('fs');
//must use with other pages module to link them together
//const generatePage = require('./src/page-template.js');

//array that holds the user command-line argument....the 2 is calling the 3rd argument- in the fs file?
//process.argv.slice = to where it starts on command line
//const profileDataArgs = process.argv.slice(2);
//console.log(profileDataArgs);

//const [name, github] = profileDataArgs;
//console.log(name, github);

//const pageHTML = generatePage(name, github);

//arg 1: name-'index.html' 
//arg 2: the data- function from generatePage---with parameters (name, github)
//arg 3: callback function "if" statement to handle any errors and if not what to do with 
//console log
/* the arrow function only needs parenthesis if there is more than 1 argument*/
//fs.writeFile('./index.html', pageHTML, err => {
//  if (err) throw err;

//console.log('Portfolio complete, Check out index.html to see the output!');
//});