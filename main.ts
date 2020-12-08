input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
basic.forever(function () {
	if (input.magneticForce(Dimension.Strength) < 200) {
        basic.showIcon(IconNames.Angry)
    }
})
