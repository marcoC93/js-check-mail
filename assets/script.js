//definisco l'array creando una variabile
var indirizzi_mail = ["pippo@mail.com" , "paperino@mail.com" , "pluto"];

//chiedo all'utente di digitare il suo indizzo indirizzi_mail
var mail_utente = prompt (" scrivi il tuo indirizzo mail") ;
var mail_trovata = false ;

for (i = 0 ; i < indirizzi_mail.length ; i++) {
    if (mail_utente == indirizzi_mail[i]) {
    mail_trovata = true ;

}

}


if (mail_trovata == true) {
    alert ("sei nella lista")

}
else {
    alert("non sei nella lista")
}
console.log(mail_trovata);
console.log(indirizzi_mail[i]);
