const pizzas = document.querySelectorAll(".pizzaa");
const price = document.getElementById("price");
const sizes = document.querySelectorAll(".size");

pizzas.forEach(pizza => {
    pizza.addEventListener('click', (e) => {
        price.innerHTML = e.currentTarget.value;
        sizes[1].setAttribute("checked", "chekced");
    });
});

// check wich size has checked -> change the price based on that
pizzas.forEach(pizza => {
    pizza.addEventListener('click', (e) => {
        price.innerHTML = e.currentTarget.value;
        sizes[1].setAttribute("checked", "chekced");
    });
});