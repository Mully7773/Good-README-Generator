// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and
//  a notice is added to the section of 
// the README entitled License that explains which 
// license the application is covered under

// URL: https://img.shields.io/github/license/<Github-Username>/<Repository>

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (`${data.license}` === 'MIT') {

}

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License Badge](https://img.shields.io/github/license/${data.github}/Repository>

  ## Description

  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage) 
  * [Contribution](#contribution) 
  * [Test](#test)
  * [License](#license) 
  * [Questions](#Questions)  

  ## Installation

  ${data.install} 

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribution}

  ## Test

  ${data.test}

  ## License

  ${data.license}

  ## Questions

  * Contact me at ${data.email}

  * Github Profile Link: ${data.github}

`;
}

module.exports = generateMarkdown;
