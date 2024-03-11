var video;

var x = 0;

function setup() {
  createCanvas(displayWidth, displayHight/2);
  pixelDensity(1);

  var constraints = {
    audio: false,
    video: {
      facingMode: {
        exact: "environment"
      }
    }    
    //video: {
      //facingMode: "user"
    //} 
  };
  video = createCapture(VIDEO, constraints);
  video.size(displayWidth, displayWidth/2);
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
