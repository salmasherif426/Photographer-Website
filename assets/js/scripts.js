$(function (){

  // sticky navbar on scroll
  var navBar = $(".navigation"),
      $win = $(window);
  $win.scroll(function () {
  if ($win.scrollTop() > navBar.offset().top) {
      navBar.addClass('sticky');
    }
    if ($win.scrollTop() == 0) {
      navBar.removeClass('sticky');
    }
  });

      // Scroll to top btn
      $(window).scroll(function() {
          if ($(this).scrollTop() >= 200) {
              $('.scroll-to-top').fadeIn(1000);
          } else {
              $('.scroll-to-top').fadeOut(1000);
          }
      });
      $('.scroll-to-top').click(function() {
          $('body,html').animate({
              scrollTop : 0
          }, 500);
      });


    // coloring h4 bg for products section
    var color=['#1a5661','#42b6ba'];
    var x = 0;
      $('.pro-home figcaption, .recomend figcaption, .search-result figcaption').each(function(c){
          $(this).css('background-color',color[x]);
          x++;
          if(x == color.length){
            x = 0;
          }
      });

    var pgHeader = $("header"),
       ;

      // Setting the header height of the page
      pgHeader.height($(window).height());
      $(window).resize(function () {
          pgHeader.height($(window).height());

          pgSlider.each(function () {
              $(this).css('paddingTop', ($(window).height() - $(".bxslider li .data").height()) / 2);
          });
      });
      header.header({
          mode: "fade",
          pager: false,
          controls: true,
          auto: true,
          speed: 1000
      });

});
