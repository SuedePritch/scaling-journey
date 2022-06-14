//import packages
const inquirer = require('inquirer')

//import classes
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

//import generateHTML handles html creation and card generation using employeeArray
generateHTMLElements = require('./src/generateHTML')
const employeeArray = [];


//The initial questions are manager details
//Can only be one manager
//Creates manager
//Pushes new manager to employee array
//Asks if you want to add more employees
//if yes then shows choice for employee class in addMore()
//if finished it generates html 
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

//engineer questions
//creates engineer
//pushes new engineer to employee array
//Asks if you want to add more employees
//if yes then shows choice for employee class in addMore()
//if finished it generates html 
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

//intern questions
//creates intern
//pushes new intern to employee array
//Asks if you want to add more employees
//if yes then shows choice for employee class in addMore()
//if finished it generates html 
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

//this handles the choice between engineer and intern
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


onInit = () =>{
    //starts inquirer questions
    createManager()
}

onInit();