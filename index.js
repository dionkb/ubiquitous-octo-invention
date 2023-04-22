// Included packages needed for this application to run
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// An array of questions for user input, which will feed the generateMarkdown.js
// functions to produce a README using that information
const questions = [
    // Obtaining the project title
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
    // Obtaining a short sumamry of the application
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
    // Obtaining an in-depth description that covers all of the app features
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
    // Asking if you would like to include a screenshot or gif of the application
    {
        name: "includeScreenshot",
        message: "Include a screenshot or gif of the application?",
        type: "confirm",
    },
    // Obtaining a relative pathway to the screenshot/gif of the application
    // if the includeScreenshot input = Y
    {
        name: "screenshotPath",
        message: "Please provide the relative path (from the root of the directory) to the screenshot of the application",
        type: "input",
        when: ({ includeScreenshot }) => {
            if (includeScreenshot) {
                return true;
            } 
            else {
                return false;
            }
        },
        validate: screenshotInput => {
            if (screenshotInput) {
                return true;
            } else {
                console.log('You must enter a pathway');
                return false;
            }
        }
    },
    // Asking if you would like to include the repository URL
    {
        name: "includeRepository",
        message: "Include space for repository url?",
        type: "confirm",
    },
    // Obtaining the repository URL, if the includeRepository input = Y
    {
        name: "repositoryURL",
        message: "Provide the URL to the repository:",
        type: "input",
        when: ({ includeRepository }) => {
            if (includeRepository) {
                return true;
            } 
            else {
                return false;
            }
        },
        validate: repositoryURL => {
            if (repositoryURL) {
                return true;
            } else {
                console.log('You must enter the repository URL');
                return false;
            }
        }
    },
    // Obtaining the dependencies used for the application
    {
        name: "listDependencies",
        message: "List any dependencies, separating each with a comma:",
        type: "input",
        default: "N/A",
        validate: dependInput => {
            if (dependInput) {
                return true;
            } else {
                console.log('You must enter a dependency');
                return false;
            }
        }
    },
    // Obtaining installation instructions
    {
        name: "installation",
        message: "Installation instructions:",
        type: "input",
        default: "N/A",
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('You must enter a installation instructions');
                return false;
            }
        }
    },
    // Obtaining execution instructions
    {
        name: "executionNotes",
        message: "Enter instructions on how to execute the application:",
        type: "input",
        default: "N/A",
        validate: execInput => {
            if (execInput) {
                return true;
            } else {
                console.log('You must enter execution instructions');
                return false;
            }
        }
    },
    // Asking if the user wants to include a URL to the deployed app
    {
        name: "includeDeployedURL",
        message: "Include space for deployed application url?",
        type: "confirm",
    },
    // Obtaining the deployed app URL, if includeDeplyedURL input = Y
    {
        name: "deployedAppURL",
        message: "Provide the URL to the deployed application:",
        type: "input",
        when: ({ includeDeployedURL }) => {
            if (includeDeployedURL) {
                return true;
            } 
            else {
                return false;
            }
        },
        validate: deployedAppURL => {
            if (deployedAppURL) {
                return true;
            } else {
                console.log('You must enter the URL for the deployed application');
                return false;
            }
        }
    },
    // Obtaining the authors
    {
        name: "authors",
        message: "Provide the author(s), separating each author with a comma",
        type: "input",
        default: "Dion Baskara",
        validate: authorInput => {
            if (authorInput) {
                return true;
            } else {
                console.log('You must enter an author');
                return false;
            }
        }
    },
    // Obtaining the github username
    {
        name: "githubUser",
        message: "Provide your Github username",
        type: "input",
        default: "dionkb",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('You must enter your Github username');
                return false;
            }
        }
    },
    // Obtaining the authors email address
    {
        name: "email",
        message: "Provide your email address",
        type: "input",
        default: "dionkbaskara@gmail.com",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You must enter your email address');
                return false;
            }
        }
    },
    // Obtaining the license choice
    {
        name: "license",
        message: "Choose a license to use:",
        type: "list",
        default: "none",
        choices: [
            "none",
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause 'Simplified' License",
            "BSD 3-Clause 'New' or 'Revised' License",
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense",
        ],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('You must enter license information');
                return false;
            }
        }
    },
    // Obtaining any acknowledgements
    {
        name: "acknowledgements",
        message: "Acknowledgements:",
        type: "input",
        default: "N/A",
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

// This function writes a README file using the native NodeJS 'fs' package,
// and the user input info after it is run through the generateMarkdown.js file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README succesfully created')
    );
}

// This function initializes the inquirer when run
function init() {
    return inquirer.prompt(questions);
}

// This function call the initialization function, and then uses the user input
// by sending it through the generateMarkdown.js and writeToFile functions.
init()
.then(answers => {
    return generateMarkdown(answers);
})
.then(returnedMarkdown => {
    writeToFile("README.md", returnedMarkdown);
});
