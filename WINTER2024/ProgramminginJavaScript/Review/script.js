// function add(num) {
//   for (var i = 1; i < num; i++) {
//     console.log(i);
//     // return i == 3 ? 0 : i;
//     console.log(i + 5);
//     if (i == 10) {
//       return i;
//     }
//   }
//   return i + 1;
// }
// console.log(add(10));

// let x = 1;
// x++; //++x;
// console.log(x);

// for (let i = 1; i <= 10; i += 2) {
//   console.log(i);
// }

// function findMatches(num, ...list) {
//   var pos = 0;
//   var neg = 0;
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] === num) {
//       pos++;
//     } else {
//       neg++;
//     }
//   }

//   return pos;
// }
function findMatches(num, ...list) {
  var pos = 0;
  var neg = 0;
  for (let i = 0; i < list.length; i++) {
    num === list[i] ? pos++ : neg++;
  }
  return pos;
}

console.log(findMatches(2, 3, -1, 4, -7, 2));
