// TODO: Create a function that returns a license badge based on which 
// license is passed in. If there is no license, return an empty string
function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.summary}

  ## Description

  ${data.fullDescription}

  Screenshot of final output: (***Don't forget to add me!***)


  Link to the repository (if needed)
  ${data.repositoryURL}

  ## Getting Started

  ### Dependencies
  ${data.listDependencies}

  ### Installation
  ${data.installation}

  ### Executing Program
  Link to the deployed application (if applicable)
  ${data.includeDeployedURL}

  ## Authors
  ${data.authors}

  ##License  
  ${data.licenseDetails}

  ## Acknowledgements
  ${data.acknowledgements}
  `
}

module.exports = generateMarkdown;
