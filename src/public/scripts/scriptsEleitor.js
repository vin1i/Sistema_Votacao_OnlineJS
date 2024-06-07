document.getElementById('cpf').addEventListener('input', function (e) {
    let value = e.target.value;
    value = value.replace(/\D/g, ""); // Remove caracteres não numéricos
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona o primeiro ponto
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona o segundo ponto
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Adiciona o traço
    e.target.value = value;
    console.log('Valor do CPF:', value);
});

document.getElementById('cadastroForm').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Formulário de cadastro enviado!');

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const endereco = document.getElementById('endereco').value;
    const senha = document.getElementById('senha').value;

    console.log('Dados do formulário:', { nome, cpf, endereco, senha });

    fetch('http://localhost:5000/api/eleitores', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, cpf, endereco, senha }),
    })
        .then(response => {
            console.log('Resposta do servidor:', response);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao cadastrar eleitor');
            }
        })
        .then(data => {
            console.log('Resposta JSON:', data);
            alert('Eleitor cadastrado com sucesso!');
            // Limpar os campos do formulário
            document.getElementById('cadastroForm').reset();
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao cadastrar eleitor');
        });
});
