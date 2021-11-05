# Mr. Roboger Translator

#### By Jeff Terrell

#### A webpage that allows a user to build their own custom pizza

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScipt
* jQuery

## Description

Users can select from a variety of options to build a custom pizza including, size, toppings, and crust style. After submitting their choices the final cost of the pizza will be displayed.

## Specs

### Describe: Pizza()

* Test: "It should return a pizza object with a property of size"
* Code:
* const userPizza = new Pizza("large");
* userPizza;
* Expected Output: Pizza {size: "large"}
***
* Test: "It should return a pizza object with propeties of size and crust style"
* Code:
* const userPizza = new Pizza("large", "thin");
* userPizza;
* Expected Output: Pizza {size: "large", crust: "thin"}
***
* Test: "It should return a pizza object with propeties of size, crust style, topping1, topping2, and topping3"
* Code:
* const userPizza = new Pizza("large", "thin", "peppers", "onions", "mushrooms");
* userPizza;
* Expected Output: Pizza {size: "large", crust: "thin", topping1: "peppers", topping2: "onions", topping3: "mushrooms"}
***
* Test: "It should return a pizza object with propeties of size, crust style, topping1, topping2, topping3, and protein"
* Code:
* const userPizza = new Pizza("large", "thin", "pepperoni", "peppers", "onions", "mushrooms");
* userPizza;
* Expected Output: Pizza {size: "large", crust: "thin", protein: "pepperoni", topping1: "peppers", topping2: "onions", topping3: "mushrooms"}

### Describe: Pizza.prototype.sizePrice()
* Test: "It should return a numeric value for price based on the selected size of the pizza"
* Code:
* const userPizza = new Pizza("large");
* userPizza.sizePrice();
* Expected Output: Pizza {size: "large", price: 12};

### Describe: Pizza.prototype.crustPrice()
* Test: "It should return a numeric value for price based on the selected crust of the pizza"
* Code:
* const userPizza = new Pizza("large", "thin");
* userPizza.crustPrice();
* Expected Output: Pizza {size: "large", crust: "thin", price: 7};

### Describe: Pizza.prototype.proteinPrice()
* Test: "It should return a numeric value for price based on the selected protein of the pizza"
* Code:
* const userPizza = new Pizza("large", "thin", "ham");
* userPizza.proteinPrice();
* Expected Output: Pizza {size: "large", crust: "thin", protein: "ham", price: 10};

### Describe: Pizza.prototype.toppingsPrice()
* Test: "It should return a numeric value for price based on the selected toppings of the pizza"
* Code:
* const userPizza = new Pizza("large", "thin", "ham", "onions", "pineapple", "mushrooms");
* userPizza.topppingsPrice();
* Expected Output: Pizza {size: "large", crust: "thin", protein: "ham", topping1: "onions", topping2: "pineapple", topping3: "mushrooms", price: 11};
***
* Test: "It should return a numeric value for price based on the selected toppings of the pizza when 2 or more toppings are identical"
* Code:
* const userPizza = new Pizza("large", "thin", "ham", "onions", "pineapple", "mushrooms");
* userPizza.topppingsPrice();
* Expected Output: Pizza {size: "large", crust: "thin", protein: "ham", topping1: "onions", topping2: "onions", topping3: "mushrooms", price: 10};

### Describe: Pizza.prototype.totalPrice()
* Test: "It should return a numeric value for price based on the selected size, crust, protein, and toppings of the pizza"
* Code:
* const userPizza = new Pizza("large", "thin", "ham", "onions", "pineapple", "mushrooms");
* userPizza.totalPrice();
* Expected Output: Pizza {size: "large", crust: "thin", protein: "ham", topping1: "onions", topping2: "pineapple", topping3: "mushrooms", price: 22};

## Setup/Installation Requirements

* Create a new directory on your local machine.
* From a terminal, navigate to the newly created directory and use the "Git clone" command to copy the repository from this address (https://github.com/JeffTerrell/pizza-parlor).
* Navigate to the main level of the cloned directory on your local machine.
* Click to open index.html in a web browser.


## Known Bugs

* None at this time.

## License

[MIT](https://opensource.org/licenses/MIT)

Please contact Jeff Terrell via email with any issues, questions, or ideas.

Copyright (c) 2021 Jeff Terrell