var randomNumber1=Math.random();
randomNumber1 =Math.floor(randomNumber1*6)+1;
var randomimage = "images/dice"+randomNumber1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage)
var randomNumber2=Math.random();
randomNumber2 =Math.floor(randomNumber2*6)+1;
var randomimage = "images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 won";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 won";
}
else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}