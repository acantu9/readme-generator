// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    // Return the license badge based on the license value
    return `![License](https://img.shields.io/badge/License-${data.license}-blue.svg)(https://opensource.org/licenses/${data.license})`;
  } else {
    return '';
  }
}
 
// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    // Return the license link based on the license value
    return `[License](https://opensource.org/licenses/${data.license})`;
  } else {
    return '';
  }
}
 
// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    // Return the license section based on the license value
    return `## License
      This project is licensed under the [${data.license}](https://opensource.org/licenses/${data.license}) license.`;
  } else {
    return '';
  }
}
 
// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
 
  ${renderLicenseBadge(data.license)}
 
  ## Description
 
  ${data.description}
 
  ## Table of Contents
 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
 
  ## Installation
 
  ${data.installation}
 
  ## Usage
 
  ${data.usage}
 
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
 
  ## Contributing
 
  ${data.contribution}
 
  ## Tests
 
  ${data.test}
 
  ## Questions
 
  For any questions, please contact me:
 
  - GitHub: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email}
  `;
}
 
module.exports = generateMarkdown;
