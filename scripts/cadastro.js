document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    const dados = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        idade: document.getElementById('idade').value,
        peso: document.getElementById('peso').value,
        telefone: document.getElementById('telefone').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value
    };

    console.log("Dados capturados:", dados);
    alert("Cadastro enviado com sucesso para " + dados.nome + "!");

});
