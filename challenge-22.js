(function () {
    /*
    Crie dois objetos, que serão duas pessoas. Cada um deve ter as propriedades
    `name` e `lastName`, preenchidos com o nome e sobrenome da pessoa.
    */
    var vilson = {name: 'vilson', lestname: 'Borges'};
    var heitor = {name: 'Pedro', lestname: 'Alves'};

    /*
    Agora crie uma função chamada `getFullName` que retorne as propriedades
    `name` e `lastName` dos objetos acima, formando um nome completo.
    A função não deve receber nenhum parâmetro, mas as propriedades `name` e
    `lastName` devem ser dinâmicas.
    A mesma função deve servir para as duas pessoas (ou qualquer outra que for
    criada).
    Depois disso, invoque essa função, mostrando no console o nome completo das
    pessoas que foram criadas anteriormente, passando as pessoas acima como
    contexto da função. Use um console.log por pessoa.
    */
    console.log( 'O nome das pessoas é:' );
    function getFullName(){
        return this.name + ' ' + this.lestname;
    }
    console.log(getFullName.call(vilson));
    console.log(getFullName.call(heitor));

    /*
    Crie uma função chamada `sum`. Essa função pode receber uma lista de
    parâmetros variável, e deverá retornar a soma de todos eles.
    Não use estruturas de repetição para somar os argumentos.
    Na primeira linha, dentro da função, deixe um console.log para mostrar todos
    os parâmetros passados para essa função.
    */
    function sum(){
        console.log(arguments);
        var resolt = Array.prototype.reduce.call(arguments,
            function (acumulated, actual, index) {
                            return actual + acumulated;
        });
        return resolt;
    }

    /*
    Mostre no console que a função acima funciona, invocando-a em 3 console.log
    diferentes, com quantidades variáveis de parâmetros passados.
    */
    console.log( '\nSomar alguns números:' );
    console.log(sum(1,1,1,1,4));
    console.log(sum(7,8,9));
    console.log(sum(30,31));

    /*
    Declare uma variável chamada `userEntry`, que irá receber alguns valores
    entrados pelo usuário. Mostre para o usuário a seguinte frase:
    "Entre com alguns números que serão somados:"
    */

    var userEntry = [];
    var i=0;
    userEntry.push(prompt('Entre com alguns valores:'));
    while (userEntry[i])
    {
        userEntry.push(prompt('Entre com alguns valores:'));
        i++;
    }


    /*
    Mostre no console o valor entrado pelo usuário:
    */
    console.log( '\nEntrada do usuário:' );
    userEntry.forEach(function (value) {
        console.log(value);
    });
    console.log('Em string:' + userEntry.toString());
    /*
    Crie uma função chamada `justNumbers`, que recebe por parâmetro uma string
    e remove tudo o que não for número, retornando um array somente com os números
    da string. Mostre a representação em string dessa função no console.
    */

    console.log( '\nFunção que limpa entrada do usuário (somente números):' );
    function justNumbers(){
        var theNumbers = [];

        Array.prototype.forEach.call(arguments,
            function (item) {
                        for(var i = 0; i<item.length; i++)
                        {
                            if (item[i].match(/^\d+$/g))
                                theNumbers.push(item[i]);
                        }
        });
        return theNumbers;
    }
    /*
    Usando a função acima, faça a limpeza dos valores entrados pelo usuário,
    atribuindo o resultado à uma variável `numbers`.
    */
    console.log( '\nEntrada do usuário limpa. Somente números:' );
    var bla = justNumbers(userEntry);
    console.log(bla);

    /*
    Agora com o array de números, utilize a função `sum` para somar todos os
    números desse array e mostre o resultado no console.
    */
    console.log( '\nSomar números entrados pelo usuário:' );

    function sumar(){
        var resolt = 0;
        Array.prototype.forEach.call(arguments,
            function (item) {
                        for(var i = 0; i<item.length; i++)
                        {
                            resolt += +(item[i]);
                        }
        });

        return resolt;
    }
    console.log(sumar(bla));
})(window, document);