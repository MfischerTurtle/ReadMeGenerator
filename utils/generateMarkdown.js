// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![badge](https://img.shields.io/badge/license-${license}-important)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `<https://opensource.org/licenses/${license}>`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  ${renderLicenseBadge(license)}
 
   Permission to use this application is granted under the ${license} license. ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}  
  ## Description
  ${data.Description}
  ## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
* [Credits](#Credits)

## Installation
  ${data.Installation}
## Usage
  ${data.Usage}
${renderLicenseSection(data.License)}
## Contributing
  ${data.Contributing}
## Test
  ${data.Test}
## Questions
  Email me at:
  <${data.Questions}>
## Credits
  Links to Peolpe who worked on this project.
  ${data.Credits.split(',').map((Credit)=>{
   return `
   * [${Credit}](https://github.com/${Credit}?tab=repositories)` 
  })}
  
 `;
}

module.exports = generateMarkdown;
