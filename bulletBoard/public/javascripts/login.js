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
    document.getElementById("submit-btn").innerText = "Sign Up";
  });
document
  .getElementsByClassName("show-signin")[0]
  .addEventListener("click", function () {
    let form = document.getElementsByClassName("form")[0];
    resetClass(form, "signup");
    resetClass(form, "reset");
    form.classList.add("signin");
    document.getElementById("submit-btn").innerText = "Sign In";
  });
document
  .getElementsByClassName("show-reset")[0]
  .addEventListener("click", function () {
    let form = document.getElementsByClassName("form")[0];
    resetClass(form, "signup");
    resetClass(form, "signin");
    form.classList.add("reset");
    document.getElementById("submit-btn").innerText = "Reset password";
  });

//클릭 이벤트 생성
btn.addEventListener("click", function (ev) {
  let txt = ev.target.innerText;
  console.log(txt);
  //데이터 선언
  let data = {
    id: username.value,
    pw: email.value,
    phone: phone.value,
    address: address.value,
  };
  //회원가입
  if (btnText == "Sign Up") {
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  } //로그인
  else if (btnText == "Sign In") {
  } //비밀번호 수정
  else if (btnText == "Reset password") {
  }
});
