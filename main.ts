input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Angry)
    music.setVolume(0)
})
basic.showIcon(IconNames.Happy)
music.setVolume(127)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) <= 200) {
        basic.showIcon(IconNames.Angry)
        music.playTone(988, music.beat(BeatFraction.Double))
    }
})
