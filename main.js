const pizza = document.getElementsByClassName("pizza");
const sizes = document.getElementsByClassName("size");
const toppings = document.getElementsByClassName("topping");
const price = document.getElementById("price");
const arrPaperoni = ['avocado', 'broccoli', 'onions', 'zucchini', 'tuna', 'ham'];
const arrCheese = ['broccoli', 'onions', 'zucchini', 'lobster', 'oyster', 'salmon', 'bacon', 'ham'];
const arrVegetarian = ['broccoli', 'onions', 'zucchini', 'tuna', 'bacon', 'duck', 'ham', 'sausage'];

for (p = 0; p < pizza.length; p++){ // pizza loop
    // when target pizza is click
    pizza[p].addEventListener("click", (eP) => { // event pizza
        // change price based on pizza selected
        price.innerText = eP.target.value;

        for (s = 0; s < sizes.length; s++) { // size loop
            // check if size choosen
            if (sizes[s].checked && sizes[s].value == "S") {
                price.innerText = parseInt(price.innerText) - 1;
            } else if (sizes[s].checked && sizes[s].value == "L") {
                price.innerText = parseInt(price.innerText) + 2;
            } else {
                price.innerText = price.innerText;
            }

            // check if size is click or choose
            sizes[s].addEventListener("click", (eS) => { // event size
                if (eS.target.value == "S") {
                    price.innerText =  parseInt(eP.target.value) - 1;
                } else if (eS.target.value == "L") {
                    price.innerText = parseInt(eP.target.value) + 2;
                } else {
                    price.innerText = eP.target.value;
                }
            });
        }
        
        /* for (arrToping = 0; arrToping < toppings.length; arrToping++) {
            toppings[arrToping].disabled = true;
        } */

        if (eP.target.id == "paperoni_pizza") {
            for (arrP = 0; arrP < arrPaperoni.length; arrP++) {
                for (arrToping = 0; arrToping < toppings.length; arrToping++) {
                    if (arrPaperoni[arrP] == toppings[arrToping].name) {
                        toppings[arrToping].disabled = false;
                    }
                }
            }
        } else if (eP.target.id == "cheese_pizza") {
            for (arrP = 0; arrP < arrCheese.length; arrP++) {
                for (arrToping = 0; arrToping < toppings.length; arrToping++) {
                    if (arrCheese[arrP] == toppings[arrToping].name) {
                        toppings[arrToping].disabled = false;
                    }
                }
            }
        } else {
            for (arrP = 0; arrP < arrVegetarian.length; arrP++) {
                for (arrToping = 0; arrToping < toppings.length; arrToping++) {
                    if (arrVegetarian[arrP] == toppings[arrToping].name) {
                        toppings[arrToping].disabled = false;
                    }
                }
            }
        }
    });
}