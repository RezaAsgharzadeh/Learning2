var cal, div, i, item, items, itom, itoms, s, salam, v, val, x, _i, _j, _len;

s = 10;

v = 20;

items = [1, 2, 'tr', true];

for (_i = 0, _len = items.length; _i < _len; _i++) {
  item = items[_i];
  console.log(item);
}

itoms = {
  salam: 'daram',
  pool: 'nadaram',
  'salam khubi': 'na',
  "var": true
};

for (itom in itoms) {
  val = itoms[itom];
  console.log(itom, val);
}

for (i = _j = 0; _j <= 100; i = _j += 10) {
  console.log(i);
}

x = 10;

if (x === 10) {
  console.log('dah');
}

x = 1;

if (x !== 10) {
  console.log('nist');
}

x = null;

if (x) {
  console.log('s');
} else {
  console.log('p');
}

div = document.createElement('div');

div.classList.add('center');

div.innerHTML = "Lean";

document.body.appendChild(div);

div.addEventListener('click', (function(_this) {
  return function(event) {
    return console.log('ok');
  };
})(this));

salam = (function(_this) {
  return function() {
    return console.log('salam');
  };
})(this);

salam = function() {
  return console.log('hello');
};

salam();

cal = (function() {
  function cal() {
    console.log('sho');
  }

  cal.prototype.get = function() {
    return s = '20e';
  };

  return cal;

})();

x = new cal;

console.log(x.get());

/*
//@ sourceMappingURL=script.map
*/
