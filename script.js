// These colors will change the page to light mode.
let colorBackgroundOne = `#F6C28B`;
let colorOne = `#dbb289`;
// let colorBackgroundOne = `blue`;
let headerOne = `black`;
// These colors will reset the page back to the original look.
let colorTwo = `rgb(3, 28, 28)`;
let colorBackgroundTwo = `rgb(246, 148, 20)`;
// Like this color for future projects.
// let colorBackgroundTwo = `rgb(246, 148, 254)`;
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
  mainClick, secondBtn, footerBtn, (navBtn.style.backgroundColor = colorOne);
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

// Adding an alert customized message
footerBtn.addEventListener(`click`, function () {
  alert(
    `This site was created to demonstraight my HTML, CSS, and JavaScript skills.`
  );
});

window.alert = function (message, timeout = 10000) {
  const about = document.createElement(`div`);
  const okBtn = document.createElement(`button`);
  okBtn.innerHTML = `Go Back`;
  okBtn.setAttribute(
    `style`,
    `
  width: 90px;
  height: 50px; 
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  background: #8d8079
 
  `
  );

  about.classList.add(`alert`);
  about.setAttribute(
    `style`,
    `
  position: fixed;
  top: 20%;
  left: 30%;
  padding:20px;
  background:#8d8079;
 
  width: 450px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  border-radius: 4px`
  );
  about.innerHTML = `<span>${message}</span> `;
  about.appendChild(okBtn);
  okBtn.addEventListener(`click`, (e) => {
    about.remove();
  });
  if (timeout != null) {
    setTimeout(() => {
      about.remove();
    }, Number(timeout));
  }
  document.body.appendChild(about);
};
