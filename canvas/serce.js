let canvas =document.getElementById("canvas");
let context =canvas.getContext("2d");

var window_height=window.innerHeight;
var window_width=window.innerWidth;
canvas.width=window_width;
canvas.height=window_height;
//serce
context.beginPath();
context.moveTo(112.5, 60);
context.moveTo(225, 120);  
context.bezierCurveTo(225, 111, 210, 75, 150, 75); 
context.bezierCurveTo(60, 75, 60, 187.5, 60, 187.5); 
context.bezierCurveTo(60, 240, 120, 306, 225, 360); 
context.bezierCurveTo(330, 306, 390, 240, 390, 187.5); 
context.bezierCurveTo(390, 187.5, 390, 75, 300, 75); 
context.bezierCurveTo(255, 75, 225, 111, 225, 120); 
context.stroke();
context.closePath();

//strzała
context.beginPath();
context.lineWidth = 1;
context.moveTo(420, 60);
context.lineTo(290,150);
context.stroke();
context.closePath();

context.beginPath();
context.lineWidth = 1;
context.moveTo(180, 300);
context.lineTo(120,350);
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(100, 380);
context.lineTo( 140, 350);
context.lineTo(110, 350);
context.fillStyle="black";
context.fill()
context.closePath();

context.beginPath();
context.lineWidth = 1;
context.moveTo(420, 60);
context.lineTo(430,30);
context.stroke();
context.closePath();

context.beginPath();
context.lineWidth = 1;
context.moveTo(410, 68);
context.lineTo(420,30);
context.stroke();
context.closePath();

context.beginPath();
context.lineWidth = 1;
context.moveTo(400, 75);
context.lineTo(410, 40);
context.stroke();
context.closePath();

context.beginPath();
context.lineWidth = 1;
context.moveTo(390, 83);
context.lineTo(400, 50);
context.stroke();
context.closePath();

context.beginPath();
context.lineWidth = 1;
context.moveTo(420, 60);
context.lineTo(440, 80);
context.stroke();
context.closePath();

context.beginPath();
context.lineWidth = 1;
context.moveTo(410, 68);
context.lineTo(430,90);
context.stroke();
context.closePath();

context.beginPath();
context.lineWidth = 1;
context.moveTo(400, 75);
context.lineTo(425, 105);
context.stroke();
context.closePath();

context.beginPath();
context.lineWidth = 1;
context.moveTo(390, 83);
context.lineTo(415, 110);
context.stroke();
context.closePath();

//piorunek 1
context.beginPath();
context.lineWidth = 1;
context.moveTo(120, 110);
context.lineTo(110, 120);
context.stroke();
context.closePath();

context.beginPath();
context.lineWidth = 1;
context.moveTo(110, 120);
context.lineTo(120, 120);
context.stroke();
context.closePath();

context.beginPath();
context.lineWidth = 1;
context.moveTo(120, 120);
context.lineTo(100, 140);
context.stroke();
context.closePath();

//piorunek 2
context.beginPath();
context.lineWidth = 1;
context.moveTo(320, 260);
context.lineTo(310, 270);
context.stroke();
context.closePath();

context.beginPath();
context.lineWidth = 1;
context.moveTo(310, 270);
context.lineTo(320, 270);
context.stroke();
context.closePath();

context.beginPath();
context.lineWidth = 1;
context.moveTo(320, 270);
context.lineTo(300, 290);
context.stroke();
context.closePath();

//kwiatek
context.beginPath();
context.arc(240,225,17.5,0,Math.PI*2,false);
context.stroke();
context.closePath();

context.beginPath();
context.arc(240,225,7.5,0,Math.PI*2,false);
context.stroke();
context.closePath();

context.beginPath();
context.arc(240,255,12.5,0,Math.PI*2,false);
context.stroke();
context.closePath();

context.beginPath();
context.arc(240,195,12.5,0,Math.PI*2,false);
context.stroke();
context.closePath();

context.beginPath();
context.arc(210,225,12.5,0,Math.PI*2,false);
context.stroke();
context.closePath();

context.beginPath();
context.arc(270,225,12.5,0,Math.PI*2,false);
context.stroke();
context.closePath();

context.beginPath();
context.arc(260,245,10,0,Math.PI*2,false);
context.stroke();
context.closePath();

context.beginPath();
context.arc(220,205,10,0,Math.PI*2,false);
context.stroke();
context.closePath();

context.beginPath();
context.arc(220,245,10,0,Math.PI*2,false);
context.stroke();
context.closePath();

context.beginPath();
context.arc(260,205,10,0,Math.PI*2,false);
context.stroke();
context.closePath();