var diceNumber1= Math.floor(Math.random()*6)+1;
var diceImage1 = "dice"+diceNumber1+".png";
var sourceImg1= "images/"+diceImage1;

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",sourceImg1);

var diceNumber2= Math.floor(Math.random()*6)+1;
var diceImage2 = "dice"+diceNumber2+".png";
var sourceImg2= "images/"+diceImage2;

var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src",sourceImg2);

if (diceNumber1>diceNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if (diceNumber2>diceNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "It was a Lucky Draw";
}