// Opisany w dokumentacji
import flatpickr from "flatpickr";
// Dodatkowy import stylów
import "flatpickr/dist/flatpickr.min.css";


console.log('manog')

flatpickr('#datetime-picker')
const inputSelect = document.querySelector('#datetime-picker')




// const actualDate = new Date()

// console.log(actualDate.)

flatpickr (selector, options) 
    const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

  if (defaultDate > inputSelect.value) {
    return alert('x')
  }




///////////////////////////////////////////////..........//////////////////////////////////////





// const alfa = 'mango'

// const btnStart = document.querySelector('button')
// const inputValue = document.querySelector('#datetime-picker')

// const logShow = () => {
//     console.log(inputValue.value)
// }

// btnStart.addEventListener('click', logShow )

// console.log('mango')