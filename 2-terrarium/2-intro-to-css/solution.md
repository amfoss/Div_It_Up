# challenge subtask 2 ,task 2
### css for the bubble
```
.jar-glossy-long{
	width: 4%;
	height: 20%;
	background: #ffffff;
	position: absolute;
	border-radius:1rem 1rem;
	bottom: 11%;
	left: 7%;
	z-index: -1;
	
}
.jar-glossy-short{
	width: 4%;
	height: 5%;
	background: #ffffff;
	position: absolute;
	border-radius:1rem 1rem;
	bottom: 35%;
	left: 7%;
	z-index: -1;
}
```
# Assignment
```
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #32a007;
	text-align: center;
}
#left-container {
	display: flex;
	background-color: #eee;
	width: 200px;
	left: 0px;
	top: 0px;
	position: absolute;
	height: 900px;
	padding: 10px;
	flex-direction: column;
	align-content: space-between;
	
}
#right-container {
	display: flex;
	background-color: #eee;
	width: 200px;
	right: 0px;
	top: 0px;
	position: absolute;
	height: 900px;
	padding: 10px;
	flex-direction: column;
	align-content: space-between;
}
.plant-holder {
	position: relative;
	height: 13%;
	left: -10px;
}

.plant {
	position: absolute;
	max-width: 150%;
	max-height: 150%;
	z-index: 2;
}
.jar-walls {
	height: 725px;
	width: 1145px;
	background: #d1e1df;
	border-radius: 1rem;
	position: absolute;
	bottom: 5px;
	left: 20%;
	opacity: 0.5;
	z-index: 1;
	align-content: center;
}

.jar-top {
	width: 50%;
	height: 5%;
	background: #d1e1df;
	position: absolute;
	bottom: 80.5%;
	left: 25%;
	opacity: 0.7;
	z-index: 1;
}

.jar-bottom {
	width: 50%;
	height: 1%;
	background: #d1e1df;
	position: absolute;
	bottom: 0%;
	left: 25%;
	opacity: 0.7;
}

.dirt {
	display: flex;
	width: 1145px;
	height: 36px;
	background: #3a241d;
	position: absolute;
	border-radius: 0 0 1rem 1rem;
	bottom: 1%;
	left: 20%;
	opacity: 0.7;
	z-index: -1;
	align-items: flex-end;
}
.jar-glossy-long{
	height:30%;
	border-radius:1rem 1rem;
	width: 4%;
	background: #ffffff;
	position: absolute;
	left: 7%;
	z-index: -1;
	bottom: 11%;
}
.jar-glossy-short{
	height: 5%;
	border-radius:1rem 1rem;
	width: 4%;
	background: #ffffff;
	position: absolute;
	left: 7%;
	z-index: -1;
	bottom: 46%;
}
```

'/home/sreejith-m/Pictures/Screenshots/Screenshot from 2024-11-23 00-15-36.png' 
'/home/sreejith-m/Pictures/Screenshots/Screenshot from 2024-11-23 00-15-51.png' 
