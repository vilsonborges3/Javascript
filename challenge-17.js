(function () {
    'use strict';
    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    */

    /*
    Em todos os exercícios desse desafio, nós vamos utilizar expressões
    regulares! Para isso, iremos usar o texto abaixo. Coloque-o em uma
    variável chamada `text`:
    "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro."
    */
    var text3 = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 /6/ 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.'
    var text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.';
    var text2 = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.';
    /*
    Vamos começar com umas brincadeiras fáceis :D
    Troque o nome "Manuel Marques de Sousa" pelo seu nome, e mostre o resultado
    no console:
    */
    document.write( 'Adicionando seu nome no texto: <br>' );
    text = text.replace('Manuel Marques de Sousa', 'Vilson Camilo Borges de Moraes Neves');
    document.write(text);

    /*
    Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
    console.
    Ex: Se você for da São Paulo, substitua por "paulista".
    */
    document.write( '<br>Trocando naturalidade: <br>' );
    text = text.replace('brasileiro', 'araxaence');
    document.write(text);
    /*
    Substitua todos os números por um traço `-`. Cada caractere de número deve
    ser um traço. Mostre o resultado no console:
    */
    text = text.replace(/\d/g,'-');
    document.write( '<br>Trocando números por -:<br>' );
    document.write(text);

    /*
    Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
    minúsculo por "0" (número zero). Mostre o resultado no console:
    */
    document.write( '<br> Trocando de "D" a "h" por "0":<br>' );
    text = text.replace(/[D-Za-h]/g,'0');
    document.write(text);

    /*
    Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
    Mostre o resultado no console:
    */
    document.write( '<br>Trocando "A" e "a" por "4":<br>' );
    text = text.replace(/A|a/g ,'4');
    document.write(text);


    /*
    Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
    o método `toUpperCase()`. Mostre o resultado no console:
    */
    document.write( '<br>"O Centauro de Luvas" em caixa alta:<br>' );
    var qlq = 'O Centauro de Luvas'.replace(/(\w)/g, function (total, letra) {
        return letra.toUpperCase();
    });
    document.write(qlq);

    /*
    Agora iremos substituir as datas no formato "13 de junho de 1804" para
    "13/06/1804". A primeira coisa a fazer é criar uma função chamada
    `getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
    retornar o número correspondente a esse mês.
    Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
    Números com menos de dois dígitos devem ter um zero na frente.
    Crie então a função e mostre no console os retornos para os meses de março,
    setembro e dezembro.
    Use um console.log para cada mês, usando a frase:
    "O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
    */
    document.write( '<br>Meses representados por números:<br>' );
    var getMonthNumber = function getMonthNumber(month){
        var months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        for (var i = 0; i<months.length; i++){
            if(months[i] === month){
                i++;
                return i;
            }
        }
    };
    document.write('O mês de março é representado pelo número ' + getMonthNumber('Março') + '.<br>');
    document.write('O mês de setembro é representado pelo número ' + getMonthNumber('Setembro') + '.<br>');
    document.write('O mês de dezembro é representado pelo número ' + getMonthNumber('Dezembro') + '.<br>');

    /*
    Agora, declare uma variável chamada `regexDate` que irá receber a expressão
    regular que irá fazer o match com as datas. Crie grupos de captura para o
    dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
    meses que estão no texto, não precisa adicionar todos.
    Com o que vimos até agora, você consegue fazer :D
    Mostre a regex no console.
    */
    document.write( '<br>Regex que vai fazer o match com as datas do texto:<br>' );
    var regexDate = function regexDate(exp){
        var day = exp.replace(/[(a-z)(A-Z)]/g, '').replace(/\d\d\d\d/, '');
        var isWhithMonth = function isWhithmont() {
            var months2 = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
            var aux = exp.split(' ');
            for (var i = 0; i<aux.length; i++){
                for (var j = 0; j < months2.length; j++) {
                    if(months2[j] === aux[i]){
                        return months2[j];
                    }
                }
            }

        };

        var theMonth = isWhithMonth();

        theMonth = getMonthNumber(theMonth);

        var year = exp.replace(/[(a-z)]/g,'').replace(/\d\d/, '');

        return day+'/'+theMonth+'/'+year;
    };

    var isolateData = function isolateData(textIn, valu_init){
        var data = {exp: [], ind_init: 0, ind_end: 0};
        var text_ = [];
        var aux = '';
        var cont = 0;
        //document.write(textIn.match(/\d\d de/));
        if(textIn.match(/\d\d de/)){
            //document.write(textIn);
            text_ = textIn.split(' ');
            //document.write(text_[0]);
            for (var i = valu_init; i < text_.length; i++){
                //document.write(text_[i]);
                if(text_[i].match(/\d\d/)){
                    data.ind_init = i;
                    //document.write(text_[i].match(/\d\d\d\d/));
                    while ((!text_[i].match(/\d\d\d\d/)) !== false){
                        document.write(aux);
                        aux = text_[i];

                        data.exp.push(aux);
                        i++;
                    }
                    data.ind_end = i;
                    data.exp.push(text_[i]);
                    text_ = text_.join(' ');
                    data.exp = data.exp.join(' ');

                    return data;
                }
            }

        }
        else {
            return null;
        }
    };
    //document.write(regexDate('13 de junho de 1804'));
    //isolateData(text2);
    //document.write( isolateData(text3).exp );
    var subText = function subText(texto){
        var ind = {exp: [], ind_init: 0, ind_end: 0};
        var data = '';
        var init = 0;
        while((texto.match(/\d\d de/))){
            document.write('teste');
            ind = isolateData(texto, init);
            document.write(init);
            init = ind.ind_end + 6;
            //document.write(typeof ind.exp);
            data = regexDate(ind.exp);
            //document.write(data);
            texto = texto.split(' ');
            texto.splice(ind.ind_init, (ind.ind_end - ind.ind_init)+1, data);
            texto = texto.join(' ');
        }
        return texto;
    };
    document.write(subText(text2));
    //document.write(regexDate('25 de fevereiro de 1997'));
    /*
    Agora crie a função que irá fazer o replace dos dados. A função será chamada
    de `replaceDate`. Ela deve retornar a data no formato:
    "[DIA]/[MÊS]/[ANO]"
    Após criar a função, faça o replace das datas no texto, mostrando no
    console o resultado.
    */
    document.write( '<br>Replace de datas:<br>' );
})();