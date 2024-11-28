// Server API base URL -  http://localhost:5000/api

// Constants
let user="";

let state = Object.freeze({
  account: null
});

const storageKey = 'savedAccount';

const routes = {
    '/login': { templateId: 'login' , title: 'Login' },
    '/dashboard': { templateId: 'dashboard', init: updateDashboard , init:refresh , title: 'Dashboard'},
    '/credit' : {templateId: 'credit', title:'Credit'},
  };

  // Function for updating the route when pressed on a link
function updateRoute(templateId) {
    const path = window.location.pathname;
    const route = routes[path];
    if (!route) {
        console.log("HERE");
        return navigate('/dashboard');
        
    }
    if (path =='/dashboard'){
        console.log("Dashboard is shown");
    }
    document.title=route.title;
    const template = document.getElementById(route.templateId);
    const view = template.content.cloneNode(true);
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.appendChild(view);
    if (typeof route.init === 'function') {
      route.init();
    }
  }
  // Function which navigates to the required path
  function navigate(path) {
    window.history.pushState({}, path, path, path);
    updateRoute();
  }

  function onLinkClick(event) {
    event.preventDefault();
    navigate(event.target.href);
  }
  
  window.onpopstate = () => updateRoute();
  updateRoute();

  // Function for defining all the activities of register form
  async function register() {
    const registerForm = document.getElementById('registerForm');
    const formData = new FormData(registerForm);
    const jsonData = JSON.stringify(Object.fromEntries(formData));
    const result = await createAccount(jsonData);
  
    if (result.error) {
      return updateElement('registerError', result.error);
    }
    console.log('Account created!', result);

    updateState('account', result);
    navigate('/dashboard');
  }
  //This function will create a new acc. by the inputs given by user
  async function createAccount(account) {
    try {
      const response = await fetch('//localhost:5000/api/accounts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: account
      });
      return await response.json();
    } catch (error) {
      return { error: error.message || 'Unknown error' };
    }
  }
  // Function for defining all the activities of login form
  async function login() {
    const loginForm = document.getElementById('loginForm')
    const user = loginForm.user.value;
    const data = await getAccount(user);
  
    if (data.error) {
      return updateElement('loginError', data.error);
    }    
  
    updateState('account', data);
    navigate('/dashboard');
  }

  // Function used for fetch the data from API
  async function getAccount(user) {
    try {
      const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
      return await response.json();
    } catch (error) {
      return { error: error.message || 'Unknown error' };
    }
  }
  
  // This function updates the Dashboard page of the site
  function updateDashboard() {
    const account = state.account;
    if (!account) {
      return navigate('/login');
    }
    updateElement('description', account.description);
    updateElement('balance', account.balance.toFixed(2));
    updateElement('currency', account.currency);

    const transactionsRows = document.createDocumentFragment();
    for (const transaction of account.transactions) {
      const transactionRow = createTransactionRow(transaction);
      transactionsRows.appendChild(transactionRow);
    }
    updateElement('transactions', transactionsRows);
  }

  // Here in this Function we take the input transation
  async function transactIn(){
    const form=document.getElementById('transactionform');
    const data=new FormData(form);
    const jsonData = JSON.stringify(Object.fromEntries(data));
    const response = await displayTransaction(jsonData);
    const account = state.account;
    user = state.account.user;
    updateState('account', response);
    console.log(user);
    updateDashboard();
  }
  //This function to display the transaction
  async function displayTransaction(data){
    const fetchData= await fetch(` http://localhost:5000/api/accounts/test/transactions`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: data
    });
  }

  // This function creates a transaction row
  function createTransactionRow(transaction) {
    const template = document.getElementById('transaction');
    const transactionRow = template.content.cloneNode(true);
    const tr = transactionRow.querySelector('tr');
    tr.children[0].textContent = transaction.date;
    tr.children[1].textContent = transaction.object;
    tr.children[2].textContent = transaction.amount.toFixed(2);
    return transactionRow;
  }

  // Function declaring button
  function button(){
    const box = document.getElementById('dialogue');
    document.getElementById('tranbutton').addEventListener("click", () => {
      box.removeAttribute("hidden");
    });
  }
  
  function dailRemove(){
    const box=document.getElementById('dialogue');
    document.getElementById('backward').addEventListener("click", () => {
      box.setAttribute("hidden", "hidden");
    });
  }
    
  // This function updates the value of according to the changes.
  function updateElement(id, textOrNode) {
    console.log(id, textOrNode)
    const element = document.getElementById(id);
    element.textContent = ''; // Removes all children
    element.append(textOrNode);
  }

  function updateState(property, newData) {
    state = Object.freeze({
      ...state,
      [property]: newData
    });
    localStorage.setItem(storageKey, JSON.stringify(state.account));
  }
  // This is the initialising function
  function init() {
    const savedAccount = localStorage.getItem(storageKey);
    if (savedAccount) {
      updateState('account', JSON.parse(savedAccount));
    }
  
    // Our previous initialization code
    window.onpopstate = () => updateRoute();
    updateRoute();
  }

  // This function to get back to the login page
  function logout() {
    updateState('account', null);
    navigate('/login');
  }

  async function updateAccountData() {
    const account = state.account;
    if (!account) {
      return logout();
    }

    const data = await getAccount(account.user);
    if (data.error) {
      return logout();
    }

    updateState('account', data);
  }
  // Whe refreshed the dashboard gets updated.
  async function refresh() {
    await updateAccountData();
    updateDashboard();
  }
  
  init();


  

