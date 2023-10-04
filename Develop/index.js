// Include inquirer package
const inquirer = require('inquirer');
const fs = require('fs');

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

// Promts user to answer questions
inquirer.prompt(questions).then((answers) => {
    console.log('User answers:', answers.trim());
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
