//waits until page ready
$(document).ready(function(){


//comment out some of the code to see the effects on their own
//A+B together...A overrides B
//A+B+C ...B overrides A and uses C. block disappears on each click. fadeTo occurs with first click
//A+B+C+D  behaves as on A+B+C but 0.5 opacity removed by reset(super) button

$(".theButton").click(function(){
    $("#panel .container").siblings().hide();       // A       
});

//hides only panel that's clicked
$(".theButton").click(function(){                   // B
    $(this).hide();
});

$(".theButton").click(function(){                   // B+ this one reveals box after 1000milisec
    $(this).show(1000);
});


//adds a fadeTo to all panels when a panel is clicked

$(".theButton").click(function(){
    $("#panel .container").siblings().fadeTo(1000, .5);     // C
});

// restores all panels to full opacity when reset button clicked

$(".superButton").click(function(){
    $("#panel .container").siblings().fadeTo(1000, 1);      //D
});

//turn panel background black on mouseenter
$(".theButton").mouseenter(function(){
    $(this).addClass("makeBlack");
});

//change to original color on mouseout
$(".theButton").mouseleave(function(){      //mouseleave or mouseout both do same
    $(this).removeClass("makeBlack");
});
});



