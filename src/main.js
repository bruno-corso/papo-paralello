document.addEventListener('DOMContentLoaded', function () {
	emailjs.init({
		publicKey: 'docTnjZjCVycyJCUg',
	})
	criarTicket()

	numerosInsta()
	numerosYTB()

	const vForm = document.getElementById('form-contato')

	vForm.addEventListener('submit', function (e) {
		e.preventDefault()
		emailjs.sendForm('service_tmd1fml', 'contact_email', this).then(
			() => {
				console.log('SUCCESS!')
				toastSuccess()
			},
			(error) => {
				console.log('FAILED...', error)
			}
		)
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
        <div class="toast-body text-black">
            Sua mensagem foi enviada com sucessso!
        </div>
    `

	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})

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
		let formattedNum = (num / 1000).toFixed(2)

		// Remove o ".0" se existir
		if (formattedNum.endsWith('.0')) {
			formattedNum = formattedNum.slice(0, -2)
		}

		return formattedNum + 'K'
	}

	return num.toString()
}

function criarTicket() {
	const now = new Date()
	const year = now.getFullYear()
	const month = String(now.getMonth() + 1).padStart(2, '0') // Janeiro é 0!
	const day = String(now.getDate()).padStart(2, '0')
	const hours = String(now.getHours()).padStart(2, '0')
	const minutes = String(now.getMinutes()).padStart(2, '0')
	const seconds = String(now.getSeconds()).padStart(2, '0')
	const ticket = `${year}${month}${day}${hours}${minutes}${seconds}`
	const tktElement = document.getElementById('client_tkt')
	tktElement.value = ticket
}
