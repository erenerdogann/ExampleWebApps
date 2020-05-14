// BMI Calculator App
function calculateBMI(){
    var selection = document.querySelectorAll(".appBoxInside .form-control");
    var weight = selection[0].value;
    var height = selection[1].value;
    document.getElementById("BMIResult").innerHTML = "BMI: " + Math.floor((weight / (height*height)));
}

// Head Or Tail
function tossTheCoin(){
    var toss = Math.random();
    if(toss > 0.5){
        document.getElementById("CoinResult").innerHTML = "HEAD";
    }        
    else{
        document.getElementById("CoinResult").innerHTML = "TAIL";
    }
        
}