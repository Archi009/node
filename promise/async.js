// function greet() {
//   setTimeout(() => {             //3초뒤에 함수를 실행 하겠다
//     // console.log("hello");
//     // return "bye";          //3초 뒤에 리턴을 준다
//   }, 3000);                     //3초 설정
// }
function greet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 3000);
  });
}

async function callgreet() {
  var result = await greet(); //greet 함수가 진행되는 3초간 기다려라
  console.log(result); //만약 await가 없었다면 3초를 기다리지 않고 console.log를 실행 하기 때문에 출력 되지 않을 것이다.
  console.log(result.length);
}

callgreet(); //non-blocking
console.log("end");
