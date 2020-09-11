var metrixSy= 0;
var metrixCly = 1;
var metrixGono = 2;
 

function is_checked(){
  var syphilisA =document.getElementById('rash').checked;
  var syphilisB =document.getElementById('fever').checked;
  var syphilisC =document.getElementById('Weight-loss').checked;
  var syphilisD =document.getElementById('hair-loss').checked;
  var syphilisE =document.getElementById('joint-pain').checked;

  var chlymydiaA =document.getElementById('pain-sex')
  var chlymydiaB =document.getElementById('green-yellow')
  var chlymydiaC =document.getElementById('lower-pain')
  var chlymydiaD =document.getElementById('bleeding')
  var chlymydiaE=document.getElementById('testicles')


  var gonorrheaA = document.getElementById('yello-discharge');
  var gonorrheaB = document.getElementById('pain-urinating');
  var gonorrheaC = document.getElementById('urinating-unusal');
  var gonorrheaD = document.getElementById('itching');
  var gonorrheaE = document.getElementById('sore-throat');

  var newSyphilis = [syphilisA, syphilisB, syphilisC, syphilisD, syphilisE];
  var newChlymydia = [chlymydiaA, chlymydiaB, chlymydiaC, chlymydiaD, chlymydiaE];
  var newGono =[gonorrheaA, gonorrheaB,gonorrheaC, gonorrheaD, gonorrheaE];

  var newDisease =[newSyphilis, newChlymydia, newGono]

  newSyphilis.forEach(function(symp){
    for(i=0;i< 5; i ++); 
    if( symp == true){
      metrixSy +=1;
    }
    else{
      return false;
    }
  })  
  alert('You have ' + metrixSy + ' symptom(s) for Syphilis.. ' );

  newChlymydia.forEach(function(smp){
    for(i=0;i< 5; i ++); 
    if( smp == true){
      metrixCly +=1;
    }
    else{
      return false;
    }
  })  
  alert( '  You have ' + metrixCly + ' symptom(s) for Chlymydia... ');

  newGono.forEach(function(gono){
    for(i=0;i< 5; i ++); 
    if( gono == true){
      metrixGono +=1;
    }
    else{
      return false;
    }
  })  
  alert( '  You have ' + metrixGono + ' symptom(s) for Gonorrhea ... ');
}