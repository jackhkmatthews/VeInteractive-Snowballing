


function pulse (){
	$("#pulse").animate({
		opacity: '0.1',
		height: '1500px',
		width: '1500px',
	}, 800)
	$("#pulse").animate({
		opacity: '0.1',
		height: '20px',
		width: '20px',
	}, 800)
};

pulse();

// setInterval(pulse, 1600);