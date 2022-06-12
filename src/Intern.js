const Employee = require('./Employee')

class Intern extends Employee{
    constructor(name, email, employeeId, school){
        super(name,email,employeeId);
        this.school = school;
    }
    getSchool(){
        return this.school
    }
}
module.exports = Intern