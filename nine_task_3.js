(function (){
    $(document).ready(function() {
        $('h3').each(function() {
            let nextDiv = $(this).next('div');
            if (nextDiv.length && nextDiv.prev().is(this)) {
                nextDiv.insertBefore(this);
            }
        });
    });
})();