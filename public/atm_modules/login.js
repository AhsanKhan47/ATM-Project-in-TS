import users from "./users.js";
import inquirer from "inquirer";
import menuScreen from "./mainScreen.js";
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
        console.log(`Welcome ${user.name}`);
        menuScreen(user.balance);
    }
    else {
        console.log("You entered invalid pin or Acc number");
    }
}
// export const str = user;
export default login;
