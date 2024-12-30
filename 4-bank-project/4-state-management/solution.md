# challenge
## javascript
```
...

...

```
# assignment
## html
```
...

<section>
  <h2 class="heading">Transactions</h2>
  <section>
    <button onclick="visible()" class="inputbutton">Add Transaction</button>
  </section>
  <div class="visibility" id="visible">
    <div class="place">
      <div class="popup">
        <h1 class="image">ADD TRANSACTION</h1>
        <form id="data" action="javascript:addtransaction()">
        <label for="date" class="writing">DATE</label><br>
        <input name="date" class="inputbox" type="date" required><br>
        <label for="object" class="writing">OBJECT</label><br>
        <input name="object" class="inputbox" type="text" required><br>
        <label for="amount" class="writing">AMOUNT(USE NEGATIVE VALUE FOR DEBIT)</label><br>
        <input name="amount" class="inputbox" type="number" required><br>
        <button class="keys" onclick="invisible()">CANCEL</button>
        <button class="keys">OK</button>
      </form>
      </div>
    </div>
  </div>

...

```
## css
```
.visibility{
    display:none;
}
.place{
    display:flex;
    justify-content: center;
    align-items: center;
}
#data{
    display:flex;
    flex-flow: column;
    row-gap: 15px;
}
.popup{
    display: flex;
    flex-direction: column;
    column-gap: 10px;
    position: absolute;
    background-color: rgb(208, 213, 235);
    z-index:1;
    padding:10px;
    border: 2px solid rgb(0, 8, 122);
    border-radius: 1em 1em 1em 1em;
}
.writing{
    font-family: Calibri;
    font-style: oblique;
    font-size: small;
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
.inputbox{
    width:450px;
    height: 30px;
    border-radius: 1em 1em 1em 1em;
}
```

## javascript
```
...

async function sendrequest(action,account){
  try{
    if(action === "creates"){
    const response = await fetch('//localhost:5000/api/accounts', {// waits till fetch API requests the server for data.
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: account});
      return await response.json();}
    else if(action === "gets"){
      const respon = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(account));// waits while the fetch API requests for data from the server.
      return await respon.json();}// waits till the json() parses the json file into a javascript object.
  }catch (error) {
    return { error: error.message || 'Unknown error' };// returns error if any await function returns error.
  }
};

async function transactionrequest(account,file){
  try{
    const addition = await fetch('//localhost:5000/api/accounts/'+ encodeURIComponent(account) +'/transactions',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: file});
      return await addition.json();
  }
  catch (error) {
  return { error: error.message || 'Unknown error' };// returns error if any await function returns error.
  }
}
...

function visible(){
  document.getElementById("visible").style.display="block";
}
function invisible(){
  document.getElementById("visible").style.display="none";
}
async function addtransaction(){
  const transactiondata = document.getElementById("data");
  const pairdata = new FormData(transactiondata);
  const convertjson = JSON.stringify(Object.fromEntries(pairdata));
  const account = state.account;
  if (!account) {
    return logout();
  }
  const adding = await transactionrequest(account.user,convertjson);
  updateState('transaction',adding);
  console.log(account);
  updateRoute();
  invisible();
}

...
```
