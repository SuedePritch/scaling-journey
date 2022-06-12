const fs = require('fs');


const fileName = './dist/index.html'
const htmlHeader = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Share+Tech+Mono&family=Source+Code+Pro:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Team Members</title>
</head>
<header>
    <h1 id='heading-title'>Team Roster</h1>
</header>
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
            err ? console.error(err) : console.log('Footer Created'));
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
            <div class="card" id="manager-card">
                <h2>${name}</h2> 
                <p>${role}</p>
                <a href="mailto:${email}">${email}</a>
                <p>id#: ${id}</p>
                <p>Office Number: ${office}</p>
            </div>

            `, (err) =>
            err ? console.error(err) : console.log('Manager Card'));


        }else if(role === 'Engineer'){
            let github = employeeArray[i].getGithub()
            fs.appendFile(fileName,`
            <div class="card" id="engineer-card">
                <h2>${name}</h2> 
                <p>${role}</p>
                <a href="mailto:${email}">${email}</a>
                <p>id#: ${id}</p>
                <a href="http://github.com/${github}" target="_blank">github.com/${github}</a>
            </div>


            `, (err) =>
            err ? console.error(err) : console.log('Engineer Card'));


        }else if(role === 'Intern'){
            let school = employeeArray[i].getSchool()
            fs.appendFile(fileName, `
            <div class="card" id="intern-card">
                <h2>${name}</h2> 
                <p>${role}</p>
                <a href="mailto:${email}">${email}</a>
                <p>id#: ${id}</p>
                <p>School: ${school}</p>
            </div>
            
            
            `, (err) =>
            err ? console.error(err) : console.log('Intern Card'));
        }
        
    }
    setTimeout(()=>{
        addHTMLFooter();
    }, 1000)
}

module.exports = generateHTMLElements