let inputs = document.querySelectorAll(".form-control");
console.log(inputs);
let form = document.querySelector("#form");

async function fillData() {
  let response = await fetch("http://localhost:3000/users");
  let data = await response.json();
  data.forEach((obj) => {
    row.innerHTML += `
    <div class="col col-5">
          <div class="card" >
            <div class="card-body">
              <p class="card-text">
               ${obj.firstName}
              </p>
              <p>${obj.lastName}</p>
              <i class="fa-solid fa-trash"  id="${obj.id}" onclick=deleteById(${obj.id})></i>
              <i class="fa-solid fa-pen"></i>
            </div>
          </div>
        </div>
    `;
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    firstName: inputs[0].value,
    lastName: inputs[1].value,
  };
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  window.location.href = "http://127.0.0.1:5501/20.Mock_API/index.html";
});
