// TODO: Create a function that returns a license badge based on which 
// license is passed in. If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    default:
      return '';
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    // MIT License
      // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    // BSD 2-Clause "Simplified" License
      // [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
    // BSD 3-Clause "New" or "Revised" License
      // [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
    // Boost Software License 1.0
      // [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
    // Creative Commons Zero v1.0 Universal
      // [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)
    // Eclipse Public License 2.0 (MIGHT BE WRONG)
      // [![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)
    // GNU Affero General Public License v3.0
      // [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
    // GNU General Public License v2.0
      // [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
    // GNU Lesser General Public License v2.1
      // [![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)
    // Mozilla Public License 2.0
      // [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
    // The Unlicense
      // [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
    }
};

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.summary}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.fullDescription}

  Screenshot of final output: (***Don't forget to add me!***)

  ## Table of Contents
  * [Dependencies](#dependencies)
  * [Installation](#installation)
  * [Executing Program](#execution)
  * [Authors](#authors)
  * [Questions](#questions)
  * [License](#license)
  * [Acknowledgements](#acknowledgements)
  * [Tests](#tests)

  Link to the repository (if needed)
  ${data.repositoryURL}

  ## Getting Started

  ### Dependencies
  ${data.listDependencies}

  ### Installation
  ${data.installation}

  ## Usage

  ### Executing Program
  ${data.executionNotes}
  
  Link to the deployed application (if applicable)
  ${data.deployedAppURL}

  ## Additional Information

  ### Authors
  ${data.authors}

  ### Questions
  For any questions, please reach out to me at:
  Email: ${data.email}

  ### Contributing
  To help contribute to the project, reach out to me on Github, or open an issue there
  GitHub profile: github.com/${data.githubUser}

  ### License  
  ${data.licenseDetails}

  ### Acknowledgements
  ${data.acknowledgements}

  ### Tests
  *************** FILL IN LATER! **************
  `
}

module.exports = generateMarkdown;
