// Este código JavaScript se utiliza para activar el menú hamburguesa en dispositivos pequeños
document.addEventListener('DOMContentLoaded', function () {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
          el.addEventListener('click', () => {
              const target = el.dataset.target;
              const $target = document.getElementById(target);

              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
          });
      });
  }
});

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
          "content": `Analiza el siguiente texto y responde con un emoji feliz, triste, cansado o neutral: "${descripcion}"`
        }
      ],
      "max_tokens": 10,
      "temperature": 0.5

    }),
  })
    .then(response => {return response.json()})
    .then(response => {
      // Mostrar el emoji resultado en el modal
      var resultadoModal = document.getElementById('resultado-modal');
      resultadoModal.innerHTML = '<h3>Hoy te sientes: ' + response.choices[0].message.content + '</h3>';
      //console.log(response);
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