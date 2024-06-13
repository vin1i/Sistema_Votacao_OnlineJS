document.addEventListener("DOMContentLoaded", function () {
    // Fetch elections
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
        })
        .catch((error) => {
            console.error("Erro ao buscar eleições:", error);
            alert(
                "Erro ao buscar eleições. Verifique o console para mais informações."
            );
        });

    // Fetch candidates when an election is selected
    document
        .getElementById("eleicao")
        .addEventListener("change", function () {
            const eleicaoId = this.value;
            const candidatoSelect = document.getElementById("candidato");
            candidatoSelect.innerHTML =
                '<option value="">Selecione um candidato</option>';

            if (eleicaoId) {
                fetch(`http://localhost:5000/api/candidatos/eleicao/${eleicaoId}`)
                    .then((response) => response.json())
                    .then((data) => {
                        data.forEach((candidato) => {
                            const option = document.createElement("option");
                            option.value = candidato.id;
                            option.textContent = candidato.nome;
                            candidatoSelect.appendChild(option);
                        });
                    })
                    .catch((error) => {
                        console.error("Erro ao buscar candidatos:", error);
                        alert(
                            "Erro ao buscar candidatos. Verifique o console para mais informações."
                        );
                    });
            }
        });

    // Fetch voters
    fetch("http://localhost:5000/api/eleitores")
        .then((response) => response.json())
        .then((data) => {
            const eleitorSelect = document.getElementById("eleitor");
            data.forEach((eleitor) => {
                const option = document.createElement("option");
                option.value = eleitor.id;
                option.textContent = eleitor.nome;
                eleitorSelect.appendChild(option);
            });
        })
        .catch((error) => {
            console.error("Erro ao buscar eleitores:", error);
            alert(
                "Erro ao buscar eleitores. Verifique o console para mais informações."
            );
        });

    // Handle vote submission
    document
        .getElementById("votacaoForm")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            const eleitorId = document.getElementById("eleitor").value;
            const eleicaoId = document.getElementById("eleicao").value;
            const candidatoId = document.getElementById("candidato").value;

            fetch("http://localhost:5000/api/votos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    eleitor_id: eleitorId,
                    eleicao_id: eleicaoId,
                    candidato_id: candidatoId,
                }),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error("Erro ao registrar voto");
                })
                .then((data) => {
                    alert("Voto registrado com sucesso!");
                })
                .catch((error) => {
                    console.error("Erro ao registrar voto:", error);
                    alert(
                        "Erro ao registrar voto. Verifique o console para mais informações."
                    );
                });
        });
});