
  $(function() {
    $( "#datepicker" ).datepicker();

    $("#lang-es").click(function (){        
        req.setLocale('es');
    });

    $("#lang-en").click(function () {
        req.setLocale('en');
    });

    $(".dropdown-button").dropdown();

  });
