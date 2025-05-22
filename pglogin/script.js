document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio real do formulário
        window.location.href = '../pgdasboard/index.html'; // Redireciona para o dashboard
      });
    }
  });