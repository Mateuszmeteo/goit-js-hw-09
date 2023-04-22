
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btnStart = document.querySelector('button[data-start]')
const btnStop = document.querySelector('button[data-stop]')
const bgdColor = document.querySelector('body')

let timerSet = null;

btnStart.addEventListener('click', () => {
    timerSet = setInterval(() => {
        console.log(getRandomHexColor())
        bgdColor.style.backgroundColor = getRandomHexColor()
        btnStart.disabled = true;
    }, 1000)
})

btnStop.addEventListener('click', () => {
    clearInterval(timerSet);
    btnStart.disabled = false;
});



// console.log(btnStart)
// console.log(btnStop)
// console.log(bgdColor)


/// /// 


// const colorStart = () => {
//     setTimeout(() => {
//        bgdColor.style.backgroundColor = getRandomHexColor()
//     },1000);
// }

// btnStart.addEventListener('click', colorStart)





// const colorStart = () => {
//     setTimeout(() => {
//        document.body.style.backgroundColor = getRandomHexColor()
//     },1000);
// }




// 
// btnStart.addEventListener('click' () = {
//     setTimeout(() => {
//         bgdColor.style.backgroundColor = getRandomHexColor()
//     }, 1000);
    

// })




