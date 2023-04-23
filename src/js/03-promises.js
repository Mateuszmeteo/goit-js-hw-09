import Notiflix from 'notiflix';

const formEl = document.querySelector('.form')


formEl.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)
  const firstDelay = parseInt(formData.get('delay'))
  const step = parseInt(formData.get('step'))
  const amount = parseInt(formData.get('amount'))

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, firstDelay + i * step)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
  }
})

function createPromise(position, delay) {
  // console.log(position, delay)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}















// createPromise()
// // createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
// console.log('mango')