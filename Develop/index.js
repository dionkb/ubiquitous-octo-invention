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
    {
        name: "includeDeployedURL",
        message: "Include space for deployed application url?",
        type: "confirm",
    },
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
    {
        name: "licenseDetails",
        message: "Provide license details:",
        type: "input",
        default: "See the LICENSE.md file for details",
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
