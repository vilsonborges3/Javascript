(function(){
    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    */
    'use strict';
        /*
        Crie uma função chamada `cleanCPF`, que receba um CPF por parâmetro, e
        retorne esse CPF limpo (somente os números).
        Usando os CPFs abaixo, mostre no console que a limpeza funciona para todos
        eles! Use um console.log para cada CPF.
        - "049-214 342-1"
        - "210.458.522-05"
        - "735 500 794 - 22"
        - "101.123-131x32"
        */
        document.write( '<br>Limpando CPFs:<br>' );
        var cleanCPF = function cleanCPF(cpf){
            var regex = /(\d{3})[\W]+(\d{3})[\W]+(\d{3})[\D]+(.+)/g;
            function replaceCPF(regex, term1, term2, term3, term4) {

                return term1+term2+term3+term4;
            }
            return cpf.replace(regex,replaceCPF);
        };
        document.write(cleanCPF('049-214 342-1')+'<br>' );
        document.write(cleanCPF('210.458.522-05')+'<br>' );
        document.write(cleanCPF('735 500 794 - 22')+'<br>' );
        document.write(cleanCPF('101.123-131x32')+'<br>' );



        /*
        Usando os CPFs limpos acima, deixe-os com a formatação correta de CPF.
        Ex.: "999.999.999-99"
        Mostre o resultado no console.
        */
        document.write( '<br>Formatando CPFs corretamente:<br>' );
        var formalized = function formalized(cpf){
            var regex = /(\d{3})[\W]+(\d{3})[\W]+(\d{3})[\D]+(.+)/g;
            function replaceCPF(regex, term1, term2, term3, term4) {

                return term1 + '.' + term2 + '.' + term3 + '-' + term4;
            }
            return cpf.replace(regex,replaceCPF);
        };
        document.write(formalized('049-214 342-1')+'<br>' );
        document.write(formalized('210.458.522-05')+'<br>' );
        document.write(formalized('735 500 794 - 22')+'<br>' );
        document.write(formalized('101.123-131x32')+'<br>' );

        /*
        Crie uma expressão regular que faça match com as palavras "junho" ou "julho",
        usando o mínimo de caracteres possíveis na regex.
        Para garantir que a regex funciona, teste-a usando o método match. Se houver
        o match, o método retorna um array com os matches. Caso contrário, ele
        retornará null.
        Mostre no console o resultado do match para a frase:
        "Os meses de janeiro, junho e julho começam com a letra j."
        O resultado deve ser:
        ["junho", "julho"]
        */
        var regex = /ju\w{3}/g;
        var ret = [];
        var sentence = 'Os meses de janeiro, junho e julho começam com a letra j.';
        ret = sentence.match(regex);
        document.write( '<br>Match com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho começam com a letra j.":<br>' );
        document.write( ret+'<br>' );

        /*
        Crie uma expressão regular que faça o match com a abertura de uma tag
        HTML qualquer.
        Ex.: "<div>", "<section>", "<blockquote>".
        Use o método match e faça o teste com a marcação abaixo:
        "<div><section><blockquote>Texto <img /></blockquote></section></div>"
        O resultado deve ser:
        ["<div>", "<section>", "<blockquote>"]
        */
        document.write( '<br>Match com a abertura de uma tag HTML:<br>' );

        var text = [];
        var regex = /<\w+>/g;
        text = '<div><section><blockquote>Texto<img/></blockquote></section></div>'.match(regex);
        console.log(text);
        /*
        Crie uma expressão regular que faça o match com uma tag HTML vazia, casando
        com a abertura e fechamento da tag.
        Ex.: "<div></div>", "<section></section>", "<blockquote></blockquote>".
        Use o método match e faça o teste com a marcação abaixo:
        "<div><ul><li></li><li></li><li><span></span></li></ul></div>"
        O resultado deve ser:
        ["<li></li>", "<li></li>", "<span></span>"]
        */
        console.log( 'Match com tags HTML vazias (abertura e fechamento da tag):\n' );
        var regex2 = /<\w+><\/\w+>/g;
        var text2 = '<div><ul><li></li><li></li><li><span></span></li></ul></div>'.match(regex2);
        console.log(text2);


        /*
        Vamos complicar um pouco agora :D

        Crie uma expressão regular que faça o match com um texto existente dentro de
        uma tag HTML. O texto deve ser capturado e substituído por:
        'O texto dentro da tag "[NOME DA TAG]" é "[TEXTO]"'

        Use a marcação abaixo para fazer o replace:
        "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"

        A marcação deve permanecer como está, somente o texto deve ser substituído.
        No replace, utilize quebras de linha para deixar uma tag por linha.

        O resultado deve ser esse:
        <h1>O texto dentro da tag "h1" é "Título da página"</h1>
        <p>O texto dentro da tag "p" é "Este é um parágrafo"</p>
        <footer>O texto dentro da tag "footer" é "Rodapé"</footer>

        Uma dica: faça o match aos poucos. Para facilitar o teste, use o site
        https://regex101.com/#javascript e verifique se as capturas estão
        corretas, para depois aplicar no código ;)
        */

        var regex3 = /<(\w+)>([^<>/]+)<\/\w+>/g;
        var valor = '<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>';
        function capitura(tudo, tag, cont){
                  return '<'+ tag +'>' + 'O texto dentro da tag ' + tag + ' é ' + cont + '</'+ tag +'> \n';
        }
        console.log( 'Fazer replace dos textos das tags:' );
        console.log(valor.replace(regex3, capitura));
})();