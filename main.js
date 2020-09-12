const pizza = document.getElementsByClassName("pizza");
const sizes = document.getElementsByClassName("size");
const price = document.getElementById("price");

for (i = 0; i < pizza.length; i++){
    pizza[i].addEventListener("click", (e) => {
        price.innerText = e.target.value;

        for (j = 0; j < sizes.length; j++) {
            if (sizes[j].checked && sizes[j].value == "S") {
                price.innerText = parseInt(price.innerText) - 1;
            } else if (sizes[j].checked && sizes[j].value == "L") {
                price.innerText = parseInt(price.innerText) + 2;
            } else {
                price.innerText = price.innerText;
            }

            sizes[j].addEventListener("click", (el) => {
                if (el.target.value == "S" && e.target.checked == true ) {
                    price.innerText =  parseInt(e.target.value) - 1;
                } else if (el.target.value == "L") {
                    price.innerText = parseInt(e.target.value) + 2;
                } else {
                    price.innerText = e.target.value;
                }
            });
        }
    });
}