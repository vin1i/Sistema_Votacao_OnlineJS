// document.getElementById('loginForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     const cpf = document.getElementById('cpf').value;
//     const senha = document.getElementById('password').value;

//     fetch('/api/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ cpf, senha }),
//     })
//         .then(response => response.json())
//         .then(data => {
//             // Salva o token JWT no localStorage
//             localStorage.setItem('token', data.token);
//             // Redireciona para a página principal (ou outra página após o login)
//             window.location.href = '/dashboard.html';
//         })
//         .catch((error) => {
//             console.error('Erro:', error);
//         });
// });
document.getElementById('cadastroForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const endereco = document.getElementById('endereco').value;
    const senha = document.getElementById('senha').value;

    fetch('/api/eleitores', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, cpf, endereco, senha }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao cadastrar eleitor');
            }
            return response.json();
        })
        .then(data => {
            alert('Eleitor cadastrado com sucesso!');
            // Redireciona para outra página após o cadastro, se necessário
            window.location.href = '/dashboard.html';
        })
        .catch((error) => {
            console.error('Erro:', error);
            alert('Erro ao cadastrar eleitor. Verifique os campos e tente novamente.');
        });
});
