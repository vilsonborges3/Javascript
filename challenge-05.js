/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = ['dark2', 5, true, null, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myarray);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function funcao1(array1, num1) {
    return array1[num1];
}

var n = 0, res = undefined;
var arr=[0, 1, 2];

res = funcao1(arr,n);

console.log(res);

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var type = [1, 'casa', null, undefined, false];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
var type = [1, 'casa', null, undefined, false], res = [];
function funcao1(array1) {
    return array1;
}
res = funcao1(type);
console.log(res);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
var ABook = [];
function book(name) {
    var fim = [];
    var obj = {Contos: {quantidadePaginas: 100, autor: 'Carlos Manuel de Andrade', editora: 'Saraiva'},
        StarWars: {quantidadePaginas: 20, autor: 'Vilson Borges', editora: 'WattPad'},
        GameOfThrones: {quantidadePaginas: 1000, autor: 'JJ Almartin', editora: 'sei la'}};
    if (name === 'Contos'){
        return obj.Contos;
    } else{
        if (name === 'StarWars'){
            return obj.StarWars;
        } else{
            if(name === 'GameOfThrones'){
                return obj.GameOfThrones;
            }else{
                fim = [obj.Contos, obj.StarWars, obj.GameOfThrones];
                return fim;
            }
        }
    }
}
ABook = book('GameOfTh');
console.log(ABook);

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
ABook = book(TheName);
console.log('O livro ' + TheName + ' tem ' + ABook.quantidadePaginas + ' páginas');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('Autor do livro ' + TheName + ' é ' + ABook.autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + TheName + ' foi publicado pela editora ' + ABook.editora);
