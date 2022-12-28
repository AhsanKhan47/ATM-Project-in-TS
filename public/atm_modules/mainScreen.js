import inquirer from "inquirer";
import cashDeposit from "./deposit.js";
import cashTransfer from "./transfer.js";
import utilityB from "./utilityBills.js";
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
                console.log(`Your new Balance is : ${balance}`);
                break;
            case "Cash Withdrawl":
                balance = await cashWithDraw(balance);
                console.log(`Cash withdrawed successfully! Your new Balance is : ${balance}`);
                break;
            case "Transfer":
                balance = await cashTransfer(balance);
                console.log(`Cash transfer successfully! Your new Balance is : ${balance}`);
                break;
            case "Utility Bill":
                balance = await utilityB(balance);
                break;
            case "Exit":
                otherTransaction = "No";
                break;
        }
        if (option.menu != "Exit") {
            var otherTransaction = await contOrNo();
        }
        if (otherTransaction == "No") {
            console.log("Thank you for using our service");
        }
    } while (otherTransaction != "No");
}
export default menuScreen;
