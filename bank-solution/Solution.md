# 4-bank-project
## 1-template-route
### Assignment 
This assignment was to add title for each template and print 'Dashboard is shown' in console when dashboard page is displayed. Did the above task by adding title in routes function as shown below
```
const routes = {
    '/login': { templateId: 'login' , title: 'Login' },
    '/dashboard': { templateId: 'dashboard', init: updateDashboard , init:refresh , title: 'Dashboard'},
    '/credit' : {templateId: 'credit', title:'Credit'},
  };
```
and console.log for the printing 'Dashboard is shown'.
```
if (path =='/dashboard'){
        console.log("Dashboard is shown");
    }
```    
### Challenge
Created a new template and route for the third page of the app that shows the credits. 
```
    <template id="credit">
        <h1>Credits</h1>
        <section>
            <a href="/dashboard" onclick="onLinkClick(event)" class="link">Go back</a>
        </section>
        <section class="dashboard-cont">
            <h2>Credits for the app</h2>
        </section>
        <p class="dashboard-cont">API</p>
    </template>
```
And also added the below code in const routes
```
'/credit' : {templateId: 'credit', title:'Credit'}
```    

## 2-forms
### Assignment
Done with styling the app both the login page and the dashboard page with giving a unique background colour.

![Login](https://github.com/Harshith-2208/div-it-up/blob/bank-project/bank-solution/Images/Login.png)

![Dashboard](https://github.com/Harshith-2208/div-it-up/blob/bank-project/bank-solution/Images/Dashboard.png)

### Challenge
Did the printing of error message in HTML using div tag with role as alert as shown
```
 <div id="registerError" role="alert" style="color:red"></div>
```
and check if the account already exists using js and print it in red colour.
```
if (result.error) {
      return updateElement('registerError', result.error);
    }
```    

## 3-data
### Assignment
Done with adding comments to the code .
### Challenge
I have added the media queries for the table in styles.css
```
@media (orientation: portrait) {
    #table {
      display: block;
      width: 250px;
      background-color: #fff;
      padding: 40px 40px;
    }
  }
```

## 4- state-management
### Assignment
I have added the ADD TRANSACTION dialog box in the dashboard page by adding a dailog in html adding some functions in js and stying it by css.

![dailogbox](https://github.com/Harshith-2208/div-it-up/blob/bank-project/bank-solution/Images/dailogbox.png)
