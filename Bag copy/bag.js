let bagItemObjects;
const CONVENIENCE_FEES = 99;
onLoad();

function onLoad() {
  loadBagItemsObjects();
  displayBagItems();
  displayBagSummary();
}

function loadBagItemsObjects() {
  bagItemObjects = bagItems.map((itemId) => {
    for (let i = 0; i < Womenitems.length; i++) {
      if (itemId == Womenitems[i].id) {
        return Womenitems[i];
      }
    }
  });
}
function displayBagSummary() {
  let bagSummayElement = document.querySelector(".bag-summary");
  let totalItem = bagItemObjects.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  bagItemObjects.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });
  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  bagSummayElement.innerHTML = ` <div class="bag-details-container">
<div class="price-header">PRICE DETAILS (${totalItem}items) </div>
<div class="price-item">
  <span class="price-item-tag">Total MRP</span>
  <span class="price-item-value">₹ ${totalMRP}</span>
</div>
<div class="price-item">
  <span class="price-item-tag">Discount on MRP</span>
  <span class="price-item-value priceDetail-base-discount">-₹ ${totalDiscount}</span>
</div>
<div class="price-item">
  <span class="price-item-tag">Convenience Fee</span>
  <span class="price-item-value">₹ 99</span>
</div>
<hr>
<div class="price-footer">
  <span class="price-item-tag">Total Amount</span>
  <span class="price-item-value">₹ ${finalPayment}</span>
</div>
</div>
<button class="btn-place-order" onclick="location.href = '/landing.html';">
<div class="css-xjhrni">PLACE ORDER</div>
</button>
</div>`;
}

function displayBagItems() {
  let containerElement = document.querySelector(".bag-items-container");
  let innerHTML = " ";
  bagItemObjects.forEach((bagItems) => {
    innerHTML += generateItemHtml(bagItems);
  });
  containerElement.innerHTML = innerHTML;
}
function removeFromBag(itemId) {
  bagItems = bagItems.filter((bagItemId) => bagItemId != itemId);
  localStorage.setItem("womenbagItems", JSON.stringify(bagItems));
  loadBagItemsObjects();
  displayBagItems();
  displayBagIcon();
  displayBagSummary();
}
function generateItemHtml(items) {
  let date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];
  return `<div class="bag-item-container">
  <div class="item-left-part">
    <img class="bag-item-img" src="${items.item_image}">
  </div>
  <div class="item-right-part">
    <div class="company">${items.comapny_name}</div>
    <div class="item-name">Size 9</div>
    <div class="price-container">
      <span class="current-price">Rs ${items.current_price}</span>
      <span class="original-price">Rs ${items.original_price}</span>
      <span class="discount-percentage">(${items.discount}% OFF)</span>
    </div>
    <div class="return-period">
      <span class="return-period-days">14 days</span> return available
    </div>
    <div class="delivery-details">
      Delivery by
      <span class="delivery-details-days"> ${
        7 + date.getDate()
      } ${month} ${date.getFullYear()}</span>
    </div>
  </div>

  <div class="remove-from-cart" onclick="removeFromBag(${
    items.id
  })">X</div> </div>`;
}
