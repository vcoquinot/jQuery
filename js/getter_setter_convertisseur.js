jQuery(function($) {
    //utilisation d'une méthode (ici val())
    //comme getter puis comme setter

    $("#euro").on("input", function() {
        //console.log('"on change');
        //val utilisé ocmme setter puis comme getter
        if(isNaN($(this).val())){
            console.log('Entrez un nombre');
            $(this).val("");//remise à 0
        } else {
            $("#chf").val($(this).val() * 1.09);
        }  
    });
    
    $("#chf").on("input", function() {
        //console.log('"on change');
        //val utilisé ocmme setter puis comme getter
        if(isNaN($(this).val())){
           console.log('Entrez un nombre');
           $(this).val("");//remise à 0
         } else {
           $("#euro").val($(this).val() / 1.09);
         }  
    });
 });
