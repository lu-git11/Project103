
/*
document.getElementById(`submit`).addEventListener(`click`, function(){
    var temp = document.getElementById(`temp`).value; 
    var unit = document.getElementById(`unit`).value;


function convert(){
    let temp = document.getElementById(`tempstart`).value; 
    let unit = document.getElementById(`unit`).value;
    let results = "";
if (unit ==="C") {
    number = (temp*9/5) + 32;
    document.getElementById("results").innerHTML=`<p> ${number.toFixed(2)}° F</p>`;
}else {
    number = (temp-32) *5/9;
    document.getElementById("results").innerHTML=`<p> ${number.toFixed(2)}° C</p>`;
}}
 */


function convert(){
    let tempstart = document.getElementById(`tempstart`).value;
    let tempstop = document.getElementById(`tempstop`).value;
    let unit = document.getElementById(`unit`).value;
    let results = "";

    for(let i=tempstart; i<=tempstop; i++) {
        if (unit ==="C") {
            number = (i*9/5) + 32;
            results +=`<p> ${number.toFixed(2)}° F</p>`;
        }else {
            number = (i-32) *5/9;
            results += `<p> ${number.toFixed(2)}° C</p>`;
        }
        document.getElementById("results").innerHTML = results;
    }
}

