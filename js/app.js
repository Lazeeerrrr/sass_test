const preload = document.querySelector('body');
const request = document.querySelector('.btn-2');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
const about = document.querySelector('.about');
const servicesButton = document.querySelector('.servicing-btn');
const servicesButtonTwo = document.querySelector('#servicing-btn');
const aboutButton = document.querySelector('.about-btn');
const services = document.querySelector('.services');
const content = document.querySelector('.content');
const email = document.querySelector('.email-input');
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const leftText = document.querySelector('.left-text');
const buttonModal = document.querySelector('.btn-modal');

function removeHover () {
  preload.classList.remove('preload');
}

removeHover();

left.addEventListener('click', () => {
  right.style.backgroundColor = '#00897b';
  left.style.backgroundColor = '#fff';
  leftText.style.color = '#000';
});

email.addEventListener('click', () => {
  right.style.backgroundColor = '#36495e';
  left.style.backgroundColor = '#161616f8';
  leftText.style.color = '#fff';
});

aboutButton.addEventListener('click', (e) => {
  about.scrollIntoView(top);
  console.log('wtf');
  
});

servicesButton.addEventListener('click', () => {
  services.scrollIntoView(top);
});

servicesButtonTwo.addEventListener('click', () => {
  services.scrollIntoView(top);
});

request.addEventListener('click', () => {
  modal.style.display = "flex";
});

close.addEventListener('click', () => {
  modal.style.display = "none";
});