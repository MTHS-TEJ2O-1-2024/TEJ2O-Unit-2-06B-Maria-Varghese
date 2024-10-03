/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maria
 * Created on: Sep 2024
 * This program turns the LED on and off
*/

//setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P16, 0)

//turn on the LED
input.onButtonPressed(Button.A, function() {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
})

//turn on the LED
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0)
})
