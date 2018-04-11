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
    for (var i = 1; i < 6; i++) {
      num = i
      var string = $('#' + num).html();
      console.log(string)
      if (string.search(researched)>=0) {
        $('#' + num).parent().parent().removeClass('noresult');
      }
    }
    $('.noresult').hide();
  })

});
