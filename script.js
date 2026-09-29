// ==========================================
// SpendWise Interactive JavaScript
// ==========================================


// 1. Store application data

let monthlyBudget = 50000;


// Array for storing multiple expense records

let expenses = [];


// ==========================================
// 2. Get HTML elements from the DOM
// ==========================================

const budgetForm = document.getElementById("budgetForm");

const budgetInput = document.getElementById("budgetInput");

const expenseForm = document.getElementById("expenseForm");

const expenseName = document.getElementById("expenseName");

const expenseAmount = document.getElementById("expenseAmount");

const budgetDisplay = document.getElementById("budgetDisplay");

const expenseDisplay = document.getElementById("expenseDisplay");

const balanceDisplay = document.getElementById("balanceDisplay");

const budgetMessage = document.getElementById("budgetMessage");

const expenseList = document.getElementById("expenseList");

const clearButton = document.getElementById("clearButton");


// ==========================================
// 3. Budget calculation function
// ==========================================

function calculateTotalExpenses() {

    let total = 0;

    // Loop through all expenses

    for (let i = 0; i < expenses.length; i++) {

        total = total + expenses[i].amount;

    }

    return total;
}


// ==========================================
// 4. Calculate remaining balance
// ==========================================

function calculateBalance() {

    const totalExpenses = calculateTotalExpenses();

    return monthlyBudget - totalExpenses;
}


// ==========================================
// 5. Update dashboard
// ==========================================

function updateDashboard() {

    const totalExpenses = calculateTotalExpenses();

    const remainingBalance = calculateBalance();


    // Update the HTML

    budgetDisplay.textContent =
        `KES ${monthlyBudget.toLocaleString()}`;

    expenseDisplay.textContent =
        `KES ${totalExpenses.toLocaleString()}`;

    balanceDisplay.textContent =
        `KES ${remainingBalance.toLocaleString()}`;


    // ======================================
    // Conditional statements
    // ======================================

    if (remainingBalance < 0) {

        budgetMessage.textContent =
            "⚠️ You have exceeded your budget.";

        budgetMessage.style.color = "#ef4444";

    }

    else if (remainingBalance === 0) {

        budgetMessage.textContent =
            "⚠️ You have used your entire budget.";

        budgetMessage.style.color = "#f59e0b";

    }

    else if (remainingBalance < monthlyBudget * 0.2) {

        budgetMessage.textContent =
            "⚠️ Your remaining balance is getting low.";

        budgetMessage.style.color = "#f59e0b";

    }

    else {

        budgetMessage.textContent =
            "✅ Your spending is within your budget.";

        budgetMessage.style.color = "#10b981";

    }


    // Display the expense records

    displayExpenses();
}


// ==========================================
// 6. Display expenses using a loop
// ==========================================

function displayExpenses() {

    expenseList.innerHTML = "";


    // Check if there are no expenses

    if (expenses.length === 0) {

        expenseList.innerHTML =
            '<p class="empty-message">No expenses added yet.</p>';

        return;
    }


    // Loop through the expense array

    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];


        // Create HTML for each expense

        const expenseItem = document.createElement("div");

        expenseItem.className = "expense-item";


        expenseItem.innerHTML = `
            <strong>${expense.name}</strong>
            <span>- KES ${expense.amount.toLocaleString()}</span>
        `;


        // Add the expense to the webpage

        expenseList.appendChild(expenseItem);
    }
}


// ==========================================
// 7. Handle budget form
// ==========================================

budgetForm.addEventListener("submit", function(event) {

    // Stop the page from refreshing

    event.preventDefault();


    const newBudget = Number(budgetInput.value);


    // Validate budget

    if (newBudget <= 0 || isNaN(newBudget)) {

        alert("Please enter a valid budget amount.");

        return;
    }


    // Update the budget

    monthlyBudget = newBudget;


    // Update the webpage

    updateDashboard();


    // Clear the input

    budgetInput.value = "";

});


// ==========================================
// 8. Handle expense form
// ==========================================

expenseForm.addEventListener("submit", function(event) {

    // Stop page refresh

    event.preventDefault();


    const name = expenseName.value.trim();

    const amount = Number(expenseAmount.value);


    // Validate user input

    if (name === "" || amount <= 0 || isNaN(amount)) {

        alert("Please enter a valid expense name and amount.");

        return;
    }


    // Create an expense object

    const newExpense = {

        name: name,

        amount: amount

    };


    // Add expense to array

    expenses.push(newExpense);


    // Update dashboard

    updateDashboard();


    // Clear form fields

    expenseName.value = "";

    expenseAmount.value = "";

});


// ==========================================
// 9. Clear all expenses
// ==========================================

clearButton.addEventListener("click", function() {

    if (expenses.length === 0) {

        alert("There are no expenses to clear.");

        return;
    }


    const confirmClear =
        confirm("Are you sure you want to clear all expenses?");


    if (confirmClear) {

        expenses = [];

        updateDashboard();

    }

});


// ==========================================
// 10. Load the dashboard
// ==========================================

updateDashboard();