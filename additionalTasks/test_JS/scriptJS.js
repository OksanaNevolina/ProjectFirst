// function users(arr) {
//     if (arr.length >= 100) {
//         console.log('vav');
//     }
//     else {
//         console.log("!!!!")
//     }
//
// }
//
// console.log(usersArr)
// users(usersArr);

let usersArr = [
    {
        name: 'oksana',
        age: 32
    },
    {
        name: 'valay',
        age: 31
    },
    {
        name: 'roma',
        age: 30
    },
    {
        name: 'anna',
        age: 21
    }
]
for (let i = 2; i < usersArr.length; i++) {
    const usersArrElement = usersArr[i];
    console.log(usersArrElement);
}


console.log(' ');
for (const usersArrElement of usersArr) {
    console.log(usersArrElement);
}

console.log(' ')

let zxc={
    name: 'oksana',
    age: 32};
for (const key in zxc) {
    console.log(key, zxc[key]);

}
console.log(' ')
i = 0;
while (i < usersArr.length){
    console.log(usersArr[i]);
    i++;
}
console.log(' ')

let arrey=[1,2,3,4,5];
function sqarrey(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i]

    }
    return arr;
}

console.log(sqarrey(arrey));
