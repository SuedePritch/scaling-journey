const fs = require('fs');

const fileName = './dist/index.html'
const htmlHeader = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title>Team Contacts</title>
</head>
<body>
`
createHTMLFile = () =>{
    fs.appendFile(fileName, htmlHeader, (err) =>
    err ? console.error(err) : console.log('Created Html'))
}

generateHTMLElements = (employeeArray) => {
    createHTMLFile(fileName, htmlHeader);
    for (let i = 0; i < employeeArray.length; i++) {
        let role = employeeArray[i].getRole()
        let name = employeeArray[i].getName()
        let email = employeeArray[i].getEmail()
        let id = employeeArray[i].getId()
        if(role === 'Manager'){
            let office = employeeArray[i].officeNumber
            console.log(`
            ${role},
            Name:${name}, 
            Email:${email}, 
            EmployessId: ${id}, 
            Office Number:${office}`);
        }else if(role === 'Engineer'){
            let github = employeeArray[i].getGithub()
            console.log(`
            ${role},
            Name:${name}, 
            Email:${email}, 
            EmployessId: ${id}, 
            Github: http://github.com/${github}`);
        }else if(role === 'Intern'){
            let school = employeeArray[i].getSchool()
            console.log(`
            ${role},
            Name:${name}, 
            Email:${email}, 
            EmployessId: ${id}, 
            School: ${school}`);
        }else{
            return
        }
        
    }
}

module.exports = generateHTMLElements