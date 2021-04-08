const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is a short description of your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What is your project about?',
      name: 'about',
    },
    {
      type: 'input',
      message: 'What was your project built with?',
      name: 'built',
    },
    {
      type: 'input',
      message: 'What dependencies are necessary to install?',
      name: 'dependencies',
    },
    {
      type: 'input',
      message: 'How can this project be used?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What are the proposed features for this project?',
      name: 'features',
    },
    {
      type: 'list',
      message: 'What license is this project licensed under?',
      name: 'license',
      choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"],
    },
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Who would you like to acknowledge?',
        name: 'acknowledgements',
    },
  ])

  .then((response) => {
let readmeString = `# ${response.title}
${renderLicenseSection(response.license)}
### Description
${response.description}

## Table of Contents

- [About This Project](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#features)
- [Contributing](#contributing)
- [Testing](#test)
- [License](#license)
- [Questions](#questions)
- [Acknowledgements](#acknowledgement)

<a name="about"></a>
## About This Project

${response.about}

### Built With

${response.built}

<a name="installation"></a>
## Installation

${response.dependencies}

<a name="usage"></a>
## Usage

${response.usage}

<a name="features"></a>
## Roadmap

${response.features}

<a name="contributing"></a>
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

<a name="test"></a>
## Testing

To test, type "node index.js" into your terminal, answer the prompted questions, and then review the generated README file. 

<a name="license"></a>
## License

This project is licensed under ${response.license}.

<a name="questions"></a>
## Questions

My name is ${response.name} and if you have any questions about this project, you can email me at ${response.email}.
Link to project: github.${response.username}

<a name="acknowledgement"></a>
## Acknowledgements

${response.acknowledgements}`;

    fs.writeFile('README.md', readmeString, (err) =>
    err ? console.error(err) : console.log('Success!')
  )}
    );
