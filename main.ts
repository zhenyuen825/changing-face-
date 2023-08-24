function show () {
    a = randint(1, 6)
    if (a == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (a == 2) {
        basic.showIcon(IconNames.Angry)
    } else if (a == 3) {
        basic.showIcon(IconNames.StickFigure)
    } else if (a == 4) {
        basic.showIcon(IconNames.Cow)
    } else if (a == 5) {
        basic.showIcon(IconNames.House)
    } else if (a == 6) {
        basic.showIcon(IconNames.Fabulous)
    }
}
let a = 0
SuperBit.Servo2(SuperBit.enServo.S1, 50)
basic.pause(500)
SuperBit.Servo2(SuperBit.enServo.S1, 140)
basic.showString("GO!")
basic.forever(function () {
    SuperBit.Servo2(SuperBit.enServo.S1, 50)
    basic.pause(200)
    show()
    basic.pause(200)
    SuperBit.Servo2(SuperBit.enServo.S1, 140)
    basic.pause(1000)
})
