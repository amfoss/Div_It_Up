1. Sub Topic 1

Challenge:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Using Marquee </title>
</head>
<body>
    <marquee behavior="scroll" direction="left">This is a scrolling title!</marquee>
</body>
</html>
```

The text "This is a scrolling title!" scrolls horizontally across the screen from right to left.
The `<marquee>` tag is outdated and should not be used in modern HTML as it is not supported in all browsers and does not comply with accessibility standards. Now we can use CSS animations for the same.


```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Blog</title>
</head>
<body>
    <header>
        <h1>Chic Chatter</h1>
        <nav>
            <a href="#home">Home</a> | 
            <a href="#about">About</a> | 
            <a href="#contact">Contact</a>
        </nav>
    </header>
    <main>
        <h2>Recent Posts</h2>
        <section>
            <article>
                <h3>Post Title 1</h3>
                <p>Body for Post 1</p>
                <a href="#readmore">Read More</a>
            </article>
            <article>
                <h3>Post Title 2</h3>
                <p>Body for Post 2</p>
                <a href="#readmore">Read More</a>
            </article>
        </section>
    </main>
    <aside>
        <h3>Categories</h3>
        <ul>
            <li><a href="#tech">Tech</a></li>
            <li><a href="#lifestyle">Lifestyle</a></li>
            <li><a href="#travel">Travel</a></li>
        </ul>
        <h3>Follow Me</h3>
        <p>
            <a href="#twitter">Twitter</a><br>
            <a href="#instagram">Instagram</a><br>
            <a href="#linkedin">LinkedIn</a>
        </p>
    </aside>
    <footer>
        <p>&copy; 2024 My Blog. All Rights Reserved.</p>
        <p>Contact: <a href="mailto:example@example.com">example@example.com</a></p>
    </footer>
</body>
</html>


```
This design is the most basic basic design for any blog website. I haven't added CSS to this due yet. The layout is:

- A header.
- A main section for blog posts.
- A sidebar for categories and links.
- A footer for additional details.

After css:

```
style.css

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #264d26;
    color: #ffffff;
}

header {
    background-color: #3d793d;
    padding: 20px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
}

header nav {
    margin-top: 10px;
}

header nav a {
    color: #ffffff;
    text-decoration: none;
    margin: 0 10px;
}

header nav a:hover {
    text-decoration: underline;
}

main, aside, footer {
    padding: 20px;
    background-color: #6eb36e;
    border: 2px solid #264d26;
}

body {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 3fr 1fr;
    gap: 10px;
    height: 100vh;
}

header {
    grid-column: 1 / -1;
}

main {
    grid-column: 1 / 2;
}

aside {
    grid-column: 2 / 3;
    grid-row: 2;
}

footer {
    grid-column: 1 / -1;
    text-align: center;
    background-color: #3d793d;
    color: #ffffff;
}

main h2 {
    border-bottom: 2px solid #264d26;
    padding-bottom: 10px;
}

main article {
    margin-bottom: 20px;
    padding: 10px;
    background-color: #b9d8b9;
    border: 2px solid #264d26;
}

main article h3 {
    margin-bottom: 10px;
}

main article a {
    color: #264d26;
    text-decoration: none;
    font-weight: bold;
}

main article a:hover {
    text-decoration: underline;
}

aside h3 {
    border-bottom: 2px solid #264d26;
    padding-bottom: 10px;
    margin-bottom: 10px;
}

aside ul {
    list-style: none;
}

aside ul li {
    margin: 10px 0;
}

aside ul li a {
    color: #264d26;
    text-decoration: none;
}

aside ul li a:hover {
    text-decoration: underline;
}

aside p a {
    color: #264d26;
    text-decoration: none;
}

aside p a:hover {
    text-decoration: underline;
}

footer p {
    margin: 10px 0;
}

footer a {
    color: #ffffff;
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}

```

2. Sub Topic 2

Challenge:
```
.jar-glossy-long,
.jar-glossy-short {
    position: absolute;
    background: rgba(255, 255, 255, 0.4); 
    border-radius: 50%; 
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3); 
    opacity: 0.6;
    z-index: 2; 
}

.jar-glossy-long {
    width: 10%;
    height: 30%;
    bottom: 10%; 
    left: 15%;
}
.jar-glossy-short {
    width: 5%;
    height: 15%;
    bottom: 5%; 
    left: 20%; 
}

```

Assignment:

```
index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terrarium Grid</title>
    <link rel="stylesheet" href="styleAssignment.css">
