var uniCanvas;
var uniContext;
var uniBuffer = new Array(6);
var uniAllDudes = new Array();
var uniNumberOfDudes = 200;
var keyPressed = false;

function unicornListener(){
    uniCanvas = document.getElementById("unicornCanvas");
    uniContext = uniCanvas.getContext("2d");
    uniBuffer = [0,0,0,0,0,0,0,0,0,0];
    //window.addEventListener("keypress", unikeyPress, false);
    window.addEventListener("keydown", unikeyPress, false);
    window.addEventListener("keyup", unikeyUp, false);
}

function unikeyUp(ev){
    keyPressed = false;
}

function unikeyPress(ev){
//    alert(ev.keyCode);
if (keyPressed == false){
    var a = 65;
    var b = 66;
    var t = 84;
    var c = 67;
    var k = 75;
    var up = 38;
    var down = 40;
    var left = 37;
    var right = 39;
    uniBuffer.unshift(ev.keyCode);
    uniBuffer.pop();
    keyPressed = true;
    //console.log("key pressed"+ev.keyCode);
    if(uniBuffer[0]==a
            && uniBuffer[1]==b
            && uniBuffer[2]==right
            && uniBuffer[3]==left
            && uniBuffer[4]==right
            && uniBuffer[5]==left
            && uniBuffer[6]==down
            && uniBuffer[7]==down
            && uniBuffer[8]==up
            && uniBuffer[9]==up){
//        alert("ATTACK!");
        uniContext.canvas.width = window.innerWidth;
        uniContext.canvas.height = window.innerHeight;
        uniAttack();
}
    }
}
function uniAttack(){
//    alert("uni attack!");
    uniCanvas.style.visibility='visible';
//    var tempThing = new uniCorn(100,200,0.1, "rgba(200,200,200,1)", 1);
//    tempThing.draw();
    uniAllDudes = uniMakeDudes(uniNumberOfDudes);
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
        var x = Math.random()*uniCanvas.width-50;    //between 0 and canvas width
        var y = Math.random()*uniCanvas.height-50;   //between 0 and canvas height
        var omega = Math.random()*Math.PI/3-Math.PI/6;      //between -Pi/6 and +Pi/6 degrees
        var scale = (Math.random()*1.6+0.4);              //between 1.6 and 0.4, for scaling size randomly
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
    var width = scale_factor;
    var height = scale_factor;
    var angularVelocity = angular_speed;
    var color = rgba;
    this.draw = function(){
        currentRadians += angularVelocity;
        uniContext.save();
        uniContext.translate(pos_x, pos_y);
        uniContext.scale(1/scale_factor, 1/scale_factor);
        uniContext.translate(50, 50);
        uniContext.rotate(currentRadians);
        uniContext.translate(-50, -50);
        uniContext.fillStyle = color;
        var ctx = uniContext;
        //uniContext.fillRect(0-width/2, 0-height/2, width, height);

ctx.beginPath();
ctx.moveTo(68.5,0);
ctx.bezierCurveTo(68.5,0,67,4.52,67,4.52);
ctx.bezierCurveTo(67,4.52,73,0.5,73,0.5);
ctx.bezierCurveTo(73.06,3.51,71.7,6.14,70,8.54);
ctx.bezierCurveTo(72.15,10.38,72.58,11.47,73.5,14.07);
ctx.bezierCurveTo(73.5,14.07,90.5,6.1,90.5,6.1);
ctx.bezierCurveTo(90.5,6.1,98,3.02,98,3.02);
ctx.bezierCurveTo(95.37,6.53,88.33,11,84.5,13.57);
ctx.bezierCurveTo(81.81,15.37,78.43,17.97,75.5,19.1);
ctx.bezierCurveTo(75.5,19.1,77.5,28.65,77.5,28.65);
ctx.bezierCurveTo(77.5,28.65,76,29.15,76,29.15);
ctx.bezierCurveTo(76,29.15,75,27.14,75,27.14);
ctx.bezierCurveTo(75,27.14,79.07,38.19,79.07,38.19);
ctx.bezierCurveTo(79.07,38.19,81.5,42.72,81.5,42.72);
ctx.bezierCurveTo(81.5,42.72,84,45.23,84,45.23);
ctx.bezierCurveTo(83.14,47.07,82.32,51.24,82.5,53.27);
ctx.bezierCurveTo(79,54.9,74.8,55.71,71.57,52.96);
ctx.bezierCurveTo(70.09,51.71,70.03,50.66,68.85,49.34);
ctx.bezierCurveTo(67.66,48.02,66.03,47.1,64.5,46.24);
ctx.bezierCurveTo(64.5,46.24,64.5,47.24,64.5,47.24);
ctx.bezierCurveTo(62.7,46.75,62.58,46.77,61.5,45.23);
ctx.bezierCurveTo(59.89,46.23,59.72,45.92,58,45.23);
ctx.bezierCurveTo(57.39,42.53,54,40.54,52,38.7);
ctx.bezierCurveTo(52,38.7,51,41.71,51,41.71);
ctx.bezierCurveTo(50.02,41.54,49.72,43.91,49.5,44.73);
ctx.bezierCurveTo(48.27,49.15,47.98,50.72,47.48,55.28);
ctx.bezierCurveTo(47.22,57.58,46.3,62.86,46.63,64.83);
ctx.bezierCurveTo(46.63,64.83,47.74,68.35,47.74,68.35);
ctx.bezierCurveTo(49.28,73.64,50.62,78.31,50.49,83.93);
ctx.bezierCurveTo(50.45,85.87,49.71,91.21,49.08,92.97);
ctx.bezierCurveTo(48.34,95.04,47.43,95.62,47,98);
ctx.bezierCurveTo(47,98,0,98,0,98);
ctx.bezierCurveTo(0,98,0,60.31,0,60.31);
ctx.bezierCurveTo(0,59.26,-0.06,57.76,0.3,56.79);
ctx.bezierCurveTo(1.01,54.84,6.59,49.77,7.5,45.73);
ctx.bezierCurveTo(14.72,43.59,18.11,33.8,21.18,27.64);
ctx.bezierCurveTo(23.02,23.95,26.5,19.65,29.5,16.82);
ctx.bezierCurveTo(32.58,13.91,38.17,8.97,42.5,8.66);
ctx.bezierCurveTo(42.5,8.66,45,8.66,45,8.66);
ctx.bezierCurveTo(45,8.66,55.39,6.65,55.39,6.65);
ctx.bezierCurveTo(56.36,6.35,56.03,6.33,56.5,6.03);
ctx.bezierCurveTo(61.84,7.32,64.6,4.06,67.5,0);
ctx.bezierCurveTo(67.5,0,68.5,0,68.5,0);
ctx.closePath();
ctx.fill();






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
