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
    <div class="pizza">
        <h2>Pizza</h2>

        <div class="pizza-1">
            <img src="assets/pizza-1.jpg" alt="">
            <input type="radio" name="pizza" id="paperoni_pizza" class="pizzaa" value="10"><br>Paperoni Pizza ($10)
        </div>

        <div class="pizza-2">
            <img src="assets/pizza-2.jpg" alt="">
            <input type="radio" name="pizza" id="cheese_pizza" class="pizzaa" value="13"><br>Cheese Pizza ($13)
        </div>

        <div class="pizza-3">
            <img src="assets/pizza-3.jpg" alt="">
            <input type="radio" name="pizza" id="vegetarian_pizza" class="pizzaa" value="8"><br>Vegetarian Pizza ($8)
        </div>
    </div>
    <div class="siize">
        <h2>Size</h2>
        <input type="radio" name="size" class="size" value="S">Small    
        <input type="radio" name="size" class="size" value="M">Medium
        <input type="radio" name="size" class="size" value="L">Large
    </div>

    <h2>Toppings</h2>
    <a href="topping-list.php">View Topping Price List</a>

    <table class="topping-checklist">
        <tr>
            <td><input type="checkbox" class="topping" name="Onions" id="onions" value="1">Onions</td>
            <td><input type="checkbox" class="topping" name="Brocoli" value="1">Brocoli</td>
        </tr>
        <tr>
            <td><input type="checkbox" class="topping" name="Avocado" value="1">Avocado</td>
            <td><input type="checkbox" class="topping" name="Zucchini" value="1">Zucchini</td>
        </tr>
        <tr>
            <td><input type="checkbox" class="topping" name="Lobster" value="3">Lobster</td>
            <td><input type="checkbox" class="topping" name="Salmon" value="3">Salmon</td>
        </tr>
        <tr>
            <td><input type="checkbox" class="topping" name="Tuna" value="2">Tuna</td>
            <td><input type="checkbox" class="topping" name="Duck" value="2">Duck</td>
        </tr>
        <tr>
            <td><input type="checkbox" class="topping" name="Sausage" value="1">Sausage</td>
            <td><input type="checkbox" class="topping" name="Ham" value="2">Ham</td>
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