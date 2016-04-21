
$(document).ready(function(){

    /*--- Display information box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);



    });

    /*--- Hide information box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

    $(".listForm").show();
});