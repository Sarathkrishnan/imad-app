var button = document.getElementByID('Counter');
var counter = 0;

button.onclick = function () {
    counter= counter + 1;
    var span =document.getEleentById('count');
    span.innerHTML = counter.toString();
    
};