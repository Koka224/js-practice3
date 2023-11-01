// 1) Создать объект myBrowser со свойствами name (значение “Chrome”) и version (значение «9.2») - двумя способами
// myBrowser = {
//   name: "Chrome",
//   version: "9.2",
// };
// console.log(myBrowser);
// 2 способ
// const myBrowser2 = {
//   name2: "",
//   version2: "",
// };
// myBrowser2.name2 = "Chrome";
// myBrowser2.version2 = "9.2";
// console.log(myBrowser2);
//
// 2) Создать объект cinema со свойствами soldTickets (хранит в себе число, которое отображает кол-во проданных билетов)
//  и ticketCost (цена билета) и задайте значения. Напишите функцию которая высчитывает сколько денег заработал кинотеатр
//  за один сеанс.
// const cinema = {
//   soldTickets: 26,
//   ticketCost: 200,
// };
// function Calcinema(cinema) {
//   return cinema.soldTickets * cinema.ticketCost;
// }
// let res = Calcinema(cinema);
// console.log(
//   `Количество проданных билетов за один сеанс этого фильма ${res} билетов`
// );
//
// 3) Напишите функцию, которая принимает в качестве аргумента объект и возвращает вложенный массив вида [[key, value], [key, value]].
//  То есть, если я вызову функцию objectToArr({ a: 1, b: 2 }), то результатом выполнения должен быть массив - [['a', 1], ['b', 2]].
//  Для решения этой задачи вам нужны будут следующие методы: Object.keys() или Object.entries()
// const objkey = {
//   a: 1,
//   b: 2,
// };
// function objectToArr(objkey) {
//   return Object.entries(objkey);
// }
// const asd = objectToArr(objkey);
// console.log(asd);
// 4) Дан объект. Нужно извлечь число 123 одной строкой
// const myCrazyObject = {
//   soneArray: [7, 9, { purpose: "путаница", number: 123 }, 3, 3],
// };
// console.log(myCrazyObject.soneArray[2].number);
//
// 5) Напишите функцию, которая проверяет, является ли элемент именно простым объектом,
// а не массивом, null и т.п. Тут вам пригодится метод Array.isArray()
// const Five = {
//   one: 1,
//   two: 2,
// };

// function FuncFive() {
//   return Array.isArray(Five);
// }
// console.log(FuncFive(Five));
// 6) Дан массив из имен например ['john', 'jane', 'kate', 'peter'].
// Вывести новый массив в котором каждая первая буква элемента будет с большой буквы.
// const names = ["john", "jane", "kate", "peter"];

// let new_name = names.map(
//   (new_name) => new_name[0].toUpperCase() + new_name.slice(1).toLowerCase()
// );
// console.log(new_name);
//
// 7) Сумма диапазона. Напишите функцию range, принимающую два аргумента, начало и конец диапазона,
//  и возвращающую массив, который содержит все числа из него, включая начальное и конечное.
//  Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. Запустите указанную выше инструкцию и убедитесь,
//  что она возвращает сумму значений массива.
// function range(start, end) {
//   if (start > end) {
//     return [];
//   }

//   const result = [];
//   for (let i = start; i <= end; i++) {
//     result.push(i);
//   }
//   return result;
// }

// function sum(arr) {
//   let total = 0;
//   for (const number of arr) {
//     total=total+ number;
//   }
//   return total;
// }

// const start = 1;
// const end = 5;
// const numbers = range(start, end);
// const totalSum = sum(numbers);

// console.log("Диапазон чисел:", numbers);
// console.log("Сумма чисел в диапазоне:", totalSum);
//
// 8) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами
// 'floor' и 'ceil'. Можете все оформить в функцию, которая на входе будет принимать число и на выходе отдавать объект
// function calculateSquare(number) {
//   const squareRoot = Math.sqrt(number);
//   const floorValue = Math.floor(squareRoot);
//   const ceilValue = Math.ceil(squareRoot);

//   const result = {
//     inputNumber: number,
//     squareRoot: squareRoot,
//     floor: floorValue,
//     ceil: ceilValue,
//     explanation: `Квадратный корень из ${number} округлен в меньшую сторону (${floorValue}) и в большую сторону (${ceilValue}).`,
//   };

//   return result;
// }

// const numberToCalculate = 587;
// const calculationResult = calculateSquare(numberToCalculate);

// console.log(calculationResult);
//
// 9) Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'.
//  С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'. Для работы понадобится for...in
let obj = {
  Минск: "Беларусь",
  Москва: "Россия",
  Киев: "Украина",
};
for (const FOrObj in obj) {
  console.log(FOrObj, "-", "это", obj[FOrObj]);
}
