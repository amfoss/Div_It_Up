# 1. Introduction to HTML
### Challange
Replacing `<h1>My Terrarium</h1>` with 
```
<marquee direction="left" loop="">
    <h1>My Terrarium</h1>
</marquee>
```
will make the web page title scroll horizontaly.

### Assignment

HTML markup of the website
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styling.css">
    <title>My website</title>
</head>

<body>
    <h1>My Profile</h1>
    <div id="page">
        <div class="type" id="basic-info">
            <h2>Basic Info</h2>
            <div class="info-holder">
                <img id="profile-picture" src="path/to/profile.jpg" alt="Profile picture">
            </div>
            <div class="info-holder">
                <p class="key">Name</p>
                <p class="value">Nishtha Jain</p>
            </div>
            <div class="info-holder">
                <p class="key">Birthday</p>
                <p class="value">01 June 2007</p>
            </div>
            <div class="info-holder">
                <p class="key">Gender</p>
                <p class="value">Female</p>
            </div>
        </div>

        <div class="type" id="address">
            <h2>Address</h2>
            <div class="info-holder">
                <p class="key">City</p>
                <p class="value">Hyderabad</p>
            </div>
            <div class="info-holder">
                <p class="key">State</p>
                <p class="value">Telangana</p>
            </div>
            <div class="info-holder">
                <p class="key">Pincode</p>
                <p class="value">500003</p>
            </div>
        </div>

        <div class="type" id="address">
            <h2>Academics</h2>
            <div class="info-holder">
                <p class="key">College name</p>
                <p class="value">Amrita Vishwa Vidyapeetham</p>
            </div>
            <div class="info-holder">
                <p class="key">Course</p>
                <p class="value">AID</p>
            </div>
            <div class="info-holder">
                <p class="key">Batch</p>
                <p class="value">2024-2028</p>
            </div>
        </div>
    </div>
</body>
</html>

```
To build the terrarium, the CSS part was already given. In order to try CSS myself, I applied styles to the web site

```
.type {
    border-radius: 20px;
    position: relative;
    width:90%;
    margin: auto;
}

h1{
    padding-left: 5%;
    margin-bottom: 40px;
    padding-top: 20px;
}

h2{
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
    background-color: #a8f7dd;
    position: relative;
    width: 150px;
    border-radius: 20px;
    left: 10%;
}

.info-holder{
    display: flex;
}

.key{
    text-align: left;
    width: 20%;
    position: relative;
    box-sizing: border-box;
}
.value{
    text-align: left;
    width: 20%;
    margin-left: 30%;
    position: absolute;
    box-sizing: border-box;
}
```
# 2. Intro to css
### Challenge
To restyle the terrarium using either Flexbox, modify the html and [css](https://github.com/Nishthajain7/div-it-up/blob/Terrarium/2-terrarium/terrarium/flex.css) as follows
```
<div id="page">

        <div class="container" id="left-container">
            <div class="plant-holder">
                <img class="plant" src="../images/plant1.png" id="plant1" alt="plant1">
            </div>
            <!-- add remaining plants  -->
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

        <div class="container" id="right-container">
            <div class="plant-holder">
                <img class="plant" src="../images/plant8.png" id="plant8" alt="plant8">
            </div>

            <!-- add remaining plants  -->
        </div>

        
</div>
```


# 3. Introduction to DOM and JS Closures
### Assignment

Here's how Google Docs uses `CharacterData` DOM:

When typing in a Google Docs document, each piece of text is stored as a text node. These nodes use the CharacterData interface, which allows the application to access and manage individual parts of text directly, down to the character level. This lets the application access and change small parts of text without refreshing the whole document. Also when multiple people are editing the same document at once, Google Docs can apply changes on a character-by-character basis. Using CharacterData, it makes only the necessary updates in real-time, so when someone types a letter or deletes a word, only that specific part of the document changes. This approach helps the app handle multiple users’ edits at the same time without needing to reload the entire document.

# Concepts that I learnt from this task include:

- id is not reusable and should only be applied to one element of HTML while div class can be added to multiple elements. An id has greater importance if both are applied to the same element and have conflicting styles, the styles of the id will be applied.
- Positioning of elements in css:
 - Absolute - An element with this type of positioning is not affected by other elements and it doesn’t affect other elements.
 - Fixed - This might be used for something like a navigation bar that you want to remain visible at all times regardless of the pages scroll position. The concern with fixed positioning is that it can cause situations where the fixed element overlaps content such that is is inaccessible
 - Relative - If you set position: relative; on an element but no other positioning attributes (top, left, bottom or right), it will have no effect on it’s positioning at all. But if you do give it some other positioning attribute, say, top: 10px;, it will shift its position 10 pixels down from where it would normally be

