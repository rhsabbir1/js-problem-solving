// 1 to n summition
let n = 10;
let sum = 0;

for(let i = 0; i <= n; i++){
    sum = sum + i;
}
// console.log(sum)

// TimesTable  3

for(let i = 1; i<=10; i++){
    let timesTable = i * 3;
    // console.log(i + ' X ' + 3 +' = '+ timesTable)
}

let arr = [-1, 2,-3,4,5,6,-7,8,-9,10]
function gattrThenFive(numbers){
    let count = 0;
    for(let i =0; i < numbers.length; i++){
        const number = numbers[i];
        if(number > 5){
            count = count + 1;
        }
    }
    return count;
}

const count = gattrThenFive(arr)
// console.log(count)


// find lergest name and revers name 

const nameOne = 'Sajid';
const nameTwo = 'Nurnovi';

function reversName(nameOne , nameTwo){
    const nameOneLength = nameOne.length;
    const nametwoLength = nameTwo.length;
    if(nameOneLength > nametwoLength){
       return nameOne.split("").reverse().join("")
    }
    else{
        return nameTwo.split("").reverse().join("")
    }
}

const revers = reversName(nameOne , nameTwo);
console.log(revers)
