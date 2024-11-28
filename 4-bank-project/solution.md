1. Sub Topic 1

Assignment:

```javascript
// Global function to handle page navigation and template rendering
function onLinkClick(event) {
  event.preventDefault();  // Prevent default link behavior
  const target = event.target.getAttribute('href');  // Get the target route
  renderPage(target);  // Render the page corresponding to the target route
}

// Function to render a page based on route
function renderPage(route) {
  const templates = {
    '/login': {
      templateId: 'login',
      title: 'Login - Bank App',
      onShow: () => {} // No custom action for login
    },
    '/dashboard': {
      templateId: 'dashboard',
      title: 'Dashboard - Bank App',
      onShow: () => {
        console.log('Dashboard is shown');
      }
    },
    '/credits': {
      templateId: 'credits',
      title: 'Credits - Bank App',
      onShow: () => {} // No custom action for credits
    }
  };

  // Fetch the relevant template and title
  const { templateId, title, onShow } = templates[route];

  // Update the window title
  document.title = title;

  // Get the template content
  const template = document.getElementById(templateId).content;

  // Replace the current content with the selected template
  const app = document.getElementById('app');
  app.innerHTML = '';  // Clear current content
  app.appendChild(template.cloneNode(true)); // Add new template content

  // Run the custom code after the template changes
  onShow();
}

// Initialize the app with the login template by default
document.addEventListener('DOMContentLoaded', () => {
  renderPage('/login');  // Render the login page initially
});


```

#### Adding Titles to Each Template:

- In the `renderPage` function, we added a `title` property to each route (like `/login`, `/dashboard`, and `/credits`).
- When we navigate to a route (like when the user clicks on a link), we update the page's title using `document.title = title;`.
- For example, when we go to the dashboard, the page title will be updated to "Dashboard - Bank App".

#### Running Code After the Template Changes:

- For each route, we have an `onShow` function. This function is a place where we can put code to run every time that page is displayed.

- For the dashboard route (`/dashboard`), we added `console.log('Dashboard is shown');` inside the `onShow` function. This means that every time the dashboard is shown, you'll see the message "Dashboard is shown" in the developer console.

Challenge:

```html
<template id="credits">
      <header>
        <h1>Credits</h1>
        <a href="/dashboard" onclick="onLinkClick(event)">Back to Dashboard</a>
      </header>
      <section>
        <h2>App Development</h2>
        <p>Developed by: Prarthana</p>
        <h2>Special Thanks</h2>
        <p>Special thanks to all contributors and open-source libraries used.</p>
      </section>
</template>

```
```javascript

'/credits': { templateId: 'credits' }

```

2. Sub Topic 2:

Challenge:

```html
template id="register">
  <h1>Bank App</h1>
  <section>
    <h2>Register</h2>
    <form id="registerForm" action="javascript:register()" method="POST">
      <!-- Error Message -->
      <div id="errorMessage" style="display: none; color: red; font-size: 0.9rem; margin-bottom: 10px;">
        User already exists! Please choose a different username.
      </div>

      <label for="user">Username <span aria-label="required">*</span></label>
      <input id="user" name="user" type="text" maxlength="20" placeholder="Choose a username" required>

      <label for="currency">Currency <span aria-label="required">*</span></label>
      <input id="currency" name="currency" type="text" value="$" maxlength="5" placeholder="e.g., $, €, ₹" required>

      <label for="description">Description</label>
      <input id="description" name="description" type="text" maxlength="100" placeholder="Tell us about yourself (optional)">

      <label for="balance">Starting Balance</label>
      <input id="balance" name="balance" type="number" value="0" placeholder="Enter initial balance">

      <button type="submit">Register</button>
    </form>
  </section>
  <section>
    <p>Already registered? <a href="/login" onclick="onLinkClick(event)">Login here</a></p>
  </section>
</template>
```

```javascript
async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));

  try {
    const result = await createAccount(jsonData);

    const errorMessage = document.getElementById('errorMessage');

    if (result.error) {
      // Show the error message dynamically
      errorMessage.style.display = 'block';
      errorMessage.textContent = `Registration failed: ${result.error}`;
    } else {
      alert('Registration successful!');
      navigate('/login');
    }
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    alert('An unexpected error occurred. Please try again.');
  }
}

async function createAccount(account) {
  try {
    const response = await fetch('//localhost:5001/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: account,
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}

```

