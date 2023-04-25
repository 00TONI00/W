var counter = 1;

setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);
/*------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------*/
var photoItems = document.querySelectorAll(".photo-item");

function animatePhoto(photo) {
photo.style.transform = "scale(1.1)";
}

function stopAnimatePhoto(photo) {
photo.style.transform = "scale(1)";
}
/*------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------*/
function mezclarColor(color1, color2) {
    var mezcla = "#";
    for (var i = 1; i < 7; i += 2) {
      var parte1 = parseInt(color1.substr(i, 2), 16);
      var parte2 = parseInt(color2.substr(i, 2), 16);
      var parteMezclada = Math.floor((parte1 + parte2) / 2).toString(16);
      mezcla += ("00" + parteMezclada).substr(-2);
    }
    return mezcla;
  }
  
  function cambiarColor() {
    var colorActual = document.body.style.backgroundColor;
    var colorNuevo = Math.floor(Math.random() * 2) == 0 ? "#fff" : "#000";
    var colorMezclado = mezclarColor(colorActual, colorNuevo);
    document.body.style.backgroundColor = colorMezclado;
    setTimeout(cambiarColor, 1000);
  }
  
  cambiarColor();
/*------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------*/