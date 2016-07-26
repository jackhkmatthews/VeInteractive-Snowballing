//PROBLEM: HAVE TO GENERATE CIRCLES MYSELF - SUPER BORINGGGGGG
//SOLUTION: GENERATE LOADS OF CIRCELS OF ALL KINDS ON A CANVAS - RANDOMLY!

//random size
//random position
//random/escalating z index





var rippleSizeFactor = '10';
var numberOfSpots = '5';
var numberOfDarkRipplesPerSpot = 20;
var numberOfLightRipplesPerSpot = 17;
var darkRippleOpacityFactor = '200';
var lightRippleOpacityFactor = '600';

//must match to canvas size in main.css, must be a square
var canvasHeight = 750 ;

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

function pulse (){

  $("#pulse0").animate({
    opacity: '0.0',
    height: '2000px',
    width: '2000px',
  }, 1000);
  $("#pulse0").animate({
    opacity: '0.0',
    height: '20px',
    width: '20px',
  }, 1000);
  $("#pulse0").animate({
    opacity: '1',
    height: '20px',
    width: '20px',
  }, 1,
  function() {
    $("#pulse1").animate({
      opacity: '0.0',
      height: '2000px',
      width: '2000px',
    }, 1000);
    $("#pulse1").animate({
      opacity: '0.0',
      height: '20px',
      width: '20px',
    }, 1000);
    $("#pulse1").animate({
      opacity: '1',
      height: '20px',
      width: '20px',
    }, 1,
    function() {
        $("#pulse2").animate({
          opacity: '0.0',
          height: '2000px',
          width: '2000px',
        }, 1000);
        $("#pulse2").animate({
          opacity: '0.0',
          height: '20px',
          width: '20px',
        }, 1000);
        $("#pulse2").animate({
          opacity: '1',
          height: '20px',
          width: '20px',
        }, 1,
        function() {
            $("#pulse3").animate({
              opacity: '0.0',
              height: '2000px',
              width: '2000px',
            }, 1000);
            $("#pulse3").animate({
              opacity: '0.0',
              height: '20px',
              width: '20px',
            }, 1000);
            $("#pulse3").animate({
              opacity: '1',
              height: '20px',
              width: '20px',
            }, 1,
             function() {
                    $("#pulse4").animate({
                      opacity: '0.0',
                      height: '2000px',
                      width: '2000px',
                    }, 1000);
                    $("#pulse4").animate({
                      opacity: '0.0',
                      height: '20px',
                      width: '20px',
                    }, 1000);
                    $("#pulse4").animate({
                      opacity: '1',
                      height: '20px',
                      width: '20px',
                    }, 1);
             }
             )
        }
        )
    }
    )
  }
  )

};

//generate ripples

generateRipples();

//attribute pulse class and border properties to smallest spots

// $(".circle").last().addClass("pulse");
// $(".pulse").last().css("border-style", "solid");
// $(".pulse").last().css("border-width", "10px");

//animate pulse divs

var londonBridgeTravelers = [];

for (var i = 0; i < travelers.length; i += 1) {
      station = travelers[i].StartStn;
      if (station === ' London Bridge ') {
        londonBridgeTravelers.push(station);
       } 
      }

var pulsesPerDay = londonBridgeTravelers.length

function londonBridgePulses (){

  $("#pulse0").animate({
    opacity: '0.0',
    height: '2000px',
    width: '2000px',
  }, 1000);
  $("#pulse0").animate({
    opacity: '0.0',
    height: '20px',
    width: '20px',
  }, 1000);
  $("#pulse0").animate({
    opacity: '1',
    height: '20px',
    width: '20px',
  },1000)
}

setInterval(londonBridgePulses, 30000/pulsesPerDay);


var victoriaTravelers = [];

for (var i = 0; i < travelers.length; i += 1) {
      station = travelers[i].StartStn;
      if (station === ' Victoria ') {
        victoriaTravelers.push(station);
       } 
      }

var pulsesPerDayV = victoriaTravelers.length

function victoriaPulses (){

  $("#pulse1").animate({
    opacity: '0.0',
    height: '2000px',
    width: '2000px',
  }, 1000);
  $("#pulse1").animate({
    opacity: '0.0',
    height: '20px',
    width: '20px',
  }, 1000);
  $("#pulse1").animate({
    opacity: '1',
    height: '20px',
    width: '20px',
  },1000)
}

setInterval(victoriaPulses, 30000/pulsesPerDayV);










