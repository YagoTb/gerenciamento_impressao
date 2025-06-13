// Gráfico de impressões por mês (usando Chart.js)
const ctx = document.getElementById("monthlyChart").getContext("2d");

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Impressões',
      data: [5, 10, 15, 20, 18, 25],
      borderColor: '#4a90e2',
      backgroundColor: 'rgba(74, 144, 226, 0.1)',
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const logoutBtn = document.querySelector('.logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      window.location.href = '../pglogin/index.html';
    });
  }
});

// Exibe o modal ao clicar no botão "Adicionar Usuário"
document.getElementById('btnAdicionarUsuario').onclick = function() {
  document.getElementById('modalAdicionarUsuario').style.display = 'block';
};

// Fecha o modal ao clicar em "Cancelar"
document.getElementById('btnCancelar').onclick = function() {
  document.getElementById('modalAdicionarUsuario').style.display = 'none';
  document.getElementById('formAdicionarUsuario').reset();
};

// Ao submeter o formulário, adiciona o usuário à tabela
document.getElementById('formAdicionarUsuario').onsubmit = function(event) {
  event.preventDefault();
  const nome = document.getElementById('nomeUsuario').value;
  const email = document.getElementById('emailUsuario').value;

  // Adiciona nova linha na tabela
  const tabela = document.getElementById('tabelaUsuarios').getElementsByTagName('tbody')[0];
  const novaLinha = tabela.insertRow();
  novaLinha.insertCell(0).innerText = nome;
  novaLinha.insertCell(1).innerText = email;

  // Limpa e fecha o modal
  document.getElementById('formAdicionarUsuario').reset();
  document.getElementById('modalAdicionarUsuario').style.display = 'none';
};