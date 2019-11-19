//Asking the user for an input!
var user = prompt("Inserisci qui il tuo cognome:");
//Creating an arbritary name list:
var list = ["Previtali","Gelfi","Tirelli","Bianchi","Palvarini"];
//Adding user to that list:
list.push(user);
console.log("Lista non ordinata: " + list);
//Sorting the new list:
var ordered = list.sort();
console.log("Lista ordinata: " + ordered);
//Now the hardest part: where is the user's element?
var i = 0;
while (list[i] != user) {
    i++;
}
console.log("Elemento inserito dall'utente: "+ list[i]);
console.log("L'elemento risulterà in posizione: " + i);
