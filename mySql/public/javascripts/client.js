const url = "/customer";
selectAll(); //전체 조회
insert(); //등록버튼에 이벤트 지정
del();
//전체 조회
function selectAll() {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      //list 클리어
      list.innerHTML = "";
      for (let i = 0; i < res.length; i++) {
        const tr = `<tr data-id="${res[i].id}">
      <td><input type="checkbox" /></td>
      <td>${res[i].id}</td>
      <td>${res[i].name}</td>
      <td>${res[i].email}</td>
      <td>${res[i].phone}</td>
      <td>${res[i].address}</td>
      <td><button class="btn btn-success" id="delbtn">삭제</button><button id="selbtn">조회</button></td>
    </tr>`;
        list.innerHTML += tr;
      }
    });
}

//등록
function insert() {
  btnAdd.addEventListener("click", function () {
    let data = {
      name: username.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
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
}
//수정

//삭제
function del() {
  list.addEventListener("click", function (ev) {
    //단건조회
    if (ev.target.id == "selbtn") {
      let id = ev.target.closest("tr").getAttribute("data-id");
      fetch(`${url}/${id}`)
        .then((res) => res.json()) //기본값이 get이기 때문에 중괄호 안에 method 정의를 생략
        .then((res) => {
          userid.value = res.id;
          username.value = res.name;
          email.value = res.email;
          phone.value = res.phone;
          address.value = res.address;
        });
      //삭제
    } else if (ev.target.id == "delbtn") {
      let id = ev.target.closest("tr").getAttribute("data-id");
      fetch(`${url}/${id}`, { method: "delete" }).then(() => {
        selectAll();
      });
    }
  });
}

//단건조회
