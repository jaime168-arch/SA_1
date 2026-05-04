const loginForm = document.getElementById('loginForm');
 if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const user = document.getElementById('usuario').value.trim();
        const pass = document.getElementById('senha').value.trim();
        const msg = document.getElementById('msgErro');

        msg.classList.add('d-none');

      
        if (user === "" || pass === "") {
            msg.textContent = "Atenção: Todos os campos devem ser preenchidos!";
            msg.classList.remove('d-none');
            return;

            }

        if (user === "admin" && pass === "1234") {
            window.location.href = "home.html";
        } else {
            
            msg.textContent = "Acesso Negado! Usuário ou senha inválidos.";
            msg.classList.remove('d-none');