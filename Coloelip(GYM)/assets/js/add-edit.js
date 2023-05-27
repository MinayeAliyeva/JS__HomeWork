let id = new URLSearchParams(window.location.search).get("id");
let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");
console.log(allInputs);
let imgInput = document.querySelector("#imgInput");
const BASE_URL = "http://localhost:3000/cards";
async function fillInputs() {
  let res = await axios(`${BASE_URL}/${id}`);
  let data = await res.data;
  allInputs[0].value = data.title;
  allInputs[1].value = data.description;
  //   imgInput.value = data.img;
}
fillInputs();

form.addEventListener("submit", (e) => {
    e.preventDefault()
  let obj = {
    title: allInputs[0].value,
    description: allInputs[1].value,
    img: `./assets/images/${imgInput.value.split("\\")[2]}`,
  };
  console.log(obj);
  if (id) {
    axios.patch(`${BASE_URL}/${id}`, obj);
    window.location = "index.html";
  } else {
    axios.post(`${BASE_URL}`, obj);
    window.location = "index.html";
  }
});
