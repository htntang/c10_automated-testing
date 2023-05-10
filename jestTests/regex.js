const regex = /abc/;

const testString = "abc";
const testString2 = "abd";
const testString3 = "catabcdefhello";

console.log(regex.test(testString));
console.log(regex.test(testString2));
console.log(regex.test(testString3));