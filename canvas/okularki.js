let canvas =document.getElementById("canvas");
let context =canvas.getContext("2d");

var window_height=window.innerHeight;
var window_width=window.innerWidth;
canvas.width=window_width;
canvas.height=window_height;
//okrag lewo proste
context.beginPath();
context.strokeStyle ="black";
context.arc(250,250,40,0,Math.PI*2,false);
context.stroke();
context.closePath();

//proste
context.beginPath();
context.lineWidth = 1;
context.moveTo(250, 210);
context.lineTo(250, 290);
context.stroke();
context.closePath();

context.beginPath();
context.lineWidth = 1;
context.moveTo(210, 250);
context.lineTo(290, 250);
context.stroke();
context.closePath();

context.beginPath();
context.lineWidth = 1;
context.moveTo(280, 280);
context.lineTo(220, 220);
context.stroke();
context.closePath();

context.beginPath();
context.lineWidth = 1;
context.moveTo(280, 220);
context.lineTo(220, 280);
context.stroke();
context.closePath();

//okrag lewo niepelny 
context.beginPath();
context.strokeStyle ="black";
context.arc(250,250,62.5,0,Math.PI*2,false);
context.stroke();
context.closePath();

//okrag prawo proste
context.beginPath();
context.strokeStyle ="black";
context.arc(375,250,40,0,Math.PI*2,false);
context.stroke();
context.closePath();
//proste
context.beginPath();
context.lineWidth = 1;
context.moveTo(375, 210);
context.lineTo(375, 290);
context.stroke();
context.closePath();

context.beginPath();
context.lineWidth = 1;
context.moveTo(335, 250);
context.lineTo(415, 250);
context.stroke();
context.closePath();

context.beginPath();
context.lineWidth = 1;
context.moveTo(345, 280);
context.lineTo(405, 220);
context.stroke();
context.closePath();

context.beginPath();
context.lineWidth = 1;
context.moveTo(345, 220);
context.lineTo(405, 280);
context.stroke();
context.closePath();

//okrag prawo niepelny 
context.beginPath();
context.strokeStyle ="black";
context.arc(375,250,62.5,0,Math.PI*2,false);
context.stroke();
context.closePath();

//okrag gora niepelny 1
context.beginPath();
context.strokeStyle ="black";
context.arc(312.5,188,70,0,Math.PI,true);
context.stroke();
context.closePath();
//okrag gora niepelny 2
context.beginPath();
context.strokeStyle ="black";
context.arc(312.5,195,90,0,Math.PI,true);
context.stroke();
context.closePath();

//okrag dol niepelny 1
context.beginPath();
context.strokeStyle ="black";
context.arc(312.5,312,70,0,Math.PI,false);
context.stroke();
context.closePath();
//okrag dol niepelny 2
context.beginPath();
context.strokeStyle ="black";
context.arc(312.5,299,100,0,Math.PI,false);
context.stroke();
context.closePath();