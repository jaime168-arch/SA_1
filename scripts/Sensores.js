const app = {
    navegarPara: (tela) => {
        const containers = ['login-section', 'cadastro-section', 'dashboard-section'];
        containers.forEach(id => {
            const elemento = document.getElementById(id);
            if (elemento) {
                elemento.style.display = (id === tela) ? 'block' : 'none';
            }
        });
    },

    validarLogin: (event) => {
        event.preventDefault();
        
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        
        if (!emailInput || !passwordInput) return;

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === '' || password === '') {
            alert('Por favor, preencha todos os campos do login.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        if (password.length < 4) {
            alert('A senha deve conter pelo menos 4 caracteres.');
            return;
        }

        console.log("Login realizado com sucesso para:", email);
        alert('Login realizado com sucesso! Bem-vindo de volta.');
        
        app.navegarPara('dashboard-section'); 
    },

    validarCadastro: (event) => {
        event.preventDefault();
        const nomeInput = document.getElementById('nome');
        const emailInput = document.getElementById('email_cadastro');

        if (!nomeInput || !emailInput) return;

        const nome = nomeInput.value.trim();
        const emailOrId = emailInput.value.trim();

        if (nome && emailOrId) {
            alert(`Usuário "${nome}" preparado para integração com CRUD PHP!`);
        } else {
            alert("Por favor, preencha todos os campos obrigatórios.");
        }
    },

    salvarSensor: (event) => {
        event.preventDefault();

        const nome = document.getElementById('nomeSensor').value.trim();
        const id = document.getElementById('idSensor').value.trim();
        const tipo = document.getElementById('tipoSensor').value;
        const localizacao = document.getElementById('localizacaoSensor').value.trim();

        if (!nome || !id || !tipo || !localizacao) {
            alert("Por favor, preencha todos os campos obrigatórios do sensor.");
            return;
        }

        alert(`Sucesso! O dispositivo [${id}] - ${nome} foi salvo e sincronizado com o banco de dados.`);
        
        app.atualizarLogs('SISTEMA', `Novo sensor cadastrado: ${nome} (${tipo}) no local: ${localizacao}`);
        
        document.getElementById('cadastroSensorForm').reset();
    },

    inicializarGrafico: () => {
        const ctx = document.getElementById('graficoTelemetria');
        if (!ctx) return;

        if (window.meuGraficoIoT) {
            window.meuGraficoIoT.destroy();
        }

        window.meuGraficoIoT = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00'],
                datasets: [{
                    label: 'Detecções por Hora',
                    data: [35, 72, 45, 90, 60, 85],
                    borderColor: '#0d6efd',
                    backgroundColor: 'rgba(13, 110, 253, 0.1)',
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                }
            }
        });
    },

    despacharTrem: () => {
        const kpiTrens = document.getElementById('kpi-trens');
        if (!kpiTrens) return;

        let totalTrens = parseInt(kpiTrens.textContent) || 0;
        totalTrens++;
        kpiTrens.textContent = totalTrens;

        const codTrem = 'TRM-' + Math.floor(100 + Math.random() * 900);
        alert(`Sucesso! Trem [${codTrem}] foi despachado e integrado à malha via RFID.`);
        
        app.atualizarLogs('SISTEMA', `Novo ativo ${codTrem} acoplado à central.`);
    },

    gerarRelatorio: (botao) => {
        if (!botao) return;
        const textoOriginal = botao.innerHTML;
        botao.innerHTML = `<i class="fa-solid fa-spinner fa-spin me-2"></i> Processando...`;
        botao.disabled = true;

        setTimeout(() => {
            alert("Relatório de Telemetria e Alertas de Manutenção Preditiva compilado!");
            botao.innerHTML = textoOriginal;
            botao.disabled = false;
        }, 1200);
    },

    atualizarLogs: (tipo, message) => {
        const logDinamico = document.getElementById('log-dinamico');
        if (!logDinamico) return;

        const agora = new Date().toLocaleTimeString();
        let classeTexto = 'text-info';

        if (tipo === 'ERRO') classeTexto = 'text-danger';
        if (tipo === 'AVISO') classeTexto = 'text-warning';

        logDinamico.insertAdjacentHTML('afterbegin', 
            `<div class="${classeTexto} mb-1">[${tipo}] ${agora} - ${message}</div>`
        );
    },

    definirSaudacaoDinamica: () => {
        const saudacaoElemento = document.querySelector('h2.fw-bold');
        if (saudacaoElemento) {
            const hora = new Date().getHours();
            let saudacaoText = "";

            if (hora >= 5 && hora < 12) saudacaoText = "Bom dia";
            else if (hora >= 12 && hora < 18) saudacaoText = "Boa tarde";
            else saudacaoText = "Boa noite";

            saudacaoElemento.innerText = `${saudacaoText}, Passageiro!`;
        }
    },

    initPassageiro: () => {
        const btnRecarga = document.getElementById('btn-recarga-rapida');
        const txtPontos = document.getElementById('fidelidade-pontos');

        if (btnRecarga && txtPontos) {
            btnRecarga.addEventListener('click', () => {
                let pontosAtuais = parseInt(txtPontos.textContent.replace(/[^\d]/g, '')) || 0;
                pontosAtuais += 500;
                txtPontos.textContent = pontosAtuais.toLocaleString('pt-BR') + ' pts';
                alert('Recarga realizada! +500 pontos adicionados à sua carteira Já Ismaga.');
            });
        }

        const tabela = document.getElementById('tabela-atividades');
        if (tabela) {
            tabela.addEventListener('click', (event) => {
                const botao = event.target.closest('.btn-detalhes') || event.target.closest('.btn-outline-primary');
                if (!botao) return;

                const linha = botao.closest('tr');
                const nomeElemento = linha.querySelector('.atividade-nome') || linha.cells[0];
                const dataElemento = linha.querySelector('.atividade-data') || linha.cells[1];
                const statusElemento = linha.querySelector('.atividade-status') || linha.cells[2];

                const nome = nomeElemento.innerText;
                const data = dataElemento ? dataElemento.innerText : new Date().toLocaleDateString();
                const badgeHTML = statusElemento ? statusElemento.outerHTML : '<span class="badge bg-secondary">Info</span>';

                const modalNome = document.getElementById('modal-nome');
                const modalData = document.getElementById('modal-data');
                const modalStatus = document.getElementById('modal-status-container');

                if (modalNome && modalData && modalStatus) {
                    modalNome.textContent = nome;
                    modalData.textContent = data;
                    modalStatus.innerHTML = badgeHTML;

                    const elementoModal = document.getElementById('modalDetalhesAtividade');
                    const bootstrapModal = new bootstrap.Modal(elementoModal);
                    bootstrapModal.show();
                } else {
                    alert(`Exibindo detalhes sobre: ${nome}`);
                }
            });
        }
    },

    initGerenciamentoSensores: () => {
        const tabelaSensores = document.getElementById('tabela-sensores');
        if (!tabelaSensores) return;

        tabelaSensores.addEventListener('click', (event) => {
            const btnDeletar = event.target.closest('.btn-deletar-sensor');
            const btnEditar = event.target.closest('.btn-editar-sensor');

            if (btnDeletar) {
                const linha = btnDeletar.closest('tr');
                const idSensor = linha.querySelector('.id-sensor-celula').textContent;
                const nomeSensor = linha.querySelector('.nome-sensor-celula').textContent;

                const confirmar = confirm(`Atenção: Deseja realmente remover o dispositivo IoT [${idSensor}] - ${nomeSensor} da malha?`);
                if (confirmar) {
                    linha.remove();
                    app.atualizarLogs('AVISO', `O sensor ${idSensor} foi desconectado e removido.`);
                }
            }

            if (btnEditar) {
                const linha = btnEditar.closest('tr');
                const idSensor = linha.querySelector('.id-sensor-celula').textContent;
                const nomeSensor = linha.querySelector('.nome-sensor-celula').textContent;

                alert(`Carregando dados de [${idSensor}] para modificação.\n(Pronto para integração com a API do PHP CRUD!)`);
            }
        });
    },

    carregarDadosIniciais: () => {
        console.log("Sincronizando dados do usuário...");
    },

    init: () => {
        app.definirSaudacaoDinamica();
        app.inicializarGrafico();
        app.initPassageiro();
        app.initGerenciamentoSensores();
        app.carregarDadosIniciais();

        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            window.toggleSidebar = () => {
                sidebar.classList.toggle('active');
            };
        }

        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', app.validarLogin);
        }

        const cadastroForm = document.getElementById('cadastroForm');
        if (cadastroForm) {
            cadastroForm.addEventListener('submit', app.validarCadastro);
        }

        const cadastroSensorForm = document.getElementById('cadastroSensorForm');
        if (cadastroSensorForm) {
            cadastroSensorForm.addEventListener('submit', app.salvarSensor);
        }

        const btnAddTrem = document.getElementById('btn-add-trem');
        if (btnAddTrem) {
            btnAddTrem.addEventListener('click', app.despacharTrem);
        }

        const btnRelatorio = document.getElementById('btn-relatorio');
        if (btnRelatorio) {
            btnRelatorio.addEventListener('click', (e) => app.gerarRelatorio(e.currentTarget));
        }

        const btnSair = document.querySelector('.text-danger'); 
        if (btnSair) {
            btnSair.addEventListener('click', (e) => {
                const confirmar = confirm("Deseja realmente sair da sua conta?");
                if (!confirmar) {
                    e.preventDefault(); 
                }
            });
        }

        const idSensorInput = document.getElementById('idSensor');
        if (idSensorInput) {
            idSensorInput.addEventListener('input', () => {
                idSensorInput.value = idSensorInput.value.toUpperCase();
            });
        }
    }
};

document.addEventListener('DOMContentLoaded', app.init);