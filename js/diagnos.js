const diseases = {
  Syphilis: [
    "A rash on your reproductive organs",
    "Fatigue",
    "Fever",
    "Weight Loss",
    "Hair loss",
    "Joint pain",
  ],

  Chlymydia: [
    "pain or discomfort during sex or urination",
    "green or yellow discharge from the penis or vagina",
    "pain in the lower abdomen",
  ],

  Gonorrhea: [
    "a white, yellow, beige, or green-colored discharge from the penis or vagina",
    "pain or discomfort during sex or urination",
    "more frequent urination than usual",
    "itching around the genitals",
    "sore throat",
  ],
};

function is_checked(){
  var SyphilisA =document.getElementById('rash').checked;
  var SyphilisB =document.getElementById('fever').checked;
  var SyphilisC =document.getElementById('Weight-loss').checked;
  var SyphilisD =document.getElementById('hair-loss').checked;
  var SyphilisE =document.getElementById('joint-pain').checked;


}