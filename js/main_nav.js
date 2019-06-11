if(document.documentElement.clientWidth < 768) {
          $('#up_panel').addClass('open_menu');
          $('#down_panel').addClass('open_menu');
         $('.collapse').css('display', 'block');
         $('.collapse').addClass('in');
       
      } 
$('.navbar-toggle').on('click', function(){
var menu = $('.collapse');
    if (menu.hasClass('in')){     
       $(menu).addClass('in');        
        $(menu).css('display', 'none');
    }
    else{    
       $(menu).removeClass('in');         
        $(menu).css('display', 'block');
    }
        
});



 var text = 'Привет! Я вижу, что ты ищешь';
  var text2 = 'кого-то, чтобы ';
  var text3= 'создать свой сайт';
  var text4= '.';
  var delay = 100; 
  var elem = $('#message'); 
  var elem2 = $('#message2');
  var elem3 = $('#message3');
  var elem4 = $('#message4');
  var print_text = function(text, elem, delay){  
    if(text.length > 0) {    
      elem.append(text[0]);      
      setTimeout(      
        function() {        
          print_text(text.slice(1), elem, delay); 
        }, delay        
      );      
    }    
  }
  print_text(text, elem, delay);
   setTimeout(      
        function() {        
          print_text(text2, elem2, delay);          
        }, 3500
  );
  setTimeout(      
        function() {        
          print_text(text3, elem3, delay);          
        }, 5000
  ); 
    setTimeout(      
        function() {        
          print_text(text4, elem4, delay);          
        }, 7000
  ); 

