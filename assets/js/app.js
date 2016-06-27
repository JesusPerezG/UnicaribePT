
  $(function() {
    $( "#datepicker" ).datepicker();

    $("#lang-es").click(function (){
        req.setLocale('es');
    });

    $("#lang-en").click(function () {
        req.setLocale('en');
    });

    $(".dropdown-button").dropdown();

    $('.modal-trigger').leanModal()
    $(".dropdown-button").dropdown();

  });


  /*function getNextSequenceValue(sequenceName){
   var sequenceDocument = db.sequence.findAndModify({
   query:{_id: sequenceName },
   update: {$inc:{sequence_value:1}},
    new:true
    });
   return sequenceDocument.sequence_value;
 }*/
