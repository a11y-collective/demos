
$(document).ready(function() {

    $('.expandable').on('click', function(e) {

        e.preventDefault();

        let $this = $(this);

        $this.attr('aria-expanded', function (i, attr) {
            return attr === 'true' ? 'false' : 'true'
        });

        //$this.next().attr('aria-hidden', function (i, attr) {
        //    return attr === 'true' ? 'false' : 'true'
        //});

        let hiddenAttr = $this.next().attr('hidden');

        if ( hiddenAttr === undefined ) {
            $this.next().attr('hidden','');
        } else {
            $this.next().removeAttr( hiddenAttr );
        }

    });

});