const url = "/login";
function resetClass(element, classname) {
  element.classList.remove(classname);
}
document
  .getElementsByClassName("show-signup")[0]
  .addEventListener("click", function () {
    let form = document.getElementsByClassName("form")[0];
    resetClass(form, "signin");
    resetClass(form, "reset");
    form.classList.add("signup");
    document.getElementById("submit_btn").innerText = "Sign Up";
    id.value = "";
  });
document
  .getElementsByClassName("show-signin")[0]
  .addEventListener("click", function () {
    makeNone();
    let form = document.getElementsByClassName("form")[0];
    resetClass(form, "signup");
    resetClass(form, "reset");
    form.classList.add("signin");
    document.getElementById("submit_btn").innerText = "Sign In";
  });
document
  .getElementsByClassName("show-reset")[0]
  .addEventListener("click", function () {
    makeNone();
    let form = document.getElementsByClassName("form")[0];
    resetClass(form, "signup");
    resetClass(form, "signin");
    form.classList.add("reset");
    document.getElementById("submit_btn").innerText = "Reset password";
  });
signinSel();

//클릭 이벤트 생성
submit_btn.addEventListener("click", function (ev) {
  let btnText = ev.target.innerText;
  console.log(btnText);
  //데이터 선언
  let data = {
    id: id.value,
    pw: pw.value,
    email: email.value,
    tel: tel.value,
  };
  //회원가입
  if (btnText == "Sign Up") {
    if (pw.value != pwCheck.value) {
      alert("비밀번호가 같지 않습니다.");
      return;
    } else {
      fetch("/guest/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.result == false) {
            //라우터에서 에러 발생을 인지하고 반응값의 result에
            alert(res.data); //false를 담아 보내주면
          } else {
            if (res.data.affectedRows > 0) {
              //라우터 반응값에 줄바꿈 발생기록이 있으면
              signinSel();
              alert("회원가입 완료");
            } else {
              //그외 메세지를 받으면
              alert("회원가입 실패");
            }
          }
        });
    }
  } //로그인
  else if (btnText == "Sign In") {
    login_form.submit();
  } //비밀번호 수정
  else if (btnText == "Reset password") {
  }
});
//아이디 중복검사
function dupcheck() {
  if (submit_btn.innerText == "Sign Up") {
    fetch(`${url}/check`)
      .then((res) => res.json())
      .then((res) => {
        for (let i = 0; i < res.length; i++) {
          if (id.value == res[i].id) {
            dupCheck.style = "display: block";
            dupCheck.value = "아이디 중복";
            dupCheck.style = "color : red";
            break;
          } else {
            dupCheck.style.display = "none";
            dupCheck.innerText = "";
          }
        }
      });
  }
}

function signinSel() {
  let form = document.getElementsByClassName("form")[0];
  resetClass(form, "signup");
  resetClass(form, "reset");
  form.classList.add("signin");
  document.getElementById("submit_btn").innerText = "Sign In";
}
function makeNone() {
  dupCheck.style.display = "none";
}
