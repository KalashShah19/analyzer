const categories = ["Food", "Shokh", "Perfumes", "Entertainment", "Gadgets", "Fuel", "Bills", "Shopping", "Chocolates", "Travel", "Miscellaneous"];

function detectCategory(text) {
    const lower = text.toLowerCase();

    if (lower.includes("chocolate")) return "Chocolates";
    if (lower.includes("chocos")) return "Chocolates";
    if (lower.includes("bill")) return "Bills";
    if (lower.includes("recharge")) return "Bills";
    if (lower.includes("petrol")) return "Fuel";
    if (lower.includes("diesel")) return "Fuel";
    if (lower.includes("mummy")) return "Bills";
    if (lower.includes("game")) return "Entertainment";
    if (lower.includes("turf")) return "Fuel";
    if (lower.includes("ticket")) return "Travel";
    if (lower.includes("train")) return "Travel";
    if (lower.includes("bus")) return "Travel";
    if (lower.includes("perfume")) return "Shokh";
    if (lower.includes("glove")) return "Shokh";
    if (lower.includes("keychain")) return "Shokh";
    return null; // no auto-match
}


function loadExpenses() {
    const input = document.getElementById('expensesInput').value.trim();
    const lines = input.split('\n').filter(line => line.trim() !== '');
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';

    lines.forEach((line, index) => {
        const row = document.createElement('div');
        row.className = 'expense-row';

        const span = document.createElement('span');
        span.textContent = line;

        const select = document.createElement('select');
        categories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            select.appendChild(option);
        });

        // Auto-select category if match found
        const autoCategory = detectCategory(line);
        if (autoCategory) {
            select.value = autoCategory;
        }

        row.appendChild(span);
        row.appendChild(select);
        expenseList.appendChild(row);
    });
}

function generateOutput() {
    const expenseRows = document.querySelectorAll('.expense-row');
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    expenseRows.forEach(row => {
        let text = row.querySelector('span').textContent.trim();
        const category = row.querySelector('select').value;

        // Extract date inside parentheses
        const dateMatch = text.match(/\((.*?)\)/);
        const date = dateMatch ? dateMatch[1].trim() : "";

        // Remove the existing parentheses + date from the text
        text = text.replace(/\(.*?\)/, "").trim();

        // Final formatted output
        const formatted = `${text}, ${category} ( ${date} )`;

        const div = document.createElement('div');
        div.textContent = formatted;
        outputDiv.appendChild(div);
    });
}
