function setup() {
	
	// noprotect
  createCanvas(windowWidth, windowHeight);
	strokeWeight(4);
}

function draw() {
	background(255);
	
	for (var i = 20; i < windowWidth; i += 20) {
		line(i, mouseX, i + i/6, mouseY);
		line(i + i/6, mouseY, i*1.8, windowHeight);
	}
	
	if(mouseX <300) {
		stroke (255,0,0);
	} else{
		stroke(0);
	}
	
	if (mouseIsPressed == true) {
		ellipse (mouseX, mouseY, 38, 38);
	}
}