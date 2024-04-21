// Opisany w dokumentacji
import flatpickr from "/flatpickr";
// Dodatkowy import stylów
import "/flatpickr/dist/flatpickr.min.css";

const startButton = document.querySelector("[data-start]");
startButton.setAttribute("disabled", "");

document.addEventListener("DOMContentLoaded", function () {
  // Inicjuj Flatpickr dla pola tekstowego o id datetime-picker
  flatpickr("#datetime-picker", {
    dateFormat: "Y-m-d",
    enableTime: true, // Jeśli chcesz również wybrać czas
  });
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates < this.defaultDate) {
      window.alert("Please choose a date in the future");
    } else {
      startButton.removeAttribute("disabled", "");
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

startButton.addEventListener("click", options.onClose);
