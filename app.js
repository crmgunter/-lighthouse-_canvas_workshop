const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let gravity = 1
let bounce = .5

class Ball {
    constructor(x, y, radius, vx, vy, color) {
        this.x = x
        this.y = y
        this.radius = radius
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

        // console.log(this.vy)

        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.vx = -this.vx
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
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const vx = (Math.random() -.5) * 8
        const vy = (Math.random() -.5) * 8
        console.log(vx, vy)
        const color = colorArray[Math.floor(Math.random() * colorArray.length)]
        console.log(color)
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