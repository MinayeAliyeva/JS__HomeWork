let row = document.querySelector(".row");
let addButton = document.querySelector(" .btn-dark");

addButton.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5501/20.Mock_API/add.html";
});
async function fillData() {
  let response = await fetch("http://localhost:3000/users");
  let data = await response.json();
  data.forEach((obj) => {
    row.innerHTML += `
    <div class="col col-6 ">
          <div class="card " >
            <div class="card-body bg-secondary rounded d-flex align-items-center justify-content-between p-3  ">
            <div>  <p class="card-text">
            ${obj.firstName}
           </p>
           <p class="p2">${obj.lastName}</p></div>
              <div><i class="fa-solid fa-trash"  id="${obj.id}" onclick=deleteById(${obj.id})></i>
            <a href="edit.html?id=${obj.id}">  <i  class="fa-solid fa-pen editPen"></i></a></div>
            </div>
          </div>
        </div>
    `;
    //edit
    let editPen = document.querySelector(".editPen");
    editPen.addEventListener("click",function(){
      window.location="edit.html"
    })
 
  });
}
fillData();
//delete
async function deleteById(id) {
  await fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE",
  });
  fillData();
}
