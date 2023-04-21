// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// // TODO: Create an array of questions for user input
function getAnswers() {
    inquirer
        .prompt(questions)
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
            name: "fullDescription",
            message: "In-depth description of features:",
            type: "input",
            },
            {
            name: "includeRepository",
            message: "Include space for repository url?", // Y or N
            type: "confirm",
            },
            {
            name: "dependenciesCheck",
            message: "List a dependency?",
            type: "confirm",
            },
            {
            name: "listDependencies",
            message: "List a dependency:",
            type: "input",
            },
            {
            name: "moreDependencies",
            message: "List another dependency?",
            type: "confirm",
            },
            {
            name: "installation",
            message: "Installation instructions:",
            type: "input",
            },
            {
            name: "includeDepoloyedURL",
            message: "Include space for deployed application url?",
            type: "confirm",
            },
            {
            name: "authors",
            message: "Provide an author:",
            type: "string",
            },
            {
                name: "additionalAuthors",
            message: "Provide additional authors?",
            type: "confirm",
            },
            {
                name: "genericLicense",
            message: "Use generic 'See the LICENSE.md file for details'?",
            type: "confirm",
            },
            {
                name: "uniqueLicense",
            message: "Provide license details:",
            type: "string",
            },
            {
                name: "acknowledgements",
            message: "Do you need to list any acknowledgements?",
            type: "confirm",
            },
            {
                name: "listAck",
            message: "Acknowledgement:",
            type: "string",
            },
            {
                name: "moreAck",
            message: "Any more acknowledgements?",
            type: "confirm",
            },
        ];
};

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README succesfully created')
    );
}

// // TODO: Create a function to initialize app
function init() {
    let userAnswers = getAnswers();
    writeToFile("README.md", (generateMarkdown(userAnswers)));
}

// // Function call to initialize app
init();
