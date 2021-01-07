

var audio = new Audio("https://www.philippe-leoge.com/audio/title1.mp3");

  $('#play-pause-button').on("click",function(){
    if($(this).hasClass('fa-play'))
    {
      $(this).removeClass('fa-play');
      $(this).addClass('fa-pause');
      audio.play();
    }
    else
    {
      $(this).removeClass('fa-pause');
      $(this).addClass('fa-play');
      audio.pause();
    }
  

  audio.onended = function() {
      $("#play-pause-button").removeClass('fa-pause');
      $("#play-pause-button").addClass('fa-play');
    };
});



var audio3 = new Audio("https://www.philippe-leoge.com/audio/title1.mp3");

$('#play-pause-button-3').on("click",function(){
  if($(this).hasClass('fa-play'))
   {
     $(this).removeClass('fa-play');
     $(this).addClass('fa-pause');
     audio3.play();
   }
  else
   {
     $(this).removeClass('fa-pause');
     $(this).addClass('fa-play');
     audio3.pause();
   }
});

audio3.onended = function() {
     $("#play-pause-button-3").removeClass('fa-pause');
     $("#play-pause-button-3").addClass('fa-play');
};

/*
    Carousel
*/

$("#carouselExample").on("slide.bs.carousel", function (e) { 
  var e = $(e.relatedTarget);
  var idx = e.index();
  var itemsPerSlide = 4;
  var totalItems = $(".carousel-item").length;
  console.log("totalitems:"+totalItems);
  console.log("e:"+e);
  console.log("idx:"+idx);if (idx >= totalItems-(itemsPerSlide-1)) {
  var it = itemsPerSlide - (totalItems - idx);
  console.log("it:"+it);
  for (var i=0; i<it; i++) {
   //append slides to endif (e.direction==="left") {
  $('.carousel-item').eq(i).appendTo('.carousel-inner');
  }
  
      }
    });

    $('#carouselExample').carousel({ 
      interval: 2000
});