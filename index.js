// index.js

// Add a message to the DOM
function addMessageToDOM(text) {
  let container = document.getElementById('dynamic-content');
  if (!container) {
    container = document.createElement('div');
    container.id = 'dynamic-content';
    document.body.appendChild(container);
  }
  const msg = document.createElement('p');
  msg.className = 'message';
  msg.textContent = text;
  container.appendChild(msg);
  return msg;
}

// Remove an element from the DOM by id
function removeElementFromDOM(id) {
  const el = document.getElementById(id);
  if (el) {
    el.remove();
  }
}

// Update the first message in the DOM
function updateMessage(newText) {
  const container = document.getElementById('dynamic-content');
  if (container) {
    const first = container.querySelector('.message');
    if (first) {
      first.textContent = newText;
    }
  }
}

// Simulate a button click and update the DOM
function simulateClick(containerId, message) {
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement('div');
    container.id = containerId;
    document.body.appendChild(container);
  }
  container.textContent = message;
}

// Handle form submission and update the DOM
function handleFormSubmit(formId, dynamicContentId) {
  const form = document.getElementById(formId);
  const input = document.getElementById('user-input');
  const dynamicContent = document.getElementById(dynamicContentId);

  let errorMessage = document.getElementById('error-message');
  if (!errorMessage) {
    errorMessage = document.createElement('div');
    errorMessage.id = 'error-message';
    errorMessage.classList.add('hidden');
    document.body.appendChild(errorMessage);
  }

  const value = (input && input.value ? input.value.trim() : '');

  if (!value) {
    errorMessage.textContent = 'Input cannot be empty';
    errorMessage.classList.remove('hidden');
    return;
  }

  errorMessage.textContent = '';
  errorMessage.classList.add('hidden');

  if (dynamicContent) {
    dynamicContent.textContent = value;
  }
}

module.exports = {
  addMessageToDOM,
  removeElementFromDOM,
  updateMessage,
  simulateClick,
  handleFormSubmit,
};