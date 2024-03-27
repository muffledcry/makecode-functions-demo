function InitializeGame () {
    scene.setBackgroundColor(10)
    PlayerChar = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 7 7 7 7 f f . . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 1 1 7 7 1 1 7 7 f . . 
        . f 7 7 7 1 f 7 7 f 1 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 1 1 1 1 7 7 7 f . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . . f f f f f f f f . . . . 
        `, SpriteKind.Player)
    PlayerChar.setPosition(25, 95)
}
function movePlayer () {
    if (controller.right.isPressed() && PlayerChar.x < 152) {
        PlayerChar.x += 3
    }
    if (controller.left.isPressed() && PlayerChar.x > 8) {
        PlayerChar.x += -3
    }
    if (controller.A.isPressed() || controller.up.isPressed()) {
        PlayerChar.y += -25
        pause(200)
        PlayerChar.y += 25
    }
}
let PlayerChar: Sprite = null
InitializeGame()
forever(function () {
    movePlayer()
})
