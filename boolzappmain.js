$(document).ready(function(){

  $('#inputcell').keypress(function(e){
    if(e.which==13){
      var NewMessage = $(this).val();
      var ora = new Date();

      if (NewMessage) {
        $('.messagescontainer').append(
          '<div class="messages rightgreen">' + NewMessage + '<span class="time">' + ora.getHours() + ':' + ora.getMinutes() + '</span>' + '</div>' + '<div class="clearfix">' + '</div>'
        );
        $(this).val('');
        window.setTimeout(function(){
          $('.messagescontainer').append(
            '<div class="messages leftwhite">' + 'Ok!' + '<span class="time">' + ora.getHours() + ':' + ora.getMinutes() + '</span>' + '</div>' + '<div class="clearfix">' + '</div>'
          );
        },1000);
      }
    }
  });

  $('#cerca').keyup(function(){
      var researched = $('#cerca').val()
      for (var i = 1; i < 9; i++) {
        var string = $('#' + i).html();
        if (string.search(researched)>=0) {
          $('#' + i).parent().parent().show();
        }
        else {
          $('#' + i).parent().parent().hide();
        }
      }
  });

  $('.friendstripe').click(function(){
    $('.messagescontainer').removeClass('display')
    var morg = $(this).children().children('h3').html()
    console.log(morg)
    $('#' + morg).parent().addClass('display')
  })

});
