import inquirer from "inquirer";
const currency = {
    USD: 1,
    INR: 83.30,
    AED: 3.67,
    OMR: 0.38,
    PKR: 277.09
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter From Currency",
        type: 'list',
        choices: ['USD', 'INR', 'AED', 'OMR', 'PKR']
    },
    {
        name: 'to',
        message: "Enter To Currency",
        type: 'list',
        choices: ['USD', 'INR', 'AED', 'OMR', 'PKR']
    },
    {
        name: 'amount',
        message: "Enter Your Amount",
        type: 'number',
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount)
