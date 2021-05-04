//define the unit buttons

let zone1 = document.querySelector(".zone1");
let zone2 = document.querySelector(".zone2");
let flightLine = document.querySelector(".flightline");
let s7 = document.querySelector(".s7");
let s8 = document.querySelector(".s8");
let r1 = document.querySelector(".r1");
let puertoGate = document.querySelector(".puertogate");
let rotaGate = document.querySelector(".rotagate");
let pier1 = document.querySelector(".pier1");
let cvis = document.querySelector(".cvis");


//define the unit checkboxes

let cbZ1 = document.querySelector("#zone1");
let cbZ2 = document.querySelector("#zone2");
let cbFl = document.querySelector("#flightline");
let cbS7 = document.querySelector("#sierra7")
let cbS8 = document.querySelector("#sierra8")
let cbR1 = document.querySelector("#r1")
let cbPg = document.querySelector("#puertogate")
let cbRg = document.querySelector("#rotagate")
let cbP1 = document.querySelector("#pier1")
let cbCvis = document.querySelector("#cvis")

var onDuty = [];

//hide the elements on starting

$(".zone1").hide();
$(".zone2").hide();
$(".flightline").hide();
$(".s7").hide();
$(".s8").hide();
$(".puertogate").hide();
$(".rotagate").hide();
$(".pier1").hide();
$(".r1").hide();
$(".cvis").hide();


//the save button function from the edit list
document.querySelector(".save-button").addEventListener("click", function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach((checkbox) => {
        onDuty.push(checkbox.id);
    });

    //the checkboxes are on
    if (cbZ1.checked === true) {
        //zone1.style.visibility = "visible";
        $(".zone1").show();
    }
    if (cbZ2.checked === true) {
        //zone2.style.visibility = "visible";
        $(".zone2").show();
    }
    if (cbFl.checked === true) {
        //flightLine.style.visibility = "visible";
        $(".flightline").show();
    }
    if (cbS7.checked === true) {
        //s7.style.visibility = "visible";
        $(".s7").show();
    }
    if (cbS8.checked === true) {
        //s8.style.visibility = "visible";
        $(".s8").show();
    }
    if (cbR1.checked === true) {
        //r1.style.visibility = "visible";
        $(".r1").show();
    }
    if (cbPg.checked === true) {
        //puertoGate.style.visibility = "visible";
        $(".puertogate").show();
    }
    if (cbRg.checked === true) {
        //rotaGate.style.visibility = "visible";
        $(".rotagate").show();
    }
    if (cbP1.checked === true) {
        //pier1.style.visibility = "visible";
        $(".pier1").show();
    }
    if (cbCvis.checked === true) {
        //cvis.style.visibility = "visible";
        $(".cvis").show();
    }

    //the checkboxes are off
    if (cbZ1.checked === false) {
        //zone1.style.visibility = "hidden";
        $(".zone1").hide();
    }
    if (cbZ2.checked === false) {
        //zone2.style.visibility = "hidden";
        $(".zone2").hide();
    }
    if (cbFl.checked === false) {
        //flightLine.style.visibility = "hidden";
        $(".flightline").hide();
    }
    if (cbS7.checked === false) {
        //s7.style.visibility = "hidden";
        $(".s7").hide();
    }
    if (cbS8.checked === false) {
        //s8.style.visibility = "hidden";
        $(".s8").hide();
    }
    if (cbR1.checked === false) {
        //r1.style.visibility = "hidden";
        $(".r1").hide();
    }
    if (cbPg.checked === false) {
        //puertoGate.style.visibility = "hidden";
        $(".puertogate").hide();
    }
    if (cbRg.checked === false) {
        //rotaGate.style.visibility = "hidden";
        $(".rotagate").hide();
    }
    if (cbP1.checked === false) {
        //pier1.style.visibility = "hidden";
        $(".pier1").hide();
    }
    if (cbCvis.checked === false) {
        //cvis.style.visibility = "hidden";
        $(".cvis").hide();
    }
});

//remove z1 after clicked
zone1.addEventListener("click", function () {
    $(".zone1").hide();
});

//removes z2 after clicked
zone2.addEventListener("click", function () {
    //zone2.style.visibility = "hidden";
    $(".zone2").hide();
});

//removes flightline after clicked
flightLine.addEventListener("click", function () {
    //flightLine.style.visibility = "hidden";
    $(".flightline").hide();
});

//removes s7 after clicked
s7.addEventListener("click", function () {
    //s7.style.visibility = "hidden";
    $(".s7").hide();
});

//removes s8 after clicked
s8.addEventListener("click", function () {
    //s8.style.visibility = "hidden";
    $(".s8").hide();
});

//removes puertogate after clicked
puertoGate.addEventListener("click", function () {
    //puertoGate.style.visibility = "hidden";
    $(".puertogate").hide();
});

//removes rotagate after clicked
rotaGate.addEventListener("click", function () {
    //rotaGate.style.visibility = "hidden";
    $(".rotagate").hide();
});

//removes pier1 after clicked
pier1.addEventListener("click", function () {
    //pier1.style.visibility = "hidden";
    $(".pier1").hide();
});

//removes r1 after clicked
r1.addEventListener("click", function () {
    //r1.style.visibility = "hidden";
    $(".r1").hide();
});

//removes cvis after clicked
cvis.addEventListener("click", function () {
    //cvis.style.visibility = "hidden";
    $(".cvis").hide();
});