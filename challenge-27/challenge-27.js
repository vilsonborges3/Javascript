(function (win, doc) {
    'use strict';
    function DOM(tag) {
        this.element = doc.querySelectorAll(tag);
        this.on = function ( event, callback) {
            Array.prototype.forEach.call(this.element, function (item) {
                item.addEventListener(event, callback,false);
            });
        };

        this.off = function (event, callback) {
            Array.prototype.forEach.call(this.element, function (item) {
                item.removeEventListener(event, callback, false);
            });
        };

        this.get = function () {
            return this.element;
        };

        this.forEachDom = function (fForEach) {
            return Array.prototype.forEach.call(this.element, fForEach);
        };

        this.mapDom = function (fMap) {
           return Array.prototype.map.call(this.element, fMap);
        };
        this.filterDom = function (fFilter) {
            return Array.prototype.filter.call(this.element, fFilter);
        };
        this.reduceDom = function (fReduce) {
            return Array.prototype.reduce.call(this.element, fReduce);
        };
        this.reduceRightDom = function (fReduceRight) {
            return Array.prototype.reduceRight.call(this.element, fReduceRight);
        };
        this.everyDom = function (fEvery) {
            return Array.prototype.every.call(this.element, fEvery);
        };
        this.someDom = function (fSome) {
            return Array.prototype.some.call(this.element, fSome);
        };
    }
    DOM.prototype.isArray = function isArray(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };

    DOM.prototype.isObject = function isObject(arg) {
        return Object.prototype.toString.call(arg) === '[object Object]';
    };

    DOM.prototype.isFunction = function isFunction(arg) {
        return Object.prototype.toString.call(arg) === '[object Function]';
    };

    DOM.prototype.isNumber = function isNumber(arg) {
        return Object.prototype.toString.call(arg) === '[object Number]';
    };

    DOM.prototype.isString = function isString(arg) {
        return Object.prototype.toString.call(arg) === '[object String]';
    };

    DOM.prototype.isBoolean = function isBoolean(arg) {
        return Object.prototype.toString.call(arg) === '[object Boolean]';
    };

    DOM.prototype.isNull = function isNull(arg) {
        if((Object.prototype.toString.call(arg) === '[object Null]') || (Object.prototype.toString.call(arg) === '[object Undefined]') )
            return true;
        return false;
    };

    /*
    Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
    métodos semelhantes aos que existem no array, mas que sirvam para os
    elementos do DOM selecionados.
    Crie os seguintes métodos:
    - forEach, map, filter, reduce, reduceRight, every e some.

    Crie também métodos que verificam o tipo do objeto passado por parâmetro.
    Esses métodos não precisam depender de criar um novo elmento do DOM, podem
    ser métodos estáticos.

    Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
    no objeto, como nos exemplos abaixo:
    DOM.isArray([1, 2, 3]); // true
    DOM.isFunction(function() {}); // true
    DOM.isNumber('numero'); // false

    Crie os seguintes métodos para verificação de tipo:
    - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
    O método isNull deve retornar `true` se o valor for null ou undefined.
    */

})(window, document);