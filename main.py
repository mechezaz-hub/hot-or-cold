def on_received_number(receivedNumber):
    global Signal
    Signal = radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH)
    basic.show_number(Signal)
    if Signal < -90:
        basic.show_icon(IconNames.SMALL_DIAMOND)
    elif Signal < -80:
        basic.show_icon(IconNames.DIAMOND)
    else:
        basic.show_icon(IconNames.SQUARE)
radio.on_received_number(on_received_number)

Signal = 0
radio.set_group(1)
radio.send_number(9)