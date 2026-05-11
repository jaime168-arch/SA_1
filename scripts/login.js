document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form'); 
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (!loginForm) return;

    loginForm.addEventListener('submit', (event) => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

      

        if (email === '' || password === '') {
            event.preventDefault();
            alert('⚠️ Por favor, preencha todos os campos.');
            return;
        }

        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            event.preventDefault();
            alert('⚠️ Por favor, insira um e-mail válido.');
            return;
        }

        console.log('Tentativa de login com:', email);

        
        alert('✅ Login realizado com sucesso! Bem-vindo de volta.');
        
        
    });
});