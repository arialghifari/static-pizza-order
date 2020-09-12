const pizza = document.getElementsByClassName("pizza");
const sizes = document.getElementsByClassName("size");
const toppings = document.getElementsByClassName("topping");
const price = document.getElementById("price");

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
    });
}