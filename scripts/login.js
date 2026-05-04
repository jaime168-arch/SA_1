document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (email === "admin@teste.com" && password === "123456") {
            alert('Login realizado com sucesso! Redirecionando...');
        } else {
            alert('E-mail ou senha incorretos. Tente novamente.');
        }
        console.log("Dados capturados:", { email, password });
    });
});


