var toggle=false;

document.body.querySelector(".menuBar").addEventListener("click",function(){
    toggle=!toggle;

    if(toggle){
        document.body.querySelector(".menu").style.right="0";
    }else{
        document.body.querySelector(".menu").style.right="-200px";
    }

})