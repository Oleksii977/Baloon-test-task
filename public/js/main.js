const numberSpinner = (function() {
  $('.ns-button').click(function() {
    let btn = $(this);
    let oldValue = btn.closest('.number-spinner').find('input').val().trim();
    let newVal = 0;

    if (btn.attr('data-dir') === 'up') {
      newVal = parseInt(oldValue) + 1;
    } else {
      if (oldValue > 1) {
        newVal = parseInt(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    btn.closest('.number-spinner').find('input').val(newVal);
  });
})();