// Include inquirer package
// Import fs
// Define file
// Define generatedREADME
const inquirer = require('inquirer');
const fs = require('fs');
const fileName = 'README.md';

const generatedREADME = ({ project, description, installation, usage, contribution, test, license, username, email }) => {
    `# ${project.trim()}
     
    ## Description
    ${description.trim()}

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [License](#license)
    - [Questions](#questions)
    
    ## Installation
    ${installation.trim()}
    
    ## Usage
    ${usage.trim()}


    ## Contributing
    ${contribution.trim()}


    ## Tests
    ${test.trim()}

    ## License
    ${license}

    ## Questions
    Contact me with any questions below:
    
    Email me: ${email.trim()}
    GitHub username: ${username.trim()}`;
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
  // Use the built-in 'fs' module to write the README file to the current directory
  fs.writeFile(fileName, data, (err) => {
    // If there is an error in writing the file, log it
    if (err) {
      console.log(err);
    } else {
      // If the file was written successfully, log a success message
      console.log('Successfully created ' + fileName + '!');
    }
  });
};

// Function to initialize app
function init() {
  // Prompts user to answer questions
  return inquirer.prompt(questions).then((input) => {
    const readme = generatedREADME(input);

    fs.writeFile(fileName, readme, (err) => {
      err ? console.log(err) : console.log('Successfully created index.html!');
    });

    console.log('User answers:', input.trim());

    // Call the writeToFile function after the user's input has been gathered
    writeToFile(fileName, readme);
  });
};

// Function call to initialize app
init();
