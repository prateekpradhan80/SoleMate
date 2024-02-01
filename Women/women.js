let itemsContainerElement = document.querySelector(".items-container");
let innerHTML = "";
items.forEach((item) => {
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
    <button class="btn-add-bag">Add to Bag</button>
  </div>`;
});

itemsContainerElement.innerHTML = innerHTML;