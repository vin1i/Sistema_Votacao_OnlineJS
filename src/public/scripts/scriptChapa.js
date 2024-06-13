document.addEventListener("DOMContentLoaded", function () {
    // Fetch the list of elections from the backend
    fetch("http://localhost:5000/api/eleicoes")
        .then((response) => response.json())
        .then((data) => {
            const eleicaoSelect = document.getElementById("eleicao");
            data.forEach((eleicao) => {
                const option = document.createElement("option");
                option.value = eleicao.id;
                option.textContent = eleicao.nome;
                eleicaoSelect.appendChild(option);
            });
        });

    // Handle form submission
    document
        .getElementById("chapaForm")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            const nomeChapa = document.getElementById("nomeChapa").value;
            const eleicao = document.getElementById("eleicao").value;

            fetch("http://localhost:5000/api/chapas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nome: nomeChapa, eleicao_id: eleicao }),
            })
                .then((response) => response.json())
                .then((data) => {
                    alert("Chapa cadastrada com sucesso!");
                    // Clear the form
                    document.getElementById("chapaForm").reset();
                })
                .catch((error) => {
                    console.error("Error:", error);
                    alert("Erro ao cadastrar chapa.");
                });
        });
});