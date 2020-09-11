const selectMyPizza = document.querySelector(".pizza");
const selectPizzaSize = document.querySelector(".size");

selectMyPizza.addEventListener("click", function(e) {

    if (e.target.getAttribute("class") == "pizzaa") {

        // topping filtering
        let paperoni = ['Onions', 'Brocoli', '', 'Zucchini', 'Lobster', 'Salmon', 'Tuna', 'Duck', 'Sausage', 'Ham'];
        let cheese = ['Onions', '', '', '','Lobster', '', '', '','Sasusage', 'Ham'];
        let vegetarian = ['Onions', 'Brocoli', 'Avocado', 'Zucchini', '' , '', '', '', '', ''];

        const toppingNode = document.querySelectorAll(".topping");
        
        if (e.target.id == "paperoni_pizza") {
            for (i=0; i<=9; i++) {
                if (toppingNode[i].getAttribute("name") != paperoni[i]) {
                    toppingNode[i].disabled = true;
                    toppingNode[i].checked = false;
                } else {
                    toppingNode[i].disabled = false;
                }
            }
        } 
        else if (e.target.id == "cheese_pizza") {
            for (i=0; i<=9; i++) {
                if (toppingNode[i].getAttribute("name") != cheese[i]) {
                    toppingNode[i].disabled = true;
                    toppingNode[i].checked = false;
                } else {
                    toppingNode[i].disabled = false;
                }
            }
        }
        else if (e.target.id == "vegetarian_pizza") {
            for (i=0; i<=9; i++) {
                if (toppingNode[i].getAttribute("name") != vegetarian[i]) {
                    toppingNode[i].disabled = true;
                    toppingNode[i].checked = false;
                } else {
                    toppingNode[i].disabled = false;
                }
            }
        }

        for (i=0; i<=9; i++) {
            if(toppingNode[i].checked == true) {

                let total = 0;
                total += parseFloat(toppingNode[i].value);
                
                document.getElementById("price").innerHTML = total;
                console.log(total);
                // console.log(toppingNode[i].getAttribute("name"));
            } else {
                // document.getElementById("price").innerHTML = e.target.value;
            }
        } 

        // and check default size
        document.getElementsByName("size")[1].checked = true;
        
        // select pizza size
        selectPizzaSize.addEventListener("click", function(z) {
            // chose
            if (z.target.value == "small") {
                const min = e.target.value - 1;
                document.getElementById("price").innerHTML = min;
            } else if (z.target.value == "large") {
                const plus = parseFloat(e.target.value) + 2;
                document.getElementById("price").innerHTML = plus;
            } else {
                document.getElementById("price").innerHTML = e.target.value
            }
        });
    }

});


// topping array
const toppingArray = document.querySelector(".topping-checklist");
toppingArray.addEventListener("click", function(t) {
    if (t.target.checked == true) {
        if (t.target.value == "3") {
            document.getElementById("price").innerHTML = parseFloat(document.getElementById("price").innerHTML) + 3;
        } else if (t.target.value == "2") {
            document.getElementById("price").innerHTML = parseFloat(document.getElementById("price").innerHTML) + 2;
        } else {
            document.getElementById("price").innerHTML = parseFloat(document.getElementById("price").innerHTML) + 1;
        }
    } else if (t.target.checked == false){
        if (t.target.value == "3") {
            document.getElementById("price").innerHTML = parseFloat(document.getElementById("price").innerHTML) - 3;
        } else if (t.target.value == "2") {
            document.getElementById("price").innerHTML = parseFloat(document.getElementById("price").innerHTML) - 2;
        } else {
            document.getElementById("price").innerHTML = parseFloat(document.getElementById("price").innerHTML) - 1;
        }
    }
});