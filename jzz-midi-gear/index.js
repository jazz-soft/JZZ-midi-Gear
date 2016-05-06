// This script is for Node.js only. Don't use it in HTML!
module.exports = function(JZZ) {
  eval(require('fs').readFileSync(require('path').join(__dirname, 'javascript', 'JZZ.midi.Gear.js'))+'');
};
