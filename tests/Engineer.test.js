const Engineer = require('../lib/Engineer')

describe('Engineer Class', () =>{
    describe('Engineer Creation', () =>{
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
        })})
        describe('Engineer Method Checks', () =>{
        it('getName method check', () =>{
            const name = 'James';
            const email = 'james@test.com'
            const employeeId = '123'
            const github = 'suedepritch'
            const obj = new Engineer(name, email, employeeId, github)
            expect(obj.getName()).toEqual(name) 
        })
        it('getEmail method check', () =>{
            const name = 'James';
            const email = 'james@test.com'
            const employeeId = '123'
            const github = 'suedepritch'
            const obj = new Engineer(name, email, employeeId, github)
            expect(obj.getEmail()).toEqual(email) 
        })
        it('getId method check', () =>{
            const name = 'James';
            const email = 'james@test.com'
            const employeeId = '123'
            const github = 'suedepritch'
            const obj = new Engineer(name, email, employeeId, github)
            expect(obj.getId()).toEqual(employeeId) 
        })
        it('getRole method check', () =>{
            const name = 'James';
            const email = 'james@test.com'
            const employeeId = '123'
            const github = 'suedepritch'
            const obj = new Engineer(name, email, employeeId, github)
            expect(obj.getRole()).toEqual('Engineer') 
        })
        it('getGithub method check', () =>{
            const name = 'James';
            const email = 'james@test.com'
            const employeeId = '123'
            const github = 'suedepritch'
            const obj = new Engineer(name, email, employeeId, github)
            expect(obj.getGithub()).toEqual(github) 
        })
    })
})