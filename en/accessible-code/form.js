$(document).ready(function() {

    $('button').on('click', function(e) {
        let error      = false;
        let nameError  = '';
        let emailError = '';
        let termsError = '';

        const notifications   = $('#notifications');
        const nameErrorDescr  = $('#name-error');
        const emailErrorDescr = $('#email-error');
        const termsErrorDescr = $('#terms-error');

        nameErrorDescr.html('');
        emailErrorDescr.html('');
        termsErrorDescr.html('');

        const name = $('#name');
        if ( name.val() === '' ) {
            error     = true;
            nameError = '<li><a href="#name">Please enter your name.</a></li>';
            nameErrorDescr.html('Your name is missing.');
        }

        const email = validateEmail( $('#email').val() );
        if ( email === 'empty') {
            error      = true;
            emailError = '<li><a href="#email">Please enter your email address.</a></li>';
            emailErrorDescr.html('Your email address is missing.');
        } else if ( email === false ) {
            error      = true;
            emailError = '<li><a href="#email">Please enter a valid email address.</a></li>';
            emailErrorDescr.html('Your email address is not valid.');
        }

        if ( $('#terms').prop("checked") === false ) {
            error      = true;
            termsError = '<li><a href="#terms">Please agree to the terms.</a></li>';
            termsErrorDescr.html('Please agree to the terms.');
        }

        if ( ! error ) {
            notifications.html(
                '<h3 class="notification-ok"><span role="alert">Thank you for subscribing!</span></h3>');
        } else {
            notifications.html(
                '<h3 class="notification-error"><span role="alert">There are errors in your form</span></h3>' + '<ul class="error-list-ul">' + nameError + emailError + termsError + '</ul>');
        }

        document.getElementById("notifications").focus();
        return false;
    });

    function validateEmail(email) {
        if ( email === '' ) {
            return('empty');
        }
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

});
