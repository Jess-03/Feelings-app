// Agregar evento click al botón "Enviar" para mostrar el modal
document.getElementById('mostrar-modal').addEventListener('click', function () {
  var modal = document.getElementById('modal');
  modal.classList.add('is-active');

  // Obtener la descripción del usuario
  var descripcion = document.getElementById('descripcion').value;

  // Enviar la descripción a la API de OpenAI (reemplazar la API_KEY)
  fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer API_KEY',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({

      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "user",
          "content": `Analiza el siguiente texto y responde con un emoji: "${descripcion}"`
        }
      ],
      "max_tokens": 10,
      "temperature": 0.5

    }),
  })
    .then(response => response.json())
    .then(response => {
      // Mostrar el emoji resultado en el modal
      var resultadoModal = document.getElementById('resultado-modal');
      resultadoModal.innerHTML = '<p>Emoji resultado: ' + response.choices[0].content + '</p>';
    })
    .catch(error => console.error('Error:', error));
});

// Cerrar el modal al hacer clic en el fondo o el botón de cierre
document.querySelectorAll('.modal-background, .modal-close').forEach(function (element) {
  element.addEventListener('click', function () {
    var modal = document.getElementById('modal');
    modal.classList.remove('is-active');
  });
});