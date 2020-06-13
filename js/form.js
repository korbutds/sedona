var formButton = document.querySelector('.hotel-btn');
var bookingForm = document.querySelector('form');

formButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    bookingForm.classList.toggle('form-close');
    bookingForm.classList.toggle('form-open');
})
