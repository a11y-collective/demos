
$(document).ready(function() {

    $('.expandable').on('click', function(e) {

        e.preventDefault();

        let $this = $(this);

        $this.attr('aria-expanded', function (i, attr) {
            return attr === 'true' ? 'false' : 'true'
        });

        const hiddenAttr = $this.next().attr('hidden');

        if ( typeof hiddenAttr === 'undefined' ) {
            $this.next().attr('hidden','');
        } else {
            $this.next().removeAttr( hiddenAttr );
        }

    });

});
