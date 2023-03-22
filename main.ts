input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1674, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    basic.pause(1000)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 114, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    music.rest(music.beat(BeatFraction.Double))
    basic.pause(2000)
    music.playMelody("- - F E C E D G ", 120)
    music.rest(music.beat(BeatFraction.Breve))
    basic.pause(1000)
    music.playMelody("- A B - F G A - ", 120)
})
input.onButtonPressed(Button.AB, function () {
    game.setLife(3)
    game.gameOver()
    game.startCountdown(60000000000000000000)
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_EVT_ANY
    )
})
