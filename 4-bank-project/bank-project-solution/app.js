// ----------------------------- Routes -----------------------------
const routes = {
  '/login': { templateId: 'login', title: 'Login Page' },
  '/dashboard': { templateId: 'dashboard', title: 'Dashboard', init: refresh },
  '/credits': { templateId: 'credits', title: 'Credits' },
};

// ----------------------------- Global Variables -----------------------------
let user = "";
const storageKey = 'savedAccount';

let state = Object.freeze({
  account: null // Stores the current user's account data
});

// ----------------------------- State Management -----------------------------

function updateState(property, newData) {
  state = Object.freeze({
      ...state,
      [property]: newData
  });
  user = state.account.user; // Update the global `user` variable
  localStorage.setItem(storageKey, state.account.user); // Save to LocalStorage
}

// ----------------------------- Route Management -----------------------------
function updateRoute() {
  const path = window.location.pathname; // Get the current URL path
  const route = routes[path];

  if (!route) {
      return navigate('/dashboard'); // Redirect to dashboard if route not found
  }

  document.getElementById('title').innerText = route.title; // Update the page title

  // Call route's initialization function if defined
  if (typeof route.init === 'function') {
      route.init();
  }

  // Load the appropriate template into the app container
  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = ''; // Clear previous content
  app.appendChild(view);

  if (typeof route.init === 'function') {
      route.init(); // Ensure init function is called again
  }

  dashboardLoaded = true; // Update dashboard state (if used)
}

// ----------------------------- Transactions -----------------------------

function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date; // Set date
  tr.children[1].textContent = transaction.object; // Set object
  tr.children[2].textContent = transaction.amount.toFixed(2); // Set amount
  return transactionRow;
}


async function createTransaction(account) {
  try {
      const response = await fetch('http://localhost:5000/api/accounts/' + user + '/transactions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: account
      });
      return await response.json();
  } catch (error) {
      return { error: error.message || 'Unknown error' };
  }
}


function AddNewTransaction(event) {
  event.preventDefault();
  const registerForm = document.getElementById('popup-box');
  const formData = new FormData(registerForm); // Collect form data
  const jsonData = JSON.stringify(Object.fromEntries(formData)); // Convert to JSON
  createTransaction(jsonData); // Send transaction to the server
  navigate('/dashboard'); // Redirect to dashboard
}

// ----------------------------- Popup Handling -----------------------------
//Toggles the visibility of the popup box.

function TogglePopup() {
  const popup = document.getElementById("popup-box");
  if (popup.style.visibility === "hidden" || !popup.style.visibility) {
      popup.style.visibility = "visible"; // Show popup
  } else {
      popup.style.visibility = "hidden"; // Hide popup
  }
}

// ----------------------------- Authentication -----------------------------

//Logs the user out and redirects to the login page.

function logout() {
  updateState('account', null); // Clear account data
  navigate('/login');
}


//Logs the user in by verifying credentials

async function login() {
  const loginForm = document.getElementById('loginForm');
  const user = loginForm.user.value;
  const data = await getAccount(user); // Fetch account data

  if (data.error) {
      return updateElement('loginError', data.error);
  }

  updateState('account', data); // Update state with account data
  navigate('/dashboard'); // Redirect to dashboard
}


async function getAccount(user) {
  try {
      const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
      return await response.json();
  } catch (error) {
      return { error: error.message || 'Unknown error' };
  }
}

// ----------------------------- Dashboard Updates -----------------------------
function updateDashboard() {
  const account = state.account;
  if (!account) {
      return logout(); // Logout if no account data
  }

  // Update UI elements with account details
  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);

  // Builds transactions table
  const transactionsRows = document.createDocumentFragment();
  for (const transaction of account.transactions) {
      const transactionRow = createTransactionRow(transaction);
      transactionsRows.appendChild(transactionRow);
  }
  updateElement('transactions', transactionsRows);
}


//Refreshes the account data and updates the dashboard.

async function refresh() {
  await updateAccountData();
  updateDashboard();
}

// ----------------------------- Utility Functions -----------------------------
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = '';
  element.append(textOrNode);
}

// ----------------------------- Initialization -----------------------------
async function init() {
  const savedAccount = localStorage.getItem(storageKey);
  const data = await getAccount(savedAccount);
  if (data.error) {
      return logout();
  }
  updateState('account', data);

  // Setup navigation handling
  window.onpopstate = () => updateRoute();
  updateRoute();
}
init();
