function startClassification() {

    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5soundClasifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults());
}

function gotResults(error, Results)
console.log('Got Results');