document.getElementById("cpf").addEventListener("input", function (e) {
    let value = e.target.value;
    value = value.replace(/\D/g, ""); // Remove caracteres não numéricos
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona o primeiro ponto
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona o segundo ponto
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Adiciona o traço
    e.target.value = value;
});

document
    .getElementById("formularioCandidatos")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const cpf = document.getElementById("cpf").value;
        const endereco = document.getElementById("endereco").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        fetch("http://localhost:5000/api/candidatos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nome, cpf, endereco, email, senha }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Sucesso:", data);
                alert("Candidato cadastrado com sucesso!");
            })
            .catch((error) => {
                console.error("Erro:", error);
                alert("Erro ao cadastrar candidato.");
            });
    });