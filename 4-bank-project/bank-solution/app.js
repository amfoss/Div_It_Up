// Constants
const API_BASE_URL = '//localhost:5001/api/accounts'; // Server API base URL
const storageKey = 'savedAccount';

// Global state
let state = Object.freeze({
  account: null
});

/**
 * Initiates login process.
 * @returns {Promise<void>} A promise that resolves when the login process is complete.
 */
async function login() {
  const loginForm = document.getElementById('loginForm');
  const user = loginForm.user.value.trim();

  if (!user) {
    return updateElement('loginError', 'Username cannot be empty.');
  }

  const data = await getAccount(user);

  if (data.error) {
    return updateElement('loginError', data.error);
  }

  updateState('account', data);
  saveState();
  navigate('/dashboard');
}

/**
 * Updates the state immutably.
 * @param {string} property - The property of the state to be updated.
 * @param {any} newData - The new data to update the state property with.
 */
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}

/**
 * Saves the current state to localStorage.
 */
function saveState() {
  const account = state.account;
  if (account) {
    localStorage.setItem(storageKey, JSON.stringify({ user: account.user }));
  } else {
    localStorage.removeItem(storageKey);
  }
}

/**
 * Loads the state from localStorage.
 */
function loadState() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    const { user } = JSON.parse(savedAccount);
    if (user) {
      updateState('account', { user });
    }
  }
}

/**
 * Fetches account data from the server for a given username.
 * @param {string} user - The username for which account data is to be fetched.
 * @returns {Promise<Object>} A promise that resolves to the account data or an error object.
 */
async function getAccount(user) {
  return sendRequest('GET', `${API_BASE_URL}/${encodeURIComponent(user)}`);
}

/**
 * Sends a request to the server API.
 * @param {string} method - The HTTP method (e.g., 'GET', 'POST').
 * @param {string} url - The URL to send the request to.
 * @param {Object|null} [body=null] - The body of the request, if applicable.
 * @returns {Promise<Object>} A promise that resolves to the response data or an error object.
 */
async function sendRequest(method, url, body = null) {
  try {
    const options = {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : null
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}

/**
 * Updates an element's content by its ID.
 * @param {string} id - The ID of the element to update.
 * @param {string|Node} textOrNode - The content to set for the element, can be a string or a Node.
 */
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = '';
  element.append(textOrNode);
}

/**
 * Registers a new user.
 * @returns {Promise<void>} A promise that resolves when the registration process is complete.
 */
async function register() {
  const registerForm = document.getElementById('registerForm');
  const username = registerForm.username.value.trim();
  const password = registerForm.password.value.trim();

  if (!username || !password) {
    return updateElement('registerError', 'Both fields are required.');
  }

  const data = await createAccount(username, password);

  if (data.error) {
    return updateElement('registerError', data.error);
  }

  updateState('account', data);
  saveState();
  navigate('/dashboard');
}

/**
 * Creates a new account via a POST request.
 * @param {string} username - The username for the new account.
 * @param {string} password - The password for the new account.
 * @returns {Promise<Object>} A promise that resolves to the account data or an error object.
 */
async function createAccount(username, password) {
  return sendRequest('POST', API_BASE_URL, { username, password });
}

/**
 * Updates the dashboard with account details.
 */
function updateDashboard() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  updateElement('description', account.description || 'No description available.');
  updateElement('balance', account.balance ? account.balance.toFixed(2) : '0.00');
  updateElement('currency', account.currency || 'USD');

  const transactionsContainer = document.getElementById('transactions');
  transactionsContainer.innerHTML = '';

  const transactionsFragment = document.createDocumentFragment();
  for (const transaction of account.transactions || []) {
    const transactionRow = createTransactionRow(transaction);
    transactionsFragment.appendChild(transactionRow);
  }
  transactionsContainer.appendChild(transactionsFragment);
}

/**
 * Creates a transaction row for the dashboard.
 * @param {Object} transaction - The transaction data.
 * @returns {Node} The transaction row element.
 */
