const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let gravity = 1
let bounce = .5

const mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('resize', (event) => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x
    mouse.y = event.y
})

window.addEventListener('mouseout', (event) => {
    mouse.x = undefined
    mouse.y = undefined
})

const maxRadius = 50

class Ball {
    constructor(x, y, radius, vx, vy, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.minRadius = radius
        this.vx = vx
        this.vy = vy
        this.color = color
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
    }

    update() {
        this.x += this.vx
        this.y += this.vy
        // this.vy += gravity

        if (this.y + this.radius + this.vy > canvas.height || this.y - this.radius < 0) {
            // this.vy = -this.vy * bounce

            this.vy = -this.vy
        }
        // else {
        // this.vy += gravity
        // }

        if (this.x + this.radius + this.vx > canvas.width || this.x - this.radius < 0) {
            this.vx = -this.vx
        }

        if (mouse.x - this.x < 150 && mouse.x - this.x > -150 &&
            mouse.y - this.y < 150 && mouse.y - this.y > -150) {
            this.radius += 1

            if (mouse.x > this.x) {
                this.x += 1
            }

            if (mouse.x < this.x) {
                this.x -= 1
            }

            if (mouse.y > this.y) {
                this.y += 1
            }

            if (mouse.y < this.y) {
                this.y += 1
            }

            if (this.radius < maxRadius) {
                this.radius += 1
            }
        }

        if (this.radius > this.minRadius) {
            this.radius -= 1
        }




        this.draw()
    }
}

let ballArray = []
const colorArray = [
    "#3A2E39",
    "#1E555C",
    "#F4D8CD",
    "#EDB183",
    "#F15152"
]


const init = () => {
    for (let i = 0; i < 500; i++) {
        const radius = Math.ceil(Math.random() * 15)
        const x = radius + Math.random() * (canvas.width - radius * 2)
        const y = radius + Math.random() * (canvas.height - radius * 2)
        const vx = (Math.random() - .5) * 8
        const vy = (Math.random() - .5) * 8

        const color = colorArray[Math.floor(Math.random() * colorArray.length)]

        ballArray.push(new Ball(x, y, radius, vx, vy, color))
    }
}

const animate = () => {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < ballArray.length; i++) {
        ballArray[i].update()
    }

}

init()
animate()