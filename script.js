//compteur de message

// Number of messages 
function updateCompteur() {
    var messagesCount = $('.row').length;
    $('#count').text(messagesCount);
}
// updating counter
updateCompteur();

//gestion poubelle
function gestionTrash() {
    $('.trash').each(function() {
        $(this).click(function() {
            this.parentNode.remove();
            //this.parent().style.borderBottom = "1px solid #DADADA";
            updateCompteur();
        });
    })
}
gestionTrash();



//gestion bouton add
$("#btn-add").click(function() {
    console.log("cliqué");
    nouveauMail($("#add-message").val())
});

//creation fonction qui créer une row message avec avatar and co
function nouveauMail(contenuMessage) {
    var aAjouter = `<div class='row'><img class='avatar' src='avatar-2.jpg'><div class='content'><h6>Hortense</h6> <p class='descr'>${contenuMessage}</p> </div><img class='trash' src='trash.png'></div>`;
    $(aAjouter).insertAfter(".new-message-row");
    updateCompteur();
    gestionTrash();
}

//gestion reherche
$("#btn-search").click(
    function() {
        searchAuthor($("#search-message").val());
    }
)

//focntion search
function searchAuthor(toto) {
    $(".row").show();
    toto = toto.toLowerCase();
    var messagesCount = $('.row').length;
    if (toto.length != 0) {
        var varCherche = "";
        $("h6").each(function() {
            varCherche = $(this).text().toLowerCase();
            console.log(varCherche);
            if (varCherche != toto) {
                $(this).parent().parent().fadeOut();
                messagesCount--;

            }
        })
    }
    $("#search-message").val("");
    $('#count').text(messagesCount);



}