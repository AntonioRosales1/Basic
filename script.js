let colorOne = `white`;
let colorBackgroundOne = `orange`;
let headerOne = `rgb(3, 28, 28)`;

let colorTwo = `rgb(3, 28, 28)`;
let colorBackgroundTwo = `rgb(246, 144, 20)`;
let headerTwo = "rgb(7, 6, 18)";

const footerBtn = document.getElementById(`footerBtn`);
const navBtn = document.getElementById(`navBtn`);
document.getElementById("mainClick").addEventListener("click", function () {
  mainClick.style.backgroundColor = colorOne;
  secondBtn.style.backgroundColor = colorOne;
  document.body.style.background = colorBackgroundOne;
  mainClick.style.color = headerOne;
  secondBtn.style.color = headerOne;
  footerBtn.style.color = headerOne;
  navBtn.style.color = headerOne;
  document.querySelector(`p`).style.color = headerOne;
  document.querySelector(`h1`).style.color = headerOne;
  document.getElementById(`pBackground`).style.backgroundColor = colorOne;
  document.getElementById("mainClick").style.Color = `black`;
  footerBtn.style.background = colorOne;
  navBtn.style.background = colorOne;
});
document.getElementById("secondBtn").addEventListener("click", function () {
  document.body.style.backgroundColor = headerTwo;
  document.querySelector(`p`).style.color = colorBackgroundTwo;
  document.querySelector(`h1`).style.color = colorBackgroundTwo;
  mainClick.style.color = colorBackgroundTwo;
  secondBtn.style.color = colorBackgroundTwo;
  footerBtn.style.color = colorBackgroundTwo;
  navBtn.style.color = colorBackgroundTwo;
  document.getElementById(`pBackground`).style.backgroundColor = colorTwo;
  mainClick.style.backgroundColor = colorTwo;
  secondBtn.style.backgroundColor = colorTwo;
  footerBtn.style.backgroundColor = colorTwo;
  navBtn.style.backgroundColor = colorTwo;
});
