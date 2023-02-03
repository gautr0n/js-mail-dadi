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