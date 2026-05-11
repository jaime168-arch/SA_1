document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
   
    window.toggleSidebar = () => {
        sidebar.classList.toggle('active');
    };

    
    const btnSair = document.querySelector('.text-danger'); 
    if (btnSair) {
        btnSair.addEventListener('click', (e) => {
            const confirmar = confirm("Deseja realmente sair da sua conta?");
            if (!confirmar) {
                e.preventDefault(); 
            }
        });
    }

    
    const carregarDadosIniciais = () => {
        console.log("Sincronizando dados do usuário...");
    };

    carregarDadosIniciais();

    
    const botoesDetalhes = document.querySelectorAll('.btn-outline-primary');
    botoesDetalhes.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const linha = e.target.closest('tr'); 
            const acao = linha.cells[0].innerText;
            alert(`Exibindo detalhes sobre: ${acao}`);
        });
    });

    
    const saudacaoElemento = document.querySelector('h2.fw-bold');
    if (saudacaoElemento) {
        const hora = new Date().getHours();
        let saudacaoText = "";

        if (hora >= 5 && hora < 12) saudacaoText = "Bom dia";
        else if (hora >= 12 && hora < 18) saudacaoText = "Boa tarde";
        else saudacaoText = "Boa noite";

        
        saudacaoElemento.innerText = `${saudacaoText}, Usuário!`;
    }
});