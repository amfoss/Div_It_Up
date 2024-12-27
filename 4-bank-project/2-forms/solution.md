# assignment
## html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
    <link rel="stylesheet" href="style.css">
    <script src="app.js" defer></script>
  </head>
  <body>
    <div id="app">Loading...</div>
    <template id="login">
      <header class="image">
      <h1>ABC BANK</h1>
    </header>
      <section class="loginsection">
        <h2 class="heading">Login</h2>
        <form id="loginForm">
          <label class="writing" for="username">Username</label>
          <input class="inputbox" id="username" name="user" type="text">
          <button class="keys">Login</button>
        </form>
        <hr/>
        <h2 class="heading">Register</h2>
        <form id="registerForm" action="javascript:register()">
          <label class="writing" for="user">Username(required)</label>
          <input class="inputbox" id="user" name="user" type="text" maxlength="20" required>
          <label class="writing" for="currency">Currency(required)</label>
          <input class="inputbox" id="currency" name="currency" type="text" value="$" maxlength="5" required>
          <label class="writing" for="description">Description</label>
          <input class="inputbox" id="description" name="description" type="text" maxlength="100" >
          <label class="writing" for="balance">Current balance</label>
          <input class="inputbox" id="balance" name="balance" type="number" value="0">
          <button class="keys">Register</button>
        </form>
      </section>
      </template>
      <template id="dashboard">
        <header class="image">
          <h1 >Bank App</h1>
        </header>
        <section class="links">
          <a href="/login" onclick="onLinkClick(event)">Logout</a>
          <a href="/credits" onclick="onLinkClick(event)">credits</a>
        </section>
        <section class="contents">
          Balance: 100$
        </section>
        <section>
          <h2 class="heading">Transactions</h2>
          <table class="completetable">
            <thead class="tablehead">
              <tr>
                <th class="tabletopic">Date</th>
                <th class="tabletopic">Object</th>
                <th class="tabletopic">Amount</th>
              </tr>
            </thead>
            <tbody class="tablebody"></tbody>
          </table>
        </section>
      </template>
      <template id="credit">
        <header>
          <h1>credits</h1>
          <a href="/dashboard" onclick="onLinkClick(event)">dashboard</a>
        </header>
        <section>
          Made by: Sreejith
        </section>
      </template>
  </body>
</html>
```
## css
```
.loginsection{
    display:flex;
    flex-flow: column;
    align-items: center;
}
#loginForm{
    display:flex;
    flex-flow: column;
    row-gap: 20px;
}
#registerForm{
    display:flex;
    flex-flow: column;
    row-gap: 20px;
}
.inputbox{
    width:450px;
    height: 30px;
    border-radius: 1em 1em 1em 1em;
}
.keys{
    width:450px;
    height: 30px;
    color:azure;
    background-color: rgb(0, 8, 122);
    font-size: medium;
    font-weight: 400;
    border-radius: 1em 1em 1em 1em;
}
.heading{
    color: rgb(0, 8, 122);
    text-align: center;
}
.writing{
    font-family: Calibri;
    font-style: oblique;
    font-size: small;
}
.image{
    display: flex;
    justify-content: center;
    color:rgb(0, 8, 122);
}
.usererror{
    display: none;
    color:red;
    font-size: small;
    font-style: oblique;
    font-weight: 600;
}
.contents{
    font-size: x-large;
    font-family: 'Times New Roman', Times, serif;

}
.completetable{
    background-color: rgb(173, 188, 255);
}
.tablehead{
    background-color: rgb(0, 8, 122);
    color: azure;
}
.tabletopic{
    border: 1px solid white;
    border-radius: 0.5em 0.5em 0.5em 0.5em;
}
.tablebody{
    border: 1px solid white;
    border-radius: 0.5em 0.5em 0.5em 0.5em;
}
.links{
    text-align: center;
    font-style: oblique;
}
```
# challenge
## html
```
...

<form id="registerForm" action="javascript:register()">
          <label class="writing" for="user">Username(required)</label>
          <label class="usererror" id="uerror" for="user">Username already exists! try again.</label>
...
```
## javascript
```
...
async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const result = await createAccount(jsonData);

  if (result.error) {
    document.getElementById("uerror").style.display="block";
    return console.log('An error occurred:', result.error);
  }
  document.getElementById("uerror").style.display="none";
  console.log('Account created!', result);
...
```
