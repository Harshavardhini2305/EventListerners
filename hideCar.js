

const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");


myButton.addEventListener("click" , event => {


    if( myImg.style.visibility === "hidden"){ // display pettinapudu ah pis ki place em vundadhu mana button place change avuthadhi

        myImg.style.visibility = "visible"; // ala avvakudadhu img ki place vundali antey visisbility vadali
        myButton.textContent = "Hide";
    }else{

        
    myImg.style.visibility = "hidden";
    myButton.textContent = "Show";

    }

});