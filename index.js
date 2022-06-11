const inquirer = require('inquirer')
const Employee = require('./src/Employee')
const Manager = require('./src/Manager')
const Engineer = require('./src/Engineer')
const Intern = require('./src/Intern')


createManager = () => {
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
    {
        type:"confirm",
        name:"addMore",
        message:"Add Another Employee?"

    }
    ]).then(answers =>{
        if(answers.addMore){
            addMore()
}
}
)}

addMore = ()=>{
    inquirer.prompt([
        {
            type:"list",
            name:"role",
            message: "What role does this employee have?",
            choices: ['Engineer', 'Intern']
        }
    ]).then(answers =>{
        if(answers.role === 'Engineer'){
            createEngineer()
        }else if(answers.role === 'Intern'){
            createIntern()
        }else{
            return
        }
    }
)}

createEngineer = () =>{
    inquirer.prompt([
        {
            type:"input",
            name:"engineerName",
            message: "Enter: Engineer Name"
        },
        {
            type:"input",
            name:"engineerEmail",
            message: "Enter: Engineer Email"
        },
        {
            type:"input",
            name:"engineerId",
            message: "Enter: Engineer Id"
        },
        {
            type:"input",
            name:"engineerGithub",
            message: "Enter: Engineer Github"
        },
        {
            type:"confirm",
            name:"addMore",
            message:"Add Another Employee?"
    
        }
        ]).then(answers =>{
            if(answers.addMore){
                addMore()
    }
    })
}

createIntern = () =>{
    inquirer.prompt([
        {
            type:"input",
            name:"internName",
            message: "Enter: Intern Name"
        },
        {
            type:"input",
            name:"internEmail",
            message: "Enter: Intern Email"
        },
        {
            type:"input",
            name:"internId",
            message: "Enter: Intern Id"
        },
        {
            type:"input",
            name:"internGithub",
            message: "Enter: Intern Github"
        },
        {
            type:"confirm",
            name:"addMore",
            message:"Add Another Employee?"
    
        }
        ]).then(answers =>{
            if(answers.addMore){
                addMore()
    }
    })
}

onInit = () =>{
    createManager()
}

onInit();