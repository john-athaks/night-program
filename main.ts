input.onGesture(Gesture.EightG, function () {
    basic.showIcon(IconNames.Umbrella)
})
input.onButtonPressed(Button.A, function () {
    music.playMelody("G C5 D G F E C A ", 120)
})
input.onGesture(Gesture.SixG, function () {
    basic.showIcon(IconNames.Triangle)
})
input.onButtonPressed(Button.B, function () {
    basic.pause(1000)
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showIcon(IconNames.Chessboard)
})
