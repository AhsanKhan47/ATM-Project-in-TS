import inquirer from "inquirer";


// OTHER AMOUNT function 
async function OtherAmount(balance: number) {

    const otherAmt = await inquirer.prompt([
        {
            name: "otherAmmount",
            type: "number",
            message: "Enter your ammount to withdraw"
        }
    ])
    if (otherAmt.otherAmmount < balance) {
        balance -= otherAmt.otherAmmount;
    }
    else {
        console.log(`Insufficient Balance please recharge your account \n Current balance : ${balance}`)
        OtherAmount(balance)
    }
    return balance; // this return is used to store the value of balance in function when stored in variable. so we can use it later to keep track of balance

}

// WithDraw funtion

async function cashWithDraw(balance: number) {
    const withdrawOpt = await inquirer.prompt([
        {
            name: "amount",
            type: "list",
            choices: ["500", "1000", "5000", "10000", 'Other Amount']
        }
    ])



    switch (withdrawOpt.amount) {
        case "500":
            if (balance > Number(withdrawOpt.amount)) {    //converting type string(line no. 35) to number to use relational operator seprately for each option in withdraw list
                balance -= 500;
                console.log(`Your balance is ${balance}`)
                break;
            }

            else {
                console.log(`Insufficient Balance please recharge your account \n Current balance : ${balance}`)
            }

        case "1000":
            if (balance > Number(withdrawOpt.amount)) {

                balance -= 1000;
                console.log(`Your balance is ${balance}`)
                break;
            }
            else {
                console.log(`Insufficient Balance please recharge your account \n Current balance : ${balance}`)
            }
       
        case "5000":
            if (balance > Number(withdrawOpt.amount)) {
                balance -= 5000;
                console.log(`Your balance is ${balance}`)
                break;
            }
            else {
                console.log(`Insufficient Balance please recharge your account \n Current balance : ${balance}`)
            }
        case "10000":
            if (balance > Number(withdrawOpt.amount)) {
                balance -= 10000;
                console.log(`Your balance is ${balance}`)
                break;
            }
            else {
                console.log(`Insufficient Balance please recharge your account \n Current balance : ${balance}`)
            }
        case "Other Amount":
            console.log(`Your balance is : ${balance}`)

            balance = await OtherAmount(balance)
            console.log(`Your balance is : ${balance}`)
            break;
    }
    return balance;
}



export default cashWithDraw;