// ==========================================
// SpendWise JavaScript Foundation
// ==========================================

// Step 1: Store application information

const appName = "SpendWise";
const currency = "KES";

// Default budgeting data
let budget = 50000;
let expense = 15000;

let expenseName = "Monthly Expenses";
let expenseAmount = 15000;


// ==========================================
// Step 2: Create reusable functions
// ==========================================

// Function to calculate remaining balance
function calculateBalance(budget, expense) {
    return budget - expense;
}


// Function to calculate weekly budget
function calculateWeeklyBudget(monthlyBudget) {
    return monthlyBudget / 4;
}


// Function to calculate expense percentage
function calculateExpensePercentage(budget, expense) {
    return (expense / budget) * 100;
}


// ==========================================
// Step 3: Collect user input
// ==========================================

function startBudgetCalculator() {

    // Ask the user for their budget
    let userBudget = Number(
        prompt("Enter your monthly budget in KES:")
    );

    // Ask the user for their expenses
    let userExpense = Number(
        prompt("Enter your total monthly expenses in KES:")
    );


    // Check if the user entered valid numbers
    if (isNaN(userBudget) || isNaN(userExpense)) {

        console.log("Please enter valid numbers.");

        return;
    }


    // ==========================================
    // Step 4: Perform calculations
    // ==========================================

    let balance = calculateBalance(
        userBudget,
        userExpense
    );

    let weeklyBudget = calculateWeeklyBudget(
        userBudget
    );

    let expensePercentage = calculateExpensePercentage(
        userBudget,
        userExpense
    );


    // ==========================================
    // Step 5: Display results in console
    // ==========================================

    console.log("================================");
    console.log(appName + " Budget Report");
    console.log("================================");

    console.log("Monthly Budget:", currency, userBudget);

    console.log(
        "Monthly Expenses:",
        currency,
        userExpense
    );

    console.log(
        "Remaining Balance:",
        currency,
        balance
    );

    console.log(
        "Weekly Budget:",
        currency,
        weeklyBudget
    );

    console.log(
        "Expense Percentage:",
        expensePercentage.toFixed(2) + "%"
    );


    // Display a message depending on the balance
    if (balance > 0) {

        console.log(
            "Status: You have money remaining in your budget."
        );

    } else if (balance === 0) {

        console.log(
            "Status: Your budget has been fully used."
        );

    } else {

        console.log(
            "Status: You have exceeded your budget."
        );
    }


    // Update the balance displayed on the webpage
    const balanceDisplay =
        document.getElementById("balance-display");

    balanceDisplay.textContent =
        currency + " " + balance.toLocaleString();


    console.log("================================");
}


// ==========================================
// Step 6: Connect JavaScript to the button
// ==========================================

const calculatorButton =
    document.getElementById("start-calculator");


calculatorButton.addEventListener(
    "click",
    startBudgetCalculator
);


// ==========================================
// Step 7: Display initial data
// ==========================================

let initialBalance = calculateBalance(
    budget,
    expense
);

let initialWeeklyBudget = calculateWeeklyBudget(
    budget
);

console.log("Welcome to " + appName);

console.log(
    "Initial Budget:",
    currency,
    budget
);

console.log(
    "Initial Expense:",
    currency,
    expense
);

console.log(
    "Initial Remaining Balance:",
    currency,
    initialBalance
);

console.log(
    "Initial Weekly Budget:",
    currency,
    initialWeeklyBudget
);
