document.addEventListener('DOMContentLoaded', function () {
  const openPolicyModalButton = document.getElementById('open-policy-modal');
  const policyModal = document.getElementById('policy-modal');
  const closeModalButton = document.getElementById('close-modal-button');

  // Abre el modal cuando se hace clic en el enlace
  openPolicyModalButton.addEventListener('click', function (e) {
    e.preventDefault();
    policyModal.classList.add('is-active');
  });

  // Cierra el modal cuando se hace clic en el botón de cierre
  closeModalButton.addEventListener('click', function () {
    policyModal.classList.remove('is-active');
  });
});

