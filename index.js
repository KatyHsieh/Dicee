
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomImage;
var images1 = document.querySelectorAll("img")[0];
images1.setAttribute("src", randomImageSource);

// var randomImage2 = "dice" + randomNumber2 +".png";
var randomImageSource2 = "images/dice" + randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

var changH1 = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  changH1.innerHTML = "🏆Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  changH1.innerHTML = "Player 2 Wins!🏆";
}else{
  changH1.innerHTML = "Draw!";
}



// if (randomNumber1 === 1 ) {
// document.querySelector(".img1").setAttribute("src", "images/dice1.png");
// }else if (randomNumber1 === 2) {
// document.querySelector(".img1").setAttribute("src", "images/dice2.png");
// }else if (randomNumber1 === 3) {
// document.querySelector(".img1").setAttribute("src", "images/dice3.png");
// }else if (randomNumber1 === 4) {
//   document.querySelector(".img1").setAttribute("src", "images/dice4.png");
// }else if (randomNumber1 === 5) {
//   document.querySelector(".img1").setAttribute("src", "images/dice5.png");
// }else if (randomNumber1 === 6) {
//   document.querySelector(".img1").setAttribute("src", "images/dice6.png");
// }else {
//
// }
// if (randomNumber2 === 1 ) {
// document.querySelector(".img2").setAttribute("src", "images/dice1.png");
// }else if (randomNumber2 === 2) {
// document.querySelector(".img2").setAttribute("src", "images/dice2.png");
// }else if (randomNumber2 === 3) {
// document.querySelector(".img2").setAttribute("src", "images/dice3.png");
// }else if (randomNumber2 === 4) {
//   document.querySelector(".img2").setAttribute("src", "images/dice4.png");
// }else if (randomNumbe2 === 5) {
//   document.querySelector(".img2").setAttribute("src", "images/dice5.png");
// }else if (randomNumber2 === 6) {
//   document.querySelector(".img2").setAttribute("src", "images/dice6.png");
// }else {
//
// }
