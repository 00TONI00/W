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