Assignment:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(180deg, #008cff, #6ec1ff);
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* App Container */
#app {
  width: 400px;
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Headings */
h1 {
  color: #007bff;
  font-size: 1.8rem;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #333;
}

/* Forms */
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
}

label {
  text-align: left;
  font-size: 0.9rem;
  color: #555;
}

input {
  padding: 10px;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #007bff;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

/* Links */
a {
  color: #007bff;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

a:hover {
  color: #0056b3;
}

/* Sections */
section {
  margin-bottom: 20px;
}

p {
  font-size: 0.9rem;
}

/* Table */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f7f7f7;
}

td {
  font-size: 0.9rem;
}

/* Header for Dashboard */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

header a {
  font-size: 0.9rem;
}
```
3. Sub Topic 3

Challenge:

```html
<template id="dashboard">
    <h1>Dashboard</h1>
    <section>
      <h2 id="description">Account Overview</h2>
      <section>
        <div class="balance-info">
          Balance: <span id="balance">0.00</span> <span id="currency">Ruppees</span>
        </div>
      </section>
      <h3>Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Object</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody id="transactions"></tbody> <!-- Placeholder for transactions -->
      </table>
    </section>
  </template>

```
```css
/* Dashboard Styles */
#dashboard {
  padding: 30px;
}

#description {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 15px;
}

#balance {
  font-size: 2.2rem;
  color: #27ae60;
}

#currency {
  font-size: 1.5rem;
  color: #7f8c8d;
  margin-left: 10px;
}

h3 {
  font-size: 1.6rem;
  color: #2c3e50;
  margin-bottom: 15px;
}

/* Table Styles */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

table th, table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ecf0f1;
}

table th {
  background-color: #ecf0f1;
}

table td {
  background-color: #fafafa;
}

tr:nth-child(even) td {
  background-color: #f9f9f9;
}

tr:hover td {
  background-color: #f1f1f1;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  body {
    padding: 10px;
    align-items: center;
  }

  #app {
    padding: 15px;
  }

  h1 {
    font-size: 2rem;
  }

  #dashboard {
    padding: 20px;
  }

  #description {
    font-size: 1.5rem;
  }

  #balance {
    font-size: 1.8rem;
  }

  #currency {
    font-size: 1.3rem;
  }

  table th, table td {
    padding: 10px;
  }

  table td {
    font-size: 0.9rem;
  }

  section {
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.3rem;
  }

  input, button {
    font-size: 1rem;
  }

  label {
    font-size: 0.9rem;
  }
}

/* Large Screens */
@media (min-width: 1200px) {
  #app {
    padding: 40px;
  }

  h1 {
    font-size: 3rem;
  }

  #dashboard {
    padding: 40px;
  }

  #description {
    font-size: 2rem;
  }

  #balance {
    font-size: 2.5rem;
  }

  #currency {
    font-size: 1.8rem;
  }
}


```
Assignment:

```javascript
// Constants
const API_BASE_URL = '//localhost:5001/api/accounts'; // Server API base URL

// Global account variable
let account = null;

/**
 * Initiates login process.
 */
async function login() {
  const loginForm = document.getElementById('loginForm');
  const user = loginForm.user.value.trim();

  // Check if username is provided
  if (!user) {
    return updateElement('loginError', 'Username cannot be empty.');
  }

  // Fetch account data
  const data = await getAccount(user);

  // Handle errors
  if (data.error) {
    return updateElement('loginError', data.error);
  }

  // Store account data and navigate to dashboard
  account = data;
  navigate('/dashboard');
}

/**
 * Sends a GET request to fetch account data for a given username.
 * @param {string} user - Username to fetch account data for.
 * @returns {Object} - Account data or error message.
 */
async function getAccount(user) {
  return sendRequest('GET', `${API_BASE_URL}/${encodeURIComponent(user)}`);
}

/**
 * Sends a request to the server API.
 * @param {string} method - HTTP method (GET, POST, etc.).
 * @param {string} url - URL for the request.
 * @param {Object} [body] - Optional request body (for POST requests).
 * @returns {Object} - Response data or error message.
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
 * @param {string} id - Element ID.
 * @param {string|Node} textOrNode - Text or node to update the element with.
 */
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = '';
  element.append(textOrNode);
}

