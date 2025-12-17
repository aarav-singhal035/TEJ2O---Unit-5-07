/* Copyright (c) 2025 All rights reserved
 *
 * Created by: Aarav Singhal
 * Created on: Oct 2025
 * This program moves a servo.
*/

const servoNumber1 = robotbit.Servos.S1
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    robotbit.Servo(servoNumber1, 0)
})

input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoNumber1, 180)
})