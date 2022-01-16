
function myFunk(array){
    const newArr  = array.flat()
    const a1 = []
    const a2 = []
    const a3 = []

    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] == 1) a1.push(newArr[i])
        if(newArr[i] == 2) a2.push(newArr[i])
        if(newArr[i] == 3) a3.push(newArr[i])
    }


    return [a1, a2, a3]  
}


console.log(
    myFunk([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ])
);



// How professional would do it. 
// function transposeMatrix(arr: any[]) {
//   return arr[0].map((_, i) => arr.map((v) => v[i]));
// }

// console.log(
//   transposeMatrix([
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
//   ])
// );
