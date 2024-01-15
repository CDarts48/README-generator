function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license && license !== "none") {
    return `## License\n\nThis project is licensed under the ${license} license.`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Deployed Application URL
${data.link}

## Screenshot
![alt-text:'Screen shot of app'](${data.screenshot})

## Table of Contents
* [Features](#features)
* [Languages & Dependencies](#languagesanddependencies)
* [How to Use This Application](#HowtoUseThisApplication)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)

## Features
  ${data.features}
  
## Languages & Dependencies
  ${data.require}
  
## How to Use This Application
  ${data.usage}

  ## Contributors
  ${data.contributors}
  
## Testing
  ${data.test}
  Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;
