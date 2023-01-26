var video;

var x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  video.hide();
  background(0);
}

function draw(){
  video.loadPixels();
  //filter(THRESHOLD,2);
  filter(GRAY);
  //filter(POSTERIZE,8);
  //image(video, 0, 0);
  
  var w = video.width
  var h = video.height
  
  copy(video, w/2, 0, 1, h, x, 0, 1, h);
  
  x = x + 1;
}
