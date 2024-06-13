document.addEventListener("DOMContentLoaded", function () {
  // Fetch and populate the dropdowns
  fetch("http://localhost:5000/api/eleicoes")
    .then((response) => response.json())
    .then((data) => {
      const eleicaoDropdown = document.getElementById("eleicaoId");
      data.forEach((eleicao) => {
        const option = document.createElement("option");
        option.value = eleicao.id;
        option.text = eleicao.nome;
        eleicaoDropdown.add(option);
      });
    })
    .catch((error) => console.error("Erro ao buscar eleições:", error));

  fetch("http://localhost:5000/api/candidatos")
    .then((response) => response.json())
    .then((data) => {
      const candidatoDropdown = document.getElementById("candidatoId");
      data.forEach((candidato) => {
        const option = document.createElement("option");
        option.value = candidato.id;
        option.text = candidato.nome;
        candidatoDropdown.add(option);
      });
    })
    .catch((error) => console.error("Erro ao buscar candidatos:", error));
});

document
  .getElementById("associarForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const eleicaoId = document.getElementById("eleicaoId").value;
    const candidatoId = document.getElementById("candidatoId").value;

    fetch("http://localhost:5000/api/associar-candidato-eleicao", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ eleicaoId, candidatoId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert("Erro ao associar candidato: " + data.error);
        } else {
          alert("Candidato associado com sucesso!");
        }
      })
      .catch((error) => {
        console.error("Erro ao associar candidato:", error);
        alert(
          "Erro ao associar candidato. Verifique o console para mais informações."
        );
      });
  });