//This code aims to create a bank app api which contains basics fuctions like login,register and add transaction.
//Important URL'S used



// To request new account to api "POST /api/accounts/"
// TO request an existing account to api "GET /api/accounts/:user"
// To request a new account to api "POST /api/accounts/:user/transactions"



//***********************************************
//Important varible's and constants
//***********************************************

let user="";

const storageKey = 'savedAccount';


//***********************************************
//Setting up routing
//***********************************************

const routes = {
  '/login': { templateId: 'login' ,title:'Bank login'},
  '/dashboard': { templateId: 'dashboard',title:'Bank dashboard',  init: refresh },
  '/credit': {templateId:'credit',title:'Bank credit'},
};

function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/dashboard');
  }
  if(path=='/dashboard'){
    console.log("Dashboard is shown")

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

function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}

function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}

window.onpopstate = () => updateRoute();
updateRoute();


//***********************************************
//State setUp
//***********************************************

let state = Object.freeze({
  account: null
});

function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
  localStorage.setItem(storageKey, JSON.stringify(state.account));
}

//***********************************************
//Register and Login
//***********************************************

async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const result = await createAccount(jsonData);


  if (result.error) {
    return updateElement('registererror', result.error);
  }

  console.log('Account created!', result);
  updateState('account', result);
  navigate('/dashboard');
}

async function login() {
  const loginForm = document.getElementById('loginForm')
  user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return updateElement('loginError', data.error);
  }
  
  const account = state.account;
  updateState('account', data);
  navigate('/dashboard');
}   


//***********************************************
//Fetching and storing login and register account details using API
//***********************************************

async function createAccount(account) {
  try {
    const response = await fetch('//localhost:5000/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: account
    });
    return await response.json();  //why await here
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}




async function getAccount(user) {
  try {
    const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}



//***********************************************
//Dasboard function
//***********************************************

function updateDashboard() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);

  // Update transactions
  const transactionsRows = document.createDocumentFragment();
  for (const transaction of account.transactions) {
    const transactionRow = createTransactionRow(transaction);
    transactionsRows.appendChild(transactionRow);
  }
  updateElement('transactions', transactionsRows);
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

async function refresh() {
  await updateAccountData();
  updateDashboard();
}



function logout() {
  updateState('account', null);
  navigate('/login');
}


//**************************************************
//Transaction and updating the details into the row.
//**************************************************

async function transact(){
  const form=document.getElementById('transactionform');
  const data=new FormData(form);
  const jsonData = JSON.stringify(Object.fromEntries(data));
  const response = await confirmtransact(jsonData);
  console.log("transaction done")
  const account = state.account;
  updateState('account', response);
  updateDashboard();
}

async function confirmtransact(data){
  const hehe= await fetch(` http://localhost:5000/api/accounts/${user}/transactions`,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: data
  });
}

function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}


//***********************************************
//Transaction dialogue box button configuration.
//***********************************************

function button(){
  const box = document.getElementById('dialogue');
  document.getElementById('tranbutton').addEventListener("click", () => {
    box.removeAttribute("hidden");
  });
}

function closedialogue(){
  const box=document.getElementById('dialogue');
  document.getElementById('backward').addEventListener("click", () => {
    box.setAttribute("hidden", "hidden");
  });
}
 


//***********************************************
//Fundamental division which supports the whole code to fetch html elements inorder to display data.
//***********************************************

function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}



//***********************************************
//Initialization.
//***********************************************

function init() {
const savedAccount = localStorage.getItem(storageKey);
const data = {
  user: state.account.user,
  transactions: state.account.transactions,
};


console.log(data);
if (savedAccount) {
  updateState('account', JSON.parse(data));
}

// Our previous initialization code
window.onpopstate = () => updateRoute();
updateRoute();
}

init();