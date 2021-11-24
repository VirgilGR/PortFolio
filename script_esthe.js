
$(document).ready(function(){
    // /
    // * Smooth scrolling to page anchor on click
    // /
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 3000);
            }
        }
    });

    $("body").fadeIn(1000);


    $("#tel").click(function(){
        $("#tel span").toggle(1000);
    });


    // $(".fade").mousein(function(){
    //     $(".fade img").css("opacity" , "0.9");
    // });

    $(window).scroll(function(){
  var scrolledFromTop = $(window).scrollTop() + $(window).height();
  $(".appear").each(function(){
    var distanceFromTop = $(this).offset().top;
    if(scrolledFromTop >= distanceFromTop+100){
      console.log("hello");
      var delaiAnim = $(this).data("delai");
      $(this).delay(delaiAnim).animate({
        opacity:1
      });
    }
  });
});

    $(".icon").click(function(){
      $(".topnav #myLinks").toggle(500);
    });

    $(".topnav").hide();
     
    // faire apparaitre #text1
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 75 ) {
                $('.topnav').fadeIn(300);
                
            } else {
                $('.topnav').fadeOut(300);
            }
      });
    });


    

   
});









