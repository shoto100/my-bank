const loginBtn = document.getElementById("login");
const depositBtn = document.getElementById("addDeposit");
const withdrawBtn = document.getElementById("addWithdraw");

//! login button event handler

loginBtn.addEventListener("click", function() {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//! deposit button event handler

depositBtn.addEventListener("click", function() {
    var depositNumber = getInputNumber("depositAmount");

    if (depositNumber > 0) {
        updateSpanText("currentDeposit", depositNumber);
        updateSpanText("currentBalance", depositNumber);
    }
    
    document.getElementById("depositAmount").value = "";
})

//! withdraw button event handler

withdrawBtn.addEventListener("click", function() {
    const withdrawNumber = getInputNumber("withdrawAmount");
    
    
    const current = document.getElementById("currentBalance").innerText;
    
    if (current > 0)  {
        updateSpanText("currentWithdraw", withdrawNumber);
        updateSpanText("currentBalance", -1 * withdrawNumber);
    }
    else {
        alert("Your current balance is zero. Please deposit some money");
    }
    document.getElementById("withdrawAmount").value = "";
})


function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}


function updateSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const amount = addedNumber + currentNumber;
    
    document.getElementById(id).innerText = amount;
}
