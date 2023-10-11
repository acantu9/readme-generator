// Include inquirer package
// Import fs
// Define file
// Define generatedHTML
const inquirer = require('inquirer');
const fs = require('fs');
const fileName = 'README.md';

const generatedHTML = ({ project, description, installation, usage, contribution, test, license, username, email }) => {
    `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <title>README Generator</title>
    </head>
    <body>
    <header class="p-5 mb-4 header bg-light">
    <div class="container">
        <h1 id="project" class="display-4">${project.trim()}</h1>
        <h2 id="description">Description</h2>
        <p class="lead">${description.trim()}.</p>
        <h2 id="tableOfCont">Table of Contents</h2>
        <a href="#installation">Installation</a>
        <a href="#usage">Usage</a>
        <a href="#contribution">Contribution</a>
        <a href="#test">Tests</a>
        <a href="#license">License</a>
        <a href="#questions">Questions</a>
        <h2 id="installation">Installation</h2>
        <p class="lead">${installation.trim()}.</p>
        <h2 id"usage">Usage</h2>
        <p class="lead">${usage.trim()}.</p>
        <h2 id="contribution">Contributing</h2>
        <p class="lead">${contribution.trim()}.</p>
        <h2 id="test">Tests</h2>
        <p class="lead">${test.trim()}.</p>
        <h2 id="license">License</h2>
        <p class="lead">${license}.</p>
        <h2 id="questions">Questions/h2>
        <p class="lead">Questions? Email me: ${email.trim()}</p>
        <p class="lead">GitHub username: ${username.trim()}</p>
    </div>
    </header>
    </body>
    </html>`;
};

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?',
        validate: function (input) {
            if (input.trim() === '') {
              return 'Please enter the name of your project.';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        validate: function (input) {
            if (input.trim() === '') {
              return 'Please enter the description of your project.';
            }
            return true;
          }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions of your project?',
        validate: function (input) {
            if (input.trim() === '') {
              return 'Please enter the installation instructions of your project.';
            }
            return true;
          }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
        validate: function (input) {
            if (input.trim() === '') {
              return 'Please describe how to use your project.';
            }
            return true;
          }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for your project?',
        validate: function (input) {
            if (input.trim() === '') {
              return 'Please enter the contribution guidelines for your project.';
            }
            return true;
          }
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test your project?',
        validate: function (input) {
            if (input.trim() === '') {
              return 'Please enter the instructions to test your project.';
            }
            return true;
          }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license would you like to use for your project?',
        choices: ['MIT License', 'BSD License', 'GPL', 'AGPL']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: function (input) {
            if (input.trim() === '') {
              return 'Please enter your GitHub username.';
            }
            return true;
          }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: function (input) {
            if (input.trim() === '') {
              return 'Please enter your email address.';
            }
            return true;
          }
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    
};

// Function to initialize app
function init() {
    // Promts user to answer questions
    return inquirer.prompt(questions).then((input) => {
        const readme = generatedHTML(input);

        fs.writeFile(fileName, readme, (err) => {
            err ? console.log(err) : console.log('Successfully created index.html!');
        });
        console.log('User answers:', input.trim());
    });
};

// Function call to initialize app
init();

// Function call to create README
writeToFile(fileName, data);
