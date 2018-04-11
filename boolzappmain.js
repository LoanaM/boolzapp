$(document).ready(function(){

  $('#inputcell').keypress(function(e){
    if(e.which==13){
      var NewMessage = $(this).val();
      var ora = new Date();

      if (NewMessage) {
        $('.rightcontainer').append(
          '<div class="messages rightgreen">' + NewMessage + '<span class="time">' + ora.getHours() + ':' + ora.getMinutes() + '</span>' + '</div>' + '<div class="clearfix">' + '</div>'
        );
        $(this).val('');
      }
    }
  });

  $('#button').click(function(){
    var researched = $('#cerca').val()
    var string = $('#nome2').html();
    console.log(string)
    if (string.search(researched)>=0) {
      $('#nome2').parent().parent().removeClass('noresult');
      $('.noresult').hide();

    }
  })





});
