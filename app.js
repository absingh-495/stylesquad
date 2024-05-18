// const container = document.querySelector(".container");

// document.querySelector(".slider").addEventListener('input', (e) => {
//     container.style.setProperty('--position', ${e.target.value}%);
// })

// ${e.target.value}% error at line no. 4

const container = document.querySelector(".container");

document.querySelector(".slider").addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
});
