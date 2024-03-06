document.getElementById('reservationForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  let user = JSON.parse(localStorage.getItem('user'));
  const userEmail = user.email;

  const spaceId = document.getElementById('space').value;
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  const startTime = document.getElementById('startTime').value;
  const endTime = document.getElementById('endTime').value;

  const reservationData = {
    email: userEmail,
    space_id: spaceId,
    start_date: startDate + ' ' + startTime,
    end_date: endDate + ' ' + endTime,
    is_pattern: 0
  };

  console.log(JSON.stringify(reservationData));
  
  fetch('http://localhost/2EvReservasAulas/services/serviceBookings/bookingsService.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reservationData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Ocurrió un error al realizar la reserva.');
    }
    return response.json();
  })
  .then(data => {
    if (data.message === "Reserva procesada correctamente") {
      console.log('Reserva realizada:', data.message);

    } else {
      console.error('Error al procesar la reserva:', data.message);

    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
