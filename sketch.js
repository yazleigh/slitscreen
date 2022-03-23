var video;

var x = 0;

function setup() {
  createCanvas(700, 400);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(700, 400);
  video.hide();
  background(0);
  //filter(THRESHOLD,2);
}

function draw(){
  video.loadPixels();
  //filter(GRAY);
  //filter(POSTERIZE,8);
  //image(video, 0, 0);
  
  var w = video.width
  var h = video.height
  
  copy(video, w/2, 0, 1, h, x, 0, 1, h);
  
  x = x + 1;
}