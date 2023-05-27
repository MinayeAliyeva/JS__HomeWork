const FAV_URL = "http://localhost:3000/favorites";
let mainRow = document.querySelector(".mainRow");
async function fillFavs() {
  let res = await axios(`${FAV_URL}`);
  let data = await res.data;
  mainRow.innerHTML = "";
  data.forEach((obj) => {
    mainRow.innerHTML += `
    <div class="col-12 col-lg-4 col-md-12 col-sm-12">
    <div class="card">
      <div class="img">
        <img src="${obj.img}">
      </div>
      <div class="text-side">
        <h1>${obj.title}</h1>
        <p>${obj.description}</p>
      </div>
    
    </div>
        </div>
            </div>
    `;
  });
}
fillFavs();
