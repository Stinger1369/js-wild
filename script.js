// Declare and define three variables using a numerical value
// demander a l'utilisateur un chiffre
var chiffre1 = prompt("Entrez un chiffre");
var chiffre2 = prompt("Entrez un chiffre");
var chiffre3 = prompt("Entrez un chiffre");
// * If the three variables are equal, display "The three variables are the same" in the console
if (chiffre1 == chiffre2 && chiffre2 == chiffre3) {
    console.log("Les trois variables sont identiques");
}
// * If only two of the variables are equal, display "Two of the variables are the same" in the console
else if (chiffre1 == chiffre2 || chiffre2 == chiffre3 || chiffre1 == chiffre3) {
    console.log("Deux des variables sont identiques");
}
// * If the variables are all different display "all variables are different" in the console
else {
    console.log("Les trois variables sont différentes");
}

