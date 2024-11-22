# Assignments

## My Bank

![image](https://github.com/user-attachments/assets/7f8ca180-fc6e-41b5-9964-a6330c71cf80) 
![image](https://github.com/user-attachments/assets/0585331e-61cf-4331-bec9-245f58ba7d15)


## 1-template-route

**Challenge**
```
CODE:
 <template id="credit">
      <h1>Credit</h1>
      <p></p>
      <p></p>
      <p style="color:red;">All rights reserved for AadarshM07@AMFOSS.</p>
      
</template>


const routes = {
  '/credit': {templateId:'credit',title:'Bank credit'},
};

Here,I created a new template for the credits page then i updated the routes object by adding a path to the credit.
```

**Assignment**
```
//Give titles to each template and update the window title with this new title when the template changes.

const routes = {
  '/login': { templateId: 'login' ,title:'Bank login'},
  '/dashboard': { templateId: 'dashboard',title:'Bank dashboard',  init: refresh },
  '/credit': {templateId:'credit',title:'Bank credit'},
};

function updateRoute() {
  document.title=route.title;
}

Here i updated to routes object with a new key title and created a custom title for each page,Then inside the update route function i used to js command "document.title" to set a new title whenever new page is opened.


//To configure dashboard is shown in the console whenever i open the dashboard.

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

**Challenge**
```
 <div id="registererror" style="color: red;" role="alert"></div>


const result = await createAccount(jsonData);
if (result.error) {
    return updateElement('registererror', result.error);
  }

For this task i implemented the same algorithm used for the login section.while registering if conflict arises in the api it will be triggerd and then call the updateElement which will further help to display  the error message in the div created just below the register division.
```
**Assignment**
```

<link rel="stylesheet" href="./style.css" />

linking the HTML with CSS.

CSS:

body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
  }

#forms {
max-width: 700px;
width: 100%;
background-color: #fff;
padding: 25px 30px;
border-radius: 5px;
box-shadow: 0 5px 10px rgba(0,0,0,0.15);
}

.title {
font-size: 25px;
font-weight: bold;
position: relative;
margin-bottom: 20px;
}

header{
    position: absolute;
    top:3px;
}


#add h1{
  text-align: centre;
  color:hsl(233, 52%, 33%);
  font-weight: bolder;
}

Throughout the assignment,i got a even deeper understanding of CSS . The new commands i learnt includes:

-border-radius
-max-width
-padding
-box-shadow
```
**Styled page**
![image](https://github.com/user-attachments/assets/b62df9f4-b8bd-4057-882b-6264ba2eeaa6)


## 3-data

**Challenge**

```
@media (orientation: portrait) {
  #table {
    width: 200px;
    background-color: #fff;
    padding: 25px 30px;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    display: block;
  }

  #table tr {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    
  }
  

  #table td {
    padding: 5px 0; 
  }

  #btable {
    background-color: #3d49a3;
    width: 200px;
    padding: 25px 30px;
    border-radius: 5px;
    display: block;
  }
}

I tried using media queries for this exercise,I realised media query is a really powerful tool and we can set up
custom css for custom pixels, here i have setup css for portrait mode.

```

**Assignment**

```
I have completed the assignment to refactor the code in app.js file.
```


## 4-bank-project

**Challenge**
```
Initially the local stored contained all the details of the user which was not essentialy useful.

SO i implemented a new code

function init() {
const savedAccount = localStorage.getItem(storageKey);
const data = {
  user: state.account.user,                  //
  transactions: state.account.transactions,  //
};
if (savedAccount) {
  updateState('account', JSON.parse(data));
}

After the implementation only the  the name and transaction details is stored in the state .

```

**Assignment**
```
I have implemented this code in the main file itself.The documentation is as follows

HTML:

<dialog id="dialogue" hidden="hidden" open>
        <h1 >ADD TRANSACTION </h1>

        <form id="transactionform" >
        <label for="date">Date<br></label>
        <input id="date" name="date" type="date"  required>
        <p></p>
        <label for="object"><br>Object<br></label>
        <input id="object" name="object" type="text"  required>
        <p></p>
        <label for="amount"><br>Amount<br></label>
        <input id="amount" name="amount" type="number"  required>
        <p></p>
        <button id="backward" class="footer" style="background-color: red;" onclick="closedialogue()">CANCEL</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="forward" class="footer" 
        formaction="javascript:transact()" style="background-color: rgb(39, 105, 247);">OK</button>
        </form>

 </dialog>

For this task i implementated a dialogue box that will show up and it functions using the hidden attributte which i manipulates using js.

CSS:
#dialogue{
  background-color: #fff;
  border-radius: 10px;
  width:40%;
  min-width: 300px;
  
}

#tranbutton{
  height:45px;
  border-color: black;
  background-color: #0076CE;
  border-radius: 5px;
  font:bolder;
}

I added simple CSS for this page,most likely similiar to the home page.

JavaScript:

let user=""; //for custom user

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

JS was not the hardest but trickiest part.I played around with the api to make the request similiar
to how i did for register and login.

```
