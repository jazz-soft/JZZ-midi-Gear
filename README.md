# JZZ-midi-Gear

## Retrieve your MIDI device model and manufacturer

See the [**online demo**](https://jazz-soft.github.io/modules/gear/index.html)
(requires a MIDI insreument connected to your computer).

## Links

Node.js module: [**npm install jzz-midi-gear**](https://www.npmjs.com/package/jzz-midi-gear).

Full development version and minified scripts are available at [**GitHub**](https://github.com/jazz-soft/JZZ-midi-Gear).

This script requires [**JZZ**](https://github.com/jazz-soft/JZZ).

Your questions and comments are welcome [**here**](https://jazz-soft.org).

## Usage

    // in Node.js:
    var JZZ = require('jzz');
    require('jzz-midi-gear')(JZZ);
    // or in HTML:
    <script src="JZZ.js"></script>
    <script src="JZZ.midi.Gear.js"></script>
    // ...
    // start the MIDI engine:
    JZZ({sysex:true}).and(function(){
      var inputs = this.info().inputs;
      var outputs = this.info().outputs;
      // enable message handlers on all MIDI-In ports:
      for (var i in inputs) this.openMidiIn(i).connect(function(msg){
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
    JZZ().wait(5000).close();

The expected output will look similar to the following:

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
or at the [**Developer's forum**](http://jazz-soft.org)

or,

### - do it yourself!
* Clone the project repository from [**https://github.com/jazz-soft/JZZ-midi-Gear.git**](https://github.com/jazz-soft/JZZ-midi-Gear)
* In the project root directory run **npm update**
* Update the **data/models.txt** and/or **data/vendors.txt**
* In the project root directory run **grunt**
* Commit to your branch
* Create a pull request
