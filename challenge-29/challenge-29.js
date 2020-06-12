(function(DOM) {
    'use strict';

    /*
    Vamos estruturar um pequeno app utilizando módulos.
    Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
    A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
    seguinte forma:
    - No início do arquivo, deverá ter as informações da sua empresa - nome e
    telefone (já vamos ver como isso vai ser feito)
    - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
    um formulário para cadastro do carro, com os seguintes campos:
      - Imagem do carro (deverá aceitar uma URL)
      - Marca / Modelo
      - Ano
      - Placa
      - Cor
      - e um botão "Cadastrar"

    Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
    carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
    aparecer no final da tabela.

    Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
    empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
    Dê um nome para a empresa e um telefone fictício, preechendo essas informações
    no arquivo company.json que já está criado.

    Essas informações devem ser adicionadas no HTML via Ajax.

    Parte técnica:
    Separe o nosso módulo de DOM criado nas últimas aulas em
    um arquivo DOM.js.

    E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
    que será nomeado de "app".
    */

    function app() {
        var $button = new DOM('[data-js="button"]');
        var $div = new DOM('[data-js="div1"]');
        var $img = new DOM('[data-js="url"]');
        var $marca = new DOM('[data-js="marca"]');
        var $ano = new DOM('[data-js="ano"]');
        var $placa = new DOM('[data-js="placa"]');
        var $cor = new DOM('[data-js="cor"]');
        var $table = new DOM('[data-js="table"]');

        $button.on('click', callback);

        function callback(event) {
            event.preventDefault();
            var textTable = toArray();
            if(hasValueInTheElementsHtml())
                createLineTable(textTable);
        }
        
        function toArray(){
            if(hasValueInTheElementsHtml()){
                var arr = [];
                arr.push($img.get()[0].value);
                arr.push($marca.get()[0].value);
                arr.push($ano.get()[0].value);
                arr.push($placa.get()[0].value);
                arr.push($cor.get()[0].value);
                return arr;
            }
            alert('Digite os campos em branco');
            return [];
        }
        function hasValueInTheElementsHtml() {
            return ($img.get()[0].value !== '') && ($marca.get()[0].value !== '') && ($ano.get()[0].value !== '') && ($placa.get()[0].value !== '') && ($cor.get()[0].value !== '');
        }
        function createLineTable(text) {
            var $newTr = document.createElement('tr');
            text.forEach(function (item) {
                var $newTd = document.createElement('td');
                var newTextNode = document.createTextNode(item);
                $newTd.appendChild(newTextNode);
                $newTr.appendChild($newTd);
            });
            $table.get()[0].appendChild($newTr);
        }
    }

    app();
})(window.DOM);
