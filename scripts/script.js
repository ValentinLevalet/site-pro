var filtres = document.querySelectorAll('[class^=filtre]');
var labImages = document.querySelectorAll('[class^=lab-image-]');
var filtresCoches = document.querySelectorAll('[class^=choix]');
var labImagesArray = [];
var labImagesSuffixe;
for (var i = 0; i < labImages.length; i++) {
  labImagesSuffixe = labImages[i].className.substr(10);
  labImagesArray.push(labImagesSuffixe);
}

for (var i = 0; i < filtresCoches.length; i++) {
  filtresCoches[i].addEventListener('click',function(e){
    var filtreSuffixe = e.target.className.substr(6);
    if(e.target.checked == true){
      for (var j = 0; j < labImagesArray.length; j++) {
        if(labImagesArray[j] != filtreSuffixe){
          labImages[j].classList.add('hidden');
        }
      }
    }else{
      for (var j = 0; j < labImagesArray.length; j++) {
        if(labImagesArray[j] != filtreSuffixe){
          labImages[j].classList.remove('hidden');
        }
      }
    }
  })
}

var demosClic = document.querySelectorAll(".demos-clic");

// demoLien = demoFeuilles.attr.href;
var demoFrame = document.getElementById("demo");
var demoFrameWrapper = document.getElementById("iframe-wrapper");
var fermer = document.getElementById("fermer");
for (var i = 0; i < demosClic.length; i++) {
  j = i;
  demosClic[i].addEventListener('click', function(e){
    e.preventDefault();
    demoFrame.setAttribute("src", this.href);
    demoFrameWrapper.classList.replace("hidden","affiche");
  });
}
fermer.addEventListener("click", function(){
    demoFrameWrapper.classList.replace("affiche","hidden");
});