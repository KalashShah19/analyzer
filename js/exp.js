// Auto-fill today's date
const dateInput = document.getElementById("date");
const today = new Date().toISOString().split("T")[0];
dateInput.value = today;

const outputBox = document.getElementById("output");

// Convert yyyy-mm-dd → dd/mm/yyyy
function formatDate(dateString) {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
}

document.getElementById("expenses").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const date = formatDate(dateInput.value);
    const category = document.getElementById("category").value;
    const amount = document.getElementById("amount").value;

    const formatted = `${amount} - ${name}, ${category} (${date})`;

    // Display output
    outputBox.textContent = formatted;
    outputBox.style.display = "block";

    // Silent clipboard copy
    navigator.clipboard.writeText(formatted);
});