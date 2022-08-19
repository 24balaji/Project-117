function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/41WOeMjnL/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
  
      document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
      document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
      document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
  
      img = document.getElementById('cat') 
      img1 = document.getElementById('dog')
      img2 = document.getElementById('duck')
      img3 = document.getElementById('elephant')
      img4 = document.getElementById('lion')

      if (results[0].label == "Meowing") {
        img.src = 'cat.gif';
        img1.src = 'dog.jpg';
        img2.src = 'duck.jpg';
        img3.src = 'elephant.jpg';
        img4.src = 'lion.jpg';
      } else if (results[0].label == "Barking") {
        img.src = 'cat.jpg';
        img1.src = 'dog.gif';
        img2.src = 'duck.jpg';
        img3.src = 'elephant.jpg';
        img4.src = 'lion.jpg';
      } else if (results[0].label == "Quaking") {
        img.src = 'cat.jpg';
        img1.src = 'dog.jpg';
        img2.src = 'duck.gif';
        img3.src = 'elephant.jpg';
        img4.src = 'lion.jpg';
      } else if (results[0].label == "Trumpeting") {
        img.src = 'cat.jpg';
        img1.src = 'dog.jpg';
        img2.src = 'duck.jpg';
        img3.src = 'ele.gif';
        img4.src = 'lion.jpg';
      } else if (results[0].label == "Roaring") {
        img.src = 'cat.jpg';
        img1.src = 'dog.jpg';
        img2.src = 'duck.jpg';
        img3.src = 'elephant.jpg';
        img4.src = 'roaring-lion.gif';
      }else{
        img.src = 'cat.jpg';
        img1.src = 'dog.jpg';
        img2.src = 'duck.jpg';
        img3.src = 'elephant.jpg';
        img4.src = 'lion.jpg';
      }
    }
  }
