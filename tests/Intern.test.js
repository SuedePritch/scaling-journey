const Intern = require('../src/Intern')

describe('Intern', () =>{
    describe('Intern class', () =>{
        it('should create new object with name, email, id, and school', () =>{
            const name = 'James';
            const email = 'james@test.com'
            const employeeId = '123'
            const school = 'UofT'
            const obj = new Intern(name, email, employeeId, school)
            expect(obj.name).toEqual(name)
            expect(obj.email).toEqual(email)
            expect(obj.employeeId).toEqual(employeeId)
            expect(obj.school).toEqual(school)
        })
    })
})