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
* const userPizza = new Pizza("large", "thin", "peppers", "onions", "mushrooms", "pepperoni");
* userPizza;
* Expected Output: Pizza {size: "large", crust: "thin", topping1: "peppers", topping2: "onions", topping3: "mushrooms", protein: "pepperoni"}

### Describe: ?()
* Test: "It should return an error if the user input value is not a number"
* Code:
* const userInput = "hello";
* numberIdentifierLoop(arrayUserInput);
* Expected Output:
***



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