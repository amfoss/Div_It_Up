# My Terrarium
## Subtoipc 1: Intro to HTML

### Assignment
 Instruction:
 Imagine you are designing, or redesigning, your personal web site. Create a graphical mockup of your site, and then write down the HTML markup you would use to build out the various elements of the site. You can use software of your choice, just make sure to hand-code the HTML markup.

 Solution : 
 ```<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Personal Website</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section id="home" class="hero">
    <div class="hero-content">
      <img src="headshot.jpg" alt="Your Photo" class="headshot">
      <div class="intro">
        <h1>Hi, I'm [Your Name]</h1>
        <p>A [Your Profession]</p>
      </div>
    </div>
  </section>

  <section id="portfolio" class="portfolio">
    <h2>My Work</h2>
    <div class="portfolio-grid">
      <div class="portfolio-item">
        <img src="project1.jpg" alt="Project 1">
        <h3>Project 1</h3>
        <p>Brief description of Project 1.</p>
      </div>
      <div class="portfolio-item">
        <img src="project2.jpg" alt="Project 2">
        <h3>Project 2</h3>
        <p>Brief description of Project 2.</p>
      </div>
      <div class="portfolio-item">
        <img src="project3.jpg" alt="Project 3">
        <h3>Project 3</h3>
        <p>Brief description of Project 3.</p>
      </div>
      <div class="portfolio-item">
        <img src="project4.jpg" alt="Project 4">
        <h3>Project 4</h3>
        <p>Brief description of Project 4.</p>
      </div>
    </div>
  </section>

  <footer>
    <div class="social-icons">
      <a href="https://twitter.com" target="_blank">Twitter</a>
      <a href="https://linkedin.com" target="_blank">LinkedIn</a>
      <a href="https://github.com" target="_blank">GitHub</a>
    </div>
    <p>&copy; 2024 Your Name. All Rights Reserved.</p>
  </footer>
</body>
</html>
 ```

### Challenge
 ``` <marquee>
               <h1>Next Task</h1>
     </marquee>
 ```

## Suttopic 2: Intro to CSS
### Assignment


### Challenge
```
.jar {
  width: 200px;
  height: 300px;
  background: #b8e994; /* Light green jar color */
  border-radius: 50px;
  position: relative;
  overflow: hidden;
}

.jar-glossy-long {
  position: absolute;
  width: 50px;
  height: 200px;
  background: linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
  border-radius: 25px;
  bottom: 20px;
  left: 20px;
  transform: rotate(-15deg);
}

.jar-glossy-short {
  position: absolute;
  width: 30px;
  height: 100px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 15px;
  bottom: 40px;
  left: 60px;
  transform: rotate(-10deg);
}
```

## SubTopic-3: Intro to DOM and Closures
### Assignment
 Insrtructions :Research the DOM a little more by 'adopting' a DOM element. Visit the MDN's list of DOM interfaces and pick one. Find it being used on a web site in the web, and write an explanation of how it is used.

 Solution : One common use of IntersectionObserver is for lazy loading images. For example, on websites like Medium or Unsplash, images outside the viewport are not immediately loaded to save bandwidth and improve performance.

This technique is used on modern web platforms to:
 Optimize Performance: Only load assets when needed.
 Enhance User Experience: Faster page loads and reduced initial bandwidth consumption.
 SEO-Friendly: Images still load for search engines that index content.

### Challenge
```terrariumElement.addEventListener("dblclick", (event) => {
        let highlightColor = "#FFD700";
        terrariumElement.style.border = "solid black 2px";
        terrariumElement.style.maxWidth = "85%";
        terrariumElement.style.background = highlightColor;
      });      
```












