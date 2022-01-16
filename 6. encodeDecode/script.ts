// Redo this challenge
function encode(text: string): string {
  const newText = text.split("");
  return text.replace(/(\w)\1+/g, (m, v) => `${m.length}${v}`);
}

console.log(encode("wwwiiuuuu")); // 3w2i4u

function decode(text: string): string {
  return text.replace(/(\d+)(\w)/g, (x, y, z) => z.repeat(y));
}

console.log(decode("2u3a4o")); // uuaaa

// --------------------------
// Garbage solution
function enc(str: string): string {
  if (str.length == 0) {
    console.log("Empty String");
    return;
  } else {
    for (let i = 0; i < str.length; i++) {
      let count = 0;
      for (let ii = 0; ii < str.length; i++) {
        if (str[i] == str[ii] && i > ii) {
          break;
        }
        if (str[i] == str[ii]) {
          count++;
        }
      }
      if (count > 0) {
        console.log(`${str[i]} occurs ${count} times`);
      }
    }
  }
}

console.log(enc(""));
