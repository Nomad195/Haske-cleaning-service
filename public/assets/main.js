$(document).ready( function (){
                
    $('.book').on('click', changesty1);
   
        
});
    


function changesty1(){
    $('#f1').css('display', 'block');
    $('#form1').css('display', 'block');
    $('#form2').css('display', 'block');
    $('body').css('background-color', 'orangered');
    $('.fas').css('margin-top', '10px');
    $('.centralized').css('display', 'block');
    $('.mother').css('display', 'none');
}

