    var nameSpan = document.querySelector("#name");
    var thefoodOrder = "Pizza"
    
    function setName(element){
        console.log(element.value);
        nameSpan.innerText = element.value;

    }

    function slectOrder(element) {
        console.log("the food is " + element.value);
        thefoodOrder = element.value;

    }

    function order() {
        alert("Ordering a " +thefoodOrder + " ?");

    }