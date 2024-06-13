document.addEventListener("DOMContentLoaded", function () {
  // Fetch the list of chapas from the backend
  fetch("http://localhost:5000/api/chapas")
    .then((response) => response.json())
    .then((data) => {
      const chapaSelect = document.getElementById("chapa");
      data.forEach((chapa) => {
        const option = document.createElement("option");
        option.value = chapa.id;
        option.textContent = chapa.nome;
        chapaSelect.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Erro ao obter as chapas:", error);
    });

  // Fetch the list of cargos from the backend
  fetch("http://localhost:5000/api/cargos")
    .then((response) => response.json())
    .then((data) => {
      console.log("Cargos recebidos:", data); // Adicione esta linha para depuração
      const cargoSelect = document.getElementById("cargo");
      data.forEach((cargo) => {
        const option = document.createElement("option");
        option.value = cargo.id;
        option.textContent = cargo.cargo;
        cargoSelect.appendChild(option);
      });
      if (cargoSelect.options.length === 0) {
        console.warn("Nenhum cargo encontrado");
      }
    })
    .catch((error) => {
      console.error("Erro ao obter os cargos:", error);
    });

  // Fetch the list of candidatos from the backend
  fetch("http://localhost:5000/api/candidatos")
    .then((response) => response.json())
    .then((data) => {
      const candidatoSelect = document.getElementById("candidato");
      data.forEach((candidato) => {
        const option = document.createElement("option");
        option.value = candidato.id;
        option.textContent = candidato.nome;
        candidatoSelect.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Erro ao obter os candidatos:", error);
    });

  // Handle form submission
  document
    .getElementById("candidatoChapaForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const chapa = document.getElementById("chapa").value;
      const cargo = document.getElementById("cargo").value;
      const candidato = document.getElementById("candidato").value;

      console.log("Dados enviados:", { chapa, cargo, candidato }); // Verificar os dados enviados

      fetch("http://localhost:5000/api/candidatoChapas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chapa_id: chapa,
          cargo_id: cargo,
          candidato_id: candidato,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            console.error(
              "Erro ao cadastrar candidato na chapa:",
              data.error
            );
            alert("Erro ao cadastrar candidato na chapa.");
          } else {
            alert("Candidato cadastrado na chapa com sucesso!");
            // Clear the form
            document.getElementById("candidatoChapaForm").reset();
          }
        })
        .catch((error) => {
          console.error("Erro ao cadastrar candidato na chapa:", error);
          alert("Erro ao cadastrar candidato na chapa.");
        });
    });
});