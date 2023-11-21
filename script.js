// Add event listeners to input fields for the 'keydown' event
document.getElementById("tp").addEventListener("keydown", handleEnterKey);
document.getElementById("sl").addEventListener("keydown", handleEnterKey);
document.getElementById("margin").addEventListener("keydown", handleEnterKey);
document.getElementById("leverage").addEventListener("keydown", handleEnterKey);

document.getElementById("button").addEventListener("click", calculate);

function handleEnterKey(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') {
        calculate();
    }
}

function calculate() {
    // Check if any input field is empty
    if (
        document.getElementById("tp").value.trim() === "" ||
        document.getElementById("sl").value.trim() === "" ||
        document.getElementById("margin").value.trim() === "" ||
        document.getElementById("leverage").value.trim() === ""
    ) {
        alert("Please enter values in all fields.");
        return;
    }

    let tp = parseNumber(document.getElementById("tp").value);
    let sl = parseNumber(document.getElementById("sl").value);
    let margin = parseNumber(document.getElementById("margin").value);
    let leverage = parseNumber(document.getElementById("leverage").value);

    // Check if values are not empty and are valid numbers
    if (isNaN(tp) || isNaN(sl) || isNaN(margin) || isNaN(leverage)) {
        alert("Please enter valid numeric values.");
        return;
    }

    let tp_answer = (tp * leverage) / 100;
    let sl_answer = (sl * leverage) / 100;
    let tp_final = margin * tp_answer;
    let sl_final = margin * sl_answer;

    // Display the result in the result label with two decimal places
    document.getElementById("resultLabel").textContent = "You're risking $" + sl_final.toFixed(2) + " for $" + tp_final.toFixed(2) + " gain";
}

// Helper function to parse numbers with different decimal separators
function parseNumber(value) {
    // Return NaN for empty or undefined values
    return value ? parseFloat(value.replace(',', '.')) : NaN;
}
