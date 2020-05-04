const Employee = require("./Employee").Employee

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return ("Manager")
    }
}
module.exports.Manager = Manager;