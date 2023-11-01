$(document).ready(function () {
    $("input#btn_translate").click(translation);

    $("input#language_code").keypress(function(enter) {
          if (enter.which === 13) // 13 is key code for Enter
          {
               translation();
          } 
          
     });
    
    function translation() {
     var lang = $("#language_code").val();
     const full_url = "https://hellosalut.stefanbohacek.dev/?lang=" + lang;
     $.ajax({
          url: full_url,
          method: "GET",
          dataType: "json"
          
     })
     .done (function (data) {
          $("div#hello").text(data.hello);
     })
    }
});
