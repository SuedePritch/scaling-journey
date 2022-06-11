const inquirer = require('inquirer')

inquirer
    .prompt([
    {
        type: "input",
        name: 'managerName',
        message: 'Enter: Manager\'s Name'
    },
    {
        type: "input",
        name: 'managerId',
        message: 'Enter: Manager\'s Employee Number'
    },
    {
        type: "input",
        name: 'managerEmail',
        message: 'Enter Manager\'s Email'
    },
    {
        type: "input",
        name: 'managerOffice',
        message: 'Enter Manager\'s Office Number'
    },
    ])
    .then(answers => {
        console.info(answers.managerName,answers.managerId,answers.managerEmail,answers.managerOffice,);
    });