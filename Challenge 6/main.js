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

for (i=0; i<ff1.length; i++){
    if(ff1[i] .value !== ""){
        if(i == ff1.length-1){
            mail_mix();
        }
    }
    else{
        console.log("Sorry Man");
    }
} 
}

function mail_mix(){
    var mail1 = ff1[3].value;
    var maill1 = mil1.split("");
    document.getElementById("lavel1").style.display = "none";
    document.getElementById("lavel2").style.display = "block";
}