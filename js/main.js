const sendBtn = document.querySelector('.button_form')
const errorText = document.querySelector('.validation_info')
const inputForm = document.querySelector('.email_input')
const filter =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const showError = () => {
	errorText.classList.add('validation_error')
	inputForm.classList.add('input_error')
}

const clearError = () => {
	//function set input to default mode
	errorText.classList.remove('validation_error')
	inputForm.classList.remove('input_error')
}

const validateEmail = () => {
	// function checks if email is properly written, reffering to declared filter (regexp)

	if (filter.test(inputForm.value)) {
		clearError()
	} else {
		showError()
	}
}

const checkForm = () => {
	// function checks if input is empty, if true than display error mode, else set input to default mode
	if (inputForm.value === '') {
		showError()
	} else {
		clearError()
	}
}

const clearInput = () => {
	//function checks if input and parahraph dont contain error classes, if not it clears input and log text after submitting
	if (!errorText.classList.contains('validation_error') && !inputForm.classList.contains('input_error')) {
		console.log(inputForm.value)
		inputForm.value = ''
	}
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm()
	validateEmail()
	clearInput()
})
