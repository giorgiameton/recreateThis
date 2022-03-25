/*window.addEventListener("DOMContentLoaded", init);

function init() {
  loadData();
}

async function loadData() {
  const response = await fetch(
    "http://giorgiameton.com/wp-bikestock/wp-json/wp/v2/bike?"
  );
  console.log("response2", response);
  const movieData = await response.json();

  handleProductList();
}
function handleProductList(data) {
  //console.log("handleProductList");
  data.forEach(showProduct);
}*/

const url = "http://giorgiameton.com/wp-bikestock/wp-json/wp/v2/bike?";
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}

async function showProduct(product) {
  console.log(product);
  //grab template
  const template = document.querySelector(".cardTemplate").content;
  //clone it
  const clone = template.cloneNode(true);
  //change content
  clone.querySelector(".name").textContent = product.title.rendered;
  clone.querySelector(".brand").textContent = product.brand;
  clone.querySelector(".stock").textContent = product.in_stock;

  if (product.secondary_price) {
    clone.querySelector(
      ".price"
    ).textContent = `$${product.price} - $${product.secondary_price}`;
  }
  if (product.secondary_price == false) {
    clone.querySelector(".price").textContent = `$${product.price}`;
  }

  clone.querySelector(".bikeCard img").src = product.image.guid;

  //colors
  if (product.white == true) {
    clone.querySelector(".white").classList.remove("hide");
  }
  if (product.black == true) {
    clone.querySelector(".black").classList.remove("hide");
  }
  if (product.red == true) {
    clone.querySelector(".red").classList.remove("hide");
  }
  if (product.blue == true) {
    clone.querySelector(".blue").classList.remove("hide");
  }
  if (product.green == true) {
    clone.querySelector(".green").classList.remove("hide");
  }
  if (product.color == true) {
    clone.querySelector(".color").textContent = " N/A";
  }
  //grab parent
  const parent = document.querySelector("main");
  //append clone
  parent.appendChild(clone);
}
