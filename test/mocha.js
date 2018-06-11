var assert = require('assert');
var JZZ = require('jzz');
require('..')(JZZ);

var roland = JZZ.MIDI(0xf0, 0x7e, 0x10, 0x06, 0x02, 0x41, 0x2b, 0x02, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0xf7);
var educat = JZZ.MIDI(0xf0, 0x7e, 0x10, 0x06, 0x02, 0x7d, 0, 0, 0, 0, 0, 0, 0, 0, 0xf7);
var dummy = JZZ.MIDI(0x90, 0x40, 0x7f);

describe('isIdResponse()', function() {
  it('Roland RD-700GX', function() {
    assert.equal(roland.isIdResponse(), true);
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
  it('Educational', function() {
    var info = educat.gearInfo();
    assert.equal(info.brand, '(educational)');
  });
  it('undefined', function() {
    assert.equal(dummy.gearInfo(), undefined);
  });
});
