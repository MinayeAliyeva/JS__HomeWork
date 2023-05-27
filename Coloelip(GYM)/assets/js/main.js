const BASE_URL = "http://localhost:3000/cards";
let arrCopy = [];
let filteredData = [];
let row = document.querySelector(".mainRow");
let num = 3;
let searchInput = document.querySelector("#searchInput");
let sortBtn = document.querySelector(".sortBtn");
let loadMore = document.querySelector(".loadMore");
async function fillCards() {
  let res = await axios(BASE_URL);
  let data = await res.data;
  arrCopy = data;
  filteredData =
    filteredData.length || searchInput.value
      ? filteredData.slice(0, num)
      : data.slice(0, num);
  row.innerHTML = "";
  filteredData.forEach((obj) => {
    row.innerHTML += `
        <div class="col-12 col-lg-4 col-md-12 col-sm-12">
<div class="card">
  <div class="img">
    <img src="${obj.img}">
  </div>
  <div class="text-side">
    <h1>${obj.title}</h1>
    <p>${obj.description}</p>
  </div>
  <div class="actions">
    <i class="fa-solid fa-trash" onclick=delFun(${obj.id})></i>
 <a href="add-edit.html?id=${obj.id}">   <i class="fa-solid fa-pen"></i></a>
<a >    <i class="fa-solid fa-heart" onclick=addFav(${obj.id}) ></i></a>
<a href="details.html?id=${obj.id}"><i class="fa-solid fa-info" ></i></a>
  </div>
</div>
    </div>`;
  });
}
fillCards();

//search
searchInput.addEventListener("input", (e) => {
  filteredData = arrCopy.slice(0, num).filter((obj) => {
    return obj.title
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  fillCards();
});

//sort
sortBtn.addEventListener("click", () => {
  if (sortBtn.innerHTML == "Ascending") {
    filteredData = filteredData
      .slice(0, num)
      .sort((a, b) => b.title.localeCompare(a.title));
    sortBtn.innerHTML = "Descending";
    fillCards();
  } else if (sortBtn.innerHTML == "Descending") {
    filteredData = filteredData
      .slice(0, num)
      .sort((a, b) => a.title.localeCompare(b.title));
    fillCards();
    sortBtn.innerHTML = "Default";
  } else {
    filteredData = arrCopy;
    fillCards();
    sortBtn.innerHTML = "Ascending";
  }
});
//loadmore
loadMore.addEventListener("click", (e) => {
  num += 3;
  filteredData = arrCopy.slice(0, num).filter((obj) => {
    return obj.title
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  fillCards();
});

//delete
async function delFun(id) {
  await axios.delete(`${BASE_URL}/${id}`);
  filteredData = arrCopy.slice(0, num).filter((obj) => obj.id != id);
  fillCards();
}

const FAV_URL = "http://localhost:3000/favorites";
//add fav
async function addFav(id) {
  let res = await axios(`${BASE_URL}/${id}`);
  let obj = await res.data;
  axios.post(`${FAV_URL}`, obj);
  window.location = "favorites.html";
}
addFav();
