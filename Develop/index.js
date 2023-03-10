// Linking other files/pakages
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions
const questions = [{
    type: "input",
    name: "title",
    message: "What is your projects title?",
},
{
    type: "input",
    name: "description",
    message: "Please describe your project: "
},
{
    type: "input",
    name: "installation",
    message: "Describe how to install this application: ",
},
{
    type: "input",
    name: "usage",
    message: "What is the usage information for this application?"
},
{
    type: "input",
    name: "contributing",
    message: "Who are the contributors of this application?"
},
{
    type: "input",
    name: "tests",
    message: "Are there any tests, if so provide examples on how to run them"
},
{
    type: "list",
    name: "license",
    message: "Chose the a license for this application: ",
    choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
    ]
},
{
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: "
},
{
    type: "input",
    name: "email",
    message: "Please enter your email: "
}
];

// Function that creates a file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// Function that initializes app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
           writeToFile('README.md', generateMarkdown.generateMarkdown(answers));
          })
}


init();

