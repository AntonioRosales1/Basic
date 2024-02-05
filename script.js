// These colors will change the page to light mode.
let colorOne = `white`;
let colorBackgroundOne = `orange`;
let headerOne = `rgb(3, 28, 28)`;
// These colors will reset the page back to the original look.
let colorTwo = `rgb(3, 28, 28)`;
let colorBackgroundTwo = `rgb(246, 144, 20)`;
let headerTwo = "rgb(7, 6, 18)";

// This function the the button that changes the page from dark to light theme
const footerBtn = document.getElementById(`footerBtn`);
const navBtn = document.getElementById(`navBtn`);
document.getElementById("mainClick").addEventListener("click", function () {
  document.body.style.background = colorBackgroundOne;
  mainClick.style.color = headerOne;
  secondBtn.style.color = headerOne;
  footerBtn.style.color = headerOne;
  navBtn.style.color = headerOne;
  document.getElementById("mainClick").style.Color = colorOne;
  document.querySelector(`p`).style.color = headerOne;
  document.querySelector(`h1`).style.color = headerOne;
  document.getElementById(`pBackground`).style.backgroundColor = colorOne;
  mainClick.style.backgroundColor = colorOne;
  secondBtn.style.backgroundColor = colorOne;
  footerBtn.style.background = colorOne;
  navBtn.style.background = colorOne;
});
// This function the the button that changes the page from light to dark theme
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
