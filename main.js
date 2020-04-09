$(document).ready(function(){

  var send = $('i.send');
  var input = $('.parteBassa input');
  var div = $('.contenitoreMsg');
  var inputdiv = $ ('.contInputIcon input')
  send.click(
    function () {
      console.log(input.val());
      div.append('<div class = "msginviato incomune"><span>'+input.val()+'</span><span><i class="fa fa-chevron-down"></i></span></div>');
      input.val("");
      //dopo un secondo ok
      // deve apparire un nuovo msg con un testo sempre uguale (statico) ok
      setTimeout(
        function(){
        div.append('<div class = "msgricevuto incomune"><span>ok</span><span><i class="fa fa-chevron-down"></i></span></div>');
      },1000);

    }
  );
  // filtro contatti
    //gestirte evento su tastiera (oppure su click di bottone di input ricerca)
    inputdiv.keyup(
      function(){
        // salvarmi input utente in campo del filtro (stringa1)
        var testoInserito = inputdiv.val().toLowerCase();

        console.log(testoInserito);
      // selezionare tutti i blocchi di contatto e ciclare tra di essi (each())
       var contatti = $('.primoContatto');

       contatti.each(
         function(){
           //salvo in una var il valore del testo del nome nel contatto (stringa2)
           var nomeContatti = $(this).find('.nomeOrario .staccatevi h6').text().toLowerCase();
           // confronto per vedere se la stringa inserita nell'input è inclusa nel nome del contatto
             //stringa2.includes(stringa1)
             //se l'occorenza è stata trovata lascio il blocco di contatto visibile
             // altrimenti lo rendo non visibile (this)
             if ( nomeContatti.includes(testoInserito)) {
               $(this).show();
              } else {
                 $(this).hide();
             }
         }
       )
      }
    )
    // Cancella messaggio:
    //cliccando sul messaggio appare un menu a tendina
  var freccina = $(".incomune span i");
  var cancella = $(".cancella");
  freccina.click(
    function(){
      $(this).parent("div + .cancella").toggle();
    }

  )
  //   che permette di cancellare il messaggio selezionato
});

//Click sul contatto mostra la conversazione del contatto cliccato
// click sul contatto che ha data-attr che corrisponde a stesso data-attr in chat
// salvo il valore dell’attr e lo usso per dire quale chat è attiva
// è possibile inserire nuovi messaggi per ogni conversazione [attiva]


// son riuascito ad agganciarte l’evento sul “delete” potrò dirgli una roba tipo this.padre.cancella();
// $(‘.right-messages’).on(“click”, “.message”,
// function () {
// alert(“hai cliccato su di me!“);
// $(this).hide();
// }
