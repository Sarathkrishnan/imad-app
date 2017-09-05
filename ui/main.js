console.log('Loaded!');

var element = document.getElementById('mytext');
element.innerHTML = "Hai I am on the jouney ..";

var img = document.getElementById('image');
var marginLeft=0;
function moveRight() {
    marginLeft=marginLeft + 10;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick=function() {
    var intervel = setInetrval(moveRight,100);
};