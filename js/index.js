// static carousels
$('.multi-item-carousel').carousel({
  interval: false
});  
$('#carousel_slider').carousel({
         interval : false
});
$('#carousel_cases_mobile').carousel({
  interval : false
});
$('#carousel_swipe').carousel({
  interval : false
});
// close big case
$(".back_to_covers").click(function(){
   $("#carousel_slider").hide(2000);
   var items = $("#carousel_slider > div.carousel-inner").find(".item");
   
    $(items).each(function(){
           $(this).removeClass("active");           
    });

    $("html, body").animate({scrollTop:0}, 300);
    if(document.documentElement.clientWidth > 767) {
     $("#project_page").css("overflow", "hidden");
     $("#mobiles_footer").css("display", "none");     
     $(".desktop_cover_wrapper").fadeIn(2000);  
     $(".grey_back_cover").css("opacity", 1);
     $('#wrapper_projects').css('background-color', 'transparent'); 
     }
     else{
       $("#mobile_cases").show(2000); 
       $("#project_page").css("overflow", "visible");
       $('#wrapper_projects').css('background-color', 'transparent');  
     }   
});
// cloning project covers 
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first'); 
  }
  next.children(':first-child').clone().appendTo($(this));  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
      
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));

  }   

});   
  
   $(document).ready(function() {
     var mql = window.matchMedia("(orientation: portrait)");
   var margin_wrapper = $('header').height(); 
   var margin_footer = $('.footer').height(); 
    $('.wrapper').css('padding-top', margin_wrapper);
   });
function relocate(){
   $('#send_order').css('border-color', '#26f1bc');

    setTimeout(      
        function() {        
           window.location.href='contacts.html';  
        }, 500
     );   
}
$(".cover_desktop").click(function(e){
   var clickId = $(e.target).attr('id');
   if(!clickId){
   	clickId = $(e.target).parent().parent().find('img').attr('id');
     if(!clickId) {
     	clickId = "green";
     }
   	
   }    
    $(".desktop_cover_wrapper").fadeOut();
    full_item_case(clickId); 
   

});
$(".mobile_slider_closed").click(function(e){ 

  $("html, body").animate({scrollTop:0}, 300);
   var clickId = $(e.target).attr('id');
   $("#mobile_cases").hide(2500);
    full_item_case(clickId); 
});      
function full_item_case(clickId){
if(clickId== 'pure'|| clickId=='purem'){
$('#case_pure').addClass('active');
}
if(clickId== 'river' || clickId=='riverm'){
$('#case_river').addClass('active');  
}
if(clickId== 'fluger' || clickId=='flugerm'){
  $('#case_fluger').addClass('active');
}
if(clickId== 'green' || clickId=='greenm'){
  $('#case_green').addClass('active');
}
$('#project_page').css('overflow', 'visible');
$('#carousel_slider').fadeIn(4500); 
$('#mobiles_footer').css('display', 'block');  
$(".grey_back_cover").css("opacity", 0); 
$('.wrapper').css('background-color', '#fff'); 
     setTimeout(      
        function() {         
          wow = new WOW();
          wow.init();    

        }, 1000
     ); 
}
// change header color on scroll
var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 30){
        $(".navbar-default").css({"background": "rgba(255,255,255, 0.8)"});
        $("header").css({"background": "transparent"});
        $("#main_page_navigation .navbar-default").css({"background": "transparent"});
        
        $("header").css({"min-height": "5rem"});
    }
    if(1 > scrolled){
        $(".navbar-default").css({"background": "transparent"});
        $("header").css({"min-height": "1rem"});
        if(document.documentElement.clientWidth > 767) {  
        $(".about_page_menu").css({"background": "#fff"});
        }  
    }

}
// preview toggle class active on service slider
$('#carousel_swipe').on('slid.bs.carousel', function(){
   var next_index = index+1;
   var previous_index = index+1;
   var index = $('.carousel-inner .item.active').index();
   
   $('#thumbcarousel_previews .thumb').each(function(){
     $('#thumbcarousel_previews .thumb').removeClass('active');
   });  

   $('#thumbcarousel_previews .thumb[data-slide-to="'+index+'"]').addClass('active');
   
});
// swipe turn on for mobile cover and service mobile sliders
  $(document).ready(function() {  
       $("#carousel_cases_mobile").swiperight(function() {         
          $(this).carousel('prev');  
          });  
       $("#carousel_cases_mobile").swipeleft(function() {  
          $(this).carousel('next');  
     });  
  });  

$(document).ready(function() {  
       $("#carousel_swipe").swiperight(function() {

          $(this).carousel('prev');  
          
          });  
       $("#carousel_swipe").swipeleft(function() {  
          $(this).carousel('next');  
     });  
}); 
$('.backtotop').click(function(){
       $('html, body').animate({scrollTop:0}, 0);

     setTimeout(      
        function() {  


          var wow = new WOW();
          wow.init();      
        }, 1000
     ); 
 
});
$(".desktop_control").click(function(e){ 
   var a = $(".item.cover_desktop.active");
    $(a).css("opacity", 0);
    var frase = $(a).find(".desktop_cover_title");
     $(frase).each(function(){
           $(this).css("display", "none");          
    }); 
   setTimeout(      
        function() {        
          $(a).css("opacity", 1);           
           $(frase).each(function(){
           $(this).css("display", "block");          
         });         
        }, 1500
  ); 
});
$(document).ready(function() {
 $(".vertical-tab>.vertical-tab-content.active").css("top", 0);


 $(".vertical-tab-menu>.list-group>a").click(function(e) {
 e.preventDefault();
 $(this).siblings('a.active').removeClass("active");
 $(this).addClass("active");
 var index = $(this).index();
 $(".vertical-tab>.vertical-tab-content").removeClass("active").css("margin-top", "6rem").css("max-height", "100px");
 $(".vertical-tab>.vertical-tab-content").eq(index).addClass("active");

   $('.vertical-tab>.vertical-tab-content.active').stop().animate({
        marginTop: 0,
        maxHeight: 600
        },

        1500);

 });
});

$("#send_order").on("mouseover", function(){       
  $(".order_button_lines").css("background-color", '#26f1bc');
});
$("#send_order").on("mouseout", function(){        
  $(".order_button_lines").css("background-color", '#000');
});
$(".desktop_cover_title").on("mouseover", function(){
	$(this).parent().find('img').css("transform", "scale(0.9)");
});

$(".desktop_cover_title").on("mouseout", function(){
     $(this).parent().find('img').css("transform", "scale(1)"); 
});
$(".carousel-control").on("click", function(e){
  $(e.target).css("border-color", "#02eeda");
  $(e.target).css("background-color", "#02eeda");     
  $(e.target).css("color", "#fff");
  setTimeout(      
        function() { 
          $(e.target).css("border-color", "#d5d5d5");       
          $(e.target).css("background-color", "transparent");     
          $(e.target).css("color", "#000");
         
        }, 800
  ); 
});
$(".carousel-control").on("mouseover", function(){
  $(this).css("border-color", "#02eeda");
});

$(".carousel-control").on("mouseout", function(){        
  $(this).css("border-color", "#d5d5d5");
});
$(".button_full_slider").on("click", function(){
  $(".button_full_slider").css("color", "#02eeda");
});
$(".contacts_form_submit").on("click", function(){
  $(this).css("border-color", "#26f1bc");
});


 
 