// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

// Utility function (Step 4: Reusable Utilities)
function createElement(tag, attributes = {}, textContent = "") {
  const el = document.createElement(tag);
  Object.entries(attributes).forEach(([key, value]) => {
    el.setAttribute(key, value);
  });
  if (textContent) el.textContent = textContent;
  return el;
}

// Step 2: DOM Manipulation Functions
function addMessageToDOM(message) {
  const dynamicContent = document.getElementById("dynamic-content");
  const p = createElement("p", { class: "message" }, message);
  dynamicContent.appendChild(p);
  return p;
}

function removeLastMessage() {
  const dynamicContent = document.getElementById("dynamic-content");
  if (dynamicContent.lastElementChild) {
    dynamicContent.removeChild(dynamicContent.lastElementChild);
  }
}

function updateMessage(message) {
  const dynamicContent = document.getElementById("dynamic-content");
  if (dynamicContent.firstElementChild) {
    dynamicContent.firstElementChild.textContent = message;
  } else {
    addMessageToDOM(message);
  }
}

// Step 3: Error Handling
function showError(message) {
  const errorBox = document.getElementById("error-message");
  errorBox.textContent = message;
  errorBox.classList.remove("hidden");
}

function clearError() {
  const errorBox = document.getElementById("error-message");
  errorBox.textContent = "";
  errorBox.classList.add("hidden");
}

// Step 1: Simulate User Behavior
function handleClick() {
  addMessageToDOM("Button was clicked!");
}

function handleFormSubmit(event) {
  event.preventDefault();
  const input = document.getElementById("user-input");
  const value = input.value.trim();

  if (!value) {
    showError("Error: Input cannot be empty.");
    return;
  }

  clearError();
  addMessageToDOM(`You submitted: ${value}`);
  input.value = "";
}

// Wire up event listeners
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("simulate-click")
    .addEventListener("click", handleClick);

  document
    .getElementById("user-form")
    .addEventListener("submit", handleFormSubmit);
});

// Export functions for testing (CommonJS style for Jest)
module.exports = {
  createElement,
  addMessageToDOM,
  removeLastMessage,
  updateMessage,
  showError,
  clearError,
  handleClick,
  handleFormSubmit
};