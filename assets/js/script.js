const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mim = dateToday.getMinutes();
    let se = dateToday.getSeconds();

    if(hr < 10) hr = "0" + hr;
    if(mim < 10) mim = "0" + mim;
    if(se < 10) se = "0" + se;

    horas.textContent = hr;
    minutos.textContent = mim
    segundos.textContent = se
})