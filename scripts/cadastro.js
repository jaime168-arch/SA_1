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
        event.preventDefault();
        
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = telefoneInput.value.trim();
        const password = document.getElementById('senha1').value;
        const confirmPassword = document.getElementById('senha2').value;

    
        if (password !== confirmPassword) {
            alert('Erro: As senhas não coincidem!');
            document.getElementById('senha2').focus(); 
            return;
        }

        if (password.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        const usuario = {
            nome: nome,
            email: email,
            telefone: telefone,
            senha: password
        };

        localStorage.setItem('usuarioCadastrado', JSON.stringify(usuario));

        alert('Cadastro realizado com sucesso!');
        window.location.href = "index.html"; 
    });
});
