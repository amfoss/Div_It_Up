# challenge

## html
```
...

<template id="dashboard">
  <header>
     <h1>Bank App</h1>
     <a href="/login" onclick="onLinkClick(event)">Logout</a><br>
     <a href="/credits" onclick="onLinkClick(event)">credits</a>
  </header>

...

<template id="credit">
  <header>
    <h1>credits</h1>
    <a href="/dashboard" onclick="onLinkClick(event)">dashboard</a>
  </header>
  <section>
    Made by: Sreejith
  </section>
</template>

...
```
## javascript
```
const routes = {
    '/login': { templateId: 'login' },
    '/dashboard': { templateId: 'dashboard' },
    '/credits':{templateId: 'credit'},
};

...
```
The above code in challenge is to make a new template called credit along with its route.

# assignment
## html
```no change```

## javascript
```
...

function updateRoute() {
    const path = window.location.pathname;
    const route = routes[path];
    if (!route) {
        return navigate('/login');
    }

    if (path === "/login"){
      document.title = "Bank app login";
    }
    else if(path === "/dashboard"){
      document.title = "Bank app Dashboard";
      console.log("Dashboard is shown");
    }
    else if(path === "/credits"){
      document.title = "Bank app Credit";
    }

...
```
The above code in assignment change the title of the webpage according to the path chosen. Also it displays "Dashboard is shown" in the console of the browser when dashboard is opened.
