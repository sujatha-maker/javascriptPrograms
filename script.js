// function name() {
//   let a = "bob";
//   console.log("hello", a);
// }

// let a = "hi";
// let b = "suja";
// function abab() {
//   console.log(a+b+b+a);
// }
// abab();

// function concat(text1, text2) {
//   let value = `<${text1}>${text2}</${text1}>`;
//   return value;
// }
// console.log(concat("b", "sujatha"));

// function add(tag, text) {
//   let value = tag.slice(2, 4);
//   let last = tag.slice(0, 2);
//   let ans = `${last}${text}${value}`;
//   return ans;
// }
// console.log(add("<<>>", "suja"));

// function copy(text) {
//   let value = text.slice(3, 5);
//   let ans = value.repeat(3);
//   return ans;
// }
// console.log(copy("hello"));

// function copy(text) {
//   let value = text.substring(0, 2);
//   return value;
// }
// console.log(copy("Hello"));

function copy(text) {
  let value = text.length / 2;
  return value;
}
console.log(copy("Helloo"));
