jQuery(function($) {
    //utilisation de la méthode "each"
    //pour ajouter un gestionnaire d'événement
    //sur chaque élément h2
    $("h2").each(function(index) {
        $(this).on("click",() => {
        console.log( "h2", index + 1, "cliqué" );
        })
    });    
 });

