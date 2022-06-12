const inquirer = require('inquirer')
const fs = require('fs');
const Manager = require('./src/Manager')
const Engineer = require('./src/Engineer')
const Intern = require('./src/Intern')
generateHTMLElements = require('./src/generateHTML')
const employeeArray = [];



createManager = () => {
    inquirer
    .prompt([
    {
        type: "input",
        name: 'name',
        message: 'Enter: Manager\'s Name'
    },
    {
        type: "input",
        name: 'email',
        message: 'Enter Manager\'s Email'
    },
    {
        type: "input",
        name: 'employeeId',
        message: 'Enter: Manager\'s Employee Number'
    },
    {
        type: "input",
        name: 'office',
        message: 'Enter Manager\'s Office Number'
    },
    {
        type:"confirm",
        name:"addMore",
        message:"Add Another Employee?"

    }
    ]).then(answers =>{
        let manager = new Manager(answers.name,  answers.email, answers.employeeId, answers.office)
        employeeArray.push(manager)
        if(answers.addMore){
            addMore()
        }else{
            generateHTMLElements(employeeArray);
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
            name:"name",
            message: "Enter: Engineer Name"
        },
        {
            type:"input",
            name:"email",
            message: "Enter: Engineer Email"
        },
        {
            type:"input",
            name:"employeeId",
            message: "Enter: Engineer Id"
        },
        {
            type:"input",
            name:"github",
            message: "Enter: Engineer Github"
        },
        {
            type:"confirm",
            name:"addMore",
            message:"Add Another Employee?"
    
        }
        ]).then(answers =>{
            let engineer = new Engineer(answers.name, answers.email, answers.employeeId,  answers.github)
            employeeArray.push(engineer)
            
            if(answers.addMore){
                addMore()
            }else{
                generateHTMLElements(employeeArray);
    }
    })
}

createIntern = () =>{
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message: "Enter: Intern Name"
        },
        {
            type:"input",
            name:"email",
            message: "Enter: Intern Email"
        },
        {
            type:"input",
            name:"employeeId",
            message: "Enter: Intern Id"
        },
        {
            type:"input",
            name:"school",
            message: "Enter: Intern School"
        },
        {
            type:"confirm",
            name:"addMore",
            message:"Add Another Employee?"
    
        }
        ]).then(answers =>{
            let intern = new Intern(answers.name, answers.email, answers.employeeId, answers.school)
            employeeArray.push(intern)
            if(answers.addMore){
                addMore()
            }else{
                generateHTMLElements(employeeArray);
            }
    })
}



onInit = () =>{
    createManager()
}

onInit();