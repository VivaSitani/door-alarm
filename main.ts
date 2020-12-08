input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Angry)
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) <= 200) {
        basic.showIcon(IconNames.Angry)
    }
})
