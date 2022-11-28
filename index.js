// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    message: 'What is the Title of your read me',
    name: 'Title',
  },
  {
    type: 'input',
    message: 'What is the the App about?',
    name: 'Description',
  },
  {
    type: 'input',
    message: 'Do you want to add any installation notes if none put N/A?',
    name: 'Installation',
  },
  {
    type: 'input',
    message: 'How do you use this App',
    name: 'Usage',
  },
  {
    type: 'list',
    message: 'Pick which License you used',
    choices: ["AAL", "ISC", "MIT", "NTP", "W3C"],
    name: 'License',
  },
  {
    type: 'input',
    message: 'Please provide the contributing parties',
    name: 'Contributing',
  },
 {
    type: 'input',
    message: 'Please provide the project tests if none put N/A',
    name: 'Test',
  },
  {
    type: 'input',
    message: 'Enter your Email',
    name: 'Questions',
  },
  {
    type: 'input',
    message: 'Who worked on this App enter Github user name spertate by comma',
    name: 'Credits',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

fs.writeFile(fileName, data, (err) =>
err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((anwsers)=>{ 
       let readThis = generateMarkdown (anwsers)
        console.log(anwsers)
        console.log(readThis)
        writeToFile("ReadMe.md",readThis)
    }) 
}

// Function call to initialize app
init();
