document.addEventListener('DOMContentLoaded', () => {
    const formCadastro = document.querySelector('form');
    const idSensorInput = document.getElementById('idSensor');
    const nomeSensorInput = document.getElementById('nomeSensor');
    const tipoSensorSelect = document.getElementById('tipoSensor');
    const localizacaoInput = document.getElementById('localizacaoSensor');

    if (!formCadastro) return; 

    
    idSensorInput.addEventListener('input', () => {
        idSensorInput.value = idSensorInput.value.toUpperCase();
    });

    
    formCadastro.addEventListener('submit', (event) => {
        event.preventDefault();


        const idSensor = idSensorInput.value.trim();
        const nomeSensor = nomeSensorInput.value.trim();
        const tipoSensor = tipoSensorSelect.value;
        const localizacao = localizacaoInput.value.trim();


        if (!idSensor || !nomeSensor || !tipoSensor || !localizacao) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

       
        if (idSensor.length < 3) {
            alert('O Código de Identificação (ID) deve ter pelo menos 3 caracteres.');
            return;
        }

        console.log('[Já Ismaga IoT] Enviando payload de telemetria...');
        console.log({
            id: idSensor,
            nome: nomeSensor,
            tipo: tipoSensor,
            localizacao: localizacao,
            data_cadastro: new Date().toISOString()
        });

        alert(`Ativo IoT [${idSensor}] cadastrado com sucesso na malha!`);


        window.location.href = 'sensores.html';
    });
});