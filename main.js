var prediction="";

webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera= document.getElementById("camera");
webcam.attach('#camera');

function take_snapshot(){
webcam.snap(function (data_uri){
document.getElementById("result").innerHTML = '<img id="image captured src="'+data_uri+'" />'
});
}

console.log("ml5 Version:", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/I6fMHaqdQ/',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function speak(){
var synth = window.speechSynthesis;
var speak_data = "The prediction is" + prediction;
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}