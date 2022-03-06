jQuery(document).ready(function(){
    "use strict";
    $('#slider-carousel').caroufredsel({
        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            items:1,
            duration:500,
            pauseonHover:true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:1
            },
            height:"variable"
        },
        pagination:{
            container:".sliderpager",
            pageanchorBuilder:false
        },
    });
    $(window).scroll(function(){
        var top=$(window).scrollTop();
            if(top>=60){
               $("header").addClass('secondary');
            }
            else 
                if($("header").hasClass('secondary')){
                    $("header").removeClass('secondary');
                }


            
    });
    

});
document.getElementById("button").onclick = function(){
    document.getElementById("butt").innerHTML = "Thank You.Please check your email for confirmation and for the payment details.";
    document.getElementById("button").style.display="none";

}
