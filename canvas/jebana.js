let canvas =document.getElementById("canvas");
let context =canvas.getContext("2d");

var window_height=window.innerHeight;
var window_width=window.innerWidth;
canvas.width=window_width;
canvas.height=window_height;
//poczatek rakiety
//kwadrat
canvas.style.background="white";
context.fillStyle="yellow";
context.fillRect(100,200,100,200);
//kolo gora
context.beginPath();
context.strokeStyle ="blue";
context.arc(150,250,20,0,Math.PI*2,false);
context.fillStyle="blue";
context.fill();
context.stroke();
context.closePath();
//kolo dol
context.beginPath();
context.strokeStyle ="blue";
context.arc(150,325,20,0,Math.PI*2,false);
context.fillStyle="blue";
context.fill();
context.stroke();
context.closePath();
//trojkat lewy
context.beginPath();
context.moveTo(125, 400);
context.lineTo( 150, 450);
context.lineTo(100, 450);
context.fillStyle="black";
context.fill()
context.closePath();
//trojkat prawy
context.beginPath();
context.moveTo(178, 400);
context.lineTo( 200, 450);
context.lineTo(155, 450);
context.fillStyle="black";
context.fill()
context.closePath();
//trojkat gora
context.beginPath();
context.moveTo(150, 125);
context.lineTo( 200, 200);
context.lineTo(100, 200);
context.fillStyle="red";
context.fill()
context.closePath();
//linia prosta dluga
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(150, 0);
context.lineTo(150,125)
context.stroke();
context.closePath();
//krzywa lewa
context.beginPath();
context.moveTo(75, 35);
context.quadraticCurveTo(125, 125, 150, 125);
context.stroke();
context.closePath();
//krzywa prawa
context.beginPath();
context.moveTo(230, 35);
context.quadraticCurveTo(200, 100, 150, 125);
context.stroke();
context.closePath();
//linia lewa gora 1
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(75, 35);
context.lineTo(150,0);
context.stroke();
context.closePath();
//linia lewa gora 2
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(85, 55);
context.lineTo(150,20);
context.stroke();
context.closePath();
//linia lewa gora 3
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(93, 68);
context.lineTo(150,40);
context.stroke();
context.closePath();
//linia lewa gora 4
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(105, 83);
context.lineTo(150,60);
context.stroke();
context.closePath();
//linia lewa gora 5
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(115, 98);
context.lineTo(150,80);
context.stroke();
context.closePath();
//linia lewa gora 6
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(138, 108);
context.lineTo(150,100);
context.stroke();
context.closePath();
//linia lewa gora w prawo 1
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(150, 20);
context.lineTo(115,15);
context.stroke();
context.closePath();
//linia lewa gora w prawo 2
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(150,40);
context.lineTo(78, 45);
context.stroke();
context.closePath();
//linia lewa gora w prawo 3
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(150,60);
context.lineTo(85, 55);
context.stroke();
context.closePath();
//linia lewa gora w prawo 4
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(150,80);
context.lineTo(93, 68);
context.stroke();
context.closePath();
//linia lewa gora w prawo 5
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(150,100);
context.lineTo(105, 83);
context.stroke();
context.closePath();
//linia lewa gora w prawo 6
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(138, 108);
context.lineTo(115, 98);
context.stroke();
context.closePath();
//linia konczonce po lewo
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(115,15);
context.lineTo(78, 45);
context.stroke();
context.closePath();
//linia prawa gora 
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(230, 35);
context.lineTo(150,0);
context.stroke();
context.closePath();
//linia prawa gora 1
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(225, 45);
context.lineTo(150,20);
context.stroke();
context.closePath();
//linia prawa gora 2
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(215, 60);
context.lineTo(150,40);
context.stroke();
context.closePath();
//linia prawa gora 3
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(205, 75);
context.lineTo(150,60);
context.stroke();
context.closePath();
//linia prawa gora 4
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(195, 90);
context.lineTo(150,80);
context.stroke();
context.closePath();
//linia prawa gora 5
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(175, 110);
context.lineTo(150,100);
context.stroke();
context.closePath();
//linia prawa gora w lewo 1
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(150,20);
context.lineTo(198,20);
context.stroke();
context.closePath();
//linia prawa gora w lewo 2
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(150,40);
context.lineTo(227, 38);
context.stroke();
context.closePath();
//linia prawa gora w lewo 3
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(150,60);
context.lineTo(225, 45);
context.stroke();
context.closePath();
//linia prawa gora w lewo 4
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(150,80);
context.lineTo(215, 60);
context.stroke();
context.closePath();
//linia prawa gora w lewo 5
context.beginPath();
context.strokeStyle = "black"
context.lineWidth = 2;
context.moveTo(150,100);
context.lineTo(205, 75);
context.stroke();
context.closePath();