$(document).ready(function(){

  var send = $('i.send');
  var input = $('.parteBassa input');
  var div = $('.contenitoreMsg');
  var inputdiv = $ ('.contInputIcon input')
  send.click(
    function () {
      console.log(input.val());
      div.append('<div class = "msginviato"><span>'+input.val()+'</span></div>');
      input.val("");
      //dopo un secondo ok
      // deve apparire un nuovo msg con un testo sempre uguale (statico) ok
      setTimeout(
        function(){
        div.append('<div class = "msgricevuto"><span>ok</span></div>');
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









});
