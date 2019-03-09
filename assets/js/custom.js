// Rollover headers
const header = document.querySelector('#header');
const headerSpans = header.querySelectorAll('span');

const originalHTML = {
  "firstH1": "Hi, I'm <strong>Julian</strong>.",
  "secondH1": "I'm a software engineer.",
  "tagline": "I love solving problems."
};

const altHTML = {
  "firstH1": "Some people call me <strong>Jules</strong>.",
  "secondH1": "Versed in UX and product management.",
  "tagline": "And I'm told I have a good sense of humor."
};

function displayAltHTML() {
  setTimeout(() => {
    this.innerHTML = altHTML[this.id];
  }, 100);
}

function displayOriginalHTML() {
  setTimeout(() => {
    this.innerHTML = originalHTML[this.id];
  }, 100);
}

headerSpans.forEach(span => span.addEventListener('mouseenter', displayAltHTML));
headerSpans.forEach(span => span.addEventListener('mouseleave', displayOriginalHTML));

// Move background
let lFollowX = 0,
  lFollowY = 0,
  x = 0,
  y = 0,
  friction = 1 / 100;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  const background = document.querySelector('.bg');
  background.setAttribute(
    'style', 
    `-webkit-transorm: ${translate}; 
    -moz-transform: ${translate}; 
    transform: ${translate}`
  );

  window.requestAnimationFrame(moveBackground);
}

window.addEventListener('mousemove', e => {
  let lMouseX = Math.max(-100, Math.min(100, this.innerWidth / 2 - e.clientX));
  let lMouseY = Math.max(-100, Math.min(100, this.innerHeight / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100;
  lFollowY = (10 * lMouseY) / 100;
});

moveBackground();