</head>
<body>
    <header>
        <h1>Terrarium App</h1>
    </header>
    <main class="terrarium-grid">
        <div class="plant-container">
            <div class="plant-holder">
                <img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
            </div>
            <div class="plant-holder">
                <img class="plant" alt="plant" id="plant2" src="./images/plant2.png" />
            </div>
            <div class="plant-holder">
                <img class="plant" alt="plant" id="plant3" src="./images/plant3.png" />
            </div>
            <div class="plant-holder">
                <img class="plant" alt="plant" id="plant4" src="./images/plant4.png" />
            </div>
            <div class="plant-holder">
                <img class="plant" alt="plant" id="plant5" src="./images/plant5.png" />
            </div>
            <div class="plant-holder">
                <img class="plant" alt="plant" id="plant6" src="./images/plant6.png" />
            </div>
            <div class="plant-holder">
                <img class="plant" alt="plant" id="plant7" src="./images/plant7.png" />
            </div>
            <div class="plant-holder">
                <img class="plant" alt="plant" id="plant8" src="./images/plant8.png" />
            </div>
            <div class="plant-holder">
                <img class="plant" alt="plant" id="plant9" src="./images/plant9.png" />
            </div>
            <div class="plant-holder">
                <img class="plant" alt="plant" id="plant10" src="./images/plant10.png" />
            </div>
            <div class="plant-holder">
                <img class="plant" alt="plant" id="plant11" src="./images/plant11.png" />
            </div>
            <div class="plant-holder">
                <img class="plant" alt="plant" id="plant12" src="./images/plant12.png" />
            </div>
            <div class="plant-holder">
                <img class="plant" alt="plant" id="plant13" src="./images/plant13.png" />
            </div>
            <div class="plant-holder">
                <img class="plant" alt="plant" id="plant14" src="./images/plant14.png" />
            </div>
        </div>
    </main>
</body>
</html>

```

```
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #4caf50;
    color: white;
    text-align: center;
    padding: 1em 0;
}

main {
    display: flex;
    justify-content: center;
    padding: 2em;
}

.plant-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    width: 90%;
    max-width: 1200px;
}

.plant-holder {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.plant {
    max-width: 100%;
    height: auto;
}

```
![ScreenShot in Safari](<Screenshot 2024-11-23 at 3.12.56 PM-2.png>)
![ScreenShot in Sidekick](<Screenshot 2024-11-23 at 3.10.17 PM.png>)
![ScreenShot in Chrome](<Screenshot 2024-11-23 at 3.09.56 PM.png>)
[Screen Recording on different devices](<../../Desktop/Screen Recording 2024-11-23 at 3.11.09 PM.mov>)

3. Sub Topic 3

Challenge:

```
terrariumElement.addEventListener('mouseover', function () {
		this.style.transform = 'scale(1.2)'; // Enlarge plant
		this.style.transition = 'transform 0.3s'; // Smooth transition
	});
	
	terrariumElement.addEventListener('mouseout', function () {
		this.style.transform = 'scale(1)'; // Return to original size
	});
	
	terrariumElement.addEventListener('click', function () {
		this.style.animation = 'shake 0.5s'; // Apply shake animation
		setTimeout(() => this.style.animation = '', 500); // Remove animation after it finishes
	});

	let borderApplied = false; // Flag to track if the border is applied
	terrariumElement.addEventListener('contextmenu', function (event) {
    event.preventDefault(); // Prevent default right-click menu

    if (!borderApplied) {
        // Add a random border
        const borders = ['dotted', 'dashed', 'solid', 'double', 'groove'];
        const randomBorder = borders[Math.floor(Math.random() * borders.length)];
        this.style.border = `3px ${randomBorder} black`; // Apply random border style
        borderApplied = true; // Update the flag
    } else {
        // Remove the border
        this.style.border = 'none';
        borderApplied = false; // Reset the flag
    }
    });

```

Assignment:


The HTMLCollection DOM Interface
The `HTMLCollection` is a DOM interface that represents a collection of HTML elements. These elements can be accessed by their index number or their `id` or `name` attribute.

An HTMLCollection in the HTML DOM is live; it is automatically updated when the underlying document is changed.

Let’s take the example of the Google homepage (https://www.google.com).

```javascript
const forms = document.forms;
console.log(forms);

```
If you run the above code, it returns an `HTMLCollection` containing all the `<form>` elements in the document. 

Developers often use it to:

- Access specific elements by their index.
- Dynamically update page content, such as - modifying attributes or styling.
- Handle events, like attaching event listeners to a set of elements.
In the case of Google, the HTMLCollection makes it easier to manage the interactive behavior of the search form and other form elements on the page.