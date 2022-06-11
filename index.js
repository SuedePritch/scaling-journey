const inquirer = require('inquirer')
const Manager = require('./src/Manager')
const Engineer = require('./src/Engineer')
const Intern = require('./src/Intern')
const employeeArray = require('./src/generateHTML')

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
        name: 'managerEmail',
        message: 'Enter Manager\'s Email'
    },
    {
        type: "input",
        name: 'managerId',
        message: 'Enter: Manager\'s Employee Number'
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
        let manager = new Manager(answers.managerName,  answers.managerEmail, answers.managerId, answers.managerOffice)
        employeeArray.push(manager)
        if(answers.addMore){
            addMore()
        }else{
            console.log(employeeArray);
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
            let engineer = new Engineer(answers.engineerName, answers.engineerEmail, answers.engineerId,  answers.engineerGithub)
            employeeArray.push(engineer)
            
            if(answers.addMore){
                addMore()
            }else{
                console.log(employeeArray);
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
            name:"internSchool",
            message: "Enter: Intern School"
        },
        {
            type:"confirm",
            name:"addMore",
            message:"Add Another Employee?"
    
        }
        ]).then(answers =>{
            let intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
            employeeArray.push(intern)
            if(answers.addMore){
                addMore()
            }else{
                console.log(employeeArray);
            }
    })
}

onInit = () =>{
    createManager()
}

onInit();