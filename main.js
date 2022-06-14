// Quando tivermos tudo carregado
window.onload = () => {
	// Selecionar elemento '.hamburger'
	const hamburger = document.querySelector('.hamburger')
	// Selecionar elemento '.navigation'
	const navigation = document.querySelector('.navigation')
	// Selecionar elemento 'body'
	const body = document.querySelector('body')

	// Definir named function que vai tratar do clique
	/*function clickHandler() {
		console.log("Alguem clicou no hamburger!")
	}*/

	// Definir arrow function que vai tratar o clique
	/*const clickHandler = () => {
		console.log("Alguem clicou no hamburger!")
	}*/

	// Pedir ao browser para correr a função clickHandler() quando alguém clica no hamburger
	//hamburger.addEventListener('click', clickHandler)
	hamburger.addEventListener('click', () => {
		// Toggle na class "active"
		hamburger.classList.toggle('active')

		// Toggle na class "fullscreen"
		navigation.classList.toggle('fullscreen')

		// Toggle class "noscroll"
		body.classList.toggle('noscroll')
	})
}

