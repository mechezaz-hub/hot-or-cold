radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    Signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    basic.showNumber(Signal)
    if (Signal < -90) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (Signal < -80) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.Square)
    }
    
})
let Signal = 0
radio.setGroup(1)
radio.sendNumber(9)
