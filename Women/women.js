let bagItems;
console.log(Womenitems);
onLoad();
function onLoad() {
  let bagItemsStr = localStorage.getItem("womenbagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("womenbagItems", JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector(".bag-item-count");
  bagItemCountElement.innerText = bagItems.length;
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = "visible";
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = "hidden";
  }
}
function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector(".items-container");
  if (!itemsContainerElement) {
    return;
  }
  let innerHTML = "";
  Womenitems.forEach((item) => {
    innerHTML += `<div class="
    item-container">
      <img class="item-image" src="${item.item_image}" alt="shoe image">
      <div class="rating">
        ${item.rating.stars} ⭐ | ${item.rating.noOfReviews}
      </div>
      <div class="company-name">${item.comapny_name}</div>
      <div>
        <label class="item-size" for="shoes">Choose your size</label>
        <select name="Choose">
          <option value="10"> US 10</option>
          <option value="9"> US 9</option>
           <option value="8"> US 8</option>
           <option value="7">US 7</option>
        </select>
      </div>
      <div class="price">
         <span class="current-price">${item.current_price}</span>
         <span class="original-price">${item.original_price}</span>
         <span class="discount">${item.discount}</span>
      </div>
      <button class="btn-add-bag" onclick='addToBag(${item.id})'>Add to Bag</button>
    </div>`;
  });
  itemsContainerElement.innerHTML = innerHTML;
}
