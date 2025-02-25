let temp = 0
basic.forever(function () {
    temp = input.temperature()
    if (temp > 25) {
        basic.showString("Drink some water")
        // Beep sound (Middle C note)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.clearScreen()
    }
})
