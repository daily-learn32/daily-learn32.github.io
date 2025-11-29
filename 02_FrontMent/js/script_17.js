document.addEventListener("DOMContentLoaded", () => {
  const foodsContainer = document.querySelector(".menu__foods");
  const cartItemsContainer = document.querySelector(".cart__items");
  const cartTitle = document.querySelector(".cart__title");
  const cartOrderTotal = document.querySelector(".cart__order-total__price");
  const confirmBtn = document.querySelector(".cart__button-confirm");
  const popup = document.querySelector(".popup");
  const popupItemsContainer = document.querySelector(
    ".popup__frame__content__items"
  );
  const popupOrderTotal = document.querySelector(
    ".popup__frame__content__order-total__price"
  );
  const newOrderBtn = document.querySelector(
    ".popup__frame__content__button-new"
  );

  let foodData = [];

  // Fetch data from JSON
  const fetchData = async () => {
    try {
      const response = await fetch("./js/data_17.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      foodData = data;
      renderFoods();
      updateCart();
    } catch (error) {
      console.error("Error fetching food data:", error);
      foodsContainer.innerHTML =
        "<p>Failed to load food data. Please try again later.</p>";
    }
  };

  // Render all food items
  const renderFoods = () => {
    foodsContainer.innerHTML = "";
    foodData.forEach((item, index) => {
      const foodEl = document.createElement("div");
      foodEl.classList.add("menu__foods__food");
      foodEl.dataset.index = index;

      const isSelected = item.amount > 0;

      foodEl.innerHTML = `
        <div class="menu__foods__food__images ${isSelected ? "selected" : ""}">
          <img src="${item.image}" alt="${item.name}" />
        </div>
        <div class="menu__foods__food__features">
          <div class="menu__foods__food__features__buttons">
            <button class="menu__foods__food__features__buttons__cart ${
              item.amount === 0 ? "show" : ""
            }">
              <i class="menu__foods__food__features__buttons__cart__icon fa-solid fa-cart-shopping"></i>
              <span class="menu__foods__food__features__buttons__cart__text">Add to Cart</span>
            </button>
            <div class="menu__foods__food__features__buttons__count ${
              item.amount > 0 ? "show" : ""
            }">
              <button class="menu__foods__food__features__buttons__count__button-minus">
                <i class="fa-solid fa-minus"></i>
              </button>
              <span class="menu__foods__food__features__buttons__count__value">${
                item.amount
              }</span>
              <button class="menu__foods__food__features__buttons__count__button-plus">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <div class="menu__foods__food__features__texts">
            <p class="menu__foods__food__features__texts__type">${
              item.category
            }</p>
            <h3 class="menu__foods__food__features__texts__name">${
              item.name
            }</h3>
            <p class="menu__foods__food__features__texts__price">$${item.price.toFixed(
              2
            )}</p>
          </div>
        </div>
      `;
      foodsContainer.appendChild(foodEl);
    });
  };

  // Update cart based on foodData
  const updateCart = () => {
    cartItemsContainer.innerHTML = "";
    let totalAllPrice = 0;

    const selectedItems = foodData.filter((item) => item.amount > 0);

    if (selectedItems.length === 0) {
      cartItemsContainer.classList.add("empty-center");
      cartItemsContainer.innerHTML = `
        <div class="cart__items__empty">
          <i class="cart__items__empty__icon fa-solid fa-cart-shopping"></i>
          <p class="cart__items__empty__text">Your cart is empty.</p>
        </div>
      `;
    } else {
      cartItemsContainer.classList.remove("empty-center");
      selectedItems.forEach((item) => {
        const itemTotalPrice = item.price * item.amount;
        totalAllPrice += itemTotalPrice;

        const cartItemEl = document.createElement("div");
        cartItemEl.classList.add("cart__items__item");
        const itemIndex = foodData.findIndex((food) => food.name === item.name);
        cartItemEl.dataset.index = itemIndex;

        cartItemEl.innerHTML = `
          <div class="cart__items__item__features">
            <h4 class="cart__items__item__features__name">${item.name}</h4>
            <div class="cart__items__item__features__item-info">
              <span class="cart__items__item__features__item-info__amount">${
                item.amount
              }x</span>
              <span class="cart__items__item__features__item-info__price">@ $${item.price.toFixed(
                2
              )}</span>
              <span class="cart__items__item__features__item-info__total-price">$${itemTotalPrice.toFixed(
                2
              )}</span>
            </div>
          </div>
          <button class="cart__items__item__button-remove">
            <i class="fa-solid fa-xmark"></i>
          </button>
        `;
        cartItemsContainer.appendChild(cartItemEl);
      });
    }

    const totalItemCount = selectedItems.reduce(
      (sum, item) => sum + item.amount,
      0
    );
    cartTitle.textContent = `Your Cart (${totalItemCount})`;
    cartOrderTotal.textContent = `$${totalAllPrice.toFixed(2)}`;
  };

  // Event delegation for food items
  foodsContainer.addEventListener("click", (e) => {
    const foodEl = e.target.closest(".menu__foods__food");
    if (!foodEl) return;

    const index = parseInt(foodEl.dataset.index, 10);
    const item = foodData[index];

    if (e.target.closest(".menu__foods__food__features__buttons__cart")) {
      item.amount = 1;
    } else if (
      e.target.closest(
        ".menu__foods__food__features__buttons__count__button-plus"
      )
    ) {
      if (item.amount < 99) item.amount++;
    } else if (
      e.target.closest(
        ".menu__foods__food__features__buttons__count__button-minus"
      )
    ) {
      item.amount--;
    }

    renderFoods();
    updateCart();
  });

  // Event delegation for cart items (remove)
  cartItemsContainer.addEventListener("click", (e) => {
    const removeBtn = e.target.closest(".cart__items__item__button-remove");
    if (removeBtn) {
      const cartItemEl = removeBtn.closest(".cart__items__item");
      const index = parseInt(cartItemEl.dataset.index, 10);
      foodData[index].amount = 0;
      renderFoods();
      updateCart();
    }
  });

  // Confirm order
  confirmBtn.addEventListener("click", () => {
    const selectedItems = foodData.filter((item) => item.amount > 0);
    if (selectedItems.length === 0) {
      alert("Your cart is empty. Please select an item first.");
      return;
    }

    popupItemsContainer.innerHTML = "";
    let totalAllPrice = 0;

    selectedItems.forEach((item) => {
      const itemTotalPrice = item.price * item.amount;
      totalAllPrice += itemTotalPrice;

      const popupItemEl = document.createElement("div");
      popupItemEl.classList.add("popup__frame__content__items__item");
      popupItemEl.innerHTML = `
        <div class="popup__frame__content__items__item__images">
          <img src="${item.image}" alt="${item.name}" />
        </div>
        <div class="popup__frame__content__items__item__features">
          <h5 class="popup__frame__content__items__item__features__name">${
            item.name
          }</h5>
          <div class="popup__frame__content__items__item__features__item-info">
            <span class="popup__frame__content__items__item__features__item-info__amount">${
              item.amount
            }x</span>
            <span class="popup__frame__content__items__item__features__item-info__price">@ $${item.price.toFixed(
              2
            )}</span>
          </div>
        </div>
        <p class="popup__frame__content__items__item__total-price">$${itemTotalPrice.toFixed(
          2
        )}</p>
      `;
      popupItemsContainer.appendChild(popupItemEl);
    });

    popupOrderTotal.textContent = `$${totalAllPrice.toFixed(2)}`;
    popup.classList.add("show");
  });

  // Start new order
  newOrderBtn.addEventListener("click", () => {
    foodData.forEach((item) => (item.amount = 0));
    popup.classList.remove("show");
    renderFoods();
    updateCart();
  });

  // Initial load
  fetchData();
});
