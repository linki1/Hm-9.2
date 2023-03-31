let arr = [];
let counter = +prompt("задайте довжену масива", 3);
let arr1 = [];

while (!counter || isNaN(counter)) {
    alert("ви нічого не вели, або вели не число! ")
    counter = +prompt("задайте довжену масива", 3);
}


first: for (let i = 0; i < counter; i++) {
    let random = Math.floor(Math.random() * 500 + 1);
    arr[i] = random;

    let counter1 = 0;
    let arrnm = [];
    for (let j = 2; j < arr[i]; j++) {

        if (arr[i] % j == 0) {

            arrnm[counter1] = j;
            counter1++;
        }

    }
    if (arrnm[0] == undefined) {
        arr1.push(arr[i]);
    }


}




let maxNumber = arr[0];
let minNumber = arr[0];
console.log(maxNumber);
for (let j = 0; j < arr.length; j++) {
    if (maxNumber < arr[j]) {

        maxNumber = arr[j];
    }
    if (minNumber > arr[j]) {

        minNumber = arr[j];
    }

}

document.write("масив чисел: " + arr);
document.write("<br> Прості числа з цього масива: " + arr1);
document.write("<br>Максимальне число масива: " + maxNumber);
document.write("<br>Мінемальне число масива: " + minNumber);