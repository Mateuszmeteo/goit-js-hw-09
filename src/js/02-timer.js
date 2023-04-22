// Opisany w dokumentacji
import flatpickr from "flatpickr";
// Dodatkowy import stylów
import "flatpickr/dist/flatpickr.min.css";


const alfa = 'mango'

const btnx = document.querySelector('button')

const logShow = () => {
    console.log(alfa)
}

btnx.addEventListener('click', logShow )

// console.log('mango')