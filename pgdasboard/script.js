// Integração dinâmica com Chart.js para Dashboard

document.addEventListener("DOMContentLoaded", () => {
  const chartDataSets = {
    semanal: {
      labels: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      data: [50, 100, 75, 150, 120, 200, 80]
    },
    mensal: {
      labels: [
        "Semana 1", "Semana 2", "Semana 3", "Semana 4"
      ],
      data: [400, 650, 500, 700]
    },
    anual: {
      labels: [
        "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"
      ],
      data: [1200, 950, 1300, 1100, 1400, 1250, 1350, 1500, 1200, 1450, 1300, 1550]
    }
  };

  const ctx = document.getElementById("printChart");
  if (!ctx) return;

  let chartInstance = null;

  function renderChart(type) {
    const { labels, data } = chartDataSets[type];
    if (chartInstance) chartInstance.destroy();

    chartInstance = new Chart(ctx.getContext("2d"), {
      type: "line",
      data: {
        labels,
        datasets: [{
          label: 'Impressões',
          data,
          borderColor: "#0052cc",
          backgroundColor: "rgba(0,82,204,0.07)",
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: "#0052cc",
          fill: false
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }

  // Inicializa com semanal
  renderChart("semanal");

  // Troca de filtro
  document.querySelectorAll(".filters button").forEach(btn => {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      const filtro = this.textContent.trim().toLowerCase();
      if (filtro === "semanal") renderChart("semanal");
      else if (filtro === "mensal") renderChart("mensal");
      else if (filtro === "anual") renderChart("anual");
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const logoutBtn = document.querySelector('.logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      window.location.href = '../pglogin/index.html';
    });
  }
});
document.getElementById('btnVerTodosAlertas').onclick = function() {
  document.getElementById('modalAlertas').style.display = 'flex';
};

document.getElementById('btnFecharModalAlertas').onclick = function() {
  document.getElementById('modalAlertas').style.display = 'none';
};