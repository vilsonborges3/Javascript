/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

(function (win, doc) {
    'use strict';
    var $0 = doc.querySelector('[data-js="0"]');
    var $1 = doc.querySelector('[data-js="1"]');
    var $2 = doc.querySelector('[data-js="2"]');
    var $3 = doc.querySelector('[data-js="3"]');
    var $4 = doc.querySelector('[data-js="4"]');
    var $5 = doc.querySelector('[data-js="5"]');
    var $6 = doc.querySelector('[data-js="6"]');
    var $7 = doc.querySelector('[data-js="7"]');
    var $8 = doc.querySelector('[data-js="8"]');
    var $9 = doc.querySelector('[data-js="9"]');
    var $soma = doc.querySelector('[data-js="soma"]');
    var $sub = doc.querySelector('[data-js="sub"]');
    var $div = doc.querySelector('[data-js="div"]');
    var $mult = doc.querySelector('[data-js="mult"]');
    var $igual = doc.querySelector('[data-js="igual"]');
    var $ce = doc.querySelector('[data-js="ce"]');
    var $screen = doc.querySelector('[data-js="screen"]');

    $0.addEventListener('click', function (event) {
        event.preventDefault();
        if ($screen.value !== '0')
            $screen.value += '0';

    });

    $1.addEventListener('click', function (event) {
        event.preventDefault();
        if ($screen.value !== '0')
            $screen.value += '1';
        else
            $screen.value = '1';
    });

    $2.addEventListener('click', function (event) {
        event.preventDefault();
        if ($screen.value !== '0')
            $screen.value += '2';
        else
            $screen.value = '2';
    });

    $3.addEventListener('click', function (event) {
        event.preventDefault();
        if ($screen.value !== '0')
            $screen.value += '3';
        else
            $screen.value = '3';
    });

    $4.addEventListener('click', function (event) {
        event.preventDefault();
        if ($screen.value !== '0')
            $screen.value += '4';
        else
            $screen.value = '4';
    });

    $5.addEventListener('click', function (event) {
        event.preventDefault();
        if ($screen.value !== '0')
            $screen.value += '5';
        else
            $screen.value = '5';
    });

    $6.addEventListener('click', function (event) {
        event.preventDefault();
        if ($screen.value !== '0')
            $screen.value += '6';
        else
            $screen.value = '6';
    });

    $7.addEventListener('click', function (event) {
        event.preventDefault();
        if ($screen.value !== '0')
            $screen.value += '7';
        else
            $screen.value = '7';
    });

    $8.addEventListener('click', function (event) {
        event.preventDefault();
        if ($screen.value !== '0')
            $screen.value += '8';
        else
            $screen.value = '8';
    });

    $9.addEventListener('click', function (event) {
        event.preventDefault();
        if ($screen.value !== '0')
            $screen.value += '9';
        else
            $screen.value = '9';
    });

    $soma.addEventListener('click', function (event) {
        event.preventDefault();
        $screen.value = $screen.value.replace(/\D+$/,'+');
        if($screen.value[$screen.value.length-1] !== '+')
            $screen.value += '+';
    });

    $sub.addEventListener('click', function (event) {
        event.preventDefault();
        $screen.value = $screen.value.replace(/\D+$/,'-');
        if($screen.value[$screen.value.length-1] !== '-')
            $screen.value += '-';
    });

    $mult.addEventListener('click', function (event) {
        event.preventDefault();
        $screen.value = $screen.value.replace(/\D+$/,'x');
        if($screen.value[$screen.value.length-1] !== 'x')
            $screen.value += 'x';
    });

    $div.addEventListener('click', function (event) {
        event.preventDefault();
        $screen.value = $screen.value.replace(/\D+$/,'÷');
        if($screen.value[$screen.value.length-1] !== '÷')
            $screen.value += '÷';
    });

    $igual.addEventListener('click', function (event) {
        event.preventDefault();
        var regex = /(\d+)(\D)(\d+)+/;
        function takenum(capituratotal, num1, operation, num2){
            if (operation === '+')
                return (+num1) + (+num2);
            if (operation === '-')
                return (+num1) - (+num2);
            if (operation === '÷')
                return (+num1) / (+num2);
            if (operation === 'x')
                return (+num1) * (+num2);
        }
        $screen.value = $screen.value.replace(regex, takenum);

    });
    $ce.addEventListener('click', function (event) {
        event.preventDefault();
        $screen.value = '0';
    })

})(window, document);