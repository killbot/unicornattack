

var uniCanvas;
var uniContext;
var uniBuffer = new Array(2);


function unicornListener(){
    uniCanvas = document.getElementById("unicornCanvas");
    uniContext = uniCanvas.getContext("2d");
    uniBuffer = [0,0];
    window.addEventListener("keypress", unikeyPress, false);
}

function unikeyPress(ev){
//    alert(ev.keyCode);
    var b = 98;
    var a = 97;
    uniBuffer.unshift(ev.keyCode);
//    alert("key pressed"+ev.keyCode);
    if(uniBuffer[0]==b && uniBuffer[1]==b){
        alert("b pressed twice");
    }
//    alert("buf0="+uniBuffer[0]+", buf1="+uniBuffer[1]);
//    canvas.visibility='visible';
    
}
