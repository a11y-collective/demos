$(document).ready(function() {

    $('button').on('click', function(e) {

        $('#errors').html('<h3 class="error-list">There are errors in your form</h3><ul class="error-list-ul">');

        if ( $('#name').val() === '' ) {
            $('.error-list-ul').append('<li><a href="#name">Please enter your name.</a></li>');
            $('#name-error').html('Your name is missing.');
            error = true;
        }
        if ($('#email').val() === '') {
            $('.error-list-ul').append('<li><a href="#email">Please enter your email address.</a></li>');
            $('#email-error').html('Your email address is missing</a>.');
            error = true;
        }

        if ( ! error ) {
            $('#errors').html('');
            $('#name-error').html('');
            $('#email-error').html('');
        }

        document.getElementById("errors").focus();
        return false;

    });

});