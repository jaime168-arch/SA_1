document.addEventListener('DOMContentLoaded', () => {
    const cadastroForm = document.getElementById('formCadastro');
    const telefoneInput = document.getElementById('telefone');

    if (!cadastroForm) return;

    
    if (telefoneInput) {
        telefoneInput.addEventListener('input', (e) => {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        });
    }

    cadastroForm.addEventListener('submit', (event) => {
        const s1 = document.getElementById('senha1').value;
        const s2 = document.getElementById('senha2').value;
        const telValue = telefoneInput ? telefoneInput.value.replace(/\D/g, '') : '';

        
        if (s1 !== s2) {
            event.preventDefault(); 
            alert('As senhas não coincidem!');
            return; 
        }

        
        if (s1.length < 6) {
            event.preventDefault();
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        
        if (telValue.length > 0 && telValue.length < 11) {
            event.preventDefault();
            alert('Por favor, insira um telefone válido com DDD.');
            return;
        }

        
        alert('Cadastro realizado com sucesso! Redirecionando...');
    });
});