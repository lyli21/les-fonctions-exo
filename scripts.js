function appelFonction(_nombre1, _nombre2){
    let resultat = _nombre1 * _nombre2;
    return resultat;
}
 //alert (appelFonction(2,3)); // ne s'affichera pas//

let nb1=parseInt(prompt("saisir nb1"));
let nb2=parseInt(prompt("saisir nb2"));
let resultat2=appelFonction( nb1, nb2);

document.write ("<p> le produit de " + nb1 + " par " + nb2 +" est égal à " + resultat2+"</p>");