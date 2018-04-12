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
        window.setTimeout(function(){
          $('.rightcontainer').append(
            '<div class="messages leftwhite">' + 'Ok!' + '<span class="time">' + ora.getHours() + ':' + ora.getMinutes() + '</span>' + '</div>' + '<div class="clearfix">' + '</div>'
          );
        },1000);
      }
    }
  });

  $('#cerca').keypress(function(e){
    if(e.which==13){
      var researched = $('#cerca').val()
      for (var i = 1; i < 7; i++) {
        var string = $('#' + i).html();
        if (string.search(researched)>=0) {
          $('#' + i).parent().parent().removeClass('noresult');
        }
      }
      $('.noresult').hide();
    }
  });

});