function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');

  tr.children[0].textContent = transaction.date || 'N/A';
  tr.children[1].textContent = transaction.object || 'N/A';
  tr.children[2].textContent = transaction.amount ? transaction.amount.toFixed(2) : '0.00';
  
  // Add delete button functionality
  const deleteButton = transactionRow.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => deleteTransaction(transaction));

  return transactionRow;
}

/**
 * Defines the routing system for navigating between pages.
 */
const routes = {
  '/login': { templateId: 'login' },
  '/register': { templateId: 'register' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};

/**
 * Navigates to a specific route.
 * @param {string} path - The route path to navigate to.
 */
function navigate(path) {
  const route = routes[path];
  if (!route) {
    console.error(`Route "${path}" not found.`);
    return;
  }

  const template = document.getElementById(route.templateId);
  const clone = document.importNode(template.content, true);
  const appElement = document.getElementById('app');
  appElement.innerHTML = '';
  appElement.appendChild(clone);

  if (route.init) {
    route.init();
  }
}

/**
 * Updates the account data from the server.
 */
async function updateAccountData() {
  const account = state.account;
  if (!account || !account.user) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}

/**
 * Refreshes the dashboard data.
 */
async function refresh() {
  await updateAccountData();
  updateDashboard();
}

/**
 * Logs out the current user and navigates to the login page.
 */
function logout() {
  updateState('account', null);
  saveState();
  navigate('/login');
}

/**
 * Initializes the app on page load.
 */
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  if (state.account) {
    navigate('/dashboard');
  } else {
    navigate('/login');
  }
});

/**
 * Shows the "Add Transaction" dialog.
 */
function showAddTransactionDialog() {
  const dialog = document.getElementById('addTransactionDialog');
  dialog.setAttribute('aria-hidden', 'false');
  dialog.style.display = 'block';
  document.getElementById('transactionDate').focus();
}

/**
 * Closes the "Add Transaction" dialog.
 */
function closeAddTransactionDialog() {
  const dialog = document.getElementById('addTransactionDialog');
  dialog.setAttribute('aria-hidden', 'true');
  dialog.style.display = 'none';
}

/**
 * Handles adding a transaction and updates balance.
 * @returns {Promise<void>} A promise that resolves when the transaction is added.
 */
async function addTransaction() {
  const transactionForm = document.getElementById('addTransactionForm');
  const date = transactionForm.transactionDate.value;
  const object = transactionForm.transactionObject.value.trim();
  let amount = parseFloat(transactionForm.transactionAmount.value);

  if (!date || !object || isNaN(amount)) {
    return updateElement('transactionError', 'All fields are required, and the amount must be valid.');
  }

  // Negative amounts are treated as expenses, positive as income
  const transaction = { date, object, amount };

  // Assuming API endpoint to add transaction is `POST /api/transactions`
  const data = await sendRequest('POST', `${API_BASE_URL}/${state.account.user}/transactions`, transaction);

  if (data.error) {
    return updateElement('transactionError', data.error);
  }

  // Add the new transaction to the account's transaction history
  state.account.transactions.push(data);

  // Update the account balance: 
  // If it's positive, add to balance; if it's negative, subtract from balance
  state.account.balance += amount;

  // Save updated state
  saveState();
  updateDashboard();

  // Close the dialog
  closeAddTransactionDialog();
}

/**
 * Deletes a specific transaction.
 * @param {Object} transaction - The transaction to be deleted.
 */
async function deleteTransaction(transaction) {
  // Call API to delete transaction
  const data = await sendRequest('DELETE', `${API_BASE_URL}/${state.account.user}/transactions/${transaction.id}`);

  if (data.error) {
    return updateElement('transactionError', data.error);
  }

  // Remove the transaction from the account's transaction history
  const index = state.account.transactions.findIndex(t => t.id === transaction.id);
  if (index !== -1) {
    state.account.transactions.splice(index, 1);
  }

  // Update the account balance
  state.account.balance -= transaction.amount;

  // Save updated state and update the dashboard
  saveState();
  updateDashboard();
}
