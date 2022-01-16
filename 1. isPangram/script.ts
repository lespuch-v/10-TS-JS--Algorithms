// 1.
// Garbage solution
function isPangram(str) {
  let allLetters = "The quick brown fox jumps over a lazy dog";
  const allArr = []
  const stringArr = []
  let counter = 0

  for(let i = 0; i < allLetters.length; i++){
      if(allLetters[i] != " "){
          allArr.push(allLetters[i].toLocaleLowerCase())
      }
  }
  for(let i = 0; i < str.length; i++){
      if(str[i] != " "){
          stringArr.push(str[i].toLocaleLowerCase())
      }
  }

  allArr.sort()
  stringArr.sort()

  for(let i = 0; i < allArr.length; i++){
      if(allArr[i] == stringArr[i]){
          return true
      }else {
          return false
      }
  }
}

console.log(isPangram("AAhoj, jak se mas?"));
console.log(isPangram("The quick brown fox jumps over a lazy dog"));
console.log(isPangram("Pack my box with five dozen liquor jugs"));
console.log(isPangram("Jackdaws love my big sphinx of quartz"));



// ---------------------------------------------------
// Ultra DEV PRO
const abc = "abcdefghijklmnopqrstuvwxyz"

const isPangramV2 = (string) => {
    const processedString = [...new Set(string.toLocaleLowerCase().split(" ").join(""))].sort().join("")
    return processedString===abc
}

console.log(isPangramV2("The quick Brown fox jumps over the lazy DOG"))
console.log(isPangramV2("abcdefghijklmnopqrstuvwxyz"))
console.log(isPangramV2("fghjksdafjhkdasjk"))