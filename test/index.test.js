/**
 * @jest-environment jsdom
 */

const {
  createElement,
  addMessageToDOM,
  removeLastMessage,
  updateMessage,
  showError,
  clearError,
  handleClick,
  handleFormSubmit
} = require("../index.js");

describe("DOM Testing and User Behavior Simulation", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="dynamic-content"></div>
      <div id="error-message" class="hidden"></div>
      <form id="user-form">
        <input type="text" id="user-input" />
        <button type="submit">Submit</button>
      </form>
      <button id="simulate-click">Click Me</button>
    `;
  });

  it("should add a message to the DOM", () => {
    addMessageToDOM("Hello, World!");
    const dynamicContent = document.getElementById("dynamic-content");
    expect(dynamicContent.textContent).toContain("Hello, World!");
  });

  it("should remove the last message from the DOM", () => {
    addMessageToDOM("First");
    addMessageToDOM("Second");
    removeLastMessage();
    const dynamicContent = document.getElementById("dynamic-content");
    expect(dynamicContent.textContent).toContain("First");
    expect(dynamicContent.textContent).not.toContain("Second");
  });

  it("should update the first message in the DOM", () => {
    addMessageToDOM("Old Message");
    updateMessage("New Message");
    const dynamicContent = document.getElementById("dynamic-content");
    expect(dynamicContent.textContent).toContain("New Message");
  });

  it("should handle form submission and update the DOM", () => {
    const input = document.getElementById("user-input");
    input.value = "Test Input";

    const fakeEvent = { preventDefault: jest.fn() };
    handleFormSubmit(fakeEvent);

    const dynamicContent = document.getElementById("dynamic-content");
    expect(dynamicContent.textContent).toContain("Test Input");
  });

  it("should display an error message for empty input", () => {
    const input = document.getElementById("user-input");
    input.value = "";

    const fakeEvent = { preventDefault: jest.fn() };
    handleFormSubmit(fakeEvent);

    const errorMessage = document.getElementById("error-message");
    expect(errorMessage.textContent).toBe("Error: Input cannot be empty.");
    expect(errorMessage.classList.contains("hidden")).toBe(false);
  });

  it("should simulate a button click and add a message", () => {
    const button = document.getElementById("simulate-click");
    button.click();
    const dynamicContent = document.getElementById("dynamic-content");
    expect(dynamicContent.textContent).toContain("Button was clicked!");
  });
});