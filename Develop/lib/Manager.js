// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    constructor(name, role, email, ID, officeNumber) {
        this.name = name
        this.role = role
        this.email = email
        this.ID = ID
        this.officeNumber = officeNumber

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
        return this.ID
    }
    getofficeNumber() {
        return this.officeNumber
    }

}

module.exports.Manager = Manager;