```1-intro-to-html
Challenge
There are some wild 'older' tags in HTML that are still fun to play with, though you shouldn't use deprecated
tags such as these tags in your markup. Still, can you use the old <marquee> tag to make the h1 title scroll
horizontally? (if you do, don't forget to remove it afterwards)


The <marquee> tag was a classic HTML element used to create scrolling or bouncing text and images.
It allowed developers to make content move across the screen horizontally or vertically with minimal effort
Some other tags I experimented are <blink>,<big>,<small> etc
Code:
<marquee behavior="scroll" direction="left">This text scrolls left!</marquee>


Assaignment
Imagine you are designing, or redesigning, your personal web site. Create a graphical mockup of your site,
and then write down the HTML markup you would use to build out the various elements of the site.
You can use software of your choice, just make sure to hand-code the HTML markup.

ScreenShot:
This is the MarkUp and html solution for the assignment.
MarkUp:
```
![A Little About Me!](https://github.com/user-attachments/assets/987eeb99-5aba-4a88-b71f-08b09abd6050)
```
WebPage:
```
![image](https://github.com/user-attachments/assets/7184b0f8-d66b-402c-a48b-cdc6901689b5)
```

Solution:
<!DOCTYPE html>
<html>

<head>
	<title>Personal Bio</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>

<body>
<h1>All About Me!</h1>
<img src="./i.jpeg">
<div>
    <h2> Personal Info</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
</div>
<div>
    <h2> Brief Introduction</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
</div>
<div>
    <h2>Hobbies And Interest</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
</div>
<div>
    <h2>Achievement</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
</div>


</body>```
</html>


2-Intro-to-css
Challenge
Add a 'bubble' shine to the left bottom area of the jar to make it look more glasslike.
You will be styling the .jar-glossy-long and .jar-glossy-short to look like a reflected shine. 
Solution:
The chaged parts of css file to make the shine is given below.
.jar-glossy-long{
	width: 2%;
	height: 25%;
	background: #ffffff;
	position: absolute;
	border-radius: 5rem 5rem 5rem 5rem;
	bottom: 20%;
	left: 7%;
	opacity: 0.5;
	z-index: 2;
}
.jar-glossy-short{
	width: 2%;
	height: 4%;
	background: #ffffff;
	position: absolute;
	border-radius: 5rem 5rem 5rem 5rem;
	bottom: 50%;
	left: 7%;
	opacity: 0.5;
	z-index: 2;
}


ScreenShot:
```
![image](https://github.com/user-attachments/assets/54e59c9b-6088-4874-85b4-77f8f99ae856)
```
Assignment:
Restyle the terrarium using either Flexbox or CSS Grid, and take screenshots to show that you have tested it on several browsers.
You might need to change the markup so create a new version of the app with the art in place for your refactor.
Don't worry about making the elements draggable; only refactor the HTML and CSS for now.


Solution:
I have changed all the other elements code like left and right container so as to make use Flexbox to display childrens and allign themselves
changed parts of code are listed below
```
![image](https://github.com/user-attachments/assets/54e59c9b-6088-4874-85b4-77f8f99ae856)
```

#page{
	top: 0px;
	width:100%;
	position: absolute;
	align-self: start;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

#left-container {
	margin-right: 70%;
	display: flex;
	flex-direction: column;
	height:100vh;
	background-color: #eee;
	width: 15%;
	right: 0px;
	top: 0px;
}

#right-container {
	display: flex;
	flex-direction: column;
	height:100vh;
	background-color: #eee;
	width: 15%;
	right: 0px;
	top: 0px;
}

3-Intro to Dom And Closures

Challenge:
Add new event handler to your closure to do something more to the plants;
for example, double-click a plant to bring it to the front. Get creative!

Solution:
For this challenge I have added this feature such that if you double
click inside the jar gravity takes over the plant and it falls to the bottom.
For implementing this I have add 3px to the top offset of the element until
it reaches the bottom of lid when it reaches the bottom that is its y-position
 from the top > 480 then i just stop adding to the offset while checking the
y position of the plant it also checks to see if the plants is beyond the
border of the jar using xposition from left end of screen The following piece
of code comes anywhere inside the dragElement function

Code:
	document.addEventListener("dblclick", (event) => {
		if (event.target === terrariumElement) {
				function move(){
					let rect = terrariumElement.getBoundingClientRect();
					
					if(rect.top<480 && 500<rect.right&&rect.right<1450){
						terrariumElement.style.top = terrariumElement.offsetTop + 3 + 'px';
						requestAnimationFrame(move);
					}
				}
				move();
			}
	});

Assignment:
Research the DOM a little more by 'adopting' a DOM element. Visit the MDN's list of DOM interfaces and pick one.
Find it being used on a web site in the web, and write an explanation of how it is used.

I chose the Node interface, a big part of the DOM API. The Node interface represents
a single node in the document tree and serves as the base class for many DOM objects
such as Element, Document etc. It provides properties and methods like .parentNode,
.childNodes which are applicable to all node types.


Example: Using Node in Discord
In web applications like Discord, nodes are used to manage dynamic content.
For example, when a user sends a message, the application creates a new text node or element node
to display the message in the chat interface. Behind the scenes, methods like .appendChild() to
add a message node to the chat container and .removeChild() to delete messages are frequently utilized.
For instance, when a user edits a message, Discord might access the .textContent property of a
text node to replace its content. Similarly, Node methods like .contains() help determine if a
specific message node is part of the currently displayed thread.

