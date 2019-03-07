// Rollover headers

const header = document.querySelector('#header');
const headerSpans = header.querySelectorAll('span');
const profileImage = document.querySelector('.profile-pic');
const originalImageSrc = "images/profile.png";

const originalHTML = {
  "firstH1": "Hi, I'm <strong>Julian</strong>.",
  "secondH1": "I'm a software engineer.",
  "tagline": "I love solving problems across the spectrum of software development."
};

const altHTML = {
  "firstH1": "Some people call me <strong>Jules</strong>.",
  "secondH1": "And I also love the outdoors.",
  "tagline": "And I've been told by many that I have a pretty good sense of humor."
};

const altImageSrc = {
  "firstH1": "images/profile-jules.png",
  "secondH1": "images/profile-outdoors.png",
  "tagline": "images/profile-humor.png"
};

function displayAltHTML() {
  setTimeout(() => {
    this.innerHTML = altHTML[this.id];
    profileImage.src = altImageSrc[this.id];
  }, 100);
}

function displayOriginalHTML() {
  setTimeout(() => {
    this.innerHTML = originalHTML[this.id];
    profileImage.src = originalImageSrc;
  }, 100);
}

headerSpans.forEach(span => span.addEventListener('mouseenter', displayAltHTML));
headerSpans.forEach(span => span.addEventListener('mouseleave', displayOriginalHTML));