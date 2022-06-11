const Manager = require('../src/Manager')

describe('Manager', () =>{
    describe('Manager class', () =>{
        it('should create new object with name, email, id, and office number', () =>{
            const name = 'James';
            const email = 'james@test.com'
            const employeeId = '123'
            const officeNumber = '1'
            const obj = new Manager(name, email, employeeId, officeNumber)
            expect(obj.name).toEqual(name)
            expect(obj.email).toEqual(email)
            expect(obj.employeeId).toEqual(employeeId)
            expect(obj.officeNumber).toEqual(officeNumber)
        })
    })
})