$(document).ready(function() {

    $('#amount').on( "change", function(e) {
        let amount = parseInt($("#amount").val());
        let price = 10;

        total =  amount * price;
        $('#total').text(total);
        $('#total').val(total);
    });

    function validateEmail(email) {
        if ( email === '' ) {
            return('empty');
        }
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function calcTotal( amount, price) {
        return amount * price;
    }

});


