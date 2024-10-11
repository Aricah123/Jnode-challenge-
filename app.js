const inquirer = require("inquirer")
const fs = require("fs")
inquirer.prompt([
    {
        message: "what is the title of your project?",
        name: "projectTitle",
        type: "input"
    },
    {
        message: "please write a desciption of your project",
        name: "projectDescription",
        type: "input"
    },
    {
        message: "please enter intallion instructions",
        name: "installationInstuctions",
        type: "input"
    },
    {
        message: "please provide usage information",
        name: "usageInformation",
        type: "input"
    },
    {
        message: "please provide contribution guidlines",
        name: "contributionGuidelines",
        type: "input"
    },
    {
        message: "please provide test instructions",
        name: "testInstructions",
        type: "input"
    },
    {
        message: "please choose a license",
        name: "license",
        type: "list",
        choices: ["mit", "The Unlicense"]

    },
    {
        message: "what is the github username",
        name: "githubUsername",
        type: "input"
    },
    {
        message: "what is your email?",
        name: "emailAddress",
        type: "input"
    },
])
    .then(answers => {
        let badge = ""
        if (answers.license === "mit") badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        if (answers.license === "The Unlicense") badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
        const markdown = `# ${answers.projectTitle} 
### Questions
${answers.emailAddress}
[link to github](https://github.com/${answers.githubUsername})
${badge}
## Description
${answers.projectDescription}

### Installation Intructions
${answers.installationInstuctions}

### Usage Information
${answers.projectDescription}

### Contribution Guidelines
${answers.contributionGuidelines}

### Test Instructions
${answers.testInstructions}

### License
${answers.license}`

        fs.writeFileSync("readme.md", markdown
        )
    })