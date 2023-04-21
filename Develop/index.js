// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// // TODO: Create an array of questions for user input
const questions = [
    {
    name: "title",
    message: "Enter project title:",
    type: "input",
    },
    {
    name: "summary",
    message: "Enter a short summary:",
    type: "input",
    },
    {
    name: "full description",
    message: "In-depth description of features:",
    type: "input",
    },
    {
    name: "include repository",
    message: "Include space for repository url?", // Y or N
    type: "confirm",
    },
    {
    name: "dependencies start",
    message: "List a dependency?",
    type: "confirm",
    },
    {
    name: "list dependencies",
    message: "List a dependency:",
    type: "input",
    },
    {
    name: "more dependencies",
    message: "List another dependency?",
    type: "confirm",
    },
    {
    name: "installation",
    message: "Installation instructions:",
    type: "input",
    },
    {
    name: "include depoloyed app url",
    message: "Include space for deployed application url?",
    type: "confirm",
    },
    {
    name: "author",
    message: "Provide an author:",
    type: "string",
    },
    {
        name: "additional authors",
    message: "Provide additional authors?",
    type: "confirm",
    },
    {
        name: "Use generic license",
    message: "Use generic 'See the LICENSE.md file for details'?",
    type: "confirm",
    },
    {
        name: "unique license details",
    message: "Provide license details:",
    type: "string",
    },
    {
        name: "acknowledgements",
    message: "Do you need to list any acknowledgements?",
    type: "confirm",
    },
    {
        name: "first acknowledgement",
    message: "Acknowledgement:",
    type: "string",
    },
    {
        name: "author",
    message: "Any more acknowledgements?",
    type: "confirm",
    },
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', "test", (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}
// testing code above
//writeToFile();

// // TODO: Create a function to initialize app
function init() {}

inquirer
    .prompt(questions)

// // Function call to initialize app
// init();
