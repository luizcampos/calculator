var valueView = document.querySelector(".viewfinder").innerHTML;
var previous, newPrevious;

function getPrevious(){ //pega o que foi clicado anteriormente
    previous = document.querySelector(".previous").textContent;
    if(previous !== null || ""){
        for(var i = 0; i < previous.length; i++){
            if((previous[i] !== "") && (previous[i] !== null)  && (previous[i] !== undefined)){
                newPrevious += previous[i];
                
            }
        }
        alert(newPrevious);
        return newPrevious;
    }
    
}

var btn17 = document.querySelector("#symbol17"); //Number 1
var btn20 = document.querySelector("#symbol20"); //+

btn17.addEventListener("click", function(){ //Number 1
    document.querySelector(".viewfinder").innerHTML += btn17.innerHTML;
});

btn20.addEventListener("click", function(){  //+
    if((document.querySelector(".previous").innerHTML !== "") && (document.querySelector(".previous").innerHTML !== null))
        document.querySelector(".previous").innerHTML += document.querySelector(".viewfinder").innerHTML + " + ";
    else
        document.querySelector(".previous").innerHTML = document.querySelector(".viewfinder").innerHTML + " + ";

    document.querySelector(".viewfinder").innerHTML = "";
    getPrevious();
});


// document.querySelector("#symbol2").addEventListener("click", getButton(document.querySelector("#symbol2").innerHTML));
// document.querySelector("#symbol3").addEventListener("click", getButton(document.querySelector("#symbol3").innerHTML));
// document.querySelector("#symbol4").addEventListener("click", getButton(document.querySelector("#symbol4").innerHTML));
// document.querySelector("#symbol5").addEventListener("click", getButton(document.querySelector("#symbol5").innerHTML));
// document.querySelector("#symbol6").addEventListener("click", getButton(document.querySelector("#symbol6").innerHTML));
// document.querySelector("#symbol7").addEventListener("click", getButton(document.querySelector("#symbol7").innerHTML));
// document.querySelector("#symbol8").addEventListener("click", getButton(document.querySelector("#symbol8").innerHTML));
// document.querySelector("#symbol9").addEventListener("click", getButton(document.querySelector("#symbol9").innerHTML));
// document.querySelector("#symbol10").addEventListener("click", getButton(document.querySelector("#symbol10").innerHTML));
// document.querySelector("#symbol11").addEventListener("click", getButton(document.querySelector("#symbol11").innerHTML));
// document.querySelector("#symbol12").addEventListener("click", getButton(document.querySelector("#symbol12").innerHTML));
// document.querySelector("#symbol13").addEventListener("click", getButton(document.querySelector("#symbol13").innerHTML));
// document.querySelector("#symbol14").addEventListener("click", getButton(document.querySelector("#symbol14").innerHTML));
// document.querySelector("#symbol15").addEventListener("click", getButton(document.querySelector("#symbol15").innerHTML));
// document.querySelector("#symbol16").addEventListener("click", getButton(document.querySelector("#symbol16").innerHTML));
// document.querySelector("#symbol17").addEventListener("click", getButton(document.querySelector("#symbol17").innerHTML));
// document.querySelector("#symbol18").addEventListener("click", getButton(document.querySelector("#symbol18").innerHTML));
// document.querySelector("#symbol19").addEventListener("click", getButton(document.querySelector("#symbol19").innerHTML));
// document.querySelector("#symbol20").addEventListener("click", getButton(document.querySelector("#symbol20").innerHTML));
// document.querySelector("#symbol21").addEventListener("click", getButton(document.querySelector("#symbol21").innerHTML));
// document.querySelector("#symbol22").addEventListener("click", getButton(document.querySelector("#symbol22").innerHTML));
// document.querySelector("#symbol23").addEventListener("click", getButton(document.querySelector("#symbol23").innerHTML));
// document.querySelector("#symbol24").addEventListener("click", getButton(document.querySelector("#symbol24").innerHTML));

function getButton(valueBtn){
    alert(valueBtn);
}



//document.querySelector(".viewfinder").innerHTML = "oi";




//buttons[1].addEventListener("click", function () {
    //alert("a");
//});

/*
for (var i = 0; i < buttons.length; i++) {
    var btn = buttons[i];
    buttons[i].addEventListener("click", function () {
        alert(buttons[i].innerHTML);
    });
}*/


