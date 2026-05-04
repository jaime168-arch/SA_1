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
 
        const s1 = document.getElementById('senha1').value;
        const s2 = document.getElementById('senha2').value;

        if (s1 !== s2) {
            event.preventDefault(); 
            alert('Erro: As senhas não coincidem! Tente novamente.');
            return; 
        }

       
        if (s1.length < 6) {
            event.preventDefault();
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        alert('Cadastro realizado com sucesso!');
    });
});
