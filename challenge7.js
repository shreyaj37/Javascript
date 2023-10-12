// JavaScript code
// Change these values to control whether you see the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

function updatePage(document) {
    const updateForms = document.querySelectorAll("form");

    updateForms.forEach((updateForm) => {
        updateForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const target = event.target.getAttribute("data-target");
            const inputElement = document.getElementById(`${target}-input`);
            const targetElement = document.getElementById(target).querySelector(".value");
            targetElement.textContent = inputElement.value;
        });
    });
}

// Create a document object to represent the HTML structure
const document = document.implementation.createHTMLDocument("Update Page");

// Create input elements
const inputs = [
    { id: "name-input", value: "Adventure Backpack" },
    { id: "description-input", value: "A durable backpack for outdoor adventures" },
    { id: "color-input", value: "Green" },
    { id: "volume-input", value: "35L" },
];

inputs.forEach((input) => {
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("id", input.id);
    inputElement.setAttribute("value", input.value);
    document.body.appendChild(inputElement);

    const formElement = document.createElement("form");
    formElement.setAttribute("data-target", input.id);
    document.body.appendChild(formElement);
});

// Call the updatePage function
updatePage(document);

// Print the resulting HTML
console.log(document.documentElement.outerHTML);
