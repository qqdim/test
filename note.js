'use strict'
// console.log(Boolean(undefined)) // false
// console.log(Boolean(null))      // false
// console.log(undefined==true)    // false
// console.log(undefined==false)   // false
// console.log(null==true)         // false
// console.log(null==false)        // false
// console.log(undefined==null)    // true
// console.log('---')
// console.log(Boolean([]))    // true
// console.log(Boolean({}))    // true
// console.log([]==true)   // false
// console.log([]==false)  // true
// console.log({}==true)   // false
// console.log({}==false)  // false
// console.log('---')
// console.log(null + 2)       //2
// console.log(undefined + 2)  //NaN

// let a = [1, 2, 3]
// let b = a
// b.push(4)
// let c = [1, 2, 3, 4]
// console.log('a', a)     //[1, 2, 3, 4]
// console.log('b', b)    //[1, 2, 3, 4]
// console.log(a === b)   //true
// console.log(a === c)    //false

// let a = 'Variable a'
// let b = 'Variable b'
// {
//     a = "New Variable A"
//     let b = 'Local Variable B'  //new local variable
//     console.log('Scope A', а)
//     console.log('Scope B', b) 
//     console.log('Scope C', с)
//     let c = 'Something'
// }
// console.log('А:', а)    //new A
// console.log('B:', b)    //old B
// console.log('C:', c)    //err

// const массивы[] и объекты{} можно изменять содержимое

// замыкание
// Замыкание – это функция, которая запоминает свои внешние переменные и может 
// получить к ним доступ. В некоторых языках это невозможно, или функция должна 
// быть написана специальным образом, чтобы получилось замыкание. Но, как было
//  описано выше, в JavaScript, все функции изначально являются замыканиями (есть 
//     только одно исключение, про которое будет рассказано в Синтаксис "new Function").

// То есть, они автоматически запоминают, где были созданы, с помощью скрытого свойства 
// [[Environment]] и все они могут получить доступ к внешним переменным.

// Когда на собеседовании фронтенд-разработчик получает вопрос: «что такое замыкание?», –
//  правильным ответом будет определение замыкания и объяснения того факта, что все 
//  функции в JavaScript являются замыканиями, и, может быть, несколько слов о технических
//   деталях: свойстве [[Environment]] и о том, как работает лексическое окружение.


// for(var i=0; i<6; i++){
//     (function(j){
//         console.log(j)
//     })(i)
// }

// function(j){console.log(j)}(4)


// let user = {
//     name:'john',
// }
// console.log(user.surname='smith')
// console.log(user.name='pete')
// console.log(delete user.name)
// console.log( user)





// "use strict"
// let user = { name: "Джон",f() {
//     alert( this.name );
//   }
//    };
// let admin = { name: "Админ",f() {
//     alert( name );
//   }
//    };



// // используем одну и ту же функцию в двух объектах
// // user.f = sayHi;
// // admin.f = sayHi;

// // вызовы функции, приведённые ниже, имеют разное значение this
// // "this" внутри функции является ссылкой на объект, который указан "перед точкой"
// user.f(); // Джон  (this == user)
// admin.f(); // Админ  (this == admin)

// admin['f']();




// function Calculator(){
//     // ... ваш код ...
//     this.read = function(){
//         this.a = +prompt('a')
//         this.b = +prompt('b')
//     },
//     this.sum= function(){
//         return this.a+this.b
//     },
//     this.mul = function(){
//         return this.a*this.b
//     }
//   };
//   let calc = new Calculator()
//   calc.read();
//   console.log(calc.a,calc.b)
//   console.log( calc.sum() );
//   console.log( calc.mul() );


// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений
// alert(accumulator['qwe']); // выведет сумму этих значений

let calc = new Calculator();

console.log(calc.calculate("3 + 7")); // 10


function Calculator() {
  this.method = {
    aa: function (a, b) {
      return a + b;
    },
    '-': function (a, b) {
      return a - b;
    },
  };

  this.calculate = function (str) {
    let split = str.split(' ')
    let a = split[0]
    // let metho = split[1]
    let b = split[2]
    console.log(split)
    return this.method.aa(a, b)
  };
}