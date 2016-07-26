//PROBLEM: HAVE TO GENERATE CIRCLES MYSELF - SUPER BORINGGGGGG
//SOLUTION: GENERATE LOADS OF CIRCELS OF ALL KINDS ON A CANVAS - RANDOMLY!

//random size
//random position
//random/escalating z index

var rippleSizeFactor = '20';
var numberOfSpots = '5';
var numberOfDarkRipplesPerSpot = 10;
var numberOfLightRipplesPerSpot = 17;
var darkRippleOpacityFactor = '70';
var lightRippleOpacityFactor = '1000';

//must match to canvas size in main.css, must be a square
var canvasHeight = 1000 ;


function getPositionNumber () {
  return Math.floor(Math.random() * (canvasHeight + rippleSizeFactor*10) ) - rippleSizeFactor*10;
}


for (var i = 0; i < numberOfSpots; i += 1) {

var rippleId = 'ripple' + i;
var rippleSelector = '#ripple' + i;


$("#canvas").append('<div class="ripple" id=' + rippleId + '></div>');
$(rippleSelector).css("top", getPositionNumber)
$(rippleSelector).css("left", getPositionNumber)


  //the outer 5

  for (var j = (numberOfLightRipplesPerSpot + numberOfDarkRipplesPerSpot); j > (numberOfDarkRipplesPerSpot - 1); j -= 1) {
    var dimension = (j * rippleSizeFactor) + 'px';
    var opacity = (j / lightRippleOpacityFactor);

    $(rippleSelector).append('<div class="circle"></div>');
    $(".circle").last().css("height", dimension);
    $(".circle").last().css("width", dimension);
    $(".circle").last().css("opacity", opacity);

  }

  //the inner 5

  for (var j = (numberOfDarkRipplesPerSpot + 1); j > 0; j -= 1) {
    var dimension = (j * rippleSizeFactor) + 'px';
    var opacity = (j / darkRippleOpacityFactor);

    $(rippleSelector).append('<div class="circle"></div>');
    $(".circle").last().css("height", dimension);
    $(".circle").last().css("width", dimension);
    $(".circle").last().css("opacity", opacity);

  }

}























