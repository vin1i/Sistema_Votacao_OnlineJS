document
    .getElementById("cadastroEleicao")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio do formulário
        const nome = document.getElementById("nome").value;
        const data = document.getElementById("data").value;
        const local = document.getElementById("local").value;
        const horaInicial = document.getElementById("hora_inicial").value;
        const horaFinal = document.getElementById("hora_final").value;

        // Cria um objeto com os dados da eleição
        const eleicaoData = {
            nome: nome,
            data: data,
            local: local,
            hora_inicial: horaInicial,
            hora_final: horaFinal,
        };

        // Envia os dados para a API backend via fetch ou XMLHttpRequest
        fetch("http://localhost:5000/api/eleicoes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(eleicaoData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert("Eleição cadastrada com sucesso!");
                // Limpar o formulário após a submissão
                document.getElementById("cadastroEleicao").reset();
            })
            .catch((error) => {
                console.error("Erro ao cadastrar eleição:", error);
                alert(
                    "Ocorreu um erro ao cadastrar a eleição. Por favor, tente novamente."
                );
            });
    });