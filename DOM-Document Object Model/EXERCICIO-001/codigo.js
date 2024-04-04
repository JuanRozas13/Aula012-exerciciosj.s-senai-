// 1. Crie um documento HTML simples com cabeçalho, parágrafo e lista. Abra este documento no navegador e explore o objeto document no console do navegador.
// 2. Adicione um id a um elemento em seu documento HTML. Use document.getElementById para selecionar esse elemento.


// var paragrafo = document.getElementById("paragrafo")
// paragrafo.style.color ="blue"
// paragrafo.textContent= "ola"



// -----------------------------------------//-----------------------------------------



// 3. Adicione a mesma classe a vários elementos em seu documento HTML. Use document.getElementsByClassName para selecionar esses elementos.


// var classe = document.getElementsByClassName("container")[0]
// classe.style.color="green"

// var classe = document.getElementsByClassName("container")[1]
// classe.style.color="red"



// -----------------------------------------//-----------------------------------------



// 4. Use document.getElementsByTagName para selecionar todos os elementos <li> em sua lista.


// var lista = document.getElementsByTagName("li")[0]
// lista.style.color="blue"

// var lista = document.getElementsByTagName("li")[1]
// lista.style.color="red"



// -----------------------------------------//-----------------------------------------



//5. Use document.querySelector para selecionar o primeiro elemento com uma classe específica. Use document.querySelectorAll para selecionar todos os elementos com essa classe.


// var paragrafo = document.querySelector("p")
// paragrafo.style.color="red"

// var paragrafo = document.querySelectorAll("ol")
// var lista_n_o = document.getElementsByTagName("li") 
// paragrafo.style.color="green"



// -----------------------------------------//-----------------------------------------



// 6. Selecione um elemento em seu documento e use a propriedade textContent para alterar o conteúdo de texto desse elemento.

// var h1 = document.getElementsByTagName("h1")[0]
// h1.style.color="red"
// h1.textContent="é frango de mais moço"



// -----------------------------------------//-----------------------------------------



// 7. Selecione um elemento em seu documento e use o método setAttribute para alterar um dos seus atributos. Por exemplo, você pode alterar o valor do atributo class.

// var hw = document.getElementById("hw")
// hw.setAttribute("class", "destaque")



// -----------------------------------------//-----------------------------------------



// 8. Selecione um elemento em seu documento e use a propriedade style para alterar o estilo desse elemento. Por exemplo, você pode alterar a cor do texto para vermelho.


// var vermelho = document.getElementsByTagName("h1")[0]
// vermelho.style.color= "red"



// -----------------------------------------//-----------------------------------------



// 9. Use o método createElement para criar um novo elemento <p>. Use o método appendChild para adicionar este elemento ao final do corpo do seu documento.


// const crear = document.createElement("h2")
// var fifa = document.createTextNode("fifa é melhor que pes");
// crear.appendChild(fifa);
// document.body.appendChild(crear);



// -----------------------------------------//-----------------------------------------


// 10. Selecione um elemento em seu documento e use o método removeChild para removê-lo. Você terá que selecionar o pai desse elemento e chamar removeChild nele, passando o elemento que você deseja remover como argumento.


var elementPai = document.getElementsByTagName("div")[0]

var elementFilho = document.getElementsByTagName("h1")[0]

elementPai.removeChild(elementFilho)