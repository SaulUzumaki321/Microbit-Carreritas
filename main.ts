input.onButtonPressed(Button.A, function () {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
})
input.onButtonPressed(Button.AB, function () {
    maqueen.motorStop(maqueen.Motors.All)
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
})
let strip: neopixel.Strip = null
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
basic.forever(function () {
    basic.showString("UwU")
    strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
})
