//Маска для телефона
// $(function() {
//     $("input[type='tel']").mask('+7(999) 999-99-99');   
// });



$("input[type='email']").on('blur', function () {
  let email = $(this).val();
  
  if (email.length > 0
  && (email.match(/.+?\@.+/g) || []).length !== 1) {        
  }

});

$(document).ready(function() { 
    $("#contacts_form").submit(function(){ 
        var form = $(this); 
        var error = false; 
        form.find('input.required_data').each( function(){ 
            if ($(this).val() == '') { 
                form.find('.error').text('Зaпoлнитe поля!');
                error = true; 
            }
        });
        if (!error) { 
            var data = form.serialize(); 
            $.ajax({ 
                type: 'POST', 
                url: 'call.php', 
                dataType: 'json', 
                data: data,
                beforeSend: function(data) { 
                    form.find('button[type="submit"]').attr('disabled', 'disabled'); 
                },
                success: function(data){ 
                     if (data['error']) { 
                         alert(data['error']);
                     } 

                    else {                                     
                     $("input").each(function () {
                       $(this).data("defvalue", this.value);
                    });  

                   $("#send_letter").addClass('sent_letter')

                  $("#contacts_form").css("display", "none");
                  $("#sent_message").css("display", "block"); 


                    setTimeout(      
                   function() {  
                   $("#send_letter").removeClass('sent_letter') 
                   $("#sent_message").css("display", "none");      
                   $("#contacts_form").css("display", "block");
                   
                       }, 4000        
                   );                                       
                           
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) { 
                    alert(xhr.status); 
                    alert(thrownError);
                },
                complete: function(data) {
                    form.find('button[type="submit"]').prop('disabled', false); 
                }
                          
                 });
        }
        return false;
    });
});
