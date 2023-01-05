// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
/*function renderLicenseBadge(license) {
  license ? `![badge](https://img.shields.io/badge/<License>-<${license.license}>-<blue>)` : '';
 }
const licenseBadge = renderLicenseBadge()
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }*/

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![badge](https://img.shields.io/badge/<License>-<${data.license}>-<blue>)
## Description
${data.description}
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Username](#Username)
- [Email](#Email)

## Installation
${data.installation}

## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## License
${data.license}

This application is covered by the ${data.license} license. 
## Username
${data.username}
## Email
${data.email}


`;
}


module.exports = {
  generateMarkdown
};
