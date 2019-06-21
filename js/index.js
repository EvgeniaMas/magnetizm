(function() {


var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
      function onYouTubeIframeAPIReady(container,id) {
        player = new YT.Player(container, {
          videoId: id,
          events: {
            'onReady': onPlayerReady            
          }
        });
      }
      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

  var youtube = document.querySelectorAll( ".youtube" );  
  for (var i = 0; i < youtube.length; i++) {    
    var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
    var image = new Image();
        image.src = source;
        image.addEventListener( "load", function() {
          youtube[ i ].appendChild( image );
        }( i ) );    
        youtube[i].addEventListener( "click", function() {       
         var id = this.dataset.embed;
             var container = (this).getAttribute('id')+"container"; 
                onYouTubeIframeAPIReady(container, id);

        } );  
  };
 
} )();  

// anchor to secon_block
var $page = $('html, body');
$('#magnetizm_button').click(function() {
    $page.animate({
        scrollTop: $('#magnetizm').offset().top
    }, 2000);
    return false;
});


$(document).ready(function() {
      $("a.gallery, a.iframe").fancybox();
    
url = $("a.modalbox").attr('href').replace("for_spider","content2");
$("a.modalbox").attr("href", url);  
$("a.modalbox").fancybox(
{                  
      "frameWidth" : 400,   
      "frameHeight" : 400 
                  
});

      $("a.gallery2").fancybox(
      {            
"padding" : 20, 
"imageScale" : false, 
      "zoomOpacity" : false,  
      "zoomSpeedIn" : 1000, 
      "zoomSpeedOut" : 1000,  
      "zoomSpeedChange" : 1000,
      "frameWidth" : 700,  
      "frameHeight" : 600, 
      "overlayShow" : true, 
      "overlayOpacity" : 0.8,  
      "hideOnContentClick" :false, 
      "centerOnScroll" : false 
        
      });
    
    $("#menu a, .anim").hover( function() {
      $(this).animate({"paddingLeft" : "10px"}, 300)},
    function() {$(this).animate({"paddingLeft" : "0"}, 300);
});

$("a.iframe").fancybox(
{                  
      "frameWidth" : 800,  
      "frameHeight" : 600 
                  
});    
});

//animation of percents
var number= $("#number");
var number_block= $('#problems_block');
var number_animation = null;
function scrollTracking(){
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $(number_block).offset().top;
    var eh = $(number_block).outerHeight();

    if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
        if (number_animation == null || number_animation == false) {
            calcCount(); 
        }
        number_animation = true;
    } else {

        number_animation = false;
    }
}

$(window).scroll(function(){
    scrollTracking();
});
    
$(document).ready(function(){ 
    scrollTracking();
});


function calcCount() {
    for (var i = 0; i < $(number).length; i++) {
        var end = $(number).eq(i).text();
        countStart(end, i);

    }
}

function countStart(end, i) {
    var start = 0;
    var interval = setInterval(function () {
        $(number).eq(i).text(++start);
        if (start == end) {
            clearInterval(interval);
        }
    }, 50);
}
