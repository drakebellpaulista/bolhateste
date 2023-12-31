const addBtn = document.querySelector('.add-user-btn');
const popup = document.querySelector('.add-user-popup');
const closePopupBtn = document.querySelector('.close-popup-btn');
const confirmBtn = document.querySelector('.add-user-confirm-btn');
const newUsernameInput = document.getElementById('new-user-input');
const userIconsContainer = document.querySelector('.user-icons');
const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const settingsBtn = document.querySelector('.settings-btn');

addBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closePopupBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

confirmBtn.addEventListener('click', () => {
  const newUsername = newUsernameInput.value;
  if (newUsername) {
    const newUserIcon = document.createElement('img');
    newUserIcon.classList.add('user-icon');
    newUserIcon.src = `https://i.pinimg.com/564x/05/d1/ae/05d1aec9bfb192a091e1ce91f70e6d7f.jpg`;
    newUserIcon.alt = `@${newUsername}`;
    newUserIcon.addEventListener('click', () => {
      // Handle click on the new user icon
    });
    userIconsContainer.appendChild(newUserIcon);
    popup.style.display = 'none';
  }
});

let currentSlide = 0;
slideContainer.addEventListener('click', (event) => {
  const slideWidth = slides[0].clientWidth;
  const clickPosition = event.clientX - slideContainer.getBoundingClientRect().left;
  if (clickPosition < slideWidth / 2) {
    // Clicked on the left half of the slide, go to the previous slide
    currentSlide = Math.max(0, currentSlide - 1);
  } else {
    // Clicked on the right half of the slide, go to the next slide
    currentSlide = Math.min(slides.length - 1, currentSlide + 1);
  }
  const offset = -currentSlide * slideWidth;
  slideContainer.style.transform = `translateX(${offset}px)`;
});

settingsBtn.addEventListener('click', () => {
  // Handle settings button click
});
