// function greet() {
//   setTimeout(() => {             //3초뒤에 함수를 실행 하겠다
//     // console.log("hello");
//     // return "bye";          //3초 뒤에 리턴을 준다
//   }, 3000);                     //3초 설정
// }
function greet() {
  //3초뒤에 실행되는 함수 정의
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 3000);
  });
}

greet() //함수 실행
  .then((res) => {
    console.log(res);
    return res.length;
  })
  .then((res) => {
    console.log(res);
  });

console.log("end"); //end출력
