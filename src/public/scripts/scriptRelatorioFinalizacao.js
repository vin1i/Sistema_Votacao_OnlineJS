document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:5000/api/eleicoes")
        .then((response) => response.json())
        .then((data) => {
            const eleicaoSelect = document.getElementById(
                "eleicaoInicializacao"
            );
            data.forEach((eleicao) => {
                const option = document.createElement("option");
                option.value = eleicao.id;
                option.text = eleicao.nome;
                eleicaoSelect.appendChild(option);
            });
        })
        .catch((error) => {
            console.error("Error fetching eleicoes:", error);
        });
});

async function fetchCandidateListAndVoters() {
    const eleicaoId = document.getElementById("eleicaoInicializacao").value;

    const responseCandidatos = await fetch(
        `http://localhost:5000/api/candidatos/eleicao/${eleicaoId}`
    );
    const dataCandidatos = await responseCandidatos.json();
    console.log("Dados dos candidatos:", dataCandidatos);

    const listaCandidatosSelect =
        document.getElementById("listaCandidatos");
    listaCandidatosSelect.innerHTML = "";
    dataCandidatos.forEach((candidato) => {
        const option = document.createElement("option");
        option.value = candidato.id;
        option.text = candidato.nome;
        listaCandidatosSelect.appendChild(option);
    });

    const responseTotalEleitores = await fetch(
        `http://localhost:5000/api/eleicoes/${eleicaoId}/totalEleitores`
    );
    const dataTotalEleitores = await responseTotalEleitores.json();
    console.log(
        "Total de eleitores antes da conversão:",
        dataTotalEleitores
    );

    let totalEleitores = parseInt(dataTotalEleitores.total_votos, 10);
    console.log("Total de eleitores convertido:", totalEleitores);

    console.log("Iniciando cálculo do total de eleitores...");
    if (!isNaN(totalEleitores)) {
        dataCandidatos.forEach((candidato) => {
            console.log("Dados do candidato:", candidato);
            console.log("Votos do candidato:", candidato.total_votos);
            totalEleitores += parseInt(candidato.total_votos, 10) || 0; // Adicionando tratamento para valor undefined
            console.log(
                "Total de eleitores após adicionar votos do candidato:",
                totalEleitores
            );
        });
    }

    console.log("Total de eleitores calculado:", totalEleitores);
    document.getElementById("totalEleitores").value = totalEleitores || 0;
}

async function generateInitialReport() {
    const { PDFDocument, rgb } = PDFLib;

    const eleicao = document.getElementById("eleicaoInicializacao").value;
    const dataHoraFechamento = new Date().toLocaleString(); // Alterado para data de fechamento

    // Obtém todos os candidatos na lista
    const listaCandidatosSelect =
        document.getElementById("listaCandidatos");
    const candidatos = [...listaCandidatosSelect.options].map(
        (option) => option.text
    );

    const totalEleitores = document.getElementById("totalEleitores").value;

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();

    page.drawText("Relatório de Finalização da Eleição", {
        x: 50,
        y: 700,
        size: 24,
        color: rgb(0, 0, 0),
    });

    page.drawText(`Eleição: ${eleicao}`, {
        x: 50,
        y: 650,
        size: 18,
        color: rgb(0, 0, 0),
    });

    page.drawText(`Data e Hora de Fechamento: ${dataHoraFechamento}`, {
        // Alterado para data de fechamento
        x: 50,
        y: 600,
        size: 18,
        color: rgb(0, 0, 0),
    });

    // Adiciona todos os candidatos ao PDF
    page.drawText(`Lista de Candidatos:\n${candidatos.join(", ")}`, {
        x: 50,
        y: 550,
        size: 18,
        color: rgb(0, 0, 0),
    });

    page.drawText(`Total de Eleitores: ${totalEleitores}`, {
        x: 50,
        y: 500,
        size: 18,
        color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();

    // Criar um blob com os bytes do PDF
    const blob = new Blob([pdfBytes], { type: "application/pdf" });

    // Criar uma URL do blob
    const url = URL.createObjectURL(blob);

    // Criar um link para download do PDF
    const link = document.createElement("a");
    link.href = url;
    link.download = "relatorio_finalizacao_eleicao.pdf";

    // Adicionar o link ao corpo do documento e clicar para iniciar o download
    document.body.appendChild(link);
    link.click();

    // Limpar o link e o blob depois do download
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}