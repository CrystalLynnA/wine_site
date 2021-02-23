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
    $(window).scroll(function(){
        console.log("fade in working")
        $('.grape_img').each( function (i){
            $(this).animate({'opacity':'1'},1500);
        })
    })
})



