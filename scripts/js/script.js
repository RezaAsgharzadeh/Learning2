var colors, createDivs, divs, i, rectangle_count, responsivePage, x, _i;

rectangle_count = Math.floor(window.innerWidth / 260);

createDivs = function(count) {
  var div;
  div = document.createElement('div');
  div.classList.add('windows-schema');
  div.setAttribute('id', 'windowsID');
  div.style.backgroundColor = colors[x()];
  div.style.left = "" + (count % rectangle_count * 260 + 28) + "px";
  div.style.top = "" + (Math.floor(count / rectangle_count) * 160 + 28) + "px";
  return document.body.appendChild(div);
};

responsivePage = function() {
  rectangle_count = Math.floor(window.innerWidth / 260);
  return window.location.reload();
};

colors = ["#1abc9c", "#1abc9c", "#2ecc71", "#27ae60", "#3498db", "#3498db", "#3498db", "#3498db", "#c0392b", "#f39c12", "#d35400"];

x = function() {
  var number;
  number = Math.random() * 10;
  return number = Math.floor(number);
};

for (i = _i = 0; _i <= 69; i = ++_i) {
  createDivs(i);
}

divs = document.getElementById('windowsID');

window.addEventListener('resize', responsivePage);

/*
//@ sourceMappingURL=script.map
*/
