# Sub Topic 1 - Intro to HTML

## Assignment : Blog mockup

### Instructions : 
```
Imagine you are designing, or redesigning, your personal web site. Create a graphical 
mockup of your site, and then write down the HTML markup you would use to 
build out the various elements of the site. You can use software of your choice, 
just make sure to hand-code the HTML markup. (Just a simple design is enough)
```
### Solution :
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Blog</title>
</head>
<body>
    <header>
        <nav>
            <label class="logo">MyBlog</label>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
            <input type="text" placeholder="search">
        </nav>
    </header>

    <aside>
        <div class="index">
            <h3>Recent Posts</h3>
            <ul>
                <li><a href="#post1">Post 1</a></li>
                <li><a href="#post2">Post 2</a></li>
            </ul>
        </div>
        <div class="quick-links">
            <h3>Quick Links</h3>
            <ul>
                <li>Instructions</li>
                <li>Approach</li>
                <li>Solution</li>
            </ul>
        </div>
    </aside>

    <main class="blog">
        <article>
            <h2>Blog Post Title : Assignment Topic-2</h2>
            <section> 
                <p>Imagine you are designing, or redesigning, your personal web site. 
                Create a graphical mockup of your site, and then write down the HTML
                markup you would use to build out the various elements of the site.
                You can use software of your choice, just make sure to hand-code the HTML markup.
                (Just a simple design is enough)</p>
            </section>
        </article>
    </main>
        
    <footer>
        <p>© 2024 My Blog | Follow me on 
            <a href="#">Twitter</a> &nbsp;<a href="#">Twitter</a>&nbsp;<a href="#">Instagram</a> 
            &nbsp; <a href="#">Github</a>
        </p>
    </footer>

</body>
</html>
```
## Challenge : Use deprecated tags
```html
<!DOCTYPE html>
<html lang = "en">
    <head>
            <title>Terrarium</title>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <marquee loop="" direction="left">
            <h1>Hello I am a marquee tag</h1>
        </marquee>
    </body>
