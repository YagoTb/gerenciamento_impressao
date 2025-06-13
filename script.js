document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio real do formulário
          if (document.getElementsByName('admin')) {
            window.location.href = './gerenciador/pgdasboard/index.html'; // Redireciona para o dashboard
          } else if (document.getElementsByName('user')) {
            window.location.href = './usuario/index.html'; // Redireciona para o dashboard
          }
      });
    }
  });