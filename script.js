document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Pegue o valor do select
      const select = document.getElementById('tipo_usuario');
      const opcao = select.value;

      if (opcao === 'admin') {
        window.location.href = './gerenciador/pgdasboard/index.html';
      } else if (opcao === 'user') {
        window.location.href = './usuario/index.html';
      } else {
        alert('Selecione um usuário.');
      }
    });
  }
});
