# JZZ-midi-Gear

[![npm](https://img.shields.io/npm/v/jzz-midi-gear.svg)](https://www.npmjs.com/package/jzz-midi-gear)
[![Build Status](https://travis-ci.org/jazz-soft/JZZ-midi-Gear.svg?branch=master)](https://travis-ci.org/jazz-soft/JZZ-midi-Gear)
[![Coverage](https://coveralls.io/repos/github/jazz-soft/JZZ-midi-Gear/badge.svg?branch=master)](https://coveralls.io/github/jazz-soft/JZZ-midi-Gear?branch=master)

## Retrieve your MIDI device model and manufacturer

See the [**online demo**](https://jazz-soft.github.io/modules/gear/index.html)
(requires a MIDI insrument connected to your computer).

## Install

**npm install jzz-midi-gear**  
or **bower install jzz-midi-gear**  
or **yarn add jzz-midi-gear**  
or get the full development version and minified scripts from [**GitHub**](https://github.com/jazz-soft/JZZ-midi-Gear)

## Usage

##### Plain HTML

    <script src="JZZ.js"></script>
    <script src="JZZ.midi.Gear.js"></script>
    //...

##### CDN (always the latest version!)

    <script src="https://cdn.jsdelivr.net/npm/jzz"></script>
    <script src="https://cdn.jsdelivr.net/npm/jzz-midi-gear"></script>
    //...

##### CommonJS (Browserify and Node.js command line applications)

    var JZZ = require('jzz');
    require('jzz-midi-gear')(JZZ);
    //...

##### AMD

    require(['JZZ', 'JZZ.midi.Gear'], function(JZZ, gear) {
      // ...
    });

##### //...

    // start the MIDI engine:
    JZZ({sysex:true}).and(function() {
      var inputs = this.info().inputs;
      var outputs = this.info().outputs;
      // enable message handlers on all MIDI-In ports:
      for (var i in inputs) this.openMidiIn(i).connect(function(msg) {
        if (msg.isIdResponse()) {
          var gear = msg.gearInfo();
          console.log('ID Response SysEx received:');
          console.log('   port:    ' + this.name());
          console.log('   message: ' + msg);
          console.log('   brand:   ' + gear.brand);
          console.log('   model:   ' + gear.model);
          console.log('   device:  ' + gear.descr);
        }
      });
      // send the ID Request SysEx to all MIDI-Out ports:
      for (var i in outputs) this.openMidiOut(i).sxIdRequest();
    });
    // ...
    // in Node.js - don't forget to stop the engine when done:
    JZZ().wait(500).close();

##### The expected output will look similar to the following:

    ID Response SysEx received:
       port:    Roland RD
       message: f0 7e 10 06 02 41 2b 02 00 00 00 01 00 00 f7
       brand:   Roland
       model:   RD-700GX
       device:  Digital Stage Piano

## Updates

If **JZZ.midi.Gear** cannot correctly identify you device, please help us fix the script:

### - tell us!
* Please post your device **model name**, **brief description**, **manufacturer**, and **ID Response SysEx message**
at the [**GitHub issues page**](https://github.com/jazz-soft/JZZ-midi-Gear/issues)
or at the [**Developer's forum**](https://jazz-soft.org)

or,

### - do it yourself!
* Clone the project repository from [**https://github.com/jazz-soft/JZZ-midi-Gear.git**](https://github.com/jazz-soft/JZZ-midi-Gear)
* In the project root directory run **npm update**
* Update the **data/models.txt** and/or **data/vendors.txt**
* In the project root directory run **grunt**
* Commit to your branch
* Create a pull request

Your questions and comments are welcome [**here**](https://jazz-soft.org).
