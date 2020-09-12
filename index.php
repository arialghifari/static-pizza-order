<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Pizza</title>
</head>
<body>

<div class="container">
<div class="left">
    <div class="pizzas">
        <h2>Pizza</h2>

        <div class="pizza-1">
            <img src="assets/pizza-1.jpg" alt="">
            <input type="radio" name="pizza" id="paperoni_pizza" class="pizza" value="10"><br>Paperoni Pizza ($10)
        </div>

        <div class="pizza-2">
            <img src="assets/pizza-2.jpg" alt="">
            <input type="radio" name="pizza" id="cheese_pizza" class="pizza" value="13"><br>Cheese Pizza ($13)
        </div>

        <div class="pizza-3">
            <img src="assets/pizza-3.jpg" alt="">
            <input type="radio" name="pizza" id="vegetarian_pizza" class="pizza" value="8"><br>Vegetarian Pizza ($8)
        </div>
    </div>
    <div class="siize">
        <h2>Size</h2>
        <input type="radio" name="size" class="size" value="S">Small (-1$)
        <input type="radio" name="size" class="size" value="M">Medium (default)
        <input type="radio" name="size" class="size" value="L">Large (+2$)
    </div>

    <h2>Toppings</h2>

    <table class="topping-checklist">
        <tr>
            <td><input type="checkbox" class="topping" disabled name="avocado" value="1">avocado (1$)</td>
            <td><input type="checkbox" class="topping" disabled name="lobster" value="2">lobster (2$)</td>
            <td><input type="checkbox" class="topping" disabled name="bacon" value="3">bacon (3$)</td>
        </tr>
        <tr>
            <td><input type="checkbox" class="topping" disabled name="broccoli" value="1">broccoli (1$)</td>
            <td><input type="checkbox" class="topping" disabled name="oyster" value="2">oyster (2$)</td>
            <td><input type="checkbox" class="topping" disabled name="duck" value="3">duck (3$)</td>
        </tr>
        <tr>
            <td><input type="checkbox" class="topping" disabled name="onions" value="1">onions (1$)</td>
            <td><input type="checkbox" class="topping" disabled name="salmon" value="2">salmon (2$)</td>
            <td><input type="checkbox" class="topping" disabled name="ham" value="3">ham (3$)</td>
        </tr>
        <tr>
            <td><input type="checkbox" class="topping" disabled name="zucchini" value="1">zucchini (1$)</td>
            <td><input type="checkbox" class="topping" disabled name="tuna" value="2">tuna (2$)</td>
            <td><input type="checkbox" class="topping" disabled name="sausage" value="3">sausage (3$)</td>
        </tr>
    </table>

    <h2>Price</h2>
    <h3 style="float:left">$<h3 style="float:left" id="price" value="">0</h3></h3>
</div>

<div class="right">
    <h2>Topping List</h2>

    <table border="1" class="topping">
        <tr>
            <td></td>
            <td>Price</td>
            <td>Paperoni Pizza</td>
            <td>Cheese Pizza</td>
            <td>Vegetarian Pizza</td>
        </tr>
        <tr>
            <td>Avocado</td>
            <td>$1</td>
            <td>o</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Broccoli</td>
            <td>$1</td>
            <td>o</td>
            <td>o</td>
            <td>o</td>
        </tr>
        <tr>
            <td>Onions</td>
            <td>$1</td>
            <td>o</td>
            <td>o</td>
            <td>o</td>
        </tr>
        <tr>
            <td>Zucchini</td>
            <td>$1</td>
            <td>o</td>
            <td>o</td>
            <td>o</td>
        </tr>
        <tr>
            <td>Lobster</td>
            <td>$2</td>
            <td></td>
            <td>o</td>
            <td></td>
        </tr>
        <tr>
            <td>Oyster</td>
            <td>$2</td>
            <td></td>
            <td>o</td>
            <td></td>
        </tr>
        <tr>
            <td>Salmon</td>
            <td>$2</td>
            <td></td>
            <td>o</td>
            <td></td>
        </tr>
        <tr>
            <td>Tuna</td>
            <td>$2</td>
            <td>o</td>
            <td></td>
            <td>o</td>
        </tr>
        <tr>
            <td>Bacon</td>
            <td>$3</td>
            <td></td>
            <td>o</td>
            <td>o</td>
        </tr>
        <tr>
            <td>Duck</td>
            <td>$3</td>
            <td></td>
            <td></td>
            <td>o</td>
        </tr>
        <tr>
            <td>Ham</td>
            <td>$3</td>
            <td>o</td>
            <td>o</td>
            <td>o</td>
        </tr>
        <tr>
            <td>Sausage</td>
            <td>$3</td>
            <td></td>
            <td></td>
            <td>o</td>
        </tr>

    </table>
</div>
</div>

<script src="main.js"></script>
</body>
</html>