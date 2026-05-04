document.addEventListener('DOMContentLoaded', () => {
    const cadastroForm = document.querySelector('form');

    cadastroForm.addEventListener('submit', (event) => {
        event.preventDefault();

       
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return; 
        }

        if (password.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        const usuario = {
            nome: nome,
            email: email,
            senha: password
        };

    
        localStorage.setItem('usuarioCadastrado', JSON.stringify(usuario));

        alert('Cadastro realizado com sucesso! Agora faça seu login.');
        
        window.location.href = "index.html"; 
    });
});
