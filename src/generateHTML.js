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
    <h1 id='heading-title'>Team Members</h1>
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
                <h3>${role}</h3>
                <a href="mailto:${email}">${email}</a>
                <p id="bottomleft">Office: ${office}</p>
                <p id="employeeId">id#${id}</p>
            </div>

            `, (err) =>
            err ? console.error(err) : console.log('Manager Card'));


        }else if(role === 'Engineer'){
            let github = employeeArray[i].getGithub()
            fs.appendFile(fileName,`
            <div class="card" id="engineer-card">
                <h2>${name}</h2> 
                <h3>${role}</h3>
                <a href="mailto:${email}">${email}</a><br>
                <a href="http://github.com/${github}" target="_blank">
                    <svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/></svg>
                    <span id="github-name">${github}</span>
                </a>
                <p id="employeeId">id#${id}</p>
            </div>


            `, (err) =>
            err ? console.error(err) : console.log('Engineer Card'));


        }else if(role === 'Intern'){
            let school = employeeArray[i].getSchool()
            fs.appendFile(fileName, `
            <div class="card" id="intern-card">
                <h2>${name}</h2> 
                <h3>${role}</h3>
                <a href="mailto:${email}">${email}</a>
                <p  id="bottomleft>School: ${school}</p>
                <p id="employeeId">id#${id}</p>
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