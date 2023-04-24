// Opisany w dokumentacji
import flatpickr from "flatpickr";
// Dodatkowy import stylów
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';


// console.log('manog')

// flatpickr('#datetime-picker',)






const startBtn = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
let timerId = null;


startBtn.setAttribute('disabled', true);

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
  
  console.log(convertMs(2000));// {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000));// {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000));// {days: 0, hours: 6 minutes: 42, seconds: 20}
  

  const addLeadingZero = value => String(value).padStart(2, 0);

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] < new Date()) {
        Notiflix.Notify.failure('Please choose a date in the future');
        return;
      }
      startBtn.removeAttribute('disabled');
  
      const showTimer = () => {
        const now = new Date();
        localStorage.setItem('selectedData', selectedDates[0]);
        const selectData = new Date(localStorage.getItem('selectedData'));
  
        if (!selectData) return;
  
        const diff = selectData - now;
        const { days, hours, minutes, seconds } = convertMs(diff);
        daysRef.textContent = days;
        hoursRef.textContent = addLeadingZero(hours);
        minutesRef.textContent = addLeadingZero(minutes);
        secondsRef.textContent = addLeadingZero(seconds);
  
        if (
          daysRef.textContent === '0' &&
          hoursRef.textContent === '00' &&
          minutesRef.textContent === '00' &&
          secondsRef.textContent === '00'
        ) {
          clearInterval(timerId);
        }
      };
  
      const onClick = () => {
        if (timerId) {
          clearInterval(timerId);
        }
        showTimer();
        timerId = setInterval(showTimer, 1000);
      };
  
      startBtn.addEventListener('click', onClick);
    },
  };
  
  flatpickr('#datetime-picker', { ...options });





///////////////////////////////////////////

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };

//////////////////////////////////////////










// const inputSelect = document.querySelector('#datetime-picker')



// const actualDate = new Date()

// console.log(actualDate.)

// flatpickr (selector, options) 
//     const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//       console.log(selectedDates[0]);
//     },
//   };

//   if (defaultDate > inputSelect.value) {
//     return alert('x')
//   }




///////////////////////////////////////////////..........//////////////////////////////////////





// const alfa = 'mango'

// const btnStart = document.querySelector('button')
// const inputValue = document.querySelector('#datetime-picker')

// const logShow = () => {
//     console.log(inputValue.value)
// }

// btnStart.addEventListener('click', logShow )

// console.log('mango')