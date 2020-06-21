//definição de containers
var containerButtons = document.getElementById("buttons")
var containerNumbers = document.getElementById("numbers")

//texto dos botões
var textoBotaoSomar = document.createTextNode("Somar")
var textoBotaoSubtrair = document.createTextNode("Subtrair")
var textoBotaoDividir = document.createTextNode("Dividir")
var textoBotaoMultiplicar = document.createTextNode("Multiplicar")
var textoBotaoLimpar = document.createTextNode("Limpar")
var textoCalcular = document.createTextNode("Calcular")
var textos = [textoBotaoMultiplicar, textoBotaoSomar, textoBotaoDividir, textoBotaoSubtrair, textoBotaoLimpar, textoCalcular]

//append buttons
for (var i = 0; i <= 5; i++) {
	var botao = document.createElement("button")
	var a = botao.appendChild(textos[i]) 
	botao.setAttribute("onclick",a +("()"))
	botao.setAttribute("id",("b") + i)
	botao.setAttribute("type","button")
	botao.setAttribute("class","operador")
  
	botao.setAttribute("onclick",a.textContent +("()")) 
	if (i == 3){
		var brline = document.createElement("br")
		var brline2 = document.createElement("br")
		containerButtons.appendChild(brline)
		containerButtons.appendChild(brline2)
	}
	containerButtons.appendChild(botao)
	
}
//append numbers
for (var i = 0; i < 9; i++) {
	var botao = document.createElement("button")
	botao.appendChild(document.createTextNode(i))
	botao.setAttribute("id", ("n") + i)
	botao.setAttribute("type", "button")
	botao.setAttribute("class", "number")
	botao.setAttribute("onclick", `inserir(${i})`)
	containerNumbers.appendChild(botao)
	if (i == 2 || i == 5 || i==8){
		var brline = document.createElement("br")
		var brline2 = document.createElement("br")
		containerNumbers.appendChild(brline)
		containerNumbers.appendChild(brline2)
	}
	
}

//functions operators
var calc = document.form.Calculo.value;
function Calcular(){
	calc = document.form.Calculo.value;
	if(calc){
   		document.form.Calculo.value = eval(calc);
   	}
}

function Somar(){
	document.form.Calculo.value += "+"
}
function Subtrair(){
	document.form.Calculo.value += "-"
}
function Dividir(){
	document.form.Calculo.value += "/"
}
function Multiplicar(){
	document.form.Calculo.value += "*"
}

function inserir(num){
    document.form.Calculo.value += num;
}

function Limpar(){
    document.form.Calculo.value = "";
}