// $(document).ready(function(){
//     // Activate Carousel
//     $("#myCarousel").carousel();
//     // Enable Carousel Indicators
//     $(".item1").click(function(){
//         $("#myCarousel").carousel(0);
//     });
//     $(".item2").click(function(){
//         $("#myCarousel").carousel(1);
//     });
//     $(".item3").click(function(){
//         $("#myCarousel").carousel(2);
//     });
//     $(".item4").click(function(){
//         $("#myCarousel").carousel(3);
//     });
//     // Enable Carousel Controls
//     $(".left").click(function(){
//         $("#myCarousel").carousel("prev");
//     });
//     $(".right").click(function(){
//         $("#myCarousel").carousel("next");
//     });
// });
// $(document).ready(function(){
//     $('button').click(function(){
//         console.log("WORKING JS")
//         alert("You have clicked a button!");
//     })
// });
$(document).ready(function(){
    // $(".parallax").animate({'opacity':'1'},1000);       
    $(window).scroll(function(){
        $('.main_box').each( function (i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 250;
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1000); 
            }; 
        });
    });
});


