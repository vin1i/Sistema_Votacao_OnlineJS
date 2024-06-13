document
    .getElementById("liberacaoForm")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o comportamento padrão do formulário

        const cpfEleitor = document.getElementById("cpfEleitor").value;

        fetch("http://localhost:5000/api/liberar-eleitor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ cpf: cpfEleitor }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao liberar eleitor.");
                }
                return response.json();
            })
            .then((data) => {
                alert("Eleitor liberado com sucesso!");
            })
            .catch((error) => {
                console.error("Erro ao liberar eleitor:", error);
                alert(
                    "Erro ao liberar eleitor. Verifique o console para mais informações."
                );
            });
    });