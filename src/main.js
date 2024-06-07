document.addEventListener('DOMContentLoaded', function () {
    emailjs.init({
        publicKey: "docTnjZjCVycyJCUg",
    });

    const vForm = document.getElementById('form-contato');

    vForm.addEventListener('submit', function (e) {
        e.preventDefault()
        toastSuccess();

        const vNome = document.getElementById('nome').value;
        const vEmail = document.getElementById('email').value;
        const vTelefone = document.getElementById('tel').value;
        const vMsg = document.getElementById('msg').value;
        
        var arrayVariable = {
            client_name: vNome,
            client_email: vEmail,
            client_number: vTelefone,
            client_message: vMsg
        }

        console.log(arrayVariable);

})

function toastSuccess() {
    const toast = document.getElementById('toastSuccess')
    toast.innerHTML = 
    `
        <div class="toast-header">
            <strong class="me-auto">Mensagem</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            Sua mensagem foi enviada com sucessso!
        </div>
    `;

    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast)
    toastBootstrap.show()
}

function toastFail() {
    
}