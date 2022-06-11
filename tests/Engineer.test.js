const Engineer = require('../src/Engineer')

describe('Engineer', () =>{
    describe('Engineer class', () =>{
        it('should create new object with name, email, id, and github', () =>{
            const name = 'James';
            const email = 'james@test.com'
            const employeeId = '123'
            const github = 'suedepritch'
            const obj = new Engineer(name, email, employeeId, github)
            expect(obj.name).toEqual(name)
            expect(obj.email).toEqual(email)
            expect(obj.employeeId).toEqual(employeeId)
            expect(obj.github).toEqual(github)
        })
    })
})