const container = document.allquerySelector(".container");

document.querySelector(".slider").addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
});



