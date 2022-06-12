const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(name, email, employeeId, github){
        super(name,email,employeeId);
        this.github = github
    }
    getGithub(){
        return this.github
    }
}
module.exports = Engineer