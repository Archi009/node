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
  });
document
  .getElementsByClassName("show-signin")[0]
  .addEventListener("click", function () {
    let form = document.getElementsByClassName("form")[0];
    resetClass(form, "signup");
    resetClass(form, "reset");
    form.classList.add("signin");
    document.getElementById("submit_btn").innerText = "Sign In";
  });
document
  .getElementsByClassName("show-reset")[0]
  .addEventListener("click", function () {
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
    }
    fetch("/guest/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) =>
        // (res) => console.log(res)
        {
          if (res.affectedRows > 0) {
            signinSel();
          } else {
            alert("아이디 중복");
          }
        }
      );
  } //로그인
  else if (btnText == "Sign In") {
    login_form.submit();
  } //비밀번호 수정
  else if (btnText == "Reset password") {
  }
});

function signinSel() {
  let form = document.getElementsByClassName("form")[0];
  resetClass(form, "signup");
  resetClass(form, "reset");
  form.classList.add("signin");
  document.getElementById("submit_btn").innerText = "Sign In";
}
