# Bank-project

## 1-template-route

### Challenge
```
<template id="credits">
  <h1>Credits</h1>
  <h2>Credit</h2>
  <p>Developed by : Mihir</p>
  <p>All rights reserved for Mihir.</p>
</template>

const routes = {
  '/credits': {templateId:'credits',title:'Bank credits'},
};
```
### Assignment
```
const routes = {
  '/login': { templateId: 'login' ,title:'Bank login'},
  '/dashboard': { templateId: 'dashboard',title:'Bank dashboard',  init: refresh },
  '/credits': {templateId:'credits',title:'Bank credits'},
};
```
Set the title elements text to this using the following piece of code in updateroute()
```
document.getElementById('title').innerText = route.title;
```
console.log for the printing 'Dashboard is shown'.
```
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];
  if (!route) {
    return navigate('/dashboard');
  }
  if(path=='/dashboard'){
    console.log("Dashboard is shown")
  }
}
```

## 2-forms

### Challenge
If the account already exists using js it display error messages to the user.
```
<div id="regerror" style="color: red;" role="alert"></div>

const result = await createAccount(jsonData);
if (result.error) {
    return updateElement('regerror', result.error);
}
```

### Assignment
```
h1, .title {
    text-align: center;
    color: hsl(233, 52%, 33%);
    font-weight: bold;
    margin-bottom: 20px;
}

.box {
    margin: auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    width: 100%;
    max-width: 700px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

input {
    border-color: azure;
    height: 30px;
    width: 98%;
}

button {
    border-radius: 10px;
    height: 40px;
    width: 98%;
    background-color: #d6eaf8;
    border: 1px solid black;
}

button:hover {
    background-color: #a3e4d7;
}
```

## 3-data

### Challenge
```
@media (orientation: landscape) {
  #table, #btable {
    width: 200px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    display: block;
  }

  #btable {
    background-color: #3d49a3;
  }

  #table tr {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  #table td {
    padding: 5px 0;
  }
}
```

### Assignment
I have completed the refactoring of the code and added the comments in app.js file.

## 4-state-management

### Challenge
I have changed the init function to store only name and transactions
```
const currentaccount = localStorage.getItem(storageKey);
const data = {
  user: state.account.user,                  
  transactions: state.account.transactions,  
};
if (currentaccount) {
  updateState('account', JSON.parse(data));
}
```

### Assignment
HTML
```
<dialog>
  <h1>ADD TRANSACTION</h1>
  <form id="transform">
    <label for="date">Date</label>
    <input id="date" name="date" type="date" required>
    <label for="object">Object</label>
    <input id="object" name="object" type="text" required>
    <label for="amount">Amount</label>
    <input id="amount" name="amount" type="number" required>
    <div>
      <button type="button" id="backward" onclick="closedialogue()">CANCEL</button>
      <button type="submit" id="forward"">OK</button>
    </div>
  </form>
</dialog>
```

Javascript
```
let user = "";
async function trans(event) {
  event.preventDefault();
  const form = new FormData(document.getElementById('transform'));
  const jsonData = JSON.stringify(Object.fromEntries(form));
  await confirmtrans(jsonData);
  console.log("Transaction done");
  updateState('account', state.account);
  updateDashboard();
}
async function confirmtrans(data) {
  await fetch(`http://localhost:5000/api/accounts/${user}/transactions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data
  });
}
document.getElementById('transform').addEventListener('submit', trans);
```
