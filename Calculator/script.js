const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
  const buttonText = event.target.innerText;

  switch (buttonText) {
    case 'AC':
      display.value = '';
      break;
    case 'C':
      display.value = display.value.slice(0, -1);
      break;
    case '←':
      if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
      }
      break;
    case '=':
      try {
        const result = eval(display.value);
        display.value = result;
      } catch (error) {
        display.value = 'Error';
      }
      break;
    default:
      display.value += buttonText;
  }
}

