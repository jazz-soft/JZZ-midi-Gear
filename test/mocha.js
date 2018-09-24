var assert = require('assert');
var JZZ = require('jzz');
require('..')(JZZ);

var roland = JZZ.MIDI(0xf0, 0x7e, 0x10, 0x06, 0x02, 0x41, 0x2b, 0x02, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0xf7);
var fishman = JZZ.MIDI(0xf0, 0x7e, 0x00, 0x06, 0x02, 0x00, 0x01, 0x6e, 0x00, 0x01, 0x00, 0x01, 0x01, 0x52, 0x01, 0x00, 0xf7);
var educat = JZZ.MIDI(0xf0, 0x7e, 0x10, 0x06, 0x02, 0x7d, 0, 0, 0, 0, 0, 0, 0, 0, 0xf7);
var custom = JZZ.MIDI(0xf0, 0x7e, 0x10, 0x06, 0x02, 0x7d, 0, 0, 0, 0, 0, 0, 0, 1, 0xf7);
var dummy = JZZ.MIDI(0x90, 0x40, 0x7f);

describe('isIdResponse()', function() {
  it('Roland RD-700GX', function() {
    assert.equal(roland.isIdResponse(), true);
  });
  it('Fishman TriplePlay', function() {
    assert.equal(fishman.isIdResponse(), true);
  });
  it('Educational', function() {
    assert.equal(educat.isIdResponse(), true);
  });
  it('undefined', function() {
    assert.equal(dummy.isIdResponse(), false);
  });
});

describe('gearInfo()', function() {
  it('Roland RD-700GX', function() {
    var info = roland.gearInfo();
    assert.equal(info.brand, 'Roland');
    assert.equal(info.model, 'RD-700GX');
    assert.equal(info.descr, 'Digital Stage Piano');
  });
  it('Fishman TriplePlay', function() {
    var info = fishman.gearInfo();
    assert.equal(info.brand, 'Fishman');
    assert.equal(info.model, 'TriplePlay');
    assert.equal(info.descr, 'Guitar Controller');
  });
  it('Educational', function() {
    var info = educat.gearInfo();
    assert.equal(info.brand, '(educational)');
  });
  it('undefined', function() {
    assert.equal(dummy.gearInfo(), undefined);
  });
});

describe('setGearInfo()', function() {
  it('custom', function() {
    JZZ.MIDI.setGearInfo(custom, 'Jazz-Soft', 'Custom Instrument', 'no description');
    var info = custom.gearInfo();
    assert.equal(info.brand, 'Jazz-Soft');
    assert.equal(info.model, 'Custom Instrument');
    assert.equal(info.descr, 'no description');
  });
  it('invalid', function() {
    var msg;
    try {
      JZZ.MIDI.setGearInfo(dummy);
    }
    catch (err) {
      msg = err.message;
    }
    assert.equal(msg, 'Not a valid ID response');
  });
});
