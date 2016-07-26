/*var html = '';
var rgbColor;
var rgbColor1;
var rgbColor2;


function getRgbNumber() {
  return Math.floor(Math.random() * 256 );
}

function getRgbColor () {
  var color = 'rgb(' + getRgbNumber() + ',' + getRgbNumber() + ',' + getRgbNumber() + ')';
  return color;
}
  
for (var i = 0; i < 1; i += 1) {
  rgbColor1 = getRgbColor();
  rgbColor2 = getRgbColor();
  html += '<h2>Top: ' + rgbColor1 + ' to bottom: ' + rgbColor2 + '</h2><div style="background:linear-gradient(' + rgbColor1 + ',' + rgbColor2 + ');"></div>';
}

document.write(html);

*/

// use setTimeout or setInterval() to keep changing the color
// automatically every two seconds


//PROBLEM: HAVE TO GENERATE CIRCLES MYSELF - SUPER BORINGGGGGG
//SOLUTION: GENERATE LOADS OF CIRCELS OF ALL KINDS ON A CANVAS - RANDOMLY!

//random size
//random position
//random/escalating z index

//make a canvas you like, then add loads of random numbers

var html ='';
var circle = '';

function getCircle (num) {
	circle += '<div class="circle" id="c10" style="opacity: 0.5; margin-left: ' + num + 'px"></div>'
}

for (var i = 0; i < 100; i += 10) {
	getCircle(i);
}

document.write(circle);