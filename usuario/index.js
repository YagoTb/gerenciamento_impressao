// Alternar Seções no menu lateral e ativar visualmente o link
document.querySelectorAll('.sidebar ul li a').forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active de todas as seções e links
    document.querySelectorAll('.user-dashboard section').forEach((sec) => {
      sec.classList.remove('active');
    });
    document.querySelectorAll('.sidebar ul li a').forEach((link) => {
      link.classList.remove('active');
    });

    // Adiciona active na seção e link clicado
    const target = item.dataset.target;
    document.getElementById(target).classList.add('active');
    item.classList.add('active');
  });
});

// Gráfico de Impressão com Chart.js
new Chart(document.getElementById('userPrintChart'), {
  type: 'line',
  data: {
    labels: ['1ª semana', '2ª semana', '3ª semana', '4ª semana'],
    datasets: [{
      label: 'Quantidade de Impressão',
      data: [20, 30, 25, 35],
      fill: true,
      borderColor: '#0057A3',
      backgroundColor: 'rgba(0, 87, 163, 0.5)'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  }
});

// Filtrar relatório pessoal pelo nome do arquivo
document.querySelector("#reports input[type='text']").addEventListener("input", function (e) {
  const filter = e.target.value.toLowerCase();
  document.querySelectorAll("#reports tbody tr").forEach(function (row) {
    row.style.display = row.textContent.toLowerCase().includes(filter) ? '' : 'none';
  });
});

// Exportar CSV do relatório
document.querySelector("#reports button").addEventListener("click", function () {
  let csv = "Data,Arquivo,Impressora,Número de Páginas\n";

  document.querySelectorAll("#reports tbody tr").forEach(function (row) {
    let cells = Array.from(row.children).map(function (cell) {
      return `"${cell.textContent.trim()}"`; // aspas para evitar problemas com vírgulas
    });
    csv += cells.join(",") + "\n";
  });

  let blob = new Blob([csv], { type: 'text/csv' });
  let url = URL.createObjectURL(blob);
  let a = document.createElement("a");

  a.href = url;
  a.download = "relatorios.csv";
  a.click();
  URL.revokeObjectURL(url);
});

// Enviar formulário de impressão
document.querySelector("#print-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const file = document.querySelector("#print-form #file").files[0];
  const copies = document.querySelector("#print-form input[type='number']").value.trim();
  const duplex = document.querySelector("#print-form input[type='checkbox']").checked;
  const color = document.querySelectorAll("#print-form input[type='checkbox']")[1].checked;
  const range = document.querySelector("#print-form input[type='text']").value.trim();
  const printer = document.querySelector("#print-form select").value.trim();

  console.log("Dados para envio:");
  console.log({ file, copies, duplex, color, range, printer });

  alert("Dados enviados para a impressão.");
});

// Pode implementar funções para popular "Minhas Impressões" e "Alertas" se desejar
