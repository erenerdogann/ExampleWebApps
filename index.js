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

// Standart Counter
function standartCounter(){
    var userTime = document.getElementById("customTime").value;
    document.getElementById("standartButton").disabled = true;
    var myTime = document.getElementById("Counter");
    var timeLeft = userTime * 60;
    var counter = setInterval(function(){
        var minute = Math.floor(timeLeft / 60);
        var second = Math.floor(timeLeft % 60);
        myTime.textContent = "Time Left: " + minute + " m " + second + " s ";
        timeLeft--;
        if(timeLeft < 0){
            clearInterval(counter);
            myTime.textContent = "Time is Up!";
            document.getElementById("standartButton").disabled = false;
        }
        
    }, 1000);
}