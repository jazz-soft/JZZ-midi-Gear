module.exports = function(grunt) {
  return function() {
    var eol = require('os').EOL;
    var config = grunt.config('assemble');
    var scr = grunt.file.read(config.script).split(/\r?\n/);
    var vnd = grunt.file.read(config.vendors).split(/\r?\n/);
    var mod = grunt.file.read(config.models).split(/\r?\n/);
    var _v = {};
    var _x = {};
    var _c = {};
    var _vv = [];
    var head = [];
    var tail = [];
    var tmp;
    var total = 0;

    var curr = head;
    for (var i = 0; i < scr.length; i++) {
      if (curr) curr.push(scr[i]);
      if (scr[i] == '//#begin') curr = undefined;
      else if (scr[i] == '//#end') {
        curr = tail;
        curr.push(scr[i]);
      }
    }

    for (var i = 0; i < vnd.length; i++) {
      var a = vnd[i].split('\t');
      if (a.length < 2) continue;
      var x = a[0].split(' ');
      x = x.map(_h2n);
      var v = x[0] ? _a2s(x) : _a2s(x.slice(1, 3));
      if (_v[v]) grunt.fail.fatal(['duplicated vendor id', a[0], a[1]].join(' '));
      _v[v] = a[1];
    }

    for (var i = 0; i < mod.length; i++) {
      var a = mod[i].split('\t');
      if (a.length < 4) continue;
      if (!a[0]) {
        continue;
      }
      total++;
      var x = a[0].split(' ');
      x = x.map(_h2n);
      var v = x[5] ? _a2s(x.slice(5, 6)) : _a2s(x.slice(6, 8));
      if (!_v[v]) _v[v] = a[1];
      if (!_x[v]) _x[v] = {};
      if (!_c[v]) _c[v] = {};
      var m = x[5] ? _a2s(x.slice(6, 14)) : _a2s(x.slice(8, 16));
      if (_x[v][m]) grunt.fail.fatal(['duplicated model id', a[0], a[1], a[2], a[3]].join(' '));
      _x[v][m] = a[1] == _v[v] ? {m:a[2], d:a[3], s:mod[i]} : {b:a[1], m:a[2], d:a[3], s:mod[i]};
      for (var j = 4; j <=8; j++) {
        var s = m.substring(0, j);
        _c[v][s] = _c[v][s] ? _c[v][s] + 1 : 1;
      }
    }

    _vv = _skk(_v);
    tmp = [];
    for (var i = 0; i < _vv.length; i++) {
      var s = _vv[i].split('').map(_c2n);
      if (s.length > 1) s = [0].concat(s);
      s = s.map(_n2h).join(' ');
      tmp.push([s, _v[_vv[i]]].join('\t'));
    }
    tmp.push('');
    grunt.file.write(config.vendors, tmp.join(eol));

    tmp = [];
    for (var i = 0; i < _vv.length; i++) {
      var v = _vv[i];
      var kk = _skk(_x[v]);
      if (!kk.length) continue;
      for (var k = 0; k < kk.length; k++) tmp.push(_x[v][kk[k]].s);
      tmp.push('');
    }
    grunt.file.write(config.models, tmp.join(eol));

    tmp = [];
    for (var i = 0; i < _vv.length; i++) {
      tmp.push([_esc(_vv[i]), _esc(_v[_vv[i]])].join(':'));
    }
    head.push('var _v = {');
    head.push(tmp.join(',' + eol));
    head.push('};');
    for (var i = 0; i < _vv.length; i++) {
      tmp = [];
      var v = _vv[i];
      var kk = _skk(_x[v]);
      if (!kk.length) continue;
      head.push(['_m[', _esc(_vv[i]), '] = { // ', _v[_vv[i]]].join(''));
      for (var k = 0; k < kk.length; k++) {
        var m;
        for (var j = 4; j < 9; j++) {
          var s = kk[k].substring(0, j);
          if (_c[v][s] > 1) continue;
          m = s;
          break;
        }
        var s = [_esc(m), ':{m:', _esc(_x[v][kk[k]].m), ',d:', _esc(_x[v][kk[k]].d)];
        if (_x[v][kk[k]].b) s = s.concat([',b:', _esc(_x[v][kk[k]].b)]);
        s.push('}');
        tmp.push(s.join(''));
      }
      head.push(tmp.join(',' + eol));
      head.push('};');
    }
    grunt.file.write(config.script, head.concat(tail).join(eol));
    grunt.log.writeln(_vv.length + ' vendors, ' + total + ' models');
  }
};
function _h2n(x) { return parseInt(x, 16); }
function _n2h(x) { return (x < 16 ? '0' : '') + x.toString(16); }
function _n2c(n) { return String.fromCharCode(n); }
function _c2n(c) { return c.charCodeAt(0); }
function _a2s(a) { return a.map(_n2c).join(''); }
function _skk(v) {
  var a = [];
  for (var i in v) a.push(i);
  a.sort(_cmp);
  return a;
}
function _esc(s) {
  s = JSON.stringify(s);
  s = s.replace(/\\u00/g, '\\x');
  return s;
}
function _cmp(a, b) {
  if (a.length < b.length) return -1;
  if (a.length > b.length) return 1;
  for (var i = 0; i < a.length; i++) {
    if (a.charCodeAt(i) < b.charCodeAt(i)) return -1;
    if (a.charCodeAt(i) > b.charCodeAt(i)) return 1;
  }
  return 0;
}
