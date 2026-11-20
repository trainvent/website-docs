---
sidebar_position: 3
title: Lüftersteuerung
---

Schließe einen PWM-Lüfter so an, dass sich seine LEDs ausschalten lassen und seine Drehzahl automatisch geregelt wird. Das ist optional, aber praktisch, wenn der Pi im Schlafzimmer steht.

## Bauteile

- BC557B-Transistor
- BC547B-Transistor
- Zwei 1-kΩ-Widerstände
- GeekPi-LED-Lüfter

## Schaltung

![Schaltung für den High-Side-Lüfterschalter am Raspberry Pi](/img/raspberry-pi/pi-5-case/fan-circuit.png)

## Pins festlegen

An `/boot/firmware/config.txt` anhängen:

```ini title="/boot/firmware/config.txt"
dtoverlay=gpio-fan
dtoverlay=gpio-led,gpio=14,label=fan_state
```

## Ein- und Ausschaltzeiten festlegen

Die Crontab von root öffnen:

```bash
sudo crontab -e
```

Diese Einträge hinzufügen, um die Lüfter-LEDs um 6:00 Uhr ein- und um 22:00 Uhr auszuschalten:

```bash
@reboot echo 1 > /sys/class/leds/fan_state/brightness
0 6 * * * echo 1 > /sys/class/leds/fan_state/brightness
0 22 * * * echo 0 > /sys/class/leds/fan_state/brightness
```

Jetzt kannst du ruhig schlafen, auch wenn ein Raspberry Pi in deinem Schlafzimmer läuft.
