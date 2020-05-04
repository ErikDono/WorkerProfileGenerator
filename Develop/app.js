const Manager = require("./lib/Manager").Manager;
const Engineer = require("./lib/Engineer").Engineer;
const Intern = require("./lib/Intern").Intern;
const inquirer = require("inquirer");
const fs = require("fs")
const path = require("path")
const { managerQuestions } = require("./questions/managerQuestions")
const { engineerQuestions } = require("./questions/engineerQuestions")
const { internQuestions } = require("./questions/internQuestions")
const render = require("./lib/htmlRenderer")
const { questions } = require("./questions/questions");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


const Team = [

]


function init() {
    function manager() {
        inquirer.prompt(managerQuestions).then(answers => {
            console.log(answers.officeNumber)
            const employee = new Manager(answers.name, answers.email, answers.ID, answers.officeNumber)
            console.log(employee.getOfficeNumber())
            Team.push(employee)


            if (answers.choice === true) {

                function mainQuestions() {

                    inquirer.prompt(questions).then(answers => {

                        function intern() {
                            inquirer.prompt(internQuestions).then(answers => {
                                console.log(answers.school)
                                const employee = new Intern(answers.name, answers.email, answers.ID, answers.school)
                                console.log(employee.getSchool())
                                Team.push(employee)
                                if (answers.choice === true) {
                                    mainQuestions()
                                }
                                else {
                                    fs.writeFileSync("team.html", render(Team))
                                }
                            })

                        }
                        function engineer() {
                            inquirer.prompt(engineerQuestions).then(answers => {
                                console.log(answers.gitHub)
                                const employee = new Engineer(answers.name, answers.email, answers.ID, answers.gitHub)
                                console.log(employee.getGithub())
                                Team.push(employee)
                                if (answers.choice === true) {
                                    mainQuestions()
                                }
                                else {
                                    fs.writeFileSync("team.html", render(Team))
                                }
                            })

                        }

                        if (answers.occupation === "Intern") {
                            intern()
                        }
                        else if (answers.occupation === "Engineer") {
                            engineer()
                        }
                        else {
                            fs.writeFileSync("team.html", render(Team))
                        }

                    })
                }

                mainQuestions()

            } else {
                fs.writeFileSync("team.html", render(Team))
            }

        }).catch(err => err)


    }

    manager()

    // inquirer.prompt(questions).then(answers => {

    // function manager() {
    //     inquirer.prompt(managerQuestions).then(answers => {
    //         console.log(answers.officeNumber)
    //         const employee = new Manager(answers.officeNumber, answers.name, answers.email, answers.ID)
    //         console.log(employee.getOfficeNumber())
    //         EmployeeList.push(employee)
    //     })
    //     }


    //     if (answers.occupation == "Manager") {
    //         manager()
    //     }
    //     if (answers.occupation == "Engineer") {
    //         inquirer.prompt(engineerQuestions).then(answers => {
    //             console.log(answers.gitHub)
    //             console.log(answers.email)
    //             const employee = new Engineer(answers.name, answers.email, answers.ID, answers.gitHub)
    //             console.log(employee.getGitHub())
    //             console.log(employee.getRole())
    //             EmployeeList.push(employee)
    //         })
    //     }
    //     if (answers.occupation == "Intern") {
    //         inquirer.prompt(internQuestions).then(answers => {
    //             console.log(answers.school)
    //             const employee = new Intern(answers.school, answers.name, answers.email, answers.ID, answers.again)
    //             // if (employee.again === "Yes") {
    //             //     init();
    //             //     console.log(employee.getSchool());
    //             //     EmployeeList.push(employee)
    //             // }
    //             // else {
    //             //     console.log(employee.getSchool())
    //             //     EmployeeList.push(employee)
    //             //     return ("Goodbye!")
    //             // }
    //             console.log(employee.getSchool())
    //             EmployeeList.push(employee)

    //         })

    //     }
    //     return answers
}



init()





// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
