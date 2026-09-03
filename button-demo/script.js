// Dynamic list - add and delete items
const thingInput = document.querySelector("#thingInput");
const addThing = document.querySelector("#addThing");
const thingsList = document.querySelector("#thingsList");

addThing.addEventListener("click", function () {
    const text = thingInput.value.trim();
    if (text === "") return;

    const newItem = document.createElement("li");
    newItem.textContent = text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete selected item";
    deleteButton.addEventListener("click", function () {
        newItem.remove();
    });

    newItem.appendChild(document.createTextNode(" "));
    newItem.appendChild(deleteButton);
    thingsList.appendChild(newItem);
    thingInput.value = "";
    thingInput.focus();
});

// Contact form validation - style changes on input
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");
const contactFields = [
        { input: document.querySelector("#contactName"), error: document.querySelector("#nameError"),
            message: "Please enter your name." },
        { input: document.querySelector("#contactEmail"), error: document.querySelector("#emailError"),
            message: "Please enter a valid email address (e.g., ddiaz@my.campus.edu)." },
        { input: document.querySelector("#contactPhone"), error: document.querySelector("#phoneError"),
            message: "Please enter your phone number." },
        { input: document.querySelector("#contactMessage"), error: document.querySelector("#messageError"),
            message: "Please enter a message." }
];


function validateContactField(field) {
    const input = field.input;
    const error = field.error;
    const invalid = (input.required && input.value.trim() === "") ||
        (input.value.trim() !== "" && !input.validity.valid);

    error.textContent = invalid ? field.message : "";
    input.setAttribute("aria-invalid", String(invalid));
    return !invalid;
}
contactFields.forEach(function (field) {
    field.input.addEventListener("input", function () {
        field.error.textContent = "";
        field.input.setAttribute("aria-invalid", "false");
        field.input.classList.toggle("input-valid", field.input.validity.valid);
        field.input.style.borderColor = field.input.validity.valid ? "" : "crimson";
    });
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formIsValid = contactFields.map(validateContactField).every(Boolean);

    if (!formIsValid) {
        formStatus.textContent = "Please correct the highlighted fields.";
        return;
    }

    formStatus.textContent = "Thank you. Your message was submitted successfully.";

    const adviceMessage = document.querySelector("#adviceMessage");
    adviceMessage.textContent = "Loading advice...";

    fetch("https://api.adviceslip.com/advice")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Advice request failed.");
            }
            return response.json();
        })
        .then(function (data) {
            adviceMessage.textContent = data.slip.advice;
        })
        .catch(function () {
            adviceMessage.textContent = "Advice is unavailable right now. Please try again later.";
        });
});