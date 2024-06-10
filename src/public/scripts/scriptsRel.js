document.addEventListener("DOMContentLoaded", function () {
  populateElectionDropdown(); // Popula o dropdown de eleições para os relatórios
});

function populateElectionDropdown() {
  const elections = [
    { id: 1, nome: "Eleição 2024" },
    { id: 2, nome: "Eleição 2025" },
  ];

  const dropdowns = document.querySelectorAll('select[id^="eleicao"]');
  dropdowns.forEach((dropdown) => {
    elections.forEach((eleicao) => {
      const option = document.createElement("option");
      option.value = eleicao.id;
      option.text = eleicao.nome;
      dropdown.appendChild(option);
    });
  });
}

function generateInitialReport() {
  console.log("Relatório de inicialização gerado");
}

function generateFinalReport() {
  console.log("Relatório de finalização gerado");
}

function exportToPDF() {
  console.log("Relatório exportado para PDF");
}

function changePassword() {
  console.log("Senha alterada");
}
