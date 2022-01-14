// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and
//  a notice is added to the section of 
// the README entitled License that explains which 
// license the application is covered under

// URL: https://img.shields.io/github/license/<Github-Username>/<Repository>

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === 'MIT') {
return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
} else if (license === 'GNU GPLV3') {
  return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
} else if (license === 'ISC') {
  return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
} else {
  return "";
}

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
   return '[License](#license)'
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None') {
    return '## License'
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  let renderBadge = renderLicenseBadge(data.license)
  let renderLink = renderLicenseLink(data.license) // '* [License](#license)' || ''
  let renderSection = renderLicenseSection(data.license)
  

  return `# ${data.title}
  
  ${renderBadge}

  ## Description

  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage) 
  * [Contribution](#contribution) 
  * [Test](#test)
  * ${renderLink} 
  * [Questions](#questions)  

  ## Installation

  ${data.install} 

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribution}

  ## Test

  ${data.test}


  ## Questions

  * Contact me at ${data.email}

  * Github Profile Link: ${data.github}

  ${renderSection}
  Licensed under the ${data.license} license. Please click the license badge beneath the title for more information.
`;

}

module.exports = generateMarkdown;
