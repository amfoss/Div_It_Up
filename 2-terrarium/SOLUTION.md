1. Introduction to HTML

Assignment:
```<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Blog</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body >

  <div class="bg-blue-600 text-white">
    <div class="container mx-auto text-center py-4">
      <h1 class="text-4xl font-bold">Blog Title</h1>
      <nav class="mt-2">
        <ul class="flex justify-center space-x-6">
          <li><a href="" class="text-lg hover:underline">Home</a></li>
          <li><a href="" class="text-lg hover:underline">About</a></li>
          <li><a href="" class="text-lg hover:underline">Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>

  <div class="py-8">
    <div class="container mx-auto flex space-x-8">

      <div class="w-1/4 bg-white p-4 shadow">
        <h2 class="text-xl font-bold mb-4">Categories</h2>
        <ul class="mt-2 space-y-2">
          <li><a href="" class="text-blue-600 hover:underline">Navy</a></li>
          <li><a href="" class="text-blue-600 hover:underline">Army</a></li>
          <li><a href="" class="text-blue-600 hover:underline">Airforce</a></li>
        </ul>
      </div>


      <div class="w-3/4">

        <div class="bg-white p-6 shadow mb-6">
          <h2 class="text-2xl font-bold mb-2"><a href="" >Blog Post Title 1</a></h2>
          <p class="text-gray-600 mb-4">Posted on January 5, 2006</p>
          <p class="text-lg font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et urna sit amet dui gravida dictum.</p>
          <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-lg text-sm px-5 py-2.5 mb-2">Read More</button>
        </div>

        <div class="bg-white p-6 shadow mb-6">
          <h2 class="text-2xl font-bold mb-2"><a href="">Blog Post Title 2</a></h2>
          <p class="text-gray-600 mb-4">Posted on June 24, 2006</p>
          <p class="text-lg font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et urna sit amet dui gravida dictum.</p>
          <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-lg text-sm px-5 py-2.5 mb-2">Read More</button>

        </div>
      </div>
    </div>
  </div>

  <div class="bg-blue-600 text-white py-4">
    <div class="container mx-auto text-center">
      <p>&copy; 2024 My Blog. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
```
![Screenshot from 2024-11-22 05-30-50](https://github.com/user-attachments/assets/c34d4bd3-9c6d-4b0f-9cbc-2a0c8e2d4591)


Challenge:
Used the marquee tag and 
```
<marquee behavior="" direction="">Join the Indian Armed Forces!!!</marquee>
```
![Screenshot from 2024-11-22 05-50-09](https://github.com/user-attachments/assets/11c89bea-4018-4cc6-9196-25d701cc271a)



2. Introduction to CSS
Assignment:
![Screenshot from 2024-11-24 15-05-34](https://github.com/user-attachments/assets/bafa70b6-3e87-453e-a5a2-833c36e64902)
![Screenshot from 2024-11-24 16-18-25](https://github.com/user-attachments/assets/cbc885dc-46ef-4d0c-96ae-2185e39175a4)


```<!DOCTYPE html>
<html>
<head>
  <title>Welcome to my Virtual Terrarium</title>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="./cstyle.css" />
</head>
<body>
  <h1>My Terrarium</h1>
  <div id="main-container">
    <div id="left-container" class="container">
      <div class="plant-holder"><img class="plant" alt="plant" id="plant1" src="./images/plant1.png" /></div>
      <div class="plant-holder"><img class="plant" alt="plant" id="plant2" src="./images/plant2.png" /></div>
      <div class="plant-holder"><img class="plant" alt="plant" id="plant3" src="./images/plant3.png" /></div>
      <div class="plant-holder"><img class="plant" alt="plant" id="plant4" src="./images/plant4.png" /></div>
      <div class="plant-holder"><img class="plant" alt="plant" id="plant5" src="./images/plant5.png" /></div>
      <div class="plant-holder"><img class="plant" alt="plant" id="plant6" src="./images/plant6.png" /></div>
      <div class="plant-holder"><img class="plant" alt="plant" id="plant7" src="./images/plant7.png" /></div>
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
      <div class="plant-holder"><img class="plant" alt="plant" id="plant8" src="./images/plant8.png" /></div>
      <div class="plant-holder"><img class="plant" alt="plant" id="plant9" src="./images/plant9.png" /></div>
      <div class="plant-holder"><img class="plant" alt="plant" id="plant10" src="./images/plant10.png" /></div>
      <div class="plant-holder"><img class="plant" alt="plant" id="plant11" src="./images/plant11.png" /></div>
      <div class="plant-holder"><img class="plant" alt="plant" id="plant12" src="./images/plant12.png" /></div>
      <div class="plant-holder"><img class="plant" alt="plant" id="plant13" src="./images/plant13.png" /></div>
      <div class="plant-holder"><img class="plant" alt="plant" id="plant14" src="./images/plant14.png" /></div>
    </div>
  </div>
</body>
</html>

body {
  font-family: helvetica, arial, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: red;
  text-align: center;
}

#main-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background-color: #eee;
  border-radius: 8px;
  width: 15%;
}

.plant {
  width: 80%;
  object-fit: contain;
}

.jar-top {
  width: 50%;
  height: 5%;
  background: #d1e1df;
  position: absolute;
  top: 10%;
  left: 25%;
  opacity: 0.7;
}

.jar-walls {
  height: 80%;
  width: 60%;
  background: #d1e1df;
  border-radius: 16px 16px 16px 16px;
  position: absolute;
  bottom: 5%;
  left: 20%;
  opacity: 0.5;
}

.dirt {
  width: 60%;
  height: 10%;
  background: #3a241d;
  position: absolute;
  bottom: 5%;
  left: 20%;
  border-radius: 0 0 12px 12px;
  opacity: 0.7;
}

.jar-bottom {
  width: 50%;
  height: 5%;
  background: #d1e1df;
  position: absolute;
  bottom: 0;
  left: 25%;
  opacity: 0.7;
}
```
Challenges:

![Screenshot from 2024-11-24 16-49-06](https://github.com/user-attachments/assets/54b94975-1550-409a-b4ca-4242663b9b55)

```.jar-glossy-long {
  position: absolute;
  width: 4%;
  height: 25%;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 16px 16px 16px 16px;
  bottom: 10%;
  left: 10%;
}

.jar-glossy-short {
  position: absolute;
  width: 4%;
  height: 10%;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 16px 16px 16px 16px;
  bottom: 38%;
  left: 10%;
}
```
3. intro to DOM and closures

Assignments:
Document is object or interface that represents webpage loaded. If you wanted to access any element in a html page, you access it through the document object. It represents any web page loaded in the browser and serves as an entry point into the web pages content, which is the DOM tree. Basically it is the root of the document tree and provides the primary access to to the document data.

Challenges:
```function addHoverEffect(terrariumElement) {
  terrariumElement.onmouseover = function () {
    terrariumElement.style.boxShadow = '5px 5px 15px rgba(0, 0, 0, 0.5)';
  };
  terrariumElement.onmouseout = function () {
    terrariumElement.style.boxShadow = 'none';
  };
}
```
I have added a hover effect whenever we move the plants it adds the effect.

![rn_image_picker_lib_temp_1e87dbe2-8f86-4767-bf49-9ade9317ab21](https://github.com/user-attachments/assets/f5a91a31-1fcf-4266-a16d-bb20470c65c1)

![rn_image_picker_lib_temp_f9040703-2043-4263-909a-3ec06cb194ab](https://github.com/user-attachments/assets/7a0b76f6-4d98-4510-9b9d-5b409a28b896)

