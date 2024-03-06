document.getElementById('reservationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Obtener el correo electrónico del usuario del localStorage
  let user = JSON.parse(localStorage.getItem('user'));
  const userEmail = user.email;

  // Obtener los valores del formulario
  const spaceId = document.getElementById('space').value;
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  const startTime = document.getElementById('startTime').value;
  const endTime = document.getElementById('endTime').value;

  // Crear el objeto con los datos de la reserva
  const reservationData = {
    email: userEmail,
    space_id: spaceId,
    start_date: startDate + ' ' + startTime,
    end_date: endDate + ' ' + endTime,
    is_pattern: 0
  };

  console.log(JSON.stringify(reservationData));
  
  // Enviar los datos de la reserva al servidor
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
    // Verificar si la reserva se procesó correctamente
    if (data.message === "Reserva procesada correctamente") {
      console.log('Reserva realizada:', data.message);
      // Aquí puedes hacer lo que necesites después de una reserva exitosa
    } else {
      console.error('Error al procesar la reserva:', data.message);
      // Aquí puedes manejar el caso en el que la reserva no pudo ser procesada correctamente
    }
  })
  .catch(error => {
    console.error('Error:', error);
    // Aquí puedes mostrar un mensaje de error al usuario
  });
});
