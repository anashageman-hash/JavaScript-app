let juisteAntwoord;
let timer;
let tijd = 10;

nieuweSom();
    // timer starten
function startTimer() {
    clearInterval(timer);
    tijd = 10;

    timer = setInterval(function() {
        tijd--;

        document.getElementById("time").innerText = tijd;
        document.getElementById("progress").style.width = (tijd * 10) + "%";

        if (tijd <= 0) {
            clearInterval(timer);
            document.getElementById("resultaat").innerText = "Tijd is op!";
            nieuweSom();
        }
    }, 1000);
}
     // nieuwe somen maken
function nieuweSom() {
    let a;
    let b;
    let soort = random(4);

    if (soort == 1) {
        a = random(20);
        b = random(20);
        juisteAntwoord = a + b;
        document.getElementById("som").innerText = a + " + " + b;
    } 
    else if (soort == 2) {
        a = random(20);
        b = random(a);
        juisteAntwoord = a - b;
        document.getElementById("som").innerText = a + " - " + b;
    } 
    else if (soort == 3) {
        a = random(10);
        b = random(10);
        juisteAntwoord = a * b;
        document.getElementById("som").innerText = a + " x " + b;
    } 
    else {
        b = random(10);
        juisteAntwoord = random(10);
        a = b * juisteAntwoord;
        document.getElementById("som").innerText = a + " / " + b;
    }

    maakAntwoorden();
    startTimer();
}
    // antwoorden maken
function maakAntwoorden() {
    let knoppen = document.querySelectorAll("button");
    let antwoorden = [juisteAntwoord];

    while (antwoorden.length < 4) {
        let fout = juisteAntwoord + random(10) - 5;

        if (fout > 0 && !antwoorden.includes(fout)) {
            antwoorden.push(fout);
        }
    }
    // antwoorden schudden
    antwoorden.sort(function() {
        return Math.random() - 0.5;
    });

    for (let i = 0; i < knoppen.length; i++) {
        knoppen[i].innerText = antwoorden[i];
    }
}
    // antwoord controleren
function checkAntwoord(knop) {
    let antwoord = parseInt(knop.innerText);

    if (antwoord == juisteAntwoord) {
        document.getElementById("resultaat").innerText = "Goed!";
        updateScore(1);
    } else {
        document.getElementById("resultaat").innerText = "Fout!";
    }

    setTimeout(function() {
        document.getElementById("resultaat").innerText = "";
        nieuweSom();
    }, 1000);
}
    // random getal genereren
function random(max) {
    return Math.floor(Math.random() * max) + 1;
}
    // naar volgende pagina
function startGame() {
    window.location.href = "rekenrocket.html";
}
    // score bijhouden
let score = 0;

function updateScore(punten) {
    score = score + punten;
    document.getElementById("score").innerText = score;
}