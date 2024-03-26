document.addEventListener('DOMContentLoaded', function() {
  // Check if we are on the operator page
  if (window.location.pathname.includes('operator.html')) {
    // Load bookings
    loadBookings();
  } else {
    // Add event listener to booking form
    document.getElementById('bookingForm').addEventListener('submit', handleBooking);
  }
});

function handleBooking(e) {
  e.preventDefault();
  const passengerName = document.getElementById('passengerName').value;
  const destination = document.getElementById('destination').value;

  // Simple booking storage (for demonstration purposes only, real implementation should use a server)
  const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
  bookings.push({ passengerName, destination });
  localStorage.setItem('bookings', JSON.stringify(bookings));

  alert('Booking successful!');
}

function loadBookings() {
  const bookingsElement = document.getElementById('bookings');
  const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');

  bookings.forEach(booking => {
    const div = document.createElement('div');
    div.textContent = `Passenger: ${booking.passengerName}, Destination: ${booking.destination}`;
    bookingsElement.appendChild(div);
  });
}

function handleBooking(e) {
  e.preventDefault();
  const passengerName = document.getElementById('passengerName').value;
  const destination = document.getElementById('destination').value;

  // Simple booking storage (for demonstration purposes only, real implementation should use a server)
  const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
  bookings.push({ passengerName, destination });
  localStorage.setItem('bookings', JSON.stringify(bookings));

  // Redirect to confirmation page
  window.location.href = 'confirmation.html';
}
