const Employee = require('../lib/Employee')

describe('Employee Class', () =>{
        describe("Employee Creation", () => {
        test('should create new object with name, email, and id', () =>{
            const name = 'James';
            const email = 'james@test.com'
            const employeeId = '123'
            const obj = new Employee(name, email, employeeId)
            expect(obj.name).toEqual(name)
            expect(obj.email).toEqual(email)
            expect(obj.employeeId).toEqual(employeeId)
        })});
        describe("Employee Method Checks", () => {
        test('getName method check', () =>{
            const name = 'James';
            const email = 'james@test.com'
            const employeeId = '123'
            const obj = new Employee(name, email, employeeId)
            expect(obj.getName()).toEqual(name) 
        })
        test('getEmail method check', () =>{
            const name = 'James';
            const email = 'james@test.com'
            const employeeId = '123'
            const obj = new Employee(name, email, employeeId)
            expect(obj.getEmail()).toEqual(email) 
        })
        test('getId method check', () =>{
            const name = 'James';
            const email = 'james@test.com'
            const employeeId = '123'
            const obj = new Employee(name, email, employeeId)
            expect(obj.getId()).toEqual(employeeId) 
        })
        test('getRole method check', () =>{
            const name = 'James';
            const email = 'james@test.com'
            const employeeId = '123'
            const obj = new Employee(name, email, employeeId)
            expect(obj.getRole()).toEqual('Employee') 
        })
    })
})