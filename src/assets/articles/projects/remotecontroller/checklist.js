let article = {
  name: "checklist",
  type: "article",
  title: "Checklist",
  paragraphs: [{
    title: "Board (Processor)",
    body: [{
      type: "text",
      val: "For this project, I have chosen Raspberry Pi Zero W for it supports WLAN and Bluetooth connection. Also, Raspberry Pi has a relatively big community so I could implement the voice recognition algorithm later on. However, you could also use other Raspberry boards as long as it supports the WLAN connection (Although it might not fit in the protection case). Technically speaking, if you only need the basic functionalities, you could choose whatever board you want. All you’ll need is to rewrite the codes in a different language, but the program skeleton will remain the same."
    }]
  }, {
    title: "Hardwares",
    body: [{
      type: "text",
      val: "1. RF34D Duo Radio Frequency Decoding Module. You could choose any other module as long as it can decode/encode 315MHz and 433MHz RF signals."
    }, {
      type: "text",
      val: "2. ESP-M2 ESP8285 Wifi SoC"
    }, {
      type: "text",
      val: "3. IR Receive/Emit Module. I'm uncertain if there's any frequency requirement. I choose 38kHz modules since they are the only type I could find."
    }, {
      type: "text",
      val: "4. LCD Screen, whatever type is okay. I use Waveshare 5.5 inches LCD CTP screen since it has excellent compatibility with the Raspberry Pi, plus I already have one by my hand."
    }, {
      type: "text",
      val: "5. OPTIONAL: 19-pin flat cable connector, with 0.5mm spacing. (To replace the hdmi port on Raspberry Pi Zero)"
    }, {
      type: "text",
      val: "6. OPTIONAL: 3D printer. There's a lot of 3D printing services so its okay if you don't have one. Or you could just leave the modules without the protection case."
    }]
  }, {
    title: "Tools",
    body: [{
      type: "text",
      val: "1. Soldering kit."
    }, {
      type: "text",
      val: "2. A USB micro A cable and an HDMI mini cable. (to connect Raspberry Pi Zero W)."
    }, {
      type: "text",
      val: "3. A TF card and a card reader."
    }, {
      type: "text",
      val: "4. Wired keyboard and mouse. It's pretty hard to set up Raspberry Pi if you don't have these. Also, make sure they are wire-connected. I didn't realize I don't have a wired mouse until I start to set up my Raspberry Pi, which is quite a bummer."
    }, {
      type: "text",
      val: "5. A breadboard and some jumper wires."
    }]
  }, {
    title: "Software",
    body: [{
      type: "text",
      val: "I'm not sure if there is any software requirement. I will specify in the following chapters if there are any."
    }]
  }]
}

export default article;