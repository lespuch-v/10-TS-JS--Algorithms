// function toRainLanguage(value){
//     if(value %3 == 0 && value %5 == 0){
//         return "PlingPlang"
//     }else if(value %5 == 0 && value %7 == 0){
//         return "PlangPlong"
//     }else if(value %3 == 0 && value %7 == 0){
//         return "PlingPlong"
//     }
//     else{
//         return value
//     }
// }

// 3 - Plink
// 5 - Plank
// 7 - Plong

// console.log(toRainLanguage(15))
// console.log(toRainLanguage(35))
// console.log(toRainLanguage(21))
// console.log(toRainLanguage(2))

// function toRainLanguagev2(num) {
//   let myString = "";
//   if (num % 3 == 0) {
//     myString += "Plink";
//   }
//   if (num % 5 == 0) {
//     myString += "Plang";
//   }
//   if (num % 7 == 0) {
//     myString += "Plong";
//   }
//   if (num % 7 == 0 && num % 5 == 0 && num % 3 == 0) {
//     myString = num
//   }

//   return myString;
// }

// console.log(toRainLanguagev2(15));
// console.log(toRainLanguagev2(35));
// console.log(toRainLanguagev2(21));
// console.log(toRainLanguagev2(2));



// 3 - Plink
// 5 - Plank
// 7 - Plong

// ------------------------------------------------------------------------------------------------------------------

const toRainLanguage = (number) => {
    let myString = ""

    if(number %7 == 0) myString += "Plong"
    if(number %5 == 0) myString += "Plang"
    if(number %3 == 0) myString += "Plink"

    return !myString == "" ? myString : number
}

console.log(toRainLanguage(15));
console.log(toRainLanguage(35));
console.log(toRainLanguage(21));
console.log(toRainLanguage(2));


import React, { Component } from 'react'
import { Redirect } from 'react-router'
export default class LoginDemoComponent extends Component {
 render() {
   if (this.state.isLoggedIn === true) {
     return <Redirect to="/your/redirect/page" />
   } else {
     return <div>{'Please complete login'}</div>
   }
 }
}