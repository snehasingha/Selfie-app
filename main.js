var SpeechRecognition = window.webkitSpeechRecognition;//WebspeechAPI used to recognize what 
//we speak and convert to text
//This is a special library created by google chrome developers which is trained on many languages

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    
    if (Content == "take my selfie") {

        console.log("taking selfie --- ");
        speak();
    }
}

// C99


function speak() {
    var synth = window.speechSynthesis;//text to speech

    speak_data = "Taking your Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function () {
        take_snapshot();
        save();
    }, 5000);
}


camera = document.getElementById("camera");

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

//C100

function take_snapshot() 
{
    
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '">';
    });
}


function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}