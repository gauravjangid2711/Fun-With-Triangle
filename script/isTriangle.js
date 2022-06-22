//page 1 Is Triangle javascript

var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var btnCheckTriangle = document.querySelector("#btn-check-triangle");
var showMessageIsTriangle = document.querySelector("#show-message-is-Triangle");

btnCheckTriangle.addEventListener("click",isTriangleEventHandler);

function isTriangleEventHandler() {
    numConvertedAngel1 = parseInt(angle1.value);
    numConvertedAngel2 = parseInt(angle2.value);
    numConvertedAngel3 = parseInt(angle3.value);

    if((numConvertedAngel1 + numConvertedAngel2 + numConvertedAngel3)===180) {
        showMessageIsTriangle.innerText = "YAH , The Angles Form a Triangle";
    } else {
        showMessageIsTriangle.innerText = "OH OH !, The Angles Do not Form a Triangle"
    }
}



