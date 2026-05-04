const app = {
    navegarPara: (tela) => {
        const containers = ['login-section', 'cadastro-section'];
        containers.forEach(id => {
            document.getElementById(id).style.display = (id === tela) ? 'block' : 'none';
        });
    },

    validarCadastro: (event) => {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        if (nome && email) {
            alert(`Usuário ${nome} preparado para integração com CRUD PHP!`);
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    }
};
