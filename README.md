# JZZ-midi-Gear

[![npm](https://img.shields.io/npm/v/jzz-midi-gear.svg)](https://www.npmjs.com/package/jzz-midi-gear)
[![npm](https://img.shields.io/npm/dt/jzz-midi-gear.svg)](https://www.npmjs.com/package/jzz-midi-gear)
[![build](https://github.com/jazz-soft/JZZ-midi-Gear/actions/workflows/build.yml/badge.svg)](https://github.com/jazz-soft/JZZ-midi-Gear/actions)
[![Coverage](https://coveralls.io/repos/github/jazz-soft/JZZ-midi-Gear/badge.svg?branch=master)](https://coveralls.io/github/jazz-soft/JZZ-midi-Gear?branch=master)

## Retrieve your MIDI device model and manufacturer

See the [**online demo**](https://jazz-soft.github.io/modules/gear/index.html)
(requires a MIDI insrument connected to your computer).

## Install

`npm install jzz-midi-gear`  
or `yarn add jzz-midi-gear`  
or get the full development version and minified scripts from [**GitHub**](https://github.com/jazz-soft/JZZ-midi-Gear)

## Usage

##### Plain HTML

```html
<script src="JZZ.js"></script>
<script src="JZZ.midi.Gear.js"></script>
//...
```

##### CDN (jsdelivr)

```html
<script src="https://cdn.jsdelivr.net/npm/jzz"></script>
<script src="https://cdn.jsdelivr.net/npm/jzz-midi-gear"></script>
//...
```

##### CDN (unpkg)

```html
<script src="https://unpkg.com/jzz"></script>
<script src="https://unpkg.com/jzz-midi-gear"></script>
//...
```

##### CommonJS

```js
var JZZ = require('jzz');
require('jzz-midi-gear')(JZZ);
//...
```

##### TypeScript / ES6

```ts
import { JZZ } from 'jzz';
import { Gear } from 'jzz-midi-gear';
Gear(JZZ);
//...
```

##### AMD

```js
require(['JZZ', 'JZZ.midi.Gear'], function(JZZ, gear) {
  // ...
});
```

##### //...

```js
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
```

##### The expected output will look similar to the following:

```
ID Response SysEx received:
   port:    Roland RD
   message: f0 7e 10 06 02 41 2b 02 00 00 00 01 00 00 f7
   brand:   Roland
   model:   RD-700GX
   device:  Digital Stage Piano
```

## Updates

If **JZZ.midi.Gear** cannot correctly identify your device, please help us fix the script:

### - tell us!
* Please post your device **model name**, **brief description**, **manufacturer**, and **ID Response SysEx message**
at the [**GitHub issues page**](https://github.com/jazz-soft/JZZ-midi-Gear/issues)

or,

### - do it yourself!
* Clone the project repository from [`https://github.com/jazz-soft/JZZ-midi-Gear.git`](https://github.com/jazz-soft/JZZ-midi-Gear)
* In the project root directory run `npm install`
* Update the `data/models.txt` and/or `data/vendors.txt`
* In the project root directory run `grunt`
* Commit to your branch
* Create a pull request

## Thanks for your support!
[![Stargazers for @jazz-soft/JZZ-midi-Gear](https://reporoster.com/stars/jazz-soft/JZZ-midi-Gear)](https://github.com/jazz-soft/JZZ-midi-Gear/stargazers)  
[![Forkers for @jazz-soft/JZZ-midi-Gear](https://reporoster.com/forks/jazz-soft/JZZ-midi-Gear)](https://github.com/jazz-soft/JZZ-midi-Gear/network/members)