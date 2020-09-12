const pizzas = document.querySelectorAll(".pizzaa");
const price = document.getElementById("price");
const sizes = document.querySelectorAll(".size");

pizzas.forEach(pizza => {
    pizza.addEventListener('click', (e) => {
        price.innerHTML = e.currentTarget.value;
        sizes[1].setAttribute("checked", "chekced");
    });
});

const papperoni = ['avocado', 'brocoli', 'onions'];

function getToppings (pizzaChoice) {
    let toppingsEl = document.getElementsByClassName("topping");
    // Loop toppings element

    for (Pc = 0; Pc < pizzaChoice.length; Pc++) {
        // loop specific topping in the pizza
        for (El = 0; El < 12; El++) {
            if (toppingsEl[El].getAttribute("name") == pizzaChoice[Pc]) {
                console.log(toppingsEl[El].getAttribute("name"));
            } else {
            }
        }
    }
}

getToppings(papperoni);