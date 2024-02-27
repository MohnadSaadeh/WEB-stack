console.log("page loaded...");
var deleted_todd = document.getElementById("todd");
function delete_1req() {
    deleted_todd.remove();
}

var deleted_phil = document.getElementById("phil");
function delete_2req() {
    deleted_phil.remove();
}

var user_name = document.querySelector("#card_name")

function update_record() {
    user_name.innerText = "Mohannad Saadeh";
}
