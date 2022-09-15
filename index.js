const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const seleccion=  document.querySelectorAll('#seleccion')
const calcular = document.getElementById('calcular')
let resultadoMostrar = document.getElementById('resultadoMostrar')
const borrar = document.querySelector('#borrar')


calcular.addEventListener('click', () => { //preventDefault

seleccion.forEach((i)=> {

	let resultado;
		if(i.value==="+") {
			
			resultado =( Number(number1.value) + Number(number2.value))
			resultadoMostrar.innerHTML = `<p>El resultado es : ${resultado}`
			
		
		}else if(i.value==="-"){
			
			resultado = Number(number1.value) - Number(number2.value)
			resultadoMostrar.innerHTML = `<p>El resultado es : ${resultado}`
		
		}else if (i.value==="*") {
			
			resultado = Number(number1.value) * Number(number2.value)
			resultadoMostrar.innerHTML = `<p>El resultado es : ${resultado}`
		
		}else if(i.value==="/" && number2.value==="0") {
			alert('No se puede dividir por cero')
			
		}else if(i.value==="/") {

			resultado = Number(number1.value) / Number(number2.value)
			resultadoMostrar.innerHTML = `<p>El resultado es : ${resultado}`
		
		}
})
	})
	
	borrar.addEventListener('click', ()=> {
		resultadoMostrar.textContent = ""
		
	})
	
