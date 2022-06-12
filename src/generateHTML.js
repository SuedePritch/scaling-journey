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
    <main>
`

const htmlFooter = `
</main>
</body>
</html>
`
createHTMLFile = () =>{
    fs.appendFile(fileName, htmlHeader, (err) =>
    err ? console.error(err) : console.log('Created Html'))
}
addHTMLFooter = () =>{
    fs.appendFile(fileName, htmlFooter, (err) =>
            err ? console.error(err) : console.log('FooterCreated'));
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
            fs.appendFile(fileName, `
            <div>${role}</div>,
            <div>Name:${name}</div>, 
            <div>Email:${email}</div>, 
            <div>EmployessId: ${id}</div>, 
            <div>Office Number:${office}</div>


            `, (err) =>
            err ? console.error(err) : console.log('Manager Card'));


        }else if(role === 'Engineer'){
            let github = employeeArray[i].getGithub()
            fs.appendFile(fileName,`
            <div>${role}</div>,
            <div>Name:${name}</div>, 
            <div>Email:${email}</div>, 
            <div>EmployessId: ${id}</div>, 
            <div>Github: http://github.com/${github}</div>


            `, (err) =>
            err ? console.error(err) : console.log('Engineer Card'));


        }else if(role === 'Intern'){
            let school = employeeArray[i].getSchool()
            fs.appendFile(fileName, `
            <div>${role}</div>,
            <div>Name:${name}</div>, 
            <div>Email:${email}</div>, 
            <div>EmployessId: ${id}</div>, 
            <div>School: ${school}</div>
            
            
            `, (err) =>
            err ? console.error(err) : console.log('Intern Card'));
        }else{
            return
        }
        
    }
    addHTMLFooter();
}

module.exports = generateHTMLElements