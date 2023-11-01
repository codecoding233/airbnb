$(document).ready(function () {
    $("input#btn_translate").click(function() {
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

    });
});
