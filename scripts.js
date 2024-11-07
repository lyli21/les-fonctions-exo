

// function appelFonction(_nombre1, _nombre2){
//     let resultat = _nombre1 * _nombre2;
//     return resultat;
// }
//  //alert (appelFonction(2,3)); // ne s'affichera pas//

// let nb1=parseInt(prompt("saisir nb1"));
// let nb2=parseInt(prompt("saisir nb2"));
// let resultat2=appelFonction( nb1, nb2);

// document.write ("<p> le produit de " + nb1 + " par " + nb2 +" est égal à " + resultat2+"</p>");

// document.write('<img src="papillon.jpg" alt ="description image">');


/////////////// Exo 2 : Table de multiplication /////////////////


// function Multiplication(nomb1) {
    
//     for (let i = 1; i <= 10; i++) {
//         let resultat = nomb1 * i;
//       console.log(nomb1 + " x " + i + " = " + resultat);
//     }
//   }
//   //creation d'une variable pour saisie de l'utilisateur//
//   let nomb1 =parseInt(prompt("Entrez un nombre pour voir sa table"));
//  //j'apel function pour afficher la table que l'utilisateur a saisie//
//   Multiplication(nomb1);

  
/////////////// Exo 3 : Compter le nombre de lettres


// let = phrase=prompt("Saisie une phrase");
// let compteurL=0; // le compteur de lettre est initialisé à 0 au commencement 
// let = lettreT=prompt("saisie une lettre a trouvé");
// let aextraire = phrase.substr(0, phrase.length);// lenght pour chercher pour toute la phrase 

// console.log(aextraire); //la lettre qui est extrait saisie par l'utilisateur 

// //création d'une boucle pour compter l'apparition de la lettre 
// for (i=0; i<phrase.length; i++){
//     aextraire= phrase.substr(i,1);

// if (aextraire == lettreT) {// si dans la phrase ya la lettre saisie par l'U 
//     compteurL++; }//alors le compteur compte combien y en a 
// }
// console.log(compteurL);