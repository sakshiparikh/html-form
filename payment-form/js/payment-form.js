$(document).ready(function(){
    $('#editBtn').click(function(){
        $('.edit-box, #save').removeClass('hide');
        $('.total, #editBtn').addClass('hide');
        
    })
    $('#save').click(function(){
        var newValue = $('.edit-box').val();
        $('.total, .total-amt').text('$'+newValue);
        $('.edit-box, #save').addClass('hide');
        $('.total, #editBtn').removeClass('hide');
    })

    $('#paymentForm').submit(function(){
        var inputs = $('input.required');
        for(var i=0;i<inputs.length;i++){
            if($(inputs[i]).val() == ''){
                $(inputs[i]).addClass('error');
                $(inputs[i]).next('div.error').removeClass('hide');
                $(inputs[i]).parent().next('div.error').removeClass('hide');
            }
            else{
                $(inputs[i]).removeClass('error');
                $(inputs[i]).next('div.error').addClass('hide');
                $(inputs[i]).parent().next('div.error').addClass('hide');
            }
        }
    });
    $('.tooltip').tooltipster({
        
        theme: 'tooltipster-punk'
    });
});