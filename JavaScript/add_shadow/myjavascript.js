// function displayalert() {
//     alert("this is my page");

// }

// function custom() {
//     // we can include more code here if we want to
//     console.log("this message is coming from script.js");
// }
// function ternOFF(element) {
//     element.innerText = "OFF" ;

// }

var nameTag = document.querySelector("#name-tag");

function setName(element) {
    console.log(element.value);
    nameTag.innerText = element.value;
}


