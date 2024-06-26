document.addEventListener('DOMContentLoaded', function () {
	emailjs.init({
		publicKey: 'docTnjZjCVycyJCUg',
	})

	numerosInsta()
	numerosYTB()

	const vForm = document.getElementById('form-contato')

	vForm.addEventListener('submit', function (e) {
		e.preventDefault()
		toastSuccess()

		const vNome = document.getElementById('nome').value
		const vEmail = document.getElementById('email').value
		const vTelefone = document.getElementById('tel').value
		const vMsg = document.getElementById('msg').value

		var arrayVariable = {
			client_name: vNome,
			client_email: vEmail,
			client_number: vTelefone,
			client_message: vMsg,
		}

		console.log(arrayVariable)
	})
})

function toastSuccess() {
	const toast = document.getElementById('toastSuccess')
	toast.innerHTML = `
        <div class="toast-header">
            <strong class="me-auto">Mensagem</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            Sua mensagem foi enviada com sucessso!
        </div>
    `

	const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast)
	toastBootstrap.show()
}

function toastFail() {
	console.log('fail')
}

async function numerosYTB() {
	const url =
		'https://yt-api.p.rapidapi.com/channel/about?id=UCh4dgs-bggrPGmMg-hTbF1w'
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '9488701202msh7699add9724bb43p1b1aabjsn330d6facbc9a',
			'x-rapidapi-host': 'yt-api.p.rapidapi.com',
		},
	}

	try {
		const response = await fetch(url, options)
		const result = await response.json()
		console.log(result)
		var elemento = document.getElementById('seguidores-youtube')
		if (elemento) {
			elemento.innerHTML += result.subscriberCountText
		}
	} catch (error) {
		console.error(error)
	}
}

async function numerosInsta() {
	const url =
		'https://instagram-scraper-api2.p.rapidapi.com/v1/info?username_or_id_or_url=papoparalello'
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '9488701202msh7699add9724bb43p1b1aabjsn330d6facbc9a',
			'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com',
		},
	}

	try {
		const response = await fetch(url, options)
		const result = await response.json()
		console.log(result)
        var seguidores = formatNumber(result.data.follower_count)
		var elemento = document.getElementById('seguidores-insta')
		if (elemento) {
			elemento.innerHTML += seguidores
		}
	} catch (error) {
		console.error(error)
	}
}

function formatNumber(num) {
    if (num >= 1000) {
        // Divide por 1000 e mantém uma casa decimal
        let formattedNum = (num / 1000).toFixed(2);

        // Remove o ".0" se existir
        if (formattedNum.endsWith('.0')) {
            formattedNum = formattedNum.slice(0, -2);
        }

        return formattedNum + 'K';
    }

    return num.toString();
}
