document.addEventListener('DOMContentLoaded', () => {
    
    const usuarioLogado = {
        nome: "Felipe Silva",
        nivel: "Premium",
        tarefas: 15,
        ultimoAcesso: "Hoje, 09:45",
        foto: "https://pravatar.cc"
    };

    const atualizarInterface = () => {
        const saudacao = document.querySelector('h2.fw-bold');
        const avatar = document.querySelector('.dropdown img');
        
        if(saudacao) saudacao.textContent = `Bem-vindo, ${usuarioLogado.nome.split(' ')[0]}!`;
        if(avatar) avatar.src = usuarioLogado.foto;
    };

    const mainContent = document.querySelector('.main-content');
    const sidebar = document.querySelector('.sidebar');
    
    const criarBotaoMenu = () => {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="bi bi-list"></i>';
        btn.className = 'btn btn-dark d-md-none position-fixed top-0 start-0 m-3';
        btn.style.zIndex = '1050';
        
        btn.onclick = () => {
            sidebar.classList.toggle('active');
        };
        
        document.body.appendChild(btn);
    };

    const linksNav = document.querySelectorAll('.sidebar a');
    linksNav.forEach(link => {
        link.addEventListener('click', function(e) {
            linksNav.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            if(window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });

    const btnSair = document.querySelector('.text-danger');
    if(btnSair) {
        btnSair.addEventListener('click', (e) => {
            e.preventDefault();
            if(confirm("Deseja realmente sair da conta?")) {
                window.location.href = "login.html";
            }
        });
    }

    atualizarInterface();
    criarBotaoMenu();
});
