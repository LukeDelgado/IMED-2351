const stopwatch = {color:"#FFFFFF", font:"SegoeUI Bold"};  // Object Defined

const txt1 = document.getElementById("inputSeconds");
const btn1 = document.getElementById("SubmitButton");
const out1 = document.getElementById("outputTime");

function convertToMinutes(startingtime){
    let divisor = (startingtime / 60).toFixed(2);
    console.log("Total time: " + divisor);
    out1.innerHTML=divisor
}


function buttonSubmit(){
    convertToMinutes(txt1.value);
}