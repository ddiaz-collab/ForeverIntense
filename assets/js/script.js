const processToggle = document.querySelector("#process-toggle");
const processDetails = document.querySelector("#process-details");

processToggle.addEventListener("click", function () {
    const isHidden = processDetails.hidden;
    processDetails.hidden = !isHidden;
    processToggle.textContent = isHidden ? "Hide process details" : "Show process details";
    processToggle.setAttribute("aria-expanded", String(isHidden));
});

const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const serviceInputs = Array.from(document.querySelectorAll("input[name='service']"));
const budgetInputs = Array.from(document.querySelectorAll("input[name='budget']"));
const fullNameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const serviceError = document.querySelector("#service-error");
const budgetError = document.querySelector("#budget-error");
const messageError = document.querySelector("#message-error");
const formErrors = document.querySelector("#form-errors");
const successMessage = document.querySelector("#success-message");

function setFieldError(field, errorNode, hasError) {
    field.setAttribute("aria-invalid", hasError ? "true" : "false");
    errorNode.hidden = !hasError;
}

function markGroup(inputs, hasError) {
    inputs.forEach(function (input) {
        if (hasError) {
            input.setAttribute("aria-invalid", "true");
        } else {
            input.removeAttribute("aria-invalid");
        }
    });
}

function clearFieldError(field, errorNode) {
    errorNode.hidden = true;
    field.setAttribute("aria-invalid", "false");
}

fullName.addEventListener("input", function () {
    clearFieldError(fullName, fullNameError);
});

email.addEventListener("input", function () {
    clearFieldError(email, emailError);
});

message.addEventListener("input", function () {
    clearFieldError(message, messageError);
});

serviceInputs.forEach(function (input) {
    input.addEventListener("change", function () {
        serviceError.hidden = true;
        markGroup(serviceInputs, false);
    });
});

budgetInputs.forEach(function (input) {
    input.addEventListener("change", function () {
        budgetError.hidden = true;
        markGroup(budgetInputs, false);
    });
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInvalid = fullName.value.trim().length === 0;
    const emailInvalid = !email.validity.valid;
    const messageInvalid = message.value.trim().length === 0;
    const serviceInvalid = !serviceInputs.some(function (input) {
        return input.checked;
    });
    const budgetInvalid = !budgetInputs.some(function (input) {
        return input.checked;
    });

    setFieldError(fullName, fullNameError, nameInvalid);
    setFieldError(email, emailError, emailInvalid);
    setFieldError(message, messageError, messageInvalid);
    serviceError.hidden = !serviceInvalid;
    budgetError.hidden = !budgetInvalid;
    markGroup(serviceInputs, serviceInvalid);
    markGroup(budgetInputs, budgetInvalid);

    const hasErrors = nameInvalid || emailInvalid || serviceInvalid || budgetInvalid || messageInvalid;
    formErrors.hidden = !hasErrors;
    successMessage.hidden = hasErrors;

    if (hasErrors) {
        const firstInvalid = [fullName, email, serviceInputs[0], budgetInputs[0], message].find(function (field) {
            return field.getAttribute("aria-invalid") === "true";
        });

        if (firstInvalid) {
            firstInvalid.focus();
        }
    }
});
