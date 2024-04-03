from machine import Pin, ADC

class BeeMic:
    def __init__(self, port: tuple[int, int]):
        self.pin = ADC(Pin(port[0]))

    def read_raw(self):
        return self.pin.read()

    def read(self):
        return int(self.read_raw() * 4095.0 / 100.0)

    def threshold(self, threshold: int):
        if self.read() > threshold:
            return True
        return False