/**
 * Registers a new user.
 */
async function register() {
  const registerForm = document.getElementById('registerForm');
  const username = registerForm.username.value.trim();
  const password = registerForm.password.value.trim();

  // Validate input fields
  if (!username || !password) {
    return updateElement('registerError', 'Both fields are required.');
  }

  // Create account
  const data = await createAccount(username, password);

  // Handle errors
  if (data.error) {
    return updateElement('registerError', data.error);
  }

  // Store account data and navigate to dashboard
  account = data;
  navigate('/dashboard');
}

/**
 * Sends a POST request to create a new account.
 * @param {string} username - Username for the new account.
 * @param {string} password - Password for the new account.
 * @returns {Object} - Account data or error message.
 */
async function createAccount(username, password) {
  return sendRequest('POST', API_BASE_URL, { username, password });
}

/**
 * Updates the dashboard with account details.
 */
function updateDashboard() {
  if (!account) {
    return navigate('/login');
  }

  // Update account information
  updateElement('description', account.description || 'No description available.');
  updateElement('balance', account.balance ? account.balance.toFixed(2) : '0.00');
  updateElement('currency', account.currency || 'USD');

  // Update transactions
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
 * Creates a row for a transaction in the dashboard.
 * @param {Object} transaction - Transaction data.
 * @returns {Node} - Transaction row element.
 */
function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date || 'N/A';
  tr.children[1].textContent = transaction.object || 'N/A';
  tr.children[2].textContent = transaction.amount ? transaction.amount.toFixed(2) : '0.00';
  return transactionRow;
}

/**
 * Defines the routing system for navigating between pages.
 */
const routes = {
  '/login': { templateId: 'login' },
  '/register': { templateId: 'register' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};

/**
 * Navigates to a specific route.
 * @param {string} path - Route path.
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
 * Handles link clicks to prevent default behavior and navigate programmatically.
 * @param {Event} event - The click event.
 */
function onLinkClick(event) {
  event.preventDefault();
  const path = event.target.getAttribute('href');
  navigate(path);
}

// Initialize the app by navigating to the login page
document.addEventListener('DOMContentLoaded', () => navigate('/login'));


```
parameters (also referred to as params) are variables that are passed into a function when it is called. They allow the function to receive input values and use them for processing.

Destructuring is a convenient way to extract values from objects or arrays and assign them to variables in one concise line.

JavaScript's asynchronous programming allow you to write code that works with asynchronous operations (like fetching data) in a more synchronous style, making it easier to read and maintain.

`async` is used to declare a function that contains asynchronous code.
`await` is used inside an async function to pause the function execution until the promise is resolved or rejected.

The `fetch` function is a built-in JavaScript function used to make HTTP requests. It returns a promise, which means the response is available later.

I used 
```js
/**
 * Creates a row for a transaction in the dashboard.
 * @param {Object} transaction - Transaction data.
 * @returns {Node} - Transaction row element.
 */
 ```
 to explain the functioning of code.

This type of comment is known as JSDoc (JavaScript Documentation) and is structured in a way that explains the function's purpose, parameters, and return value.

`@param {Object} transaction - Transaction data:`
This part describes the parameters the function takes.
`@param` is the tag used to document a function's parameter.
`{Object}` specifies the data type of the parameter. In this case, transaction is expected to be an object.
transaction is the name of the parameter.
- `Transaction data` is an explanation of what this parameter represents. It's giving the reader a bit more context about what kind of data the transaction object holds.

`@returns {Node} - Transaction row element:`
This part describes what the function returns.
`@returns` (or `@return`) is the tag used to specify what the function will return.
`{Node}` indicates that the function will return a DOM node (likely an HTML element).
- `Transaction row element` describes what that node represents (a transaction row element in this case).

4. Sun Topic 4

Assignment:

```js
/**
 * Handles adding a transaction and updates balance.
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

  // Update the state and save it
  updateState('account', state.account);
  saveState();

  // Close dialog and refresh dashboard
  closeAddTransactionDialog();
  updateDashboard();
}
```
Challenge:

Only essential details that are needed for the app to function properly (like the username or session token, if applicable) should be stored in `localStorage`

```js
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

```
```js
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

```

```js
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


```