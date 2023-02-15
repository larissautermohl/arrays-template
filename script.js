// Questão aberta - Esquenta
// Escreva um código que possua um array. Este array deve conter um valor numérico, uma string e um valor booleano. Imprima o valor contido em cada índice.

// const meuArray = [24, 'Marina', false]
// // índices        0       1       2
// const primeiroElemento = meuArray[0]
// const segundoElemento = meuArray[1]
// const terceiroElemento = meuArray[2]

// console.log(primeiroElemento, segundoElemento, terceiroElemento)

const arrayNomes = ['Lara', 'Ana', 'Lolla', 'Coco']
// const arrayNumeros = [20,30,40]
// // const meuArray = ['pao', 5, true]
// const arrayUnico = [2]
// const verValor = arrayUnico[0]
// console.log(arrayUnico)

// const tamanho = arrayUnico.length
// console.log(tamanho)
// // const arraySemValor = []

//const arrayNomesTamanho = arrayNomes.length //nao tem () pq é ppropriedade so se usa () em métodos
//console.log(arrayNomesTamanho [3])

// const temPao = meuArray.includes('pao')
// console.log(temPao)

// const arrayNomesCopia = arrayNomes

// arrayNomesCopia.push("livro")

// console.log(arrayNomes)
// console.log(arrayNomesCopia)

// const arrayNomesCopia = arrayNomes.slice()

// arrayNomesCopia.splice(2, 2)

// console.log(arrayNomesCopia)

const meusNumeros = [10, 40, 230, 1, 20]

const meusNumerosCopia = meusNumeros.slice()

meusNumerosCopia.pop()
meusNumerosCopia.push(2025)
meusNumeros.splice(2,1)
console.log(meusNumerosCopia)
console.log(meusNumeros)


// Questão aberta - Esquenta
// Escreva um código que possua um array. Este array deve conter um valor numérico, uma string e um valor booleano. Imprima o valor contido em cada índice.

const meuArray = [24, 'Marina', false]
// índices        0       1       2
const primeiroElemento = meuArray[0]
const segundoElemento = meuArray[1]
const terceiroElemento = meuArray[2]

// console.log(primeiroElemento, segundoElemento, terceiroElemento)


// -------------- PRÁTICA GUIADA ---------------
// Prática Guiada I

const minhasStrings = ['copo', 'plantinha', 'vinho']
// índices:               0          1          2

const meusNumeros = [24, 29, 10]

const minhaListaDeVariasCoisas = ['Buda', 2, true]

const meuNumeroSolitario = [2023]

const minhaListaVazia = []

// Prática Guiada II
// a)
const tamanhoMinhasStrings = minhasStrings.length
// console.log(`Tamanho do array minhasStrings:`, tamanhoMinhasStrings)

const quartoElementoMinhasStrings = minhasStrings[3]
// console.log(`Valor que está na posição 3 do array minhasStrings:`, quartoElementoMinhasStrings)

// b)
const temBuda = minhaListaDeVariasCoisas.includes(`Buda`)
// console.log(`minhaListaDeVariasCoisas inclui 'Buda'?`, temBuda)

const temDois = minhaListaDeVariasCoisas.includes(2)
// console.log(`minhaListaDeVariasCoisas inclui 2?`, temDois)

const temTrue = minhaListaDeVariasCoisas.includes(true)
// console.log(`minhaListaDeVariasCoisas inclui true?`, temTrue)

// c)
const valorItemUnico = meuNumeroSolitario[0]
// console.log(`Qual o valor do 'número solitário'?`, valorItemUnico)

const tamanhoMeuNumeroSolitario = meuNumeroSolitario.length
// console.log(`Qual o tamanho da lista meuNumeroSolitario?`, tamanhoMeuNumeroSolitario)

// Prática Guiada III
// a)
const minhasStringsCopiaErrada = minhasStrings

// b)
minhasStringsCopiaErrada.push('livro')

// c)
// console.log(`Array original`, minhasStrings)
// console.log(`Cópia ERRADA`, minhasStringsCopiaErrada)

// d)
const minhasStringsCopiaCERTA = minhasStrings.slice()
// console.log(`Cópia CERTA`, minhasStringsCopiaCERTA)

minhasStringsCopiaCERTA.splice(2, 2)

// console.log(`Array Original:`, minhasStrings)
// console.log(`Cópia CERTA pós splice():`, minhasStringsCopiaCERTA)


// ------------------ EXERCÍCIO DE FIXAÇÃO --------------------
// 1)
const minhaListaDeNumeros = [24, 10, 20, 29, 11, 1960, 2023, 13]

// 2)
const minhaListaDeNumerosCopia = minhaListaDeNumeros.slice()

// 3)
// a)
minhaListaDeNumerosCopia.pop()
// console.log(`Tirando o último elemento`, minhaListaDeNumerosCopia)

// b)
minhaListaDeNumerosCopia.push(6)
// console.log(`Adicionando o número 6 no final do array`, minhaListaDeNumerosCopia)

// c)
minhaListaDeNumerosCopia.splice(2, 1)
// console.log(`Removendo o item que está na posição 2`, minhaListaDeNumerosCopia)

// d)
// console.log(`Original:`, minhaListaDeNumeros)
// console.log(`Cópia:`, minhaListaDeNumerosCopia)