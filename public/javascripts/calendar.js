
document.addEventListener("DOMContentLoaded", function() {
  $(document).on('click', '.class-day-lookup', (e) => {
      e.preventDefault();
      let classDay = e.target.getAttribute('data-day');
      $.get()
  })
});

    // append buttons for each Day
        // on click each button, queries db for classes at that facility on that day
    //append cla
