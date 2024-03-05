const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	contrasenia: /^(?=.[A-Z])(?=.\d)[A-Za-z\d]{4,8}$/, // 4 a 8 digitos.
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	direccion: /^[a-zA-Z\d\s]{1,100}$/, // Letras y espacios, pueden llevar acentos.
	numero:/^\d{1,10}/,// solo numeros, hasta 10.
	barrio: /^[a-zA-Z\d\s]{1,100}$/, // Letras y espacios, pueden llevar acentos.
	provincia: /Santiago del Estero/,// por el momento Santiago del Estero nomas es valida 
	codigo: /^\d{1,10}$/, // 1 a 10 numeros.
	telefono: /^\d{1,20}$/ // 1 a 10 numeros.
}

console.log("hola");
const campos = {
	email: false,
	password: false,
	nombre: false,
	apellido: false,
	direccion: false,
	numero: false,
	barrio: false,
	provincia: false,
	codigo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
		case "contrasenia":
			validarCampo(expresiones.contrasenia, e.target, 'contrasenia');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "dirreccion":
			validarCampo(expresiones.direccion, e.target, 'direccion');
		break;
		case "numero":
			validarCampo(expresiones.numero, e.target, 'numero');
		break;
		case "barrrio":
			validarCampo(expresiones.barrio, e.target, 'barrrio');
		break;
		case "provincia":
			validarCampo(expresiones.provincia, e.target, 'provincia');
		break;
		case "codigo":
			validarCampo(expresiones.codigo, e.target, 'codigo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});




formulairo.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});