---
sidebar_position: 3
title: Fan control
---

Connect a PWM fan so its LEDs can be switched off and its speed is throttled automatically. It's optional, but handy when the Pi sits in your bedroom.

## Parts

- BC557B transistor
- BC547B transistor
- Two 1 kΩ resistors
- GeekPi LED fan

## Circuit

![High-side fan switch circuit for the Raspberry Pi](/img/raspberry-pi/pi-5-case/fan-circuit.png)

## Define the pins

Append to `/boot/firmware/config.txt`:

```ini title="/boot/firmware/config.txt"
dtoverlay=gpio-fan
dtoverlay=gpio-led,gpio=14,label=fan_state
```

## Set on and off times

Open the root crontab:

```bash
sudo crontab -e
```

Add these entries to switch the fan LEDs on at 6:00 and off at 22:00:

```bash
@reboot echo 1 > /sys/class/leds/fan_state/brightness
0 6 * * * echo 1 > /sys/class/leds/fan_state/brightness
0 22 * * * echo 0 > /sys/class/leds/fan_state/brightness
```

Now you can sleep peacefully, even with a Raspberry Pi running in your bedroom.
