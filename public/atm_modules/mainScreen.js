import inquirer from "inquirer";
import cashDeposit from "./deposit.js";
import cashWithDraw from "./withdraw.js";
// Continue function 
async function contOrNo() {
    const continueOrNot = await inquirer.prompt([
        {
            name: "continue",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want to continue transactions?"
        }
    ]);
    return continueOrNot.continue;
}
// let menuTypes : { balance: number }
async function menuScreen(balance) {
    do {
        const option = await inquirer.prompt([
            {
                name: "menu",
                type: "list",
                choices: ['Balance Inquiry', 'Cash Deposit', 'Cash Withdrawl', 'Transfer', 'Utility Bill', 'Exit'],
                message: "Select Transaction Type"
            }
        ]);
        switch (option.menu) {
            case "Balance Inquiry":
                console.log(`Your Balance is : ${balance}`);
                break;
            case "Cash Deposit":
                balance = await cashDeposit(balance);
                break;
            case "Cash Withdrawl":
                balance = await cashWithDraw(balance);
                console.log("Withdrawl");
                break;
            case "Transfer":
                console.log("Transfer");
                break;
            case "Utility Bill":
                console.log("Bill");
                break;
            case "Exit":
                console.log("Exit");
                break;
        }
        var otherTransaction = await contOrNo();
    } while (otherTransaction != "No");
}
export default menuScreen;
