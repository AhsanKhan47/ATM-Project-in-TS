import users from "./users.js";
import inquirer from "inquirer";

async function login() {
    const answer = await inquirer.prompt([
        {
            name: "accountNumber",
            type: "number",
            message: "Please enter your Account Number"

        },
        {
            name: "pin",
            type: "password",
            message: "Enter your pin"
        }
    ]);

    let user = users.find(x => x.accountNumber == answer.accountNumber && x.pinCode == answer.pin);

    if (typeof user != "undefined") {
        console.log("You are successfully logged in.");
        console.log(`Welcome ${user.name}`)
        console.log(`Your balance is ${user.balance}`)
    }
    else {
        console.log("You entered invalid pin or Acc number")
    }


}
export default login;