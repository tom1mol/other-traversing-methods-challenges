//waits until page ready
$(document).ready(function(){


//display rgb value of selected panel in reset panel

$(".theButton").click(function(){
    var col = $(this).css("background-color");
    $(".superButton").text(col);
});
});



 