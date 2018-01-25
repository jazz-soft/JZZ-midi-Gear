(function(global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory;
  }
  else if (typeof define === 'function' && define.amd) {
    define('JZZ.midi.Gear', ['JZZ'], factory);
  }
  else {
    factory(JZZ);
  }
})(this, function(JZZ) {

JZZ.MIDI.prototype.isIdResponse = function() {
  return this[0] == 0xf0 && this[1] == 0x7e && this[3] == 6 && this[4] == 2 && this[this.length-1] == 0xf7 && this.length > 10;
};

JZZ.MIDI.prototype.gearInfo = function() {
  if (!this.isIdResponse()) return undefined;
  var vnd;
  var mod;
  if (this[5]) {
    vnd = _a2s(this.slice(5, 6));
    mod = _a2s(this.slice(6, 14));
  }
  else {
    vnd = _a2s(this.slice(6, 8));
    mod = _a2s(this.slice(8, 16));
  }
  var ret = { brand: _v[vnd] };
  if (!_m[vnd]) return ret;
  for (var j = 4; j < 9; j++) {
    var m = _m[vnd][mod.substr(0, j)];
    if (m) {
      ret.model = m.m;
      ret.descr = m.d;
      if (m.b) ret.brand = m.b;
      break;
    }
  }
  return ret;
};

function _n2c(n) { return String.fromCharCode(n); }
function _a2s(a) { return a.map(_n2c).join(''); }
var _m = {};
//#begin
var _v = {
"\x01":"Dave Smith",
"\x04":"Moog",
"\x06":"Lexicon",
"\x07":"Kurzweil",
"\x10":"Oberheim",
"\x18":"E-MU",
"@":"Kawai",
"A":"Roland",
"B":"Korg",
"C":"Yamaha",
"D":"Casio",
"G":"Akai",
"Q":"Fostex",
"R":"Zoom",
"U":"Suzuki",
"}":"(educational)",
"\x01a":"Livid",
"\x01n":"Fishman",
"\x01q":"Mega Lite",
"\x01v":"Music Computing",
"\x01y":"DJ TechTools",
" \b":"M-Audio",
" )":"Novation"
};
_m["\x01"] = { // Dave Smith
"%\x01\x00\x00":{m:"Mopho",d:"Synth Module"}
};
_m["\x07"] = { // Kurzweil
"\x00@\x00\n":{m:"PC3LE8",d:"Performance Controller"}
};
_m["\x18"] = { // E-MU
"\x02@\x01\x00":{m:"Xboard 49",d:"USB MIDI Controller"}
};
_m["A"] = { // Roland
"\x02\x02\x00\x00":{m:"DR-880",d:"Drum Machine",b:"BOSS"},
"\x04\x02\x00\x00":{m:"RD-300SX",d:"Digital Piano"},
"\x06\x02\x00\x00":{m:"GT-8",d:"Guitar Effects Processor",b:"BOSS"},
"\t\x02\x00\x00":{m:"TD-12",d:"Percussion Sound Module"},
"\x0b\x02\x00\x00":{m:"GT-PRO",d:"Guitar Effects Processor",b:"BOSS"},
"\x10\x01\x00\x00":{m:"XV-3080",d:"Synth Module"},
"\x10\x01\x02\x02":{m:"FANTOM",d:"Synthesizer"},
"\x14\x02\x00\x00":{m:"MC-808",d:"Sampling Groovebox"},
"\x16\x02\x00\x00":{m:"SH-201",d:"Synthesizer"},
"\x18\x02\x00\x00":{m:"VP-550",d:"Vocal & Ensemble Keyboard"},
"\x1a\x00\x00\x02\x00":{m:"HP-330/245",d:"Digital Piano"},
"\x1a\x00\x00\x02\x01":{m:"HP-530",d:"Digital Piano"},
"\x1a\x00\x00\x03":{m:"C-80",d:"Digital Harpsichord"},
"\x1a\x00\x00\x04":{m:"FP-9",d:"Digital Piano"},
"\x1a\x00\x00\x06\x00":{m:"HP-2",d:"Digital Piano"},
"\x1a\x00\x00\x06\x02":{m:"DP-900",d:"Digital Piano"},
"\x1a\x00\x01\x02":{m:"HP-147",d:"Digital Piano"},
"\x1a\x00\x01\x06":{m:"HP-3",d:"Digital Piano"},
"\x1a\x00\x02\x02\x00":{m:"EP-70",d:"Digital Piano"},
"\x1a\x00\x02\x02\x01":{m:"EP-90",d:"Digital Piano"},
"\x1a\x00\x02\x06":{m:"HP-7",d:"Digital Piano"},
"\x1a\x00\x03\x02":{m:"HP-237",d:"Digital Piano"},
"\x1a\x00\x04\x02":{m:"HP-147R",d:"Digital Piano"},
"\x1a\x00\x05\x02":{m:"F-90",d:"Digital Piano"},
"\x1a\x00\x06\x02\x00":{m:"F-100",d:"Digital Piano"},
"\x1a\x00\x06\x02\x01":{m:"F-30",d:"Digital Piano"},
"\x1a\x00\x06\x02\x02":{m:"F-50",d:"Digital Piano"},
"\x1a\x00\x06\x06":{m:"HP-101",d:"Digital Piano"},
"\x1c\x01\x00\x00":{m:"DR-770",d:"Drum Machine",b:"BOSS"},
"\x1c\x02\x00\x00":{m:"VG-99",d:"V-Guitar System"},
" \x01\x00\x00":{m:"TD-8",d:"Percussion Sound Module"},
"!\x02\x00\x00":{m:"V-Synth GT",d:"Synthesizer Keyboard"},
"'\x02\x00\x00\x00":{m:"Fantom-G6",d:"Music Workstation"},
"'\x02\x00\x00\x01":{m:"Fantom-G7",d:"Music Workstation"},
"'\x02\x00\x00\x02":{m:"Fantom-G8",d:"Music Workstation"},
"+\x02\x00\x00":{m:"RD-700GX",d:"Digital Stage Piano"},
",\x02\x00\x00":{m:"RD-300GX",d:"Digital Piano"},
"/\x02\x00\x00":{m:"GT-10",d:"Guitar Effects Processor",b:"BOSS"},
"3\x02\x00\x00":{m:"VS-700R",d:"Digital Audio Workstation"},
"6\x02\x00\x00":{m:"GW-8",d:"Workstation"},
"9\x02\x00\x00":{m:"V-Piano",d:"Digital Piano"},
"9\x02\x02\x00":{m:"V-Piano Grand (GP-7)",d:"Digital Piano"},
":\x01\x00\x00":{m:"FP-3",d:"Digital Piano"},
":\x02\x00\x00":{m:"JUNO-Di",d:"Synthesizer"},
";\x02\x00\x00":{m:"VP-770",d:"Vocal & Ensemble Keyboard"},
"A\x01\x00\x00":{m:"DR-670",d:"Drum Machine",b:"BOSS"},
"A\x02\x00\x00":{m:"GAIA SH-01",d:"Synthesizer"},
"B\x00\x00\x07":{m:"SC-8820",d:"Sound Module"},
"B\x00\x00\b":{m:"KR-577/977/1077",d:"Digital Piano"},
"B\x00\x00\r":{m:"KR-5",d:"Digital Piano"},
"B\x00\x00\x0e\x00":{m:"KR-7",d:"Digital Piano"},
"B\x00\x00\x0e\x01":{m:"KF-7",d:"Digital Piano"},
"B\x00\x00\x0f\x00":{m:"KR-15",d:"Digital Piano"},
"B\x00\x00\x0f\x01":{m:"KR-15/17",d:"Digital Piano"},
"B\x00\x00\x11\x00":{m:"RG-7",d:"Digital Piano"},
"B\x00\x00\x11\x01":{m:"RG-3",d:"Digital Piano"},
"B\x00\x00\x12":{m:"KR-107",d:"Digital Piano"},
"B\x00\x00\x16\x02":{m:"HP-205",d:"Digital Piano"},
"B\x00\x00\x16\x03":{m:"HP-203",d:"Digital Piano"},
"B\x00\x00\x16\x04":{m:"FP-7",d:"Digital Piano"},
"B\x00\x00\x16\x05":{m:"FP-4",d:"Digital Piano"},
"B\x00\x00\x16\x06":{m:"HP-201",d:"Digital Piano"},
"B\x00\x00\x17\x00":{m:"AT-800",d:"Organ"},
"B\x00\x00\x17\x01":{m:"AT-900",d:"Organ"},
"B\x00\x00\x17\x02":{m:"AT-900C",d:"Organ"},
"B\x00\x00\x18\x00":{m:"AT-100",d:"Organ"},
"B\x00\x00\x18\x01":{m:"AT-300",d:"Organ"},
"B\x00\x00\x18\x02":{m:"AT-500",d:"Organ"},
"B\x00\x00\x18\x03":{m:"AT-75",d:"Organ"},
"B\x00\x00\x19":{m:"RK-300",d:"Keyboard"},
"B\x00\x00\x1a":{m:"RM-700",d:"Digital Piano"},
"B\x00\x00\x1e\x01":{m:"HP-507",d:"Digital Piano"},
"B\x00\x00\x1e\x02":{m:"HP-505",d:"Digital Piano"},
"B\x00\x00\x1e\x03":{m:"HP-503",d:"Digital Piano"},
"B\x00\x00\x1e\x04":{m:"DP90/DP90S",d:"Digital Piano"},
"B\x00\x00\x1e\x05":{m:"HPi-50",d:"Digital Piano"},
"B\x00\x01\x03":{m:"E-500(OR)/E-500/E-300/KR-75",d:"Intelligent Keyboard"},
"B\x00\x01\t":{m:"HP-557R",d:"Digital Piano"},
"B\x00\x01\x1b\x00":{m:"HP302/HP305",d:"Digital Piano"},
"B\x00\x01\x1b\x01":{m:"HP307",d:"Digital Piano"},
"B\x00\x01\x1b\x02":{m:"RG-1F/RG-3F",d:"Digital Piano"},
"B\x00\x01\x1b\x03":{m:"LX-10F",d:"Digital Piano"},
"B\x00\x01\x1b\x04":{m:"DP990F",d:"Digital Piano"},
"B\x00\x01\x1b\x05":{m:"HPi-7F",d:"Digital Piano"},
"B\x00\x01\x1b\x06":{m:"HPi-6F",d:"Digital Piano"},
"B\x00\x01\x1b\x07":{m:"FP-7F",d:"Digital Piano"},
"B\x00\x01\x1b\b":{m:"FP-4F",d:"Digital Piano"},
"B\x00\x02\x03\x02":{m:"HP-555G",d:"Digital Piano"},
"B\x00\x02\x03\x03":{m:"KR375",d:"Digital Piano"},
"B\x00\x02\t\x00":{m:"KR-377",d:"Digital Piano"},
"B\x00\x02\t\x01":{m:"KF-90",d:"Digital Piano"},
"B\x00\x04\x03":{m:"E-600",d:"Intelligent Keyboard"},
"B\x00\x05\x03":{m:"AT-30R",d:"Organ"},
"B\x00\x06\x03":{m:"KR-277",d:"Digital Piano"},
"B\x00\x07\x03":{m:"HPi-5",d:"Digital Piano"},
"B\x02\x00\x00":{m:"VR-700",d:"Combo Keyboard"},
"H\x01\x00\x00":{m:"SD-90",d:"Studio Canvas",b:"Edirol"},
"J\x01\x00\x00":{m:"SH-32",d:"Synthesizer Module"},
"L\x02\x00\x00":{m:"JUNO-Gi",d:"Mobile Synthesizer with Digital Recorder"},
"M\x01\x00\x00":{m:"VK-8",d:"Combo Organ"},
"P\x02\x00\x00":{m:"RD-700NX",d:"Digital Piano"},
"Q\x02\x00\x00":{m:"RD-300NX",d:"Digital Piano"},
"U\x02\x00\x00":{m:"JUPITER-80",d:"Synthesizer"},
"Y\x01\x00\x00":{m:"MC-909",d:"Sampling Groovebox"},
"Y\x02\x00\x00":{m:"BR-80",d:"Digital Recorder",b:"BOSS"},
"`\x01\x00\x00":{m:"FP-5",d:"Digital Piano"},
"`\x02\x00\x00":{m:"GT-100",d:"Amp Effects Processor",b:"BOSS"},
"b\x00\x00\x00\x00":{m:"AT-20R",d:"Organ"},
"b\x00\x00\x00\x01":{m:"AT-30R",d:"Organ"},
"b\x00\x00\x04\x00":{m:"AT-800",d:"Organ"},
"b\x00\x00\x04\x01":{m:"AT-900",d:"Organ"},
"b\x00\x00\x04\x02":{m:"AT-900C",d:"Organ"},
"b\x00\x00\x05\x00":{m:"AT-100",d:"Organ"},
"b\x00\x00\x05\x01":{m:"AT-300",d:"Organ"},
"b\x00\x00\x05\x02":{m:"AT-500",d:"Organ"},
"b\x00\x00\x05\x03":{m:"AT-75",d:"Organ"},
"c\x02\x00\x00":{m:"JUPITER-50",d:"Synthesizer"},
"d\x01\x00\x00":{m:"RS-70",d:"Synthesizer"},
"d\x01\x01\x00\x00\x01\x00\x00":{m:"RS-50",d:"Synthesizer"},
"d\x01\x01\x00\x00\x01\x00\x01":{m:"JUNO-D",d:"Synthesizer"},
"d\x02\x00\x00":{m:"INTEGRA-7",d:"Sound Module"},
"o\x01\x00\x00":{m:"FP-2",d:"Digital Piano"},
"z\x01\x00\x00":{m:"TD-20",d:"Percussion Sound Module"}
};
_m["B"] = { // Korg
"\x15\x01\x17\x00":{m:"Krome",d:"Music Workstation"},
"h\x00\x17\x00":{m:"Kronos 61",d:"Music Workstation"},
"}\x00\x00\x00":{m:"R3",d:"Synthesizer Vocoder"},
"~\x00\x00\x00":{m:"microKORG XL",d:"Synthesizer"}
};
_m["C"] = { // Yamaha
"\x00A\x00\x03":{m:"MU100/MU100R/MU128",d:"Tone Generator"},
"\x00A\x02\x05":{m:"AN200",d:"Synthesizer"},
"\x00A\x02U":{m:"QY70",d:"Sequencer"},
"\x00A\x03\x05":{m:"DX200",d:"Synthesizer"},
"\x00A\x044":{m:"QY100",d:"Sequencer"},
"\x00A\x05*":{m:"S90",d:"Synthesizer"},
"\x00A\x19\x06":{m:"MOTIF-RACK ES",d:"Tone Generator"},
"\x00A\x1a\x02":{m:"AN1x",d:"Synthesizer"},
"\x00A\x1b\x04":{m:"MU2000",d:"Tone Generator"},
"\x00A\x1c\x04":{m:"MU1000",d:"Tone Generator"},
"\x00A\x1d\x03":{m:"RM1x",d:"Sequence Remixer"},
"\x00A#\x04":{m:"S30",d:"Synthesizer"},
"\x00A2\x06":{m:"S90ES",d:"Synthesizer"},
"\x00A3\x06":{m:"MO6",d:"Synthesizer"},
"\x00A4\x06":{m:"MO8",d:"Synthesizer"},
"\x00A5\x06":{m:"MOTIF XS6",d:"Synthesizer"},
"\x00A6\x06":{m:"MOTIF XS7",d:"Synthesizer"},
"\x00A7\x02":{m:"MU90",d:"Tone Generator"},
"\x00A7\x06":{m:"MOTIF XS8",d:"Synthesizer"},
"\x00A?\x06":{m:"CP5",d:"Stage Piano"},
"\x00A@\x06":{m:"CP50",d:"Stage Piano"},
"\x00AD\x06":{m:"MOX6",d:"Synthesizer"},
"\x00AE\x06":{m:"MOX8",d:"Synthesizer"},
"\x00AF\x01":{m:"MU50",d:"Tone Generator"},
"\x00AG\x06":{m:"MX49",d:"Synthesizer"},
"\x00AH\x01":{m:"QS300",d:"Synthesizer"},
"\x00AL\x01":{m:"EOS B900",d:"Keyboard"},
"\x00AO\x03":{m:"CS2x",d:"Synthesizer"},
"\x00AQ\x03":{m:"MU15",d:"Tone Generator"},
"\x00AR\x02":{m:"MU90R",d:"Tone Generator"},
"\x00AX\x04":{m:"MOTIF-RACK",d:"Tone Generator"},
"\x00Ab\x01":{m:"SDX3000",d:"Keyboard"},
"\x00Ak\x01":{m:"CBX-K1XG",d:"Keyboard"},
"\x00Aw\x04":{m:"S03",d:"Synthesizer"},
"\x00A|\x04":{m:"MOTIF6",d:"Synthesizer"},
"\x00A}\x04":{m:"MOTIF7",d:"Synthesizer"},
"\x00A~\x04":{m:"MOTIF8",d:"Synthesizer"},
"\x00C,\x17":{m:"CP33",d:"Stage Piano"},
"\x00Cf\x19":{m:"P-155",d:"Digital Piano "},
"\x00D+\x19":{m:"NP-31",d:"Portable Keyboard"},
"\x00DE\x17":{m:"MM6",d:"Synthesizer"},
"\x00Ls\x07":{m:"DTXTREME",d:"Drum Module"}
};
_m["\x01a"] = { // Livid
"\x01\x00\x01\x00":{m:"Brain v1",d:"Do-It-Yourself Kit"},
"\x01\x00\x02\x00":{m:"Ohm64",d:"MIDI Controller"},
"\x01\x00\x03\x00":{m:"block",d:"MIDI Controller"},
"\x01\x00\x04\x00":{m:"Code",d:"MIDI Controller"},
"\x01\x00\x07\x00":{m:"OhmRGB",d:"MIDI Controller"},
"\x01\x00\b\x00":{m:"CNTRL:R",d:"MIDI Controller"},
"\x01\x00\t\x00":{m:"Brain v2",d:"Do-It-Yourself Kit"},
"\x01\x00\x0b\x00":{m:"Alias8",d:"MIDI Controller"},
"\x01\x00\f\x00":{m:"Base",d:"MIDI Controller"},
"\x01\x00\r\x00":{m:"Brain Jr",d:"Do-It-Yourself Kit"}
};
_m["\x01n"] = { // Fishman
"\x00\x01\x00\x01":{m:"TriplePlay",d:"Guitar Controller"},
"\x00\x01\x00\x02":{m:"TriplePlay",d:"Guitar Controller"}
};
_m["\x01q"] = { // Mega Lite
"\x01\x00\x10\x00":{m:"Enlighten",d:"DMX Control"}
};
_m["\x01v"] = { // Music Computing
"\x01\x00\x05\x00":{m:"DAW",d:"MIDI Controller"}
};
_m["\x01y"] = { // DJ TechTools
"\x03\x00\x01\x00":{m:"Midi Fighter 3D",d:"MIDI Controller"},
"\x04\x00\x01\x00":{m:"Midi Fighter Spectra",d:"MIDI Controller"},
"\x05\x00\x01\x00":{m:"Midi Fighter Twister",d:"MIDI Controller"}
};
_m[" \b"] = { // M-Audio
"c\x0e\x1a\x03":{m:"Axiom 61",d:"MIDI Controller"}
};
_m[" )"] = { // Novation
"\x01\x00!\x00":{m:"Nova",d:"Synth Module"}
};
//#end
});
