let id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = "http://localhost:3000/cards";
let mainRow = document.querySelector(".mainRow");
async function getData() {
  let res = await axios(`${BASE_URL}/${id}`);
  let data = await res.data;
  mainRow.innerHTML=`
  <div class="col-lg-12 d-flex align-items-center justify-content-center vh-100 ">
<div class="card detCard">
  <div class="img">
    <img src="${data.img}">
  </div>
  <div class="text-side">
    <h1>${data.title}</h1>
    <p>${data.description}</p>
  </div>
</div>
    </div>
        </div>
  `
}
getData();
