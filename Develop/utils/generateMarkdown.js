// TODO: Create a function that returns a license badge based on which 
// license is passed in. If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    default:
      return "";
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    case "BSD 2-Clause 'Simplified' License":
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
    case "BSD 3-Clause 'New' or 'Revised' License":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    case "Creative Commons Zero v1.0 Universal":
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
    case "Eclipse Public License 2.0":
      return "[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)"
    case "GNU Affero General Public License v3.0":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
    case "GNU General Public License v2.0":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    case "GNU Lesser General Public License v2.1":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    case "The Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    }
};

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    default:
      return "";
    case "Apache License 2.0":
      return `<a href="https://www.apache.org/licenses/LICENSE-2.0">click here</a>`
    case "GNU General Public License v3.0":
      return `<a href="https://www.gnu.org/licenses/gpl-3.0.en.html">click here</a>`
    case "MIT License":
      return `<a href="https://opensource.org/license/mit/">click here</a>`
    case "BSD 2-Clause 'Simplified' License":
      return `<a href="https://opensource.org/license/bsd-2-clause/">click here</a>`
    case "BSD 3-Clause 'New' or 'Revised' License":
      return `<a href="https://choosealicense.com/licenses/bsd-3-clause/">click here</a>`
    case "Boost Software License 1.0":
      return `<a href="https://www.boost.org/LICENSE_1_0.txt">click here</a>`
    case "Creative Commons Zero v1.0 Universal":
      return `<a href="https://creativecommons.org/publicdomain/zero/1.0/">click here</a>`
    case "Eclipse Public License 2.0":
      return `<a href="https://www.eclipse.org/legal/epl-2.0/">click here</a>`
    case "GNU Affero General Public License v3.0":
      return `<a href="https://www.gnu.org/licenses/agpl-3.0.en.html">click here</a>`
    case "GNU General Public License v2.0":
      return `<a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html">click here</a>`
    case "GNU Lesser General Public License v2.1":
      return `<a href="https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html">click here</a>`
    case "Mozilla Public License 2.0":
      return `<a href="https://www.mozilla.org/en-US/MPL/2.0/">click here</a>`
    case "The Unlicense":
      return `<a href="https://unlicense.org/">click here</a>`
    }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case "none":
      return "";
    case license:
      return license + `: For more information, `
    }
}

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.summary}  
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.fullDescription}

  Screenshot of final output:  
  (***Don't forget to add me!***)

  ## Table of Contents
  * [Dependencies](#dependencies)
  * [Installation](#installation)
  * [Executing Program](#execution)
  * [Authors](#authors)
  * [Questions](#questions)
  * [License](#license)
  * [Acknowledgements](#acknowledgements)
  * [Tests](#tests)

  Link to the repository (if needed):  
  ${data.repositoryURL}

  ## Getting Started

  ### Dependencies
  ${data.listDependencies}

  ### Installation
  ${data.installation}

  ## Usage

  ### Executing Program
  ${data.executionNotes}
  
  Link to the deployed application (if applicable):  
  ${data.deployedAppURL}

  ## Additional Information

  ### Authors
  ${data.authors}

  ### Questions
  For any questions, please reach out to me at ${data.email}

  ### Contributing
  To help contribute to the project, reach out to me on Github.  
  There, you can report an issue if you encounter one.  
  GitHub profile: <a href="https://github.com/${data.githubUser}">Click Here</a>

  ### License  
  ${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}  
  See also: LICENSE.md file located within directory (if applicable) 

  ### Acknowledgements
  ${data.acknowledgements}

  ### Tests
  *************** FILL IN LATER! **************
  `
}

module.exports = generateMarkdown;
