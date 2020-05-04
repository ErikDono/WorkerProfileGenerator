// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee").Employee

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, id, email)
        this.github = github
        this.role = "Engineer"
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return ("Engineer")
    }
}
module.exports.Engineer = Engineer;