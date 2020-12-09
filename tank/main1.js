let canvas = document.getElementById("tankCanvas")
let game = Game (canvas) 

window.requestAnimationFrame(runGame)

function runGame() {
  // ... chạy các câu lệnh tại mỗi khung hình
  game.requestNextFrame()
  game.draw()

  window.requestAnimationFrame(runGame)
}