$(document).ready(function() {

    $('#amount').on( "change", function() {
        const amount = parseInt( $("#amount").val() );
        const price  = 10;
        const result = $('#total');

        let total  =  amount * price;

        result.text( total );
        result.val( total );
    });

});
