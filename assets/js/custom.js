// Rollover headers

const header = document.querySelector('#header');
const headerSpans = header.querySelectorAll('span');
const profileImageDiv = document.querySelector('#profile-pic');
const originalImageHTML = '<img class="profile-pic" src="images/profile.png" />';

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

const altImageHTML = {
  "firstH1": '<img class="profile-pic" src="images/profile-jules.png" />',
  "secondH1": '<img class="profile-pic" src="images/profile-outdoors.png" />',
  "tagline": '<img class="profile-pic" src="images/profile-humor.png" />'
};

function displayAltHTML() {
  setTimeout(() => {
    this.innerHTML = altHTML[this.id];
    profileImageDiv.innerHTML = altImageHTML[this.id];
  }, 100);
}

function displayOriginalHTML() {
  setTimeout(() => {
    this.innerHTML = originalHTML[this.id];
    profileImageDiv.innerHTML = originalImageHTML;
  }, 100);
}

headerSpans.forEach(span => span.addEventListener('mouseenter', displayAltHTML));
headerSpans.forEach(span => span.addEventListener('mouseleave', displayOriginalHTML));