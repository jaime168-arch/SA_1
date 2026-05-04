document.addEventListener('DOMContentLoaded', () => {
    const cadastroForm = document.querySelector('form');

    if (!cadastroForm) return;

    cadastroForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

    
        if (!nome || !email || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

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
