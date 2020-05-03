// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Intern {
    constructor(name, role, email, id, officeNumber) {
        this.name = name
        this.role = role
        this.email = email
        this.id = id
        this.github = github

    }
    getName() {
        return this.name
    }
    getRole() {
        return this.role
    }
    getEmail() {
        return this.email
    }
    getId() {
        return this.id
    }
    getGithub() {
        return this.github
    }

}

module.exports.Intern = Intern;