// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [ 
{
    name: 'title',
    message: 'What is the title of your project?',
    type: 'input'
}, 
{
    name: 'description',
    message: 'What is your project description?',
    type: 'input'
},
{
    name: 'install',
    message: 'Please enter installation instructions.',
    type: 'input'
},
{
    name: 'usage',
    message: 'Please enter usage information.',
    type: 'input'
},
{
    name: 'contribution',
    message: 'Would are the contribution guidelines?',
    type: 'input'
},
{
    name: 'test',
    message: 'What are the test instructions?',
    type: 'input'
},
{
    name: 'license',
    message: 'What kind of license would you like to use?',
    type: 'list',
    choices: ['MIT', 'GNU GPLV3', 'ISC', 'afl-3.0']
},
{
    name: 'github',
    message: 'What is your Github profile URL?',
    type: 'input'
},
{
    name: 'email',
    message: 'What is your email address?',
    type: 'input'
},
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, (data), (err) => 
    err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer) {
        let readMeStr = generateMarkdown(answer);
        writeToFile('README.md', readMeStr)
    })
}

// Function call to initialize app
init();
