
/**
 * ЗАДАЧА 1
 * Переделай функцию на промис таким образом, чтобы промис возвращал значение 
 * через 2 секунды после вызова функции 
 */

 function greet() {

    return 'hello world';
}
   
   function greet2() {
   const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
   resolve(greet);
   },2000);
});
   
   return promise;
   }
   
   
   greet2().then((res) =>{
   console.log(res);
   });
   


// =============================================

/**
 * ЗАДАЧА 2
 * - Используй prompt и возвращай значение оттуда.
 * - Создай функцию, которая будет принимать значение с prompt и внутри которой будет промис.
 * Если значение не является числом, отклоняй промис и логируй "error".
 * Если значение четное, решай промис и возвращай "even" через 1 секунду.
 * Если значение не четное, решай промис и возвращай "odd" через 2 секунды.
 */
 const promt= prompt ('Введите какое-то значение');

 function chackedValue(value) {
 const promise = new Promise((resolve, reject) => {
 console.log(Number(value) % 2 === 0);
 console.log(value);
 if (typeof Number(value) !== 'number') {
 reject('error');
 } else if (Number(value) % 2 === 0) {
 setTimeout(() => {
 resolve('even');
 }, 1000);
 } else {
setTimeout(() => {
 resolve('odd');
}, 2000);
 }
 });
 
 return promise;
 
 }
 
 chackedValue(promt).then(console.log).catch(console.error);

// =============================================

/**
 * ЗАДАЧА 3
 * 
 * Если имэйл и пароль пользователя совпадают, при сабмите сохраняй данные с формы
 * в локальное хранилище и меняй кнопку login на logout и делай поля ввода
 * недоступными для изменения.
 * 
 * При перезагрузке страницы, если пользователь залогинен, мы должны видеть logout-кнопку
 * и недоступные для изменения поля с данными пользователя.
 * Клик по кнопке logout возвращает все в первоначальный вид и удаляет данные пользователя
 * с локального хранилища.
 * 
 * Если введенные данные не совпадают с нужными данными, вызывать аlert и
 * уведомлять об ошибке.
 */

const USER_DATA = {
    email: 'user@mail.com',
    password: 'secret',
};


// =============================================

/**
 * ЗАДАЧА 4
 * Кнопка increment должна каждую секунду увеличивать значение на 1
 * Кнопка decrement должна каждую секунду уменьшать значение на 1
 */
 let timer = null
 let value = document.querySelector(".counter-value")
 let inc = document.querySelector("[data-action='increment']");
 let dis = document.querySelector("[data-action='decrement']");
dis.addEventListener('click',function(){
    clearInterval(timer)
    timer =  setInterval(() => {
let x = Number(value.textContent)
value.textContent = x+1
  }, 1000);
})
inc.addEventListener('click',function(){
    clearInterval(timer)
   timer =  setInterval(() => {
    let x = Number(value.textContent)
    value.textContent = x-1
      }, 1000);
     
    }) 
    


 

// =============================================

/**
 * ЗАДАЧА 5
 * Переделай код так, чтобы все данные собирались
 * единовременно и приходили в виде массива
 */

const getData = () => new Promise((res) => {
    setTimeout(() => {
        const data = 1;
        console.log(data);
        res(data);
    }, 1000);
})

const getNewData = () => new Promise((res) => {
    setTimeout(() => {
        const data = 2;
        console.log(data);
        res(data);
    }, 1000);
})

const getAnotherData = () => new Promise((res) => {
    setTimeout(() => {
        const data = 3;
        console.log(data);
        res(data);
    }, 1000);
})

const getLastData = () => new Promise((res) => {
    setTimeout(() => {
        const data = 4;
        console.log(data);
        res(data);
    }, 1000);
})

const arr = [];

// getData()
// .then((data) => {
//     arr.push(data);
//     return getNewData();
// })
// .then((data) => {
//     arr.push(data);
//     return getAnotherData();
// })
// .then((data) => {
//     arr.push(data);
//     return getLastData();
// })
// .then(data => {
//     arr.push(data);
//     console.log(arr);
// })

// =============================================

/**
 * ЗАДАЧА 6
 * Функция startTimer должна логать каждый элемент массива раз в секунду.
 * Когда очередь дойдет до последнего элемента массива, продолжить логать в обратном порядке
 * до тех пор пока не дойдет до первого элемента, затем остановить процесс.
 * 
 */

const startTimer = (arr) => {
}

//  startTimer(["a", "b", "c", "d", "e", "f"]);

// =============================================

/**
 * ЗАДАЧА 7
 * Функция countWithDelay принимает 3 аргумента:
 * 1) количество секунд перед тем как сработает ф-ция logCount
 * 2) сколько раз должна отработать logCount
 * 3) задержка между вызовами ф-ции
 * 
 * logCount должна логировать кол-во вызовов
 */

const countWithDelay = (delay = 0, times = 0, stepInterval = 0) => {
}

//  countWithDelay(3000, 6, 1000);

 // =============================================

 /**
 * ЗАДАЧА 8
 * Создай список дел.
 * Есть инпут, в который вводится название задачи.
 * По нажатию на кнопку "Добавить" задача добавляется в список #list.
 * Рядом с каждой задачей находится кнопка "Удалить", чтобы можно было
 * убрать задачу из списка.
 * Список с задачами должен быть доступным после перезагрузки страницы.
 */


  // =============================================