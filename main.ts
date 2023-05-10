input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let emptyobstacleY = 0
let ticks = 0
let bird: game.LedSprite = null
let Speed = 1
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Forever)
let Obstacles: game.LedSprite[] = []
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (Obstacles.length > 0 && Obstacles[0].get(LedSpriteProperty.X) == 0) {
        Obstacles.removeAt(0).delete()
    }
    for (let Obstacle of Obstacles) {
        Obstacle.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        emptyobstacleY = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != emptyobstacleY) {
                Obstacles.push(game.createSprite(4, index))
            }
        }
    }
    for (let Obstacle of Obstacles) {
        if (Obstacle.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && Obstacle.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000)
})
basic.forever(function () {
    if (game.isGameOver()) {
        music.stopAllSounds()
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 865, 63, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        music.stopAllSounds()
    } else {
    	
    }
})
