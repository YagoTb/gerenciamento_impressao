document.addEventListener('DOMContentLoaded', function() {
    // Botão sair (mantém)
    const logoutBtn = document.querySelector('.logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function() {
        window.location.href = '../pglogin/index.html';
      });
    }
  
    // Botão Gerar Relatório em PDF
    const btnGerar = document.querySelector('.btn-blue');
    if (btnGerar) {
      btnGerar.addEventListener('click', function() {
        // Coletar dados da tabela
        const rows = Array.from(document.querySelectorAll('table tbody tr'));
        let body = rows.map(row => {
          return Array.from(row.querySelectorAll('td')).map(td => td.innerText);
        });
  
        // Cabeçalho
        const header = [['Data', 'Usuário', 'Impressora', 'Páginas', 'Cópias']];
  
        // Criar PDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
  
        // Adiciona título
        doc.setFontSize(16);
        doc.text('Relatório de Impressões', 14, 18);
  
        // Adiciona tabela (simples)
        let startY = 28;
        let colX = [14, 50, 90, 130, 170];
        // Cabeçalho
        header[0].forEach((col, i) => {
          doc.text(col, colX[i], startY);
        });
        // Linhas
        body.forEach((row, rowIdx) => {
          row.forEach((cell, i) => {
            doc.text(cell, colX[i], startY + 10 + rowIdx * 10);
          });
        });
  
        // Baixar PDF
        doc.save('relatorio.pdf');
      });
    }
  });