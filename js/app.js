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

let cbZ1 = document.querySelector("#zone1")
let cbZ2 = document.querySelector("#zone2")
let cbFl = document.querySelector("#flightline")
let cbS7 = document.querySelector("#sierra7")
let cbS8 = document.querySelector("#sierra8")
let cbR1 = document.querySelector("#r1")
let cbPg = document.querySelector("#puertogate")
let cbRg = document.querySelector("#rotagate")
let cbP1 = document.querySelector("#pier1")
let cbCvis = document.querySelector("#cvis")

var onDuty = [];

//hide the elements on starting

zone1.style.visibility = "hidden"; 
zone2.style.visibility = "hidden";  
flightLine.style.visibility = "hidden"; 
s7.style.visibility = "hidden";
s8.style.visibility = "hidden";
puertoGate.style.visibility = "hidden";
rotaGate.style.visibility = "hidden";    
pier1.style.visibility = "hidden";  
r1.style.visibility = "hidden"; 
cvis.style.visibility = "hidden";


//the save button function from the edit list
document.querySelector(".save-button").addEventListener("click", function(){
    if (cbZ1.checked = true) {
        zone1.style.visibility = "visible";
        onDuty.push(zone1);
    };
    if (cbZ2.checked = true) {
        zone2.style.visibility = "visible";
        onDuty.push(zone2);
    };
    if (cbFl.checked = true) {
        flightLine.style.visibility = "visible";
        onDuty.push(flightLine);
    };
    if (cbS7.checked = true) {
        s7.style.visibility = "visible";
        onDuty.push(s7);
    };
    if (cbS8.checked = true) {
        s8.style.visibility = "visible";
        onDuty.push(s8);
    };
});



//remove z1 after clicked
zone1.addEventListener("click", function(){
    zone1.style.visibility = "hidden";    
});

//removes z2 after clicked
zone2.addEventListener("click", function(){
    zone2.style.visibility = "hidden";  
});

//removes flightline after clicked
flightLine.addEventListener("click", function(){
    flightLine.style.visibility = "hidden";  
});

//removes s7 after clicked
s7.addEventListener("click", function(){
    s7.style.visibility = "hidden";  
});

//removes s8 after clicked
s8.addEventListener("click", function(){
    s8.style.visibility = "hidden";  
});

//removes puertogate after clicked
puertoGate.addEventListener("click", function(){
    puertoGate.style.visibility = "hidden";  
});

//removes rotagate after clicked
rotaGate.addEventListener("click", function(){
    rotaGate.style.visibility = "hidden";  
});

//removes pier1 after clicked
pier1.addEventListener("click", function(){
    pier1.style.visibility = "hidden";  
});

//removes r1 after clicked
r1.addEventListener("click", function(){
    r1.style.visibility = "hidden";  
});

//removes cvis after clicked
cvis.addEventListener("click", function(){
    cvis.style.visibility = "hidden";
});