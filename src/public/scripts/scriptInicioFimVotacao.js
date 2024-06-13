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
        .getElementById("votacaoForm")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            const eleicao = document.getElementById("eleicao").value;
            const dataHoraInicio =
                document.getElementById("dataHoraInicio").value;
            const dataHoraFim = document.getElementById("dataHoraFim").value;

            fetch("http://localhost:5000/api/votacoes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    eleicao_id: eleicao,
                    data_inicio: dataHoraInicio,
                    data_fim: dataHoraFim,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    alert("Votação registrada com sucesso!");
                    // Clear the form
                    document.getElementById("votacaoForm").reset();
                })
                .catch((error) => {
                    console.error("Error:", error);
                    alert("Erro ao registrar a votação.");
                });
        });
});