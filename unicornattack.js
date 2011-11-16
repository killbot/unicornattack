var uniCanvas;
var uniContext;
var uniBuffer = new Array(6);
var uniAllDudes = new Array();


function unicornListener(){
    uniCanvas = document.getElementById("unicornCanvas");
    uniContext = uniCanvas.getContext("2d");
    uniBuffer = [0,0];
    window.addEventListener("keypress", unikeyPress, false);
}


function unikeyPress(ev){
//    alert(ev.keyCode);
    var a = 97;
    var t = 116;
    var c = 99;
    var k = 107;
    uniBuffer.unshift(ev.keyCode);
//    alert("key pressed"+ev.keyCode);
    if(uniBuffer[0]==k 
            && uniBuffer[1]==c
            && uniBuffer[2]==a
            && uniBuffer[3]==t
            && uniBuffer[4]==t
            && uniBuffer[5]==a){
//        alert("ATTACK!");
        uniContext.canvas.width = window.innerWidth;
        uniContext.canvas.height = window.innerHeight;
        uniAttack();
    }
}
function uniAttack(){
//    alert("uni attack!");
    uniCanvas.style.visibility='visible';
//    var tempThing = new uniCorn(100,200,0.1, "rgba(200,200,200,1)", 1);
//    tempThing.draw();
    uniAllDudes = uniMakeDudes(500);
//    temp = new uniCorn(100, 200, .1, "rgba(200, 200, 200, 0.5)", 1);
//    alert("temp BLARG values = "+temp.pos_x);
    //setInterval(uniDrawDudes,1000/30); 
    uniAnimate();    

//    uni1 = new uniCorn(100, 200, .10, "rgba(200, 10, 10, 0.5)", 1);
//    alert("uni1 angle = "+uni1.currentRadians);
//    uni1.draw();
    //draw unicorns and rotate them
}

function uniMakeDudes(n){
    var num = n;
    var allThemShapes = [];
    for (i=0; i<num; i++){
        var x = Math.random()*uniCanvas.width;    //between 0 and canvas width
        var y = Math.random()*uniCanvas.height;   //between 0 and canvas height
        var omega = Math.random()*Math.PI/3-Math.PI/6;      //between -Pi/6 and +Pi/6 degrees
        var scale = Math.random()*4;              //between 0 and 4, for scaling size randomly
        var red = Math.floor(Math.random()*255);
        var green = Math.floor(Math.random()*255);
        var blue = Math.floor(Math.random()*255);
        var alpha = Math.random();                //between 0 and 1
//        var tempDude = new uniCorn(100, 100, 0.1, "rgba(240, 240, 240, 0.5)", 1);
//        alert("tempDude elements = "+tempDude.angularVelocity);

//        tempDude = new uniCorn(200, 200,  1, "rgba(200,200,200,0.5)", 1);
        tempDude = new uniCorn(x, y, omega, "rgba("+red+", "+green+", "+blue+", "+alpha+")", scale);
//        alert("inside uniMakeDudes, size of uniAllDudes = "+uniAllDudes.length);
//        alert("some elements of tempDude = "+tempDude.pos_x);
        allThemShapes.push(tempDude);
//        alert("some elements of the unicorns = "+uniAllDudes[0].pos_x);
    }
        return allThemShapes;
}

function uniDrawDudes(){
    uniContext.clearRect(0, 0, uniCanvas.width, uniCanvas.height);
//    alert("length of uniAllDudes = "+uniAllDudes.length);
//    alert("value of an element of uniAllDudes = "+uniAllDudes[0].currentRadians);
    for (j=0; j<uniAllDudes.length; j++){
        uniAllDudes[j].draw();
//        alert(uniAllDudes[j].pos_x + " " + uniAllDudes[j].pos_y);
    }
}

function uniCorn(x, y, angular_speed, rgba, scale_factor){
//var uniCorn = function(x, y, angular_speed, rgba, scale_factor){
    var pos_x = x;
    var pos_y = y;
    var currentRadians = 0.0;
//    var scale = scale_factor;
    var width = 30*scale_factor;
    var height = 30*scale_factor;
    var angularVelocity = angular_speed;
    var color = rgba;
    this.draw = function(){
        currentRadians += angularVelocity;
        uniContext.save();
        uniContext.translate(pos_x, pos_y);
        uniContext.rotate(currentRadians);
        uniContext.fillStyle = color;
        uniContext.fillRect(0-width/2, 0-height/2, width, height);
        uniContext.restore();
    }
}

window.requestAnimationFrame = (function(){
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function( callback, element){
        window.setTimeout(callback, 1000/60);
    };
}) ();

function uniAnimate(){
    window.requestAnimationFrame(uniAnimate);
    uniDrawDudes();
}
