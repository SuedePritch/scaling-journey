const Intern = require('../src/Intern')

describe('Intern Class', () =>{
    describe('Intern Creation', () =>{
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
        })})
        describe('Intern Method Checks', () =>{
        it('getName method check', () =>{
            const name = 'James';
            const email = 'james@test.com'
            const employeeId = '123'
            const school = 'UofT'
            const obj = new Intern(name, email, employeeId, school)
            expect(obj.getName()).toEqual(name) 
        })
        it('getEmail method check', () =>{
            const name = 'James';
            const email = 'james@test.com'
            const employeeId = '123'
            const school = 'UofT'
            const obj = new Intern(name, email, employeeId, school)
            expect(obj.getEmail()).toEqual(email) 
        })
        it('getId method check', () =>{
            const name = 'James';
            const email = 'james@test.com'
            const employeeId = '123'
            const school = 'UofT'
            const obj = new Intern(name, email, employeeId, school)
            expect(obj.getId()).toEqual(employeeId) 
        })
        it('getRole method check', () =>{
            const name = 'James';
            const email = 'james@test.com'
            const employeeId = '123'
            const school = 'UofT'
            const obj = new Intern(name, email, employeeId, school)
            expect(obj.getRole()).toEqual('Intern') 
        })
        it('getSchool method check', () =>{
            const name = 'James';
            const email = 'james@test.com'
            const employeeId = '123'
            const school = 'UofT'
            const obj = new Intern(name, email, employeeId, school)
            expect(obj.getSchool()).toEqual(school) 
        })
    })
})