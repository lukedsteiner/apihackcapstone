function watchForm() {
    $('.js-birth-date').submit(event => {
      event.preventDefault();
      const month = $('#js-month').val();
      const day = $('#js-day').val();
      console.log(month, day);
    });
  }

$(watchForm);