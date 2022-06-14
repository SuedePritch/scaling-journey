const Manager = require('../lib/Manager')

describe('Manager Class', () =>{
    describe('Manager Creation', () =>{
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
        })})
    describe("Manager Method Checks", () => {
    it('getName method check', () =>{
        const name = 'James';
        const email = 'james@test.com'
        const employeeId = '123'
        const officeNumber = '1'
        const obj = new Manager(name, email, employeeId, officeNumber)
        expect(obj.getName()).toEqual(name) 
    })
    it('getEmail method check', () =>{
        const name = 'James';
        const email = 'james@test.com'
        const employeeId = '123'
        const officeNumber = '1'
        const obj = new Manager(name, email, employeeId, officeNumber)
        expect(obj.getEmail()).toEqual(email) 
    })
    it('getId method check', () =>{
        const name = 'James';
        const email = 'james@test.com'
        const employeeId = '123'
        const officeNumber = '1'
        const obj = new Manager(name, email, employeeId, officeNumber)
        expect(obj.getId()).toEqual(employeeId) 
    })
    it('getRole method check', () =>{
        const name = 'James';
        const email = 'james@test.com'
        const employeeId = '123'
        const officeNumber = '1'
        const obj = new Manager(name, email, employeeId, officeNumber)
        expect(obj.getRole()).toEqual('Manager') 
    })
})
})