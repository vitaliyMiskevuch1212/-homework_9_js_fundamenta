(function (){
    $(document).ready(function() {
        const checkboxes = $('input[type="checkbox"]');
        let checkedCount = 0;

        checkboxes.on('change', function() {
            if ($(this).is(':checked')) {
                checkedCount++;
            } else {
                checkedCount--;
            }

            if (checkedCount >= 3) {
                checkboxes.attr('disabled', true);
            } else {
                checkboxes.attr('disabled', false);
            }
        });
    });
})();