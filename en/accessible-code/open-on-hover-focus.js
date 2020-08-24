function toggleDialog(id)  {

    (function(style) {
        style.display = style.display === 'none' ? 'block' : 'none';
    })
    (document.getElementById(id).style);
}

function showChoice(form) {
    alert("Thanks for your choice, your form has been submitted.");
    form.submit()
}