</html>
```
- Why is a plant holder and a plant css selector needed?
The reason is that each plant image has it's own shape and size and that way we have to individually
assign the css for each plant which would be redundant.

# Sub Topic 2 - Intro to CSS

## Assignment : CSS Refactoring

### Instructions :
Restyle the terrarium using either Flexbox or CSS Grid, and take screenshots to show that
you have tested it on several browsers. You might need to change the markup so create a 
new version of the app with the art in place for your refactor. Don't worry about making 
the elements draggable; only refactor the HTML and CSS for now.

### Solution :
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Terrarium</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="./flex.css" />
    </head>
    <body>
        <h1 style="color: red;">My Terrarium</h1>
        <div id="page">
            <div id="left-container" class="container">
                <div class="plant-holder">
                    <img class="plant" alt="plant1" id="plant1" src="./images/plant1.png" />
                </div>
                <div class="plant-holder">
                    <img class="plant" alt="plant2" id="plant2" src="./images/plant2.png" />
                </div>
                <div class="plant-holder">
                    <img class="plant" alt="plant3" id="plant3" src="./images/plant3.png" />
                </div>
                <div class="plant-holder">
                    <img class="plant" alt="plant4" id="plant4" src="./images/plant4.png" />
                </div>
                <div class="plant-holder">
                    <img class="plant" alt="plant5" id="plant5" src="./images/plant5.png" />
                </div>
                <div class="plant-holder">
                    <img class="plant" alt="plant6" id="plant6" src="./images/plant6.png" />
                </div>
                <div class="plant-holder">
                    <img class="plant" alt="plant7" id="plant7" src="./images/plant7.png" />
                </div>
            </div>

            <div id="terrarium">
                <div class="jar-top"></div>
                <div class="jar-walls">
                    <div class="jar-glossy-long"></div>
                    <div class="jar-glossy-short"></div>
                </div>
                <div class="dirt"></div>
                <div class="jar-bottom"></div>
            </div>
            
            <div id="right-container" class="container">
                <div class="plant-holder">
                    <img class="plant" alt="plant8" id="plant8" src="./images/plant8.png" />
                </div>
                <div class="plant-holder">
                    <img class="plant" alt="plant9" id="plant9" src="./images/plant9.png" />
                </div>
                <div class="plant-holder">
                    <img class="plant" alt="plant10" id="plant10" src="./images/plant10.png" />
                </div>
                <div class="plant-holder">
                    <img class="plant" alt="plant11" id="plant11" src="./images/plant11.png" />
                </div>
                <div class="plant-holder">
                    <img class="plant" alt="plant12" id="plant12" src="./images/plant12.png" />
                </div>
                <div class="plant-holder">
                    <img class="plant" alt="plant13" id="plant13" src="./images/plant13.png" />
                </div>
                <div class="plant-holder">
                    <img class="plant" alt="plant14" id="plant14" src="./images/plant14.png" />
                </div>
            </div>
        </div>
    </body>
</html>
```
```css
body {
	font-family: helvetica, arial, sans-serif;
    display: flex;
    flex-direction: column;
}
h1 {
	color: #3a241d;
	text-align: center;
}
.container {
    background-color: #eee;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 15%;
    position: absolute;
    top: 0;
    align-items: center;
}
#left-container {
    left: 0;
}
#right-container {
    right: 0;
}
.plant-holder {
    position: relative;
    height: 13.7%;
    width: 90%;
    left: 5%;
}
.plant {
    width: 80%;
    max-height: 125%;
    left: 40px;
}
#terrarium {
    display: flex;
    flex-direction: row;
    background-color: blue;
    width: 100%;
    height: 100%;
}
.jar-top {
    position: absolute;
    left: 25%;
    top: 15%;
    width: 50%;
    height: 5%;
    background-color: #d1e1df;
}
.jar-walls {
    height: 70%;
	width: 60%;
	background: #d1e1df;
	border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
	position: absolute;
	top: 20%;
	left: 20%;
	opacity: 0.5;
	z-index: 1;
}
.jar-bottom {
	width: 60%;
	height: 5%;
	background: #858585;
	position: absolute;
	top: 90%;
	left: 20%;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
}

```
### Challenge :
```
Solution code in the above css file.
```

#### Yet to paste the screenshots for CSS Refactoring assignment

# Sub Topic 3 - Intro to DOM and closures

## Assignment - Work a bit more with the DOM

### Instructions
```
Research the DOM a little more by 'adopting' a DOM element. Visit 
the MDN's list of DOM interfaces and pick one. Find it being used on a 
web site in the web, and write an explanation of how it is used.
```
### Solution
```
The Element interface represents an HTML or XML element. It provides methods and properties for interacting with the structure and content of a webpage. As an extension of the Node interface, Element includes features specifically designed for element manipulation.

Methods:
getAttribute(attributeName): Get the value of an attribute.
setAttribute(attributeName, value): Set a new attribute or modify an existing one.
classList.add(className): Add a class to the element.
querySelector(selector): Find the first child element that matches the selector.
appendChild(node): Add a child node to the element.
Properties:
innerHTML: Get/set the HTML content of the element.
outerHTML: Get/set the HTML content including the element itself.
style: Access or set inline styles.
children: Retrieve all child elements as a collection.
```

## Challenge 
```Task : Add new event handler to your closure to do something more to the plants; for 
example, double-click a plant to bring it to the front. Get creative!
```
### Solution
```js
for (let i = 1; i <= 14; i++) {
    dragElement(document.getElementById(`plant${i}`));
}
function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const initialX = terrariumElement.offsetLeft;
    const initialY = terrariumElement.offsetTop;

    terrariumElement.onpointerdown = pointerDrag;

    terrariumElement.ondblclick = () => {
        terrariumElement.style.transition = "all 0.5s ease";
        terrariumElement.style.left = initialX + 'px';
        terrariumElement.style.top = initialY + 'px';
        setTimeout(() => {
            terrariumElement.style.transition = ""; 
        }, 500);
    };

    function pointerDrag(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

```
