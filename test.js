var JZZ = require('jzz');
require('.')(JZZ);

JZZ({sysex:true}).and(function() {
  var inputs = this.info().inputs;
  var outputs = this.info().outputs;
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
  for (var i in outputs) {
    console.log('Sending request to:', outputs[i].name);
    this.openMidiOut(i).sxIdRequest();
  }
});
JZZ().wait(200).and('Please let us know if any of your devices were not identified correctly!').close();
