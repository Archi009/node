const url = "/boarder";
selectAll();
//전체 조회
function selectAll() {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      list.innerHTML = "";
      for (let i = 0; i < res.length; i++) {
        const tr = `<tr data-id="${res[i].no}">
    <td>${res[i].no}</td>
    <td>${res[i].title}</td>
    <td>${res[i].userid}</td>
    <td>${res[i].category}</td></tr>`;
        list.innerHTML += tr;
      }
    });
}
//작성
ct.addEventListener("click", function () {
  let data = {
    title: inputTitle.innerHTML,
    // id값
    text: txt.innerHTML,
    category: inputCategory.innerHTML,
  };
  fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      selectAll();
    });
});

//상세페이지
list.addEventListener("click", function (ev) {
  detail.style.display = "block";
  let pick = ev.target.parentNode;
  console.log(pick);
  let id = pick.getAttribute("data-id");
  fetch(`${url}/${id}`)
    .then((res) => res.json()) //기본값이 get이기 때문에 중괄호 안에 method 정의를 생략
    .then((res) => {
      title.innerText = res.title;
      no.innerText = res.no;
      time.innerText = res.wday;
      category.innerText = res.category;
      text.innerText = res.txt;
    });
});

//수정

//삭제

// 글작성 수정 버튼 숨기기 보이기
function crt() {
  inputField.style.display = "block";
  ct.style.display = "block";
  edi.style.display = "none";
}
function upd() {
  inputField.style.display = "block";
  ct.style.display = "none";
  edi.style.display = "block";
}
