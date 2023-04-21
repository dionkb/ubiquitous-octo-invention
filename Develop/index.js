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
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You must enter a title');
                return false;
            }
        }
    },
    {
        name: "summary",
        message: "Enter a short summary:",
        type: "input",
        validate: summaryInput => {
            if (summaryInput) {
                return true;
            } else {
                console.log('You must enter a short summary');
                return false;
            }
        }
    },
    {
        name: "fullDescription",
        message: "In-depth description of features:",
        type: "input",
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('You must enter a description');
                return false;
            }
        }
    },
    {
        name: "includeRepository",
        message: "Include space for repository url?",
        type: "confirm",
    },
    {
        name: "listDependencies",
        message: "List any dependencies, separating each with a comma:",
        type: "input",
        validate: dependInput => {
            if (dependInput) {
                return true;
            } else {
                console.log('You must enter a dependency');
                return false;
            }
        }
    },
    {
        name: "installation",
        message: "Installation instructions:",
        type: "input",
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('You must enter a installation instructions');
                return false;
            }
        }
    },
    {
        name: "includeDepoloyedURL",
        message: "Include space for deployed application url?",
        type: "confirm",
    },
    {
        name: "authors",
        message: "Provide the author(s), separateing each author with a comma",
        type: "input",
        validate: authorInput => {
            if (authorInput) {
                return true;
            } else {
                console.log('You must enter an author');
                return false;
            }
        }
    },
    {
        name: "licenseDetails",
        message: "Provide license details:",
        type: "input",
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('You must enter license information');
                return false;
            }
        }
    },
    {
        name: "acknowledgements",
        message: "Acknowledgements:",
        type: "input",
        validate: acknoInput => {
            if (acknoInput) {
                return true;
            } else {
                console.log('You must enter acknowledgements');
                return false;
            }
        }
    },
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README succesfully created')
    );
}

// // TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// // Function call to initialize app
init()
.then(answers => {
    console.log(answers);
    return generateMarkdown(answers);
})
.then(returnedMarkdown => {
    writeToFile("README.md", returnedMarkdown);
});
