// Função para preencher dinamicamente o dropdown de eleições
function preencherEleicoes() {
    fetch("http://localhost:5000/api/eleicoes")
        .then((response) => response.json())
        .then((data) => {
            const eleicaoSelect = document.getElementById("eleicao");

            eleicaoSelect.innerHTML = ""; // Limpar as opções existentes
            const defaultOption = document.createElement("option");
            defaultOption.text = "Selecione uma eleição";
            defaultOption.value = "";
            eleicaoSelect.appendChild(defaultOption);

            data.forEach((eleicao) => {
                const option = document.createElement("option");
                option.text = eleicao.nome;
                option.value = eleicao.id;
                eleicaoSelect.appendChild(option);
            });
        })
        .catch((error) => console.error("Erro ao obter as eleições:", error));
}

// Chamar a função ao carregar a página para preencher o dropdown
window.addEventListener("load", preencherEleicoes);

// Adicionar um evento de submit ao formulário
document
    .getElementById("formCadastroCargos")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar o comportamento padrão de submissão

        // Obter os valores dos campos do formulário
        const nomeCargo = document.getElementById("nome").value;
        const eleicaoId = document.getElementById("eleicao").value;

        // Verifique se os valores estão sendo capturados corretamente
        console.log("Nome do Cargo:", nomeCargo);
        console.log("ID da Eleição:", eleicaoId);

        // Enviar os dados para o servidor via fetch
        fetch("http://localhost:5000/api/cargos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ cargo: nomeCargo, eleicao_id: eleicaoId }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    console.error("Erro ao cadastrar cargo:", data.error);
                    alert("Erro ao cadastrar cargo.");
                } else {
                    console.log("Sucesso:", data);
                    alert("Cargo cadastrado com sucesso!");
                    document.getElementById("formCadastroCargos").reset();
                }
            })
            .catch((error) => {
                console.error("Erro ao cadastrar cargo:", error);
                alert("Erro ao cadastrar cargo.");
            });
    });