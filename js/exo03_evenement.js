jQuery(function($) {
    //ajout d'un gestionnaire d'événements sur élément d'id h1
    // sur #h1 evenement avec paramètre click et fonction anonyme
    $("#h1").on("click",() => {
        console.log('h1 cliqué');

    });
 });
 
 // deuxième exemple
 jQuery(function($) {
     //avec fonction h&Clicked en paramètre
     //pas de hoistinf avec arrow function
    const h1clicked = () => {
        console.log('h1 cliqué');

    }
    $("#h1").on("click",h1clicked);//asynchrone car év : référence à la fonction
});
