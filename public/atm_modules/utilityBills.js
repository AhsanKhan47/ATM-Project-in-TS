import inquirer from "inquirer";
async function utilityB(balance) {
    const electric_Bill = Math.ceil(Math.random() * 1000 + 1);
    const gas_Bill = Math.ceil(Math.random() * 1000 + 1);
    const netflix_Bill = Math.ceil(Math.random() * 1000 + 1);
    const answer = await inquirer.prompt([
        {
            name: "billType",
            type: "list",
            choices: ["Electricity", "Gas", "Netflix"],
            message: "Please select your Bill type"
        }
    ]);
    if (answer.billType == "Electricity") {
        balance -= electric_Bill;
        console.log(`Your Bill is ${electric_Bill} \n Bill paid successfully`);
    }
    else if (answer.billType == "Gas") {
        balance -= electric_Bill;
        console.log(`Your Bill is ${gas_Bill} \n Bill paid successfully`);
    }
    else if (answer.billType == "Netflix") {
        balance -= electric_Bill;
        console.log(`Your Bill is ${netflix_Bill} \n Bill paid successfully`);
    }
    return balance;
}
export default utilityB;
