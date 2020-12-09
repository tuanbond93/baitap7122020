function Game(canvas) {
    
    this.draw = function() {
        clearCanvas()
        drawTank()
    }

    this.requestNextFrame = function () {

    }

    function clearCanvas() {
        ctx.clearRect(0, 0, parseInt(canvas.width), parseInt(canvas.height));
    }

    function drawTank() {
        new Tank()
    }
}