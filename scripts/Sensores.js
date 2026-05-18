document.addEventListener('DOMContentLoaded', () => {
    const tabelaSensores = document.querySelector('table tbody');

    if (!tabelaSensores) return; 

    
    tabelaSensores.addEventListener('click', (event) => {
        const botaoExcluir = event.target.closest('.btn-outline-danger');
        const botaoEditar = event.target.closest('.btn-outline-secondary');

      
        if (botaoExcluir) {
            const linha = botaoExcluir.closest('tr');
            const idSensor = linha.querySelector('th').textContent;
            const nomeSensor = linha.querySelector('td.fw-bold').textContent;

           
            const confirmar = confirm(`Tem certeza que deseja remover o sensor:\n[${idSensor}] - ${nomeSensor}?`);

            if (confirmar) {
           
                linha.style.transition = 'all 0.4s ease';
                linha.style.opacity = '0';
                linha.style.transform = 'scale(0.95)';

                setTimeout(() => {
                    linha.remove();
                    console.log(`[IoT System] Sensor ${idSensor} removido com sucesso.`);
                    
             
                    if (tabelaSensores.children.length === 0) {
                        tabelaSensores.innerHTML = `
                            <tr>
                                <td colspan="6" class="text-center text-muted py-4">
                                    <i class="fa-solid fa-microchip fa-2x mb-2 d-block text-black-50"></i>
                                    Nenhum dispositivo IoT conectado no momento.
                                </td>
                            </tr>`;
                    }
                }, 400);
            }
        }


        if (botaoEditar) {
            const linha = botaoEditar.closest('tr');
            const idSensor = linha.querySelector('th').textContent;
            const nomeSensor = linha.querySelector('td.fw-bold').textContent;

            console.log(`[IoT System] Editando dados técnicos do ativo: ${idSensor}`);
            
           
            alert(`Modo de edição aberto para:\n${nomeSensor} (${idSensor})\n\n(Pronto para conectar ao back-end em PHP!)`);
        }
    });
});