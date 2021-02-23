function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('mobilenet',modelLoaded);
}

function modelLoaded(){

  console.log("Model Has Been Loaded!");

}

function draw(){

 image(video,0,0,300,300);
 classifier.classify(video,gotResults);

}

function gotResults(error,results){

  if (error){

    console.log(error);

  }

  else{

   console.log(results)
   document.getElementById("obj_result_name").innerHTML = results[0].label;
   document.getElementById("obj_result_acc").innerHTML = results[0].confidence.toFixed(3);

  }

}



