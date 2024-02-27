
function delete_button(buttonremove) {
    buttonremove.remove(); 
}


function notify(){
    var x = document.getElementById("search_result").value;
    alert("you search for ' " + x + " '");
}
var orange_count = 0;
var ora_cake_likes = document.querySelector("#orange_cake_likes");
function increase_orange_likes() {
    orange_count++;
    ora_cake_likes.innerText = orange_count;

}
var sec_count = 0;
var sec_numLikes = document.querySelector("#sec_cake_likes");
function increase_sec_likes() {
    sec_count++;
    sec_numLikes.innerText = sec_count ;

}
var therd_count = 0;
var therd_numLikes = document.querySelector("#therd_cake_likes");
function increase_therd_likes() {
    therd_count++;
    therd_numLikes.innerText = therd_count ;

}