class Employee{
    constructor(name, email, employeeId){
        this.name = name,
        this.email = email,
        this.employeeId = employeeId
    }
    getName(){
        return this.name
    }
    getId(){
        return this.employeeId
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return this.constructor.name
    }
}
module.exports = Employee