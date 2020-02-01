# [Lighthouse] Canvas Workshop

## Getting started

Let's go ahead and set up our project. You can clone this repo down or create your project from scratch. Let's go ahead and create the files we need. We're going to be using an html, css, and javascript file. So lets go ahead and create those through your text editor or from the command line. I'm using VS Code so these commands assume you are as well. Use whatever you want though!

```
mkdir canvas_project
touch index.html styles.css app.js
code .
```

## Setting up our html file

While we'll mostly be working with javascript, we need to set up our html file. Pretty much all we need today is our HTML boilerplate and our canvas element. Feel free to copy paste this snippet or if you use VS Code, try using the intellisense by typing the `!` character and hitting enter.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

Let's go ahead and add our canvas element and link our javascript file with a script tag. Don't forget to add the `id="myCanvas"` so that we can target it with javascript later:

```
<body>
    <canvas id="myCanvas"></canvas>

    <script src="app.js"></script>
</body>
```

Now, let's just test things out and run a console.log to make sure our js file is good to go:

```
// app.js

console.log('Is your javascript running? Well then ya better go catch it!')
```

I'm using an extension called Live Server to run the code in the browser. It basically is just a cool tool that we can use to see live updates to our code in the browser window. If you're using VS Code and don't have it, just search for Live Server in the extensions tab. You may have to restart VS Code after installation. You should see a go live button in the bottom right screen. Click it. Let's open up the dev tools and verify we see our console.log:

```
cmd + opt + i

*OR*

right click -> Inspect
```

If you see the message in your console, you're good to go.
Let's dive into canvas.

## What is canvas?

Canvas is an HTML element that we can target using Javascript to draw graphics programmatically. We can draw lines, circles, boxes, text, and images. "That's cool", you say, unimpressed, "but we can do that with divs, right?" Sure. You can, but canvas is a whole other beast. With canvas we can animate items, interact with them, and make them interact with each other. A lot of people actually make video games with canvas.

