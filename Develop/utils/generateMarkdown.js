//function that generates README
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
