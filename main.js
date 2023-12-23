const form = document.getElementById('form-deposit');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
let formValid = false;

// Adicione um evento 'focus' para o campoA para limpar a borda vermelha quando o usuário interage novamente
campoA.addEventListener('focus', function () {
    campoA.classList.remove('error');
    document.querySelector('.errormessage').style.display = 'none';
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const mensagemSucesso = `Montante de: <b>${campoB.value}</b> depositado para o cliente - conta <b>${campoA.value}</b>`;

    formValid = parseFloat(campoA.value) > parseFloat(campoB.value);
    const containerMensagemSucesso = document.querySelector('.success-message');

    if (formValid) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';

        // Remova a borda vermelha em caso de sucesso
        campoA.classList.remove('error');
        document.querySelector('.errormessage').style.display = 'none';
    } else {
        campoA.style.border = '2px solid red';
        document.querySelector('.errormessage').style.display = 'block';
    }
});

campoA.addEventListener('keyup', function (e) {
    formValid = validName(e.target.value);

    if (!formValid) {
        campoA.classList.add('error');
        document.querySelector('.errormessage').style.display = 'block';
    } else {
        campoA.classList.remove('error');
        document.querySelector('.errormessage').style.display = 'none';
    }
});

function validName(value) {
    return parseFloat(value) > 0;
}
