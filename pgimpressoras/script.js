document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.querySelector('.logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function() {
        window.location.href = '../pglogin/index.html';
      });
    }
  });
  // Abrir modal
document.getElementById('btnAdicionarImpressora').onclick = function() {
  document.getElementById('modalAdicionarImpressora').style.display = 'block';
};

// Fechar modal
document.getElementById('btnCancelarImpressora').onclick = function() {
  document.getElementById('modalAdicionarImpressora').style.display = 'none';
  document.getElementById('formAdicionarImpressora').reset();
};

// Adicionar impressora na tabela
document.getElementById('formAdicionarImpressora').onsubmit = function(event) {
  event.preventDefault();
  const nome = document.getElementById('nomeImpressora').value;
  const local = document.getElementById('localImpressora').value;
  const ip = document.getElementById('ipImpressora').value;
  const status = document.getElementById('statusImpressora').value;

  // Adiciona nova linha na tabela
  const tabela = document.querySelector('table tbody');
  const novaLinha = tabela.insertRow();
  novaLinha.insertCell(0).innerText = nome;
  novaLinha.insertCell(1).innerText = local;
  novaLinha.insertCell(2).innerText = ip;
  novaLinha.insertCell(3).innerText = status;

  // Limpa e fecha o modal
  document.getElementById('formAdicionarImpressora').reset();
  document.getElementById('modalAdicionarImpressora').style.display = 'none';
};