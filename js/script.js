const listEmail = ['email1@gmail.com', 'email2@gmail.com', 'email3@gmail.com', 'email4@gmail.com', 'email5@gmail.com', 'email6@gmail.com'];
const neededEmail = prompt("inserire l'email desiderata");
console.log(neededEmail);
console.log(listEmail);

let verification = 0;

for ( let i = 0 ; i < listEmail.length ; i++) {
    if (neededEmail === listEmail[i]){
        verification = 1;
        i += listEmail.length;
    }
};

if (verification){
    console.log("l'email è presente")
    document.querySelector('.container .m-3').innerHTML = "l'email è presente";
} else {
    console.log("l'email non è presente")
    document.querySelector('.container .m-3').innerHTML = "l'email non è presente";
}

//ES dadi
//1 generare due numeri random
const diceResult = [];
    for (let i = 0 ; i < 2 ; i++){
        diceResult[i] = Math.floor(Math.random() * 6 + 1);
        console.log(diceResult[i]);
    }

//2 confrontarli e //3 scrivere a video il vincitore e il risultato

const titleContainer = document.createElement("h4")
const titleWinner = document.createTextNode("il giocatore ha vinto")
const titleLoser = document.createTextNode("il giocatore ha perso")
const titleDraw = document.createTextNode("il giocatore ha pareggiato")

if (diceResult[0] > diceResult[1]){
    console.log("il giocatore ha vinto");
    document.getElementById('winnerLoser').append(titleContainer.appendChild(titleWinner));
} else if (diceResult[0] < diceResult[1]){
    console.log("il giocatore ha perso");
    document.getElementById('winnerLoser').appendChild(titleContainer.appendChild(titleLoser));
} else {
    console.log("il giocatore ha pareggiato");
    document.getElementById('winnerLoser').appendChild(titleContainer.appendChild(titleDraw));
}