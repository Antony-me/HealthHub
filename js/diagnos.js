var metrix= 0;

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
  


  newSyphilis.forEach(function(symp){
    for(i=0;i< newSyphilis.length; i ++); 
    if( symp == true){
      metrix +=1;
    }
    else{
      return false;
    }
    alert('You have ' + metrix + ' symptom(s) for syphilis')
  })

  newChlymydia.forEach(function(symptom){
    for(i=0;i< newChlymydia.length; i ++); 
    if( symp == true){
      metrix +=1;
    }
    else{
      return false;
    }
    alert('You have ' + metrix + ' symptom(s) for Chlymydia')
  })

  newGono.forEach(function(sympp){
    for(i=0;i< newGono.length; i ++); 
    if( symp == true){
      metrix +=1;
    }
    else{
      return false;
    }
    alert('You have ' + metrix + ' symptom(s) for Gono')
  })
  
}