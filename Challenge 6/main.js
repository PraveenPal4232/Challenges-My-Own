console.log("Ok Working Now...");
var ste = "Praveen Pal";
var x = ste.split("");
console.log(x);
if(x.includes("p")){
    console.log("t");
}
else{
    console.log("f");
}

document.getElementById("lavel1").style.display = "block";
document.getElementById("btn1").addEventListener("click", myfunction1);
function myfunction1(){
    document.getElementById("lavel1").style.display = "none";
}