const URL = '//localhost:5000/api/accounts/'


// Routes
const routes = {
    '/login': { templateId: 'login' },
    '/dashboard': { templateId: 'dashboard', init: refresh },
    '/credits': { templateId: 'credits' }
};

// Immutable application state

let state = Object.freeze({
    account: null
});
const storageKey = 'savedAccount';

// To go from one template to another

function updateRoute() {
    const path = window.location.pathname;
    const route = routes[path];

    if (!route) {
        navigate('/dashboard');
    }

    const template = document.getElementById(route.templateId);
    const view = template.content.cloneNode(true);
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.appendChild(view);

    if (typeof route.init === 'function') {
        route.init();
    }

    if (path === '/login' || path === '/dashboard') {
        document.body.style.backgroundColor = 'deepskyblue';
    } else {
        document.body.style.backgroundColor = ''; // Default for other routes
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

async function register() {
    const registerForm = document.getElementById('registerForm');
    const formData = new FormData(registerForm);
    const jsonData = JSON.stringify(Object.fromEntries(formData));
    const result = await createAccount(jsonData);
    if (result.error) {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.innerHTML = result.error
        errorMessage.style.color = 'red'
        return console.log('An error occurred:', result.error);
    }

    console.log('Account created!', result);
    updateState('account', result);
    navigate('/dashboard');
}
async function createAccount(account) {
    return sendrequest(URL, 'POST', account)
}

window.onpopstate = () => updateRoute();
updateRoute();

async function login() {
    const loginForm = document.getElementById('loginForm')
    const user = loginForm.user.value;
    const data = await getAccount(user);

    if (data.error) {
        return updateElement('loginError', data.error);
    }

    updateState('account', data);
    navigate('/dashboard');
    console.log('Dashboard is shown')
}

async function sendrequest(api, method='GET', body){
    try {
        const response = await fetch(api, {
            method,
            headers: body ? { 'Content-Type': 'application/json' } : undefined,
            body
        });
        return await response.json();
    } catch (error) {
        return { error: error.message || 'Unknown error' };
    }
}

async function getAccount(user) {
    return sendrequest(URL + encodeURIComponent(user))
}

function updateElement(id, textOrNode) {
    const element = document.getElementById(id);
    element.textContent = '';
    element.append(textOrNode);
}

function updateDashboard() {
    const account = state.account;
    if (!account) {
        return logout();
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

function createTransactionRow(transaction) {
    const template = document.getElementById('transaction');
    const transactionRow = template.content.cloneNode(true);
    const tr = transactionRow.querySelector('tr');
    tr.children[0].textContent = transaction.date;
    tr.children[1].textContent = transaction.object;
    tr.children[2].textContent = transaction.amount.toFixed(2);
    return transactionRow;
}

function updateState(property, newData) {
    state = Object.freeze({
        ...state,
        [property]: newData
    });
    localStorage.setItem(storageKey, JSON.stringify(state.account));
}

function logout() {
    updateState('account', null);
    navigate('/login');
}


function init() {
    const savedAccount = localStorage.getItem(storageKey);
    if (savedAccount) {
        updateState('account', JSON.parse(savedAccount));
    }

    // Our previous initialization code
    window.onpopstate = () => updateRoute();
    updateRoute();
}

init();

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

function showDialogBox(){
    console.log("clicked")
    box = document.getElementById('dialogbox')
    box.style.visibility = "visible";
}

async function addTransaction() {
    const dialogbox = document.getElementById('dialogbox');
    
    dialogbox.classList.remove('show');
  
    const transactionForm = document.getElementById('transactionForm');
    const formData = new FormData(transactionForm);
    const jsonData = JSON.stringify(Object.fromEntries(formData));

    try {
        const data = await sendrequest(`${URL}${encodeURIComponent(state.account.user)}/transactions`, 'POST', jsonData);
        if (data.error) {
            updateElement('transactionError', data.error);
            return;
        }
        await updateAccountData();
        updateDashboard();
    } catch (error) {
        updateElement('transactionError', 'An error occurred while processing the transaction.');
        console.error(error);
    }
}


