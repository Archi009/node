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
  <td id="userid">${res[i].userid}</td>
  <td>${res[i].category}</td></tr>`;
        list.innerHTML += tr;
      }
    });
}
//작성
ct.addEventListener("click", function () {
  let data = {
    title: inputTitle.value,
    txt: txt.value,
    category: inputCategory.value,
  };
  console.log(data);
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
      valueClear();
      fieldHidden();
    });
});

//상세페이지
list.addEventListener("click", function (ev) {
  detail.style.display = "block";
  let pick = ev.target.parentNode;
  console.log(pick);
  let id = pick.getAttribute("data-id");
  let userText = pick.children.userid.innerText;
  fetch(`${url}/${id}`)
    .then((res) => res.json()) //기본값이 get이기 때문에 중괄호 안에 method 정의를 생략
    .then((res) => {
      title.innerText = res.title;
      no.innerText = res.no;
      time.innerText = res.wday;
      category.innerText = res.category;
      text.innerText = res.txt;
      console.log(res.tip);
      console.log(userText);
      if (res.tip == userText) {
        console.log(res.tip);
        updt.style = "display : ''";
      } else {
        updt.style = "display : none";
      }
    });
  fieldHidden();
});

//수정
edi.addEventListener("click", function (ev) {
  let data = {
    title: inputTitle.value,
    txt: txt.value,
    category: inputCategory.value,
  };
  let no = num.innerText;
  console.log(no);
  fetch(`${url}/${no}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.result == true) {
        alert("수정완료");
        selectAll();
      } else alert("수정실패");
      console.log(res);
    })
    .catch(() => {
      alert("오류발생");
    });
  valueClear();
  fieldHidden();
});

//삭제
dell.addEventListener("click", function () {
  let no = num.innerText;
  console.log(no);
  fetch(`${url}/${no}`, { method: "delete" }).then(() => {
    fieldHidden();
    selectAll();
  });
});
// 글작성버튼 숨기기 보이기
function crt() {
  inputField.style.display = "block";
  ct.style.display = "block";
  edi.style.display = "none";
  dell.style.display = "none";
  valueClear();
}
// 글 수정 삭제버튼 보이기

function fieldHidden() {
  inputField.style.display = "none";
}
function fieldBlock() {
  inputField.style.display = "block";
}
function valueClear() {
  inputTitle.value = "";
  txt.value = "";
  inputCategory.value = "";
  num.innerText = "";
}

function upd() {
  inputField.style.display = "block";
  ct.style.display = "none";
  edi.style.display = "block";
  dell.style.display = "block";
  let writer = document.getElementById("title").innerText;
  let category1 = document.getElementById("category").innerText;
  let text1 = document.getElementById("text").innerText;
  let no = document.getElementById("no").innerText;
  console.log(writer, text1, category1);
  inputTitle.value = writer;
  inputCategory.value = category1;
  txt.value = text1;
  num.innerText = no;
}
