input.onButtonPressed(Button.A, function () {
    while (true) {
        if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
            Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 60)
        } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
            Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 70)
        } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
            Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 70)
        } else {
            Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
        }
    }
})
basic.forever(function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # .
        `)
})
