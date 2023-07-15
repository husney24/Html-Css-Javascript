const calendar = document.querySelector('.calendar');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const monthYear = document.querySelector('.month-year');
const daysContainer = document.querySelector('.days');

const date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

// Event listeners for previous and next buttons
prevBtn.addEventListener('click', showPrevMonth);
nextBtn.addEventListener('click', showNextMonth);

// Show current month and year
showCalendar();

// Display previous month
function showPrevMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  showCalendar();
}

// Display next month
function showNextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  showCalendar();
}

// Display calendar for the current month
function showCalendar() {
  monthYear.textContent = `${getMonthName(currentMonth)} ${currentYear}`;
  daysContainer.innerHTML = '';

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  for (let i = 1; i <= totalDaysInMonth; i++) {
    const day = document.createElement('div');
    day.classList.add('day');
    day.textContent = i;

    if (i === date.getDate() && currentMonth === date.getMonth() && currentYear === date.getFullYear()) {
      day.classList.add('current-day');
    }

    daysContainer.appendChild(day);
  }

  // Add event markers to specific days (e.g., for events or appointments)
  const eventDays = [5, 10, 15];
  eventDays.forEach(day => {
    const eventMarker = document.createElement('div');
    eventMarker.classList.add('event-marker');
    const targetDay = daysContainer.querySelector(`.day:nth-child(${day})`);
    targetDay.appendChild(eventMarker);
  });
}

// Get the name of the month based on the month index
function getMonthName(monthIndex) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[monthIndex];
}