[Someone even built Mario with canvas!](https://openhtml5games.github.io/games-mirror/dist/mariohtml5/main.html)

**Some more examples**

[Tearable Cloth](https://codepen.io/dissimulate/pen/KrAwx)

[Old school 8-bit style art](http://www.effectgames.com/demos/canvascycle/)

Cool, sounds straight forward, let's go be Bob Rosses of the internet and try not to make too many happy accidents!

![Bob Ross](https://media2.giphy.com/media/rYEAkYihZsyWs/giphy.gif)

## Drawing lines and shapes

The first thing we need to do is target the canvas element by its id. This will allow us to select the canvas and tell it what we want to "paint" on it. Think of it as putting a canvas on an easel.

`const canvas = document.getElementById("myCanvas")`

Then we need to create a drawing object. Think of it as the paint brush. We tell it what to draw, what color we want to paint, where we want to paint, etc.

`const ctx = canvas.getContext("2d")`

We can take a deeper look at the getContext() object too. getContext() is a built in HTML object that comes chock full of all kinds of methods we can use to manipulate the canvas.

`console.log(ctx)`

Take a look in the console and look at all the different things that are built into it.

Let's go ahead and also set the canvas height and width equal to the window height and width. This is basically just ensuring we have a "full screen mode" on our canvas element.

```
canvas.height = window.innerHeight
canvas.width = window.innerWidth
```

Now let's create our first shape. The first thing we need to do is select the color that we want to use. So let's go with blue, the best color. This is like dipping the paintbrush into a color.

`ctx.fillStyle = "#0000FF"`

Cool, let's draw a rectangle.

`ctx.fillRect(0, 0, 150, 75)`

What are those numbers?

fillRect() takes 4 arguments in this order:

`fillRect(x_coordinate, y_coordinate, width, height)`

"These coordinates came out of nowhere, and I'm not a cartographer", you think to yourself, wondering what you've gotten yourself into. That's okay, let's break it down.

Canvas is a 2D plane, with an x coordinate and a y coordinate. It's how we can place objects on the canvas so that they know where to go. So in the above example, we set it at 0, 0. Which is the very top left of the canvas. Lets set it to 50, 50 now and see the difference. Play around with some different coordinates and wrap your head around how to position it. Then go ahead and change the width and height and see how that works.

Let's go a little deeper and draw a line.

```
ctx.beginPath()
ctx.lineWidth = "5"
ctx.strokeStyle = "chartruse"
ctx.moveTo(300, 75)
ctx.lineTo(300, 250)
ctx.stroke()
```

So we start by telling the canvas we're creating a path.
Then we define the width of the line and define the color.
The moveTo() method tells the canvas where the line should start
and the lineTo() method tells it the path it should travel.

So we know it's a chartruse colored line with a width of 5 and it is going to start at the x and y coordinates 300, 75 respectively. Then we tell it to travel to the x coordinate of 300 and the y coordinate of 250. This gives us a straight diagonal line. But we can keep going with the line. Let's make an `L` shape.

```
ctx.beginPath()
ctx.lineWidth = "5"
ctx.strokeStyle = "chartruse"
ctx.moveTo(300, 75)
ctx.lineTo(300, 250)
ctx.lineTo(500, 250)
ctx.stroke()
```

So we added this line to continue where we left off:

`ctx.lineTo(500, 250)`

It continues the line to the x coordinate of 500, and the y coordinate of 250.
Let's make stairs.

```
ctx.beginPath()
ctx.lineWidth = "5"
ctx.strokeStyle = "chartruse"
ctx.moveTo(300, 75)
ctx.lineTo(300, 250)
ctx.lineTo(500, 250)
ctx.lineTo(500, 450)
ctx.lineTo(700, 450)
ctx.lineTo(700, 650)
ctx.lineTo(900, 650)
ctx.stroke()
```

You can get really into lines and making all kinds of crazy stuff. But we're going to focus on more simple shapes today.

[For curved lines, look here](https://www.w3schools.com/tags/canvas_beziercurveto.asp)

Let's create a circle underneath the rectangle:

```
ctx.beginPath()
ctx.lineWidth = "30"
ctx.strokeStyle = "red"
ctx.fillStyle = "green"
ctx.arc(100, 350, 50, 0, 2 * Math.PI)
ctx.stroke()
ctx.fill()
```

the arc() function takes 5 arguments:

`arc(x_coordinate_of_center, y_coordinate_of_center, radius, starting_angle, ending_angle)`

The most important thing for a circle is to make sure the starting angle and ending angle are 0 and 2 \* Math.PI. I'm not going to pretend like I understand the geometry behind it. The other values are rather straight forward. Play around with these values and see what kind of shapes you come up with!

Also notice the difference between strokeStyle and fillStyle, .stroke() and .fill(). One paints lines, the other fills the shape with color. Play around with those values as well.

## Gravity

Let's make the ball fall to the "ground". The first thing we need is an animate function. We can call it whatever but to keep it simple we'll call it animate. The animate function is going to bring our ball to life. So we need to define where the ball is going to be painted initially, so an x and a y position. We need to define the x and y velocity, the direction in which it falls, and a speed at which it will fall. Keep in mind, I am not a scientist, so be easy on me on the vocabulary.

So let's wipe everything out except for the ball and create our animate function and define some variables.

```
// position of our ball
let x = 100
let y = 350

// velocity/direction
let vx = 0
let vy = 2

function animate() {
    // tell the browser we are going to do some animating
    requestAnimationFrame(animate)

    // let's set the height and width of the canvas in some variables
    let width = window.innerWidth
    let height = window.innerHeight

    // clearRect is going to clear our canvas starting at 0, 0 and go as far as the width and height of our canvas
    // remove this and see what happens!
    ctx.clearRect(0, 0, width, height)

    //draw our circle
    ctx.beginPath()
    ctx.fillStyle = "blue"
    ctx.arc(x, y, 50, 0, 2 * Math.PI)
    ctx.fill()

    // update position with velocity
    y += vy


}

animate()
```

There's a lot going on here.
Let's break it down.

Our x and y variables determine where the ball is painted initially. We set the y velocity equal to 2 which will later update the y position of the ball by 2 as the animation paints the screen. Inside our animate function, we call requestAnimationFrame() and pass in our animate function so that it continuously runs. We're calling our own function in this so that it runs recursively and constantly updates.

More here:
[requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

We then clear our canvas using clearRect(), clearing the entire thing, starting at 0, 0, and ending at the height and width of our canvas element which is the size of the window height and width.

Then we draw our circle and pass in our x and y values that we declared earlier as the x and y values that .arc() takes to determine where to render the circle. We have x and y defined as 100 and 350, so our circle is painted there on the canvas.

Finally, we add the velocity y (2) to the y position variable to move the circle down the canvas.

Now let's stop the ball from falling through the floor. If we add this to the bottom of our animate function, the ball will stop. What we're doing is checking if that if the height of the center of the ball (y position - the radius) is greater than the canvas height, we anchor it to the height of the canvas.

```
if (y > canvas.height - 50) {
        y = height - 50;
    }
```

Let's add some gravity now. This will increase the rate of velocity at which the ball will fall.

Under your vx and vy variables add a gravity variable set to 1:

`let gravity = 1`

Then in your animate function, we'll set vy equal to itself plus gravity.

`vy += gravity;`

Cool. Pretty simple so far. Let's go ahead and do some refactoring.

## Creating a Ball Class

Let's go ahead and refactor this code and create a Ball Class. Later on, it will be handy having a ball class when we want to dynamically generate balls on the fly.

So we know for sure our Ball is going to need an x, y, radius, and fill color, so lets go ahead and create the class and pass some values into our constructor.

```
class Ball {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
}
```

We also need to need to draw our ball using some methods from before. So let's create a draw function. We also need an update function. This function will be running constantly and continuously draw our ball.

```
class Ball {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
    }

    update() {
        this.draw()
    }

}
```

To implement this code, we need to create a new Ball object. Let's create an init function and like before, an animate function that will rerender our canvas over and over to animate our objects. Again we use requestAnimationFrame and clearRect.

```
let ball;
function init() {
    ball = new Ball(100, 350, 50, 'blue')
}

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ball.update()
}
```

We initialize our new ball and set it to a variable outside of the init function so we can access it globally. Then in our animate function, we're calling the update method within the ball object to animate it.

So let's play with the update function. Let's make the ball fall. We'll do it like before. We'll also need to update the constructor and the ball we're creating. We'll give it a y velocity of 2.

```
constructor(x, y, vy, radius, color) {
        this.x = x
        this.y = y
        this.vy
        this.radius = radius
        this.color = color
    }

    update() {
        this.y += this.y
        this.draw()
    }

    ball = new Ball(100, 350, 50, 2, 'blue')
```

Now our ball falls to through the bottom of the screen! But with real gravity, it would bounce back up a little bit, so let's get that functionality going.

```
let gravity = 1
let bounce = .5

if (this.y + this.radius > canvas.height) {
    this.vy = -this.vy * bounce
} else {
    this.vy += gravity
}
```

## Creating multiple balls

```
let ballArray = [];
let colors = ["#5B5F97", "#FFC145", "#FFFFFB", "#FF6B6C", "B8B8D1"]
function init() {
    ball = new Ball(100, 350, 50, 2, 2, 'blue')
    for (let i = 0; i < 50; i++) {
        const random_x = canvas.width * Math.random()
        const random_y = canvas.height * Math.random()
        const random_color = colors[Math.floor(colors.length * Math.random())]
        console.log(random_color)
        let ball = new Ball(random_x, random_y, 50, 2, 2, random_color);
        ballArray.push(ball)
    }
}

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < ballArray.length; i++) {
        ballArray[i].update();
    }
}
```

Preventing them from starting off the screen

Create walls on left and right

```
if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.vx = -this.vx * bounce
        }

        this.x += this.vx
```

Randomize balls

```
        let ballArray = [];
let colors = ["#5B5F97", "#FFC145", "#FFFFFB", "#FF6B6C", "B8B8D1"]
function init() {
    ball = new Ball(100, 350, 50, 2, 2, 'blue')
    for (let i = 0; i < 50; i++) {
        const radius = Math.ceil(50 * Math.random())
        const random_x = radius + Math.random() * (canvas.width - 2 * radius)
        const random_y = (canvas.height - radius) * Math.random()
        const random_color = colors[Math.floor(colors.length * Math.random())]
        const random_vx = Math.ceil(5 * Math.random() - 2)
        console.log(random_vx)
        let ball = new Ball(random_x, random_y, radius, random_vx, 2, random_color);
        ballArray.push(ball)
    }
}
```

## Event listeners

````
window.addEventListener(('mousemove'), (event) => {
    mouse.x = event.x
    mouse.y = event.y
})

window.addEventListener(('mouseout'), (event) => {
    mouse.x = undefined
    mouse.y = undefined
})

if (this.x > mouse.x) {
                this.x -= 1
            }

            if (this.x < mouse.x) {
                this.x += 1
            }

            if (this.y > mouse.y) {
                this.y -= 1
            }

            if (this.y < mouse.y) {
                this.y += 1
            }

            this.radius += 1
            if (this.radius < maxRadius) {
                this.radius += 1
            }
        }
        ```
````
