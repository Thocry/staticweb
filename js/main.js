function addToCart(id) {
  var box = document.getElementById("box" + id).childNodes;
  var idChild = "item" + id;
  var name = box[7].innerText;
  var imgurl = box[5].src;
  var price = box[13].innerText;
  price = price.split(" ")[0];
  var quantity = box[11].childNodes;
  quantity = quantity[3].value;
  var container = document.getElementById("cart-items-container");

  if (container.contains(document.getElementById(idChild))) {
    var childNode = document.getElementById(idChild).childNodes;
    quantity =
      Number.parseInt(quantity) + Number.parseInt(childNode[6].innerText);
    childNode[6].innerText = quantity;
  } else {
    var elm = document.createElement("div");
    elm.className = "cart-item";
    elm.id = "item" + id;
    elm.innerHTML =
      `<span class="fas fa-times" onclick='desFromCart(` +
      id +
      `)'></span>
    <img src="` +
      imgurl +
      `" alt="" />
    <div class="content">
      <h3>` +
      name +
      `</h3>
      <div class="price">` +
      price +
      `</div>
    </div>
    <p style='font-size:15px'>` +
      quantity +
      `</p>`;
    var firstNode = container.firstChild;
    container.insertBefore(elm, firstNode);
  }
}

function desFromCart(id) {
  var idChild = document.getElementById("item" + id);
  var container = document.getElementById("cart-items-container");
  container.removeChild(idChild);
}

function addToHeart(id) {
  var box = document.getElementById("box" + id).childNodes;
  var idChild = "heart" + id;
  var name = box[7].innerText;
  var imgurl = box[5].src;
  var container = document.getElementById("heart-items-container");

  if (!container.contains(document.getElementById(idChild))) {
    var elm = document.createElement("div");
    elm.className = "cart-item";
    elm.id = "heart" + id;
    elm.innerHTML =
      `<span class="fas fa-times" onclick='desFromHeart(` +
      id +
      `)'></span><img src="` +
      imgurl +
      `" alt="" />
      <div class="content">
        <h3>` +
      name +
      `</h3>
      </div>`;
    container.appendChild(elm);
  }
}

function desFromHeart(id) {
  var idChild = document.getElementById("heart" + id);
  var container = document.getElementById("heart-items-container");
  container.removeChild(idChild);
}
