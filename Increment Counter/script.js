// Get the elements
const decrementButton = document.querySelector('.decrement');
const incrementButton = document.querySelector('.increment');
const countElement = document.querySelector('.count');

// Set initial count
let count = 0;
countElement.textContent = count;

// Decrement button event listener
decrementButton.addEventListener('click', () => {
  if (count > 0) {
    count--;
    countElement.textContent = count;
  }
});

// Increment button event listener
incrementButton.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
});
