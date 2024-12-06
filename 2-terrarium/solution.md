# My Terrarium
## Subtopic 1: Intro to HTML

### Assignment
```
<marquee>
	<h1>My terrarium</h1>
</marquee>
```
### Challenge
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
</head>
<body>
    <h1>Info about me</h1>
    <div id="info">
        <div class="holder">
            <p class="tag">Name</p>
            <p class="vaule">P.Mihir</p>
        </div>
        <div class="holder">
            <p class="tag">Bday/p>
            <p class="value">02-09-2005</p>
        </div>
        <div class="holder">
            <p class="tag">Gender</p>
            <p class="value">Male</p>
        </div>
        <div class="holder">
            <p class="tag">Address</p>
            <p class="value">Narsapur,W.G District,A.P</p>
        </div>
        <h2>Education</h2>
        <div class="holder">
            <p class="tag">College</p>
            <p class="value">Amrita</p>
        </div>
        <div class="holder">
            <p class="tag">Branch</p>
            <p class="value">CSE</p>
        </div>
        <div class="holder">
            <p class="tag">Semisterr</p>
            <p class="value">3</p>
        </div>
    </div>
</body>
</html>
```
---

## Subtopic-2: Intro to CSS
## Assignment
![image](https://github.com/user-attachments/assets/4e0672d3-a5a1-459a-9e2d-7b985df4a5d7)

## Challenge
```
.jar-glossy-long{
    width: 4%;
    height: 25%;
    background:#eee;
    border-radius: 1rem;
    position: absolute;
    bottom: 18%;
    left: 5%;
}
.jar-glossy-short{
    width: 4%;
    height: 7%;
    background: white;
    border-radius: 1rem;
    position: absolute;
    bottom: 48%;
    left: 5%;
}
```
---

## Subtopic-3: Intro to DOM and Closures
## ASsignment
Event Interface (DOM Element)
Event Interfae is one of the central part of DOM and it represents an event that takes place on event target. It can be triggered by clicking the mouse button, keys on the keyboard, or network change.  
we might find that event used in most of websites for capturing and responding to user interactions. It is also commonly used in our daily tasks of designing and developing websites.

A classic example of where Event interface is used is in Google's Homepage. When you start searching for something the 'input' Event triggers and it will start showing some suggestion regarding the search content.

## Challenge
```
terrariumElement.addEventListener("dblclick", (event) => {
        let highlightColor = "#FFD700";
        terrariumElement.style.border = "solid black 2px";
        terrariumElement.style.maxWidth = "85%";
        terrariumElement.style.background = highlightColor;
      });      
}
```