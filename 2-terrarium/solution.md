# My Terranium
![image](https://github.com/user-attachments/assets/67371c92-542f-43bb-b40d-04a9c6ca4d81)


# Assignment

## intro-to-html

**Challenge:**
```
I tried using some of the deprecated tags and some of them were really cool this includes:

marquee :
-it is kind of a decorative tage which makes text move from right to left like a train.

blink :
-This too is a decorative tag it makes the text blink in a distractive way.

nobr :
-This tag is used to ignore text break.

spacer :
-This tag is used to insert a dummy space.

strike :
-This tag makes a strike-through over the text.

These are only some examples similialy there are alot of tags which didnt got enough recoginition.

```

**Assignment:**

###### Graphical Mockup:

![image](https://github.com/user-attachments/assets/9585a00d-74f0-4184-a7f3-0e62720d0246)


```

HTML markup's :

Inorder to create such an interface i will use various html tags which includes :

Basics necessary tags :
<html>
<head>
<title>
<body>

<header>  : This tag can be used to create the header section properly.

<section> : This tag can be used to define a section of the page in which i can define the rest of the tags.

<h1> : This tag can be used to specift the heading.

<div> : This tag can be used to specify the container.

<p> : This tag can be used to write the text.

<a>  : The anchor tag can be used to add links.

<img> : This tag can be used to add image into the container.

<footer> : This tag can be user to create the footer part of the website.

<Button> : This tag can be used to create the button on the top corner.

More than this i can add inline CSS inside the tags to make the frontend amazing.
```

## into-to-css

**Challenge:**
```
CSS OVERVIEW:

.jar-glossy-long {
    position:relative;
    top:350px;
    left:30px;
    height: 200px;
    width:20px;
    border-radius: 5px;
    background-color: #f1f4f6;
}

.jar-glossy-short {
    position:relative;
    top:95px;
    left:30px;
    height: 35px;
    width:20px;
    background-color: #f1f4f6;
    border-radius: 15px
}

Workflow:
-Position "relative" makes the element relative to the jar.
-top and left helps to move the element to desired pixel distance.
-border-radius is used to unsharp the corner's
-setting a transperent like background-color makes it look even better.
```
**Assignment:**
```
Initially i thought this is going to be a huge task but throughout i realised flexbox is not that complicated,flexbox had many
powerful commands that can do cool thinigs.Playing flexbox froggy game helped me to understand much of the concept.

.plant {
    width: 200px;
    max-height: 125px;
}
#page {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;  
}
#left-container {
    padding: 10px;
    background-color: yellow;
    display: flex;
    width:fit-content;  
    height:fit-content;
    flex-direction: column;
    justify-content: flex-start;
}
#right-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height:fit-content;
    background-color: blueviolet;
}

```
**IMAGE**
![image](https://github.com/user-attachments/assets/6018f5ac-15da-4e73-870c-264fb3b753c1)

## intro-to-DOM-and-closures

**Challenge:**

```
 terrariumElement.addEventListener("dblclick", (event) => {
    let lightColors = [
      "#FFB6C1",
      "#B0E0E6",
      "#98FB98",
      "#FFD700",
      "#E0FFFF",
      "#F0E68C",
      "#D3D3D3",
      "#ADD8E6",
      "#FFDEAD",
      "#FFE4B5"
    ];
    let randomColor = lightColors[Math.floor(Math.random() * lightColors.length)];
    terrariumElement.style.border= "solid black 2px";
    terrariumElement.style.maxWidth = "85%";
    terrariumElement.style.background=randomColor;
  });

-When user double clickes an element it will be framed with a background color.
-Here i implemented the double click function using EventListener's.
-I have used math random to generate a random color.
```

###### Preview:
![image](https://github.com/user-attachments/assets/44dda3c1-a271-430e-abaa-9a3fbba6b293)

**Assignment:**
```
DOM(Document Object Model):

Node

A node is a fundamental building block of DOM.In a nutshell, everything you see on a webpage is called a NODE in the DOM and that’s one of the things the DOM does,
 it takes the buttons, images, h1..s, tables, Comments, excluding attributes, text, and so on and it turns every one of those web contents into NODES.

 TYPES OF DOM NODE:

There are 11 types of DOM Node of which 4 are deprecated and 7 are up and running:
```
![image](https://github.com/user-attachments/assets/07d7a0f4-4bea-4565-94e4-6ec52c63bedd)
```
Here’s a simple example that demonstrates how to access and manipulate DOM nodes using JavaScript:

// Get an element node by its ID

const heading = document.getElementById('myHeading');

// Access the text content of a text node

console.log(heading.firstChild.nodeValue); // Output: Existing text

// Create a new text node

const newText = document.createTextNode('New Text');

// Replace the existing text node with the new one

heading.replaceChild(newText, heading.firstChild);


Node Properties and Methods:
Each type of DOM node comes with its own set of properties and methods that provide information about the node
and allow you to manipulate it.Let me show you some common one's:

a. Node Properties

nodeType: Returns an integer representing the type of the node.
nodeName: Returns the name of the node.
nodeValue: Represents the value of the node.
childNodes: Returns a live NodeList of all child nodes.
parentNode: Returns the parent node of the current node.

b. Node Methods

appendChild(newNode): Adds a new child node to the end of the node’s child node list.
insertBefore(newNode, referenceNode): Inserts a new child node before a specified reference node.
removeChild(node): Removes a child node from the node’s child node list.
replaceChild(newNode, oldNode): Replaces an existing child node with a new node.
cloneNode(deep): Creates a copy of the node. If deep is set to true, it also clones all descendant node

PRACTICAL APPLICATION:
So as i mentioned Node is everywhere and it is an intergral part of a website , For example i will take
the case of famous video streaming platform Youtube,Youtube use's Node in the following ways:

- Web Scraping and Data Extraction.
- Element Creation :With the ability to create new Node's in DOM we can add new elements lively in the website ,
                  for example ,creating a POP UP.
- User Interactions: To handle user interactions like click and keyboard events.
- Web Accessibility: Proper manipulation of DOM nodes is crucial for ensuring web accessibility.

```
