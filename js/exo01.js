
//Première utilisation possible de jQuery :
// fonction anonyme qui me permet d'isoler le code
//mais aussi d'attendre que le dom soit chargé
//en plus, et par convention, le premier argument
//de la fonction anonyme est $ qui est un alias de jQuery
jQuery(function($) {
    console.log(jQuery());
    console.log($);
    console.log(document.getElementById("h1"));

});

//Deuxième utilisation de Jquery
//lui donner en premier paramètre une chauine de caractere
//qui respecte la syntaxe des sélecteurs css
//jQuery renvoie un ou plusieurs éléments du DOM
//enrichis par des propriétés qui sont stockées
//dans le prototype
jQuery(function($) {
    const h1 = $("#h1");//Sélecteur
    console.log(h1);
    h1.hide(2000).show(2000);


//troisième utilisation de jQuery
//En lui donnant comme premier paramètre une chaine de caractères
//qui respecte la syntaxe html

    const h2 = $("<h2>Salut</h2>").appendTo("body");
//     setTimeout(function(){
//         h2.text("ca va ?");
//     }, 2000);
 });

   




