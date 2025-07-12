'use strict';

const projectText = document.querySelectorAll('.modal');
const projectName = document.querySelectorAll('.pro-pointer');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');

const closeOverlay = function () {
  overlay.classList.add('hidden');
};
for (let i = 0; i < projectName.length; i++) {
  projectName[i].addEventListener('click', function () {
    projectText[i].classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

for (let i = 0; i < projectName.length; i++) {
  btnCloseModal[i].addEventListener('click', function () {
    projectText[i].classList.add('hidden');
    closeOverlay();
  });
}

for (let i = 0; i < projectName.length; i++) {
  overlay.addEventListener('click', function () {
    projectText[i].classList.add('hidden');
    closeOverlay();
  });
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    for (let i = 0; i < projectText.length; i++) {
      if (!projectText[i].classList.contains('hidden')) {
        projectText[i].classList.add('hidden');
        closeOverlay();
      }
    }
  }
});
