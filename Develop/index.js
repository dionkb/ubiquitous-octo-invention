// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// // TODO: Create an array of questions for user input
const questions = [
    "Project Title:",
    "Short summary:",
    "In-depth description of features:",
    "Include space for repository url?", // Y or N
    "List a dependency?", // Y or N
    "Dependecy:",
    "List another dependency?", // Y or N
    "Installation instructions:",
    "Include space for deployed application url?", // Y or N
    "Provide an author:",
    "Provide additional authors?", // Y or N
    "Use generic 'See the LICENSE.md file for details'?", // Y or N
    "Provide license details:",
    "Do you need to list any acknowledgements?", // Y or N
    "Acknowledgement:",
    "Any more acknowledgements?", // Y or N
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
// function init() {}

// // Function call to initialize app
// init();
