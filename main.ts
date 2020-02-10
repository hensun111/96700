controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    moving_left = false
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    moving_left = true
})
let projectile: Sprite = null
let moving_left = false
moving_left = false
game.onUpdateInterval(500, function () {
    if (moving_left) {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . 2 a 2 . . . . . . 
. . . . . . . 2 a a 2 . . . . . 
. . . . . . . 2 a a a 2 . . . . 
. . . . . . . 2 a a a a 2 . . . 
2 2 2 2 2 2 2 2 a a a a a 2 . . 
2 f a f a f a f a f a f a f 2 . 
2 9 8 9 8 9 8 9 8 9 8 9 8 9 8 2 
2 f a f a f a f a f a f a f 2 . 
2 2 2 2 2 2 2 2 a a a a a 2 . . 
. . . . . . . 2 a a a a 2 . . . 
. . . . . . . 2 a a a 2 . . . . 
. . . . . . . 2 a a 2 . . . . . 
. . . . . . . 2 a 2 . . . . . . 
. . . . . . . . 2 . . . . . . . 
`, Math.randomRange(1, 100), Math.randomRange(1, 100))
    } else {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . 2 . . . . . . . . 
. . . . . . 2 a 2 . . . . . . . 
. . . . . 2 a a 2 . . . . . . . 
. . . . 2 a a a 2 . . . . . . . 
. . . 2 a a a a 2 . . . . . . . 
. . 2 a a a a a 2 2 2 2 2 2 2 2 
. 2 a f a f a f a f a f a f a 2 
2 9 8 9 8 9 8 9 8 9 8 9 8 9 8 2 
. 2 a f a f a f a f a f a f a 2 
. . 2 a a a a a 2 2 2 2 2 2 2 2 
. . . 2 a a a a 2 . . . . . . . 
. . . . 2 a a a 2 . . . . . . . 
. . . . . 2 a a 2 . . . . . . . 
. . . . . . 2 a 2 . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(1, -100), Math.randomRange(1, 100))
    }
})
