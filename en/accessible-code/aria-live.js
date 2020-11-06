$(document).ready(function() {

    $('#amount').on( "change", function(e) {
        let amount = parseInt($("#amount").val());
        let price = 10;

        total =  amount * price;
        $('#total').text(total);
        $('#total').val(total);
    });

    function calcTotal( amount, price) {
        return amount * price;
    }

});


