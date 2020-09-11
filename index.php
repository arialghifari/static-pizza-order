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
<div class="size">
    <h2>Size</h2>
    <input type="radio" name="size" value="small">Small    
    <input type="radio" name="size" value="medium">Medium
    <input type="radio" name="size" value="large">Large
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
<script src="main.js"></script>
</body>
</html>