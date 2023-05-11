/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/
function area(a, b){
    let areaCalculation= a * b;
    console.log('The area of the rectangle is:', areaCalculation.toFixed(2));
}

let a = +prompt('Please enter the length of the rectangle');
let b = +prompt('Please enter the width of the rectangle');
if (a <= 0 || b <= 0){
    console.log('The numbers are invalid. Please enter positive numbers only.')
}else{
    area(a,b);
}

/*- створити функцію яка обчислює та повертає площу кола з радіусом r */
function circleArea (r){
    const pi = 3.14;
    let circleCalculation = pi * Math.pow(r, 2);
    console.log('The area of the circle is:', circleCalculation.toFixed(2));
    return circleCalculation.toFixed(2);
}

let r = +prompt('Please enter the radius of the circle');
if (r <= 0 ){
    console.log('The number is invalid. Please enter a positive number only.')
}else{
    circleArea (r);
}

/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/
function cylinderArea(rc, h){
    const pi = 3.14;
    let cylinderCalculation = 2 * pi * rc * h;
    console.log('The area of the cylinder is:', cylinderCalculation.toFixed(2));
    return cylinderCalculation.toFixed(2);
}
 let rc = +prompt ('Please enter the radius of the cylinder');
 let h = +prompt('Please enter the height of the cylinder');
 if (rc <=0 || h <= 0){
     console.log('The numbers are invalid. Please enter positive numbers only');
 }else{
     cylinderArea(rc, h);
 }

 /*- створити функцію яка приймає масив та виводить кожен його елемент */
function arrElements(arr){
    for(const item of arr){
        console.log(item);
    }
}

let arr = [5, 6, 7];
    arrElements(arr);

    /*- створити функцію яка створює параграф з текстом. Текст задати через аргумент */
function text(textItem){
    document.write('<div>');
    document.write(`<p> The user's message is: ${textItem}.</p>`);
    document.write('</div>');
}
let textItem = prompt('Please enter your message:');
text(textItem);
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function myList(textListed){
    document.write('<div><ul>');
    for(let i = 0; i < 3; i++){
        document.write(`<li>${textListed}</li>`);
    }
    document.write('</ul></div>');
}

let textListed = 'I love JavaScript';
myList(textListed);

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/
function dynamicList(myText, usersNumber){
    document.write('<div><ul>');
      for(let i = 0; i < usersNumber; i++){
        document.write(`<li>${myText}</li>`);
      }
    document.write('</ul></div>');
}

let myText = prompt ('Please enter your text');
let usersNumber = +prompt('Please enter the necessary number of the items on the list');
dynamicList(myText, usersNumber);

/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
function arrToList(array){
    document.write('<div><ul>');
     for( let arrItem of array){
         document.write(`<li>${arrItem}</li>`);
     }
     document.write('</ul></div>');
}

let array = [8, 9, 10];
arrToList(array);
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//- створити функцію яка повертає найменьше число з масиву
//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/
/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/