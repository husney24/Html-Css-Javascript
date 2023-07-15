// Get the hamburger menu element
const hamburgerMenu = document.querySelector('.hamburger-menu');

// Add click event listener to toggle the open class
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('open');
});
