
var totalexp = [];

for (let i = 0; i < 7; i++) {
    var expense = parseFloat(prompt("Enter your daily expense for day " + (i + 1)));
    totalexp.push(expense);
}


function getTotalExpense(exp) {
    var sum = 0;
    for (let i = 0; i < exp.length; i++) {  
        sum += exp[i];
    }
    return sum;
}


document.write("Expenses: " + totalexp + "<br>");
document.write("Total Expense: " + getTotalExpense(totalexp));  
