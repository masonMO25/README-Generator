const inquirer = require('inquirer'); 
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'label',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your application?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the use of your project?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What is the name of your project?',
        choices: ['MIT', 'ISC', 'Apache-2.0', 'GPL-3.0'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What are the guidelines for contributing to this project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Which tests would you like to include?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Link your Github page',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
];

// TODO: Create a function to write README file
function generateREADME(data) {
  return `# ${data.label}

  ## Description
  ${data.description}Description
  
  ## Table of Content

  + [Installation](#installation)
  + [Usage](#usage)
  * [License](#license)
  * [Contributing Guidelines](#contributing)
  * [Tests](#tests)
  * [Constact Info / Questions](#questions)
  
  ##  Installation 
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.licesne}
  
  ## Contributing Guidelines
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Contact Info / Questions
  ${data.github}
  
  ${data.email}
  `
};

inquirer.prompt(questions)
  .then(data=>{
    fs.writeFileSync("README.md", generateREADME(data))
  });
