document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form'); // Seleciona o formulário de login
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (!loginForm) return;

    loginForm.addEventListener('submit', (event) => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // 1. Validação básica de campos vazios
        if (email === '' || password === '') {
            event.preventDefault();
            alert('⚠️ Por favor, preencha todos os campos.');
            return;
        }

        // 2. Validação de formato de e-mail (Regex simples)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            event.preventDefault();
            alert('⚠️ Por favor, insira um e-mail válido.');
            return;
        }

        // 3. Simulação de autenticação
        // Aqui você faria a chamada para o seu servidor/banco de dados futuramente.
        console.log('Tentativa de login com:', email);

        // Feedback de sucesso antes de redirecionar
        alert('✅ Login realizado com sucesso! Bem-vindo de volta.');
        
        
    });
});