//PROBLEM: HAVE TO GENERATE CIRCLES MYSELF - SUPER BORINGGGGGG
//SOLUTION: GENERATE LOADS OF CIRCELS OF ALL KINDS ON A CANVAS - RANDOMLY!

//random size
//random position
//random/escalating z index

var rippleSizeFactor = '10';
var numberOfSpots = '10';
var numberOfDarkRipplesPerSpot = 20;
var numberOfLightRipplesPerSpot = 17;
var darkRippleOpacityFactor = '200';
var lightRippleOpacityFactor = '600';

//must match to canvas size in main.css, must be a square
var canvasHeight = 500 ;

var html = '';
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

function getPositionNumber () {
        return Math.floor(Math.random() * (canvasHeight + rippleSizeFactor*10) ) - rippleSizeFactor*10;
      }

function generateRipples () {
      for (var i = 0; i < numberOfSpots; i += 1) {

        var rippleId = 'ripple' + i;
        var rippleSelector = '#ripple' + i;
        var rippleColor = getRgbColor();
        var pulseId = 'pulse' + i;
        var pulseSelector = '#pulse' + i;


        $("#canvas").append('<div class="ripple" id=' + rippleId + '></div>');
        $(rippleSelector).css("top", getPositionNumber)
        $(rippleSelector).css("left", getPositionNumber)


        //the outer spots

        for (var j = (numberOfLightRipplesPerSpot + numberOfDarkRipplesPerSpot); j > (numberOfDarkRipplesPerSpot - 1); j -= 1) {
          var dimension = (j * rippleSizeFactor) + 'px';
          var opacity = (j / lightRippleOpacityFactor);

          $(rippleSelector).append('<div class="circle"></div>');
          $(".circle").last().css("height", dimension);
          $(".circle").last().css("width", dimension);
          $(".circle").last().css("opacity", opacity);

        }

        //the inner spots

        for (var j = (numberOfDarkRipplesPerSpot + 1); j > 0; j -= 1) {
          var dimension = (j * rippleSizeFactor) + 'px';
          var opacity = (j / darkRippleOpacityFactor);

          $(rippleSelector).append('<div class="circle"></div>');
          $(".circle").last().css("height", dimension);
          $(".circle").last().css("width", dimension);
          $(".circle").last().css("opacity", opacity);

        }

        $(rippleSelector).children().css("background-color", rippleColor)

        //the animated ripple

        for (var j = 1; j > 0; j -= 1) {
          var dimension = (j * rippleSizeFactor) + 'px';
          var opacity = (j / darkRippleOpacityFactor);

          $(rippleSelector).append('<div class="circle pulse" id="' + pulseId + '"></div>');
          // $(".pulse").last().css("border-style", "solid");
          // $(".pulse").last().css("border-width", "10px");
          $(".pulse").last().css("background-color", rippleColor);

        }

      }

}

///generate ripples

generateRipples();


//extract number of travelers from each station

for (var i = 0; i < stations.length; i += 1) {
  var station = stations[i];
  var numberOfTravelers = 0;
  for (var j = 0; j < travelers.length; j += 1) {
    if (station === travelers[j].StartStn) {
      numberOfTravelers += 1;
    }
  }
  travelersPerStation.push(numberOfTravelers)
}


var testId = '#pulse1'

for (var i = 0; i < numberOfSpots; i += 1) {

  var testId = '#pulse' + i;

  setInterval(function(para){

    $(para).animate({
      opacity: '1',
      height: '20px',
      width: '20px',
    },0);

  $(para).animate({
      opacity: '0.0',
      height: '1000px',
      width: '1000px',
    }, 1000);
    $(para).animate({
      opacity: '0.0',
      height: '20px',
      width: '20px',
    }, 1000)
    
  }, 10000/travelersPerStation[i], testId);
}








