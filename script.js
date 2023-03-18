// ------Table generated------------------------------------
let formEl = document.querySelector("form");
let tbodyEl = document.querySelector("tbody");

function onAddRow(e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let mobile = document.getElementById("mobile").value;
  let age = document.getElementById("age").value;
  let book = document.getElementById("book").value;

  tbodyEl.innerHTML += `
<tr>
<td>${username}</td>
<td>${mobile}</td>
<td>${age}</td>
<td>${book}</td>
</tr>
`;
}

formEl.addEventListener("submit", onAddRow);

// ------Search-------------------------------------------
let searchBox = document.getElementById("search");

searchBox.addEventListener('keyup' ,function () {
  let keyword = this.value;
  keyword = keyword.toUpperCase();
  let tableN = document.getElementById("tbody");
  let all_tr = tableN.getElementsByTagName("tr");
  for (let i = 0; i < all_tr.length; i++) {
    let nameColumn = all_tr[i].getElementsByTagName("td")[0];
    if (nameColumn) {
      let nameValue = nameColumn.innerText || nameColumn.textContent;
      nameValue = nameValue.toUpperCase();
      if (nameValue.indexOf(keyword) > -1) {
        all_tr[i].style.display = "";
      } else {
        all_tr[i].style.display = "none";
      }
    }
  }
});
`<mark>${tableN}</mark>`