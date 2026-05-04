document.addEventListener('DOMContentLoaded', () => {
    const cadastroForm = document.getElementById('formCadastro');
    const telefoneInput = document.getElementById('telefone');

    if (!cadastroForm) return;

    if (telefoneInput) {
        telefoneInput.addEventListener('input', (e) => {
        
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }

    cadastroForm.addEventListener('submit', (event) => {
    
        const senha1 = document.getElementById('senha1').value;
        const senha2 = document.getElementById('senha2').value;


        if (senha1 !== senha2) {
            event.preventDefault();
            alert('As senhas não coincidem!');
            return;
        }

        if (senha1.length < 6) {
            event.preventDefault();
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        const usuario = {
            nome: document.getElementById('nome').value.trim(),
            email: document.getElementById('email').value.trim(),
            telefone: telefoneInput.value.trim(),
            senha: senha1
        };

        localStorage.setItem('usuarioCadastrado', JSON.stringify(usuario));
        alert('Cadastro realizado com sucesso!');
        window.location.href = "index.html";
    });
});
