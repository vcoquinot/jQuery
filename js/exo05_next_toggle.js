jQuery(function($) {
    //utilisation de la méthode "each"
    //pour ajouter un gestionnaire d'événement
    //sur chaque élément h2

    //faire en sorte qu'au click sur un h2,
    // le paragraphe suivant soit affiché ou caché
    $("h2").each(function(index) {
        $(this).on("click",() => {
        console.log( "h2", index + 1, "cliqué" );
        //prendre élément suivant
        $(this).next().toggle(1000);
        })
    });    
 });
