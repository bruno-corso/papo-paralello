document.addEventListener('DOMContentLoaded', function () {
    emailjs.init({
        publicKey: "docTnjZjCVycyJCUg",
    });

    const vForm = document.getElementById('form-contato');

    vForm.addEventListener('submit', function (e) {
        e.preventDefault()

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

        emailjs.send('service_tmd1fml', 'contact_email', arrayVariable)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    })

})