import inquirer from "inquirer";

async function cashTransfer(balance:number) {
    const answer = await inquirer.prompt([
        {
            name: "accNo",
            type: "number",
            message:"Enter account number"
        },
        {
            name:"amount",
            type:"number",
            message:"Enter ammount to transfe"
        }
    ])

    balance -= answer.amount;
    return balance;
}

export default cashTransfer;