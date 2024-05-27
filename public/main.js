document.getElementById('form-candidato').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const endereco = document.getElementById('endereco').value;

    fetch('/api/candidatos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, cpf, endereco }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Candidato cadastrado:', data);
        })
        .catch((error) => {
            console.error('Erro:', error);
        });
});
