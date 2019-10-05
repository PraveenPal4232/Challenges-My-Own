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

var ff1 = document.getElementsByClassName("f1");

function myfunction1(){


    
    if(ff1[0] .value !== ""){
        document.getElementById("lavel1").style.display = "none";
        document.getElementById("lavel2").style.display = "block";
    }
    
}