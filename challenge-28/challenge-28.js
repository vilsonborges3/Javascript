(function (doc) {
    'use strict';
    /*
    No HTML:
    - Crie um formulário com um input de texto que receberá um CEP e um botão
    de submit;
    - Crie uma estrutura HTML para receber informações de endereço:
    "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
    preenchidas com os dados da requisição feita no JS.
    - Crie uma área que receberá mensagens com o status da requisição:
    "Carregando, sucesso ou erro."

    No JS:
    - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
    deve ser limpo e enviado somente os números para a requisição abaixo;
    - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
    "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
    no input criado no HTML;
    - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
    com os dados recebidos.
    - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
    a mensagem: "Buscando informações para o CEP [CEP]..."
    - Se não houver dados para o CEP entrado, mostrar a mensagem:
    "Não encontramos o endereço para o CEP [CEP]."
    - Se houver endereço para o CEP digitado, mostre a mensagem:
    "Endereço referente ao CEP [CEP]:"
    - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
    adicionar as informações em tela.
    */
    var $button = doc.querySelector('[data-js="button"]');
    var $cepdigit = doc.querySelector('[data-js="cep"]');
    var $logradouro = doc.querySelector('[data-js="logradouro"]');
    var $bairro = doc.querySelector('[data-js="bairro"]');
    var $estado = doc.querySelector('[data-js="estado"]');
    var $cidade = doc.querySelector('[data-js="cidade"]');
    var $cep = doc.querySelector('[data-js="cep2"]');
    var $status = doc.querySelector('[data-js="status"]');



    on('[data-js="button"]', 'click', function (e) {
        e.preventDefault();
        var cep = $cepdigit.value;
        doCepTreatment(cep);
    }, false);

    function doErrorHandling(ajax, cp) {
        try{
            var data = JSON.parse(ajax.response);
            console.log(data);
            $logradouro.value = data.logradouro;
            $bairro.value = data.bairro;
            $estado.value = data.uf;
            $cidade.value = data.localidade;
            $cep.value = data.cep;
            $status.value = ajax.status;
        }
        catch (e) {
            $status.value = 'Não encontramos o endereço para o CEP ' + cp + '.';
            $logradouro.value = '';
            $bairro.value = '';
            $estado.value = '';
            $cidade.value = '';
            $cep.value = '';
        }
    }

    function doCepTreatment(cep) {
        var ajax = new XMLHttpRequest();
        if (cep){
            cep = cep.replace(/\D+/g,'');
            ajax.open('GET', 'https://viacep.com.br/ws/' + cep + '/json/');
            ajax.send();
            $status.value = 'Buscando informações para o CEP ' + cep;

            ajax.addEventListener('readystatechange',
                function () {
                    doErrorHandling(ajax, cep);
                });
        }
        else
            alert('Digite o cep');
    }

    function on(element, event, callback) {
        doc.querySelector(element).
        addEventListener(event, callback)
    }
})(document);