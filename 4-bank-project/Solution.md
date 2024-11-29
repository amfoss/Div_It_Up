```
This is the Documentation for Bank Project


1-template-route
Challenge:Add a new template and route for a third page that shows the credits for this app.

This Challenge was pretty straight forward and simple i created the following template for the credits
<template id="credits">
  <header>
    <h1>Credits</h1>
  </header>
  <a href="/login" onclick="onLinkClick(event)" >Logout</a>
  <a href="/dashboard" onclick="onLinkClick(event)" >Dashboard</a>
  <h2>This App was made by:</h2>
  <p>Name<br>Name2<br>Name3</p>
</template>
Then I added a button to the dashboard to display this template



Assignment:
The routes declaration contains currently only the template ID to use. But when displaying a new page, a bit more is needed sometimes. Let's improve our routing implementation with two additional features:
1.Give titles to each template and update the window title with this new title when the template changes.
2.Add an option to run some code after the template changes. 
We want to print 'Dashboard is shown' in the developer console every time the dashboard page is displayed.

For Giving the titles to each page i stored the titles in routes as
const routes = {
  '/login': { templateId: 'login', title: 'Login Page' },
  '/dashboard': { templateId: 'dashboard', title: 'Dashboard', init: refresh },
  '/credits': { templateId: 'credits', title: 'Credits' },
};
Then I set the title elements text to this using the following piece of code in updateroute()
document.getElementById('title').innerText = route.title;

2-forms
Challenge:
Show an error message in the HTML if the user already exists.

Assignment:
Create a new styles.css file and add a link to it in your current index.html file. In the CSS file you just created add some styling to make the Login and Dashboard page looks nice and tidy. Try to create a color theme to give your app its own branding.

For this task i have styled both the dashboard and the login page with css and partially with html I have attached both these files in solution folder of this PR


3-data
Challenge:
Work together to make the dashboard page look like a real banking app. If you already styled your app, try to use media queries to create a responsive design working nicely on both desktop and mobile devices.

For this task i have styled the tables inside dashboard where it shows transaction and made nice looking for both pc and mobile with css and partially with html I have attached both these files in solution folder of this PR


Assignment:
As your codebase grows, it's important to refactor your code frequently to keep it readable and maintainable over time. Add comments and refactor your app.js to improve the code quality:

    Extract constants, like the server API base URL
    Factorize similar code: for example you can create a sendRequest() function to regroup the code used in both createAccount() and getAccount()
    Reorganize the code to make it easier to read, and add comments

For this assignment I have refactored the code and added comments for easier reading and all over organized the entire code. The code file attached in solution folder has been done in the same way.


4-state-management
Challenge:
Now that we reload the account data every time the dashboard is loaded, do you think we still need to persist all the account data?
Try working together to change what is saved and loaded from local Storage to only include what is absolutely required for the app to work.


For this task I changed the code to only store the name of currently logged in user by updating the following:

function updateState(property, newData) {
  state = Object.freeze({
      ...state,
      [property]: newData
  });
  user = state.account.user; // Update the global `user` variable
  localStorage.setItem(storageKey, state.account.user); // Save to LocalStorage
}


Then when the tab is reloaded or opened I set the user this variable using the following:

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


Assignment:
Our bank app is still missing one important feature: the possibility to enter new transactions. Using everything that you've learnt in the four previous lessons, implement an "Add transaction" dialog:

    Add an "Add transaction" button in the dashboard page
    Either create a new page with an HTML template, or use JavaScript to show/hide the dialog HTML without leaving the dashboard page (you can use hidden property for that, or CSS classes)
    Make sure you handle keyboard and screen reader accessibility for the dialog
    Implement an HTML form to receive input data
    Create JSON data from the form data and send it to the API
    Update the dashboard page with the new data



Soln:
I have added a trasaction box for new transaction inside of bank app I have also styled this box to fit in with reset of the page here is the code:

Code:
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
//Toggles the visibility of the popup box that is the new transaction box.

function TogglePopup() {
  const popup = document.getElementById("popup-box");
  if (popup.style.visibility === "hidden" || !popup.style.visibility) {
      popup.style.visibility = "visible"; // Show popup
  } else {
      popup.style.visibility = "hidden"; // Hide popup
  }
}```
