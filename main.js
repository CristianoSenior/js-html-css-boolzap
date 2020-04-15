$(document).ready(function(){

  var send = $('i.send');
  var aereo = $('.fas.fa-paper-plane.sostituto');
  var inputdiv = $ ('.contInputIcon input');
  var x = $('.parteBassa span');


  $("#tastiera").keypress(
    function(e) {
      if(e.which == 13) {
        tastierozza ()

      }
});
  x.click(

    function () {
      var input = $('.parteBassa input');
      if (input.val()!=""){



      var msg = input.val();
      var div = $('.boxMittenteMessaggi.active');
      console.log(input.val());
      // Handlebars inizio
      var source = $("#senior-template").html();
      var template = Handlebars.compile(source);
      var context = { "segnaposto1": msg,"segnaposto2":msginviato };
      var html = template(context);
      // div.each(
      //   function () {
      div.find('.contenitoreMsg').append( html );
      input.val("");



      setTimeout(
        function(){
          var msg = "ok";
          var context = { "segnaposto1": msg,"segnaposto2":msgricevuto };
          var html = template(context);
        div.find('.contenitoreMsg').append(html);
      },1000);
      }
    });
      // dopo un secondo ok
      // deve apparire un nuovo msg con un testo sempre uguale (statico) ok
    var input = $('.parteBassa input');

    input.focus(
      function (){
        var send = $('.fas.fa-microphone.send');
        var aereo = $('.fas.fa-paper-plane.sostituto');
        send.hide();
        aereo.show();
      });
      input.blur(
        function (){
          var send = $('.fas.fa-microphone.send');
          var aereo = $('.fas.fa-paper-plane.sostituto');
          aereo.hide();
          send.show();
        });



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
  var freccina = $(".arrow");
  var cancella = $(".cancella");
  // freccina.click(
  //   function(){
  //     $(this).parent().siblings('.cancella').toggle();
  //   }
  //
  // )
  //   che permette di cancellare il messaggio selezionato
  $('.contenitoreMsg').on('click', '.arrow',
    function(){
      console.log(this);
      $(this).parent().siblings('.cancella').toggle();
    }
  )
  $(".contenitoreMsg").on('click','.Cmsg',
    function(){
      console.log(this);
      // $(this).parents(".incomune").html('<i class="fas fa-ban"></i>quetso messaggio è stato cancellato').css('background','rgb(82, 83, 82)').css('color','rgb(234, 241, 239)');
      // $(this).parents(".incomune").replaceWith('<div class="messaggiocancellato"><i class="fas fa-ban"></i>quetso messaggio è stato cancellato</div>');
      $(this).parents(".incomune").html('<i class="fas fa-ban"></i>quetso messaggio è stato cancellato').addClass('messaggiocancellato');
    }
  )



//Click sul contatto mostra la conversazione del contatto cliccato
// click sul contatto che ha data-attr che corrisponde a stesso data-attr in chat
// salvo il valore dell’attr e lo usso per dire quale chat è attiva
// è possibile inserire nuovi messaggi per ogni conversazione [attiva]

$('.primoContatto').click(
  function(){
    var data = $(this).data('indice');
    console.log(data);
    $('.primoContatto').removeClass('active selezionatoCol');
    $(this).addClass('active selezionatoCol');
    $('.boxMittenteMessaggi').removeClass('active');
    $('.boxMittenteMessaggi').eq(data).addClass('active');

  }
);

function tastierozza () {
  var input = $('.parteBassa input');
  if (input.val()!=""){



  var div = $('.boxMittenteMessaggi.active');
  console.log(input.val());
  // div.each(
  //   function () {
  div.find('.contenitoreMsg').append('<div class = "msginviato incomune"><span>'+input.val()+'</span><span><i class="fa fa-chevron-down arrow"></i></span><div class="cancellamsginviato cancella"><span class="Cmsg">cancella messaggio</span></div></div>');

  input.val("");


  setTimeout(
    function(){
    div.find('.contenitoreMsg').append('<div class = "msgricevuto incomune"><span>ok</span><span><i class="fa fa-chevron-down arrow"></i></span><div class="cancellamsgricevuto cancella"><span class="Cmsg">cancella messaggio</span></div></div>');
  },1000);
  }
}




});
// }
// );
// son riuascito ad agganciarte l’evento sul “delete” potrò dirgli una roba tipo this.padre.cancella();
// $(‘.right-messages’).on(“click”, “.message”,
// function () {
// alert(“hai cliccato su di me!“);
// $(this).hide();
// }
