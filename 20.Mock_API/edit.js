let form = document.querySelector("#form");
let inputName = document.querySelector("#nameInput");
let lastName = document.querySelector("#lastName");
let id = new URLSearchParams(window.location.search).get("id");
console.log(id);
axios(`http://localhost:3000/users/${id}`).then((res) => {
  inputName.value = res.data.firstName;
  lastName.value = res.data.lastName;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let user = {
      firstName: inputName.value,
      lastName: lastName.value,
    };
    axios.patch(`http://localhost:3000/users/${id}`, user);
    window.location = "index.html";
  });
});
