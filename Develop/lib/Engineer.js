// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee").Employee

class Engineer extends Employee {
    constructor(name, email, id, gitHub) {
        super(name, id, email)
        this.gitHub = gitHub
        this.role = "Engineer"
    }
    getGithub() {
        return this.gitHub
    }
    getRole() {
        return this.role
    }
}
module.exports.Engineer = Engineer;