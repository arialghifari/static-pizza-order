const pizza = document.getElementsByClassName("pizza");
const sizes = document.getElementsByClassName("size");
const toppings = document.getElementsByClassName("topping");
let price = document.getElementById("price");
const arrPaperoni = ['avocado', 'broccoli', 'onions', 'zucchini', '', '', '', 'tuna', '', '', 'ham', ''];
const arrCheese = ['', 'broccoli', 'onions', 'zucchini', 'lobster', 'oyster', 'salmon', '', 'bacon', '',  'ham', ''];;
const arrVegetarian = ['', 'broccoli', 'onions', 'zucchini', '', '', '', 'tuna', 'bacon', 'duck', 'ham', 'sausage'];

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
        
        
        if (eP.target.id == "paperoni_pizza") {
            for (t = 0; t < toppings.length; t++) {
                if (toppings[t].name == arrPaperoni[t]) {
                    toppings[t].disabled = false;
                } else {
                    toppings[t].checked = false;
                    toppings[t].disabled = true;
                }
            }
        } else if (eP.target.id == "cheese_pizza") {
            for (t = 0; t < toppings.length; t++) {
                if (toppings[t].name == arrCheese[t]) {
                    toppings[t].disabled = false;
                } else {
                    toppings[t].checked = false;
                    toppings[t].disabled = true;
                }
            }
        } else {
            for (t = 0; t < toppings.length; t++) {
                if (toppings[t].name == arrVegetarian[t]) {
                    toppings[t].disabled = false;
                } else {
                    toppings[t].checked = false;
                    toppings[t].disabled = true;
                }
            }
        }

        for (tr = 0; tr < toppings.length; tr++) {
            if (toppings[tr].checked) {
                price.innerText = (parseInt(price.innerText) - parseInt(eP.target.value)) + (parseInt(toppings[tr].value) + parseInt(eP.target.value));
            }

            toppings[tr].addEventListener("click", (eT) => { // event toppings
                if (eT.target.checked) {
                    price.innerText =  parseInt(price.innerText) + parseInt(eT.target.value);
                } else {
                    price.innerText =  parseInt(price.innerText) - parseInt(eT.target.value);
                }
            });
        }

    });
}
