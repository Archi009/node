const url = "/boarder";
selectAll();
//전체 조회
function selectAll() {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
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
