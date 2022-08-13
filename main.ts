scene.setBackgroundColor(3)
game.splash("Hi!")
let monkey = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
monkey.sayText("Hello " + game.askForString("What's your name?", 4))
game.showLongText("(Click on A, yeah!)", DialogLayout.Bottom)
info.setScore(game.askForNumber("What's your fave number?", 1))
monkey.sayText("Of course!" + "That's the score!", 2000, false)
game.showLongText("(Click on A again, yeah!)", DialogLayout.Bottom)
if (game.ask("Yes (A) or No (B)?")) {
    monkey.startEffect(effects.spray, 2000)
} else {
    monkey.destroy(effects.fire, 2000)
}
