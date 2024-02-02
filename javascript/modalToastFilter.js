// Modal
document.addEventListener("DOMContentLoaded", function () {
  const quantityInput = document.getElementById("quantity");
  const priceElement = document.getElementById("price");
  const totalPriceElement = document.getElementById("totalPrice");
  const xButton = document.querySelector(".modal .btn-close");
  const closeButton = document.querySelector(" .btn-kel");
  const orderNowButton = document.getElementById("maintenanceToastBtn");
  let basePrice = 0;

  document.querySelectorAll(".btn-card").forEach(function (button) {
    button.addEventListener("click", function () {
      const name = this.getAttribute("data-name");
      const description = this.getAttribute("data-description");
      basePrice = parseInt(this.getAttribute("data-price"));

      document.getElementById("menuModalLabel").textContent = name;
      document.getElementById("menuDescription").textContent = description;
      priceElement.textContent = basePrice.toLocaleString("id-ID") + " IDR";
      updateTotalPrice();
    });
  });

  quantityInput.addEventListener("input", updateTotalPrice);

  function updateTotalPrice() {
    const quantity = parseInt(quantityInput.value);
    const total = quantity * basePrice;
    totalPriceElement.textContent = total.toLocaleString("id-ID") + " IDR";
  }

  xButton.addEventListener("click", resetQuantity);
  closeButton.addEventListener("click", resetQuantity);
  orderNowButton.addEventListener("click", resetQuantity);

  function resetQuantity() {
    quantityInput.value = 1;
    updateTotalPrice();
  }

  updateTotalPrice();
});

// Toast
document.addEventListener("DOMContentLoaded", () => {
  const toastTriggers = document.querySelectorAll(".toast-trigger");
  const toastLiveExample = document.getElementById("maintenanceToast");
  const toastBootstrap = new bootstrap.Toast(toastLiveExample, {
    autohide: true,
    delay: 2000,
  });

  toastTriggers.forEach((toastTrigger) => {
    toastTrigger.addEventListener("click", (event) => {
      event.preventDefault();

      if (toastTrigger.type === "submit" && toastTrigger.form) {
        if (toastTrigger.form.checkValidity()) {
          toastTrigger.form.classList.remove("was-validated");
          toastTrigger.form.reset();

          toastBootstrap.show();
        } else {
          toastTrigger.form.classList.add("was-validated");
        }
      } else {
        toastBootstrap.show();
      }
    });
  });
});

// Filter
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const menuItems = document.querySelectorAll(".item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      menuItems.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });

      AOS.refresh();
    });
  });
});
