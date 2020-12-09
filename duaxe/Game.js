function Game(canvas, scoreElement) {
  this.canvas = canvas
  this.scoreElement = scoreElement
  let FRAME_BETWEEN_CARS = 150
  let CAR_WIDTH = 28

  let nextCarCounter = 0
  let score = 0
  let cars = []
  let ctx = this.canvas.getContext("2d");

  this.requestNextFrame = function () {
    if (nextCarCounter === 0) {
      cars.push(initRandomCar())
      nextCarCounter = FRAME_BETWEEN_CARS
    }
    moveCars()
    nextCarCounter--
    if (true) {
      score++
    }
  }
  this.draw = function () {
    scoreElement.innerText = score
    clearCanvas()
    drawCars()
  }

  function initRandomCar() {
    let x = Math.round(Math.random() * parseInt(canvas.width) - CAR_WIDTH)
    return new Car(x, 0)
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, parseInt(canvas.width), parseInt(canvas.height));
  }

  function moveCars() {
    for (let i = 0; i < cars.length; i++) {
      cars[i].run()
    }
  }

  function drawCars() {
    for (let i = 0; i < cars.length; i++) {
      cars[i].draw(ctx)
    }
  }
}