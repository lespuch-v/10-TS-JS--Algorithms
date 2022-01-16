
const arr = [1,2,3]

const updatedMap = (arr, callback) => {
    return arr.reduce((accumulator, value)=>{
        return [...accumulator, callback(value)]
    },[])
}

console.log(updatedMap(arr, (x) => x + 1))