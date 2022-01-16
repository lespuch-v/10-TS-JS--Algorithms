
// Check if word is isogram
function isIsogram(text: string):boolean{
    let letters = []
    const lowerCase = text.toLowerCase()

    for(let i = 0; i < lowerCase.length; i++){
        if(!letters.includes(lowerCase[i])){
            letters.push(lowerCase[i]) 
        }else{
            return false
        }

    }

    return true
}


console.log(isIsogram("ambidExtRously"))
console.log(isIsogram("patteRN"))
console.log(isIsogram("ahojj"))
console.log(isIsogram("abB"))