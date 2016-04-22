
$(document).ready(function(){

    /*--- Display information box ---*/
    $(".button").click(function(){
      $(".overlay").fadeIn(1000);



    });

    /*--- Hide information box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

    $(".listForm").show();
});