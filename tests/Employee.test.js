const Employee = require('../src/Employee')

describe('Employee', () =>{
    describe('Employee class', () =>{
        it('should create new object with name, email, and id', () =>{
            const name = 'James';
            const email = 'james@test.com'
            const employeeId = '123'
            const obj = new Employee(name, email, employeeId)
            expect(obj.name).toEqual(name)
            expect(obj.email).toEqual(email)
            expect(obj.employeeId).toEqual(employeeId)
        })
    })
})