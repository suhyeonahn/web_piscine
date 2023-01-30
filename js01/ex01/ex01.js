let energy = document.querySelector(".energy");
let bars = document.getElementsByTagName('progress');

function modifEnergy () {
    energy.value -= 10;
    energy.style.setProperty("--c", "red");
}

function boostBars () {
    for (let i = 0; i < bars.length; i++) {
        bars[i].value += 5;
    }
}

setTimeout(modifEnergy, 1500);
setTimeout(boostBars, 5000);