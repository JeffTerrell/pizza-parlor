// Business Logic

function Pizza(size, crust, protein, topping1, topping2, topping3) {
  this.size = size;
  this.crust = crust;
  this.protein = protein;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.price = 6;
}

Pizza.prototype.totalPrice = function() {
  this.sizePrice();
  this.crustPrice();
  this.proteinPrice();
  this.toppingsPrice();
  return this.price;
}

Pizza.prototype.sizePrice = function() {
  if (this.size === "small") {
    this.price +=2;
  }
  if (this.size === "medium") {
    this.price +=4;
  }
  if (this.size === "large") {
    this.price +=6;
  }
}

Pizza.prototype.crustPrice = function() {
  if (this.crust === "thin") {
    this.price +=1;
  }
  if (this.crust === "deep dish") {
    this.price +=2;
  }
  if (this.crust === "stuffed") {
    this.price +=3;
  }  
}

Pizza.prototype.proteinPrice = function() {
  if (this.protein === "chicken" || this.protein === "ham") {
    this.price +=4;
  }
  if (this.protein === "pepperoni" || this.protein === "sausage") {
    this.price +=2;
  }
}

Pizza.prototype.toppingsPrice = function() {
  if (this.topping1 === "onions") {
    this.price +=1
  }
  if (this.topping2 === "onions") {
    this.price +=1
  } 
  if (this.topping3 === "onions") {
    this.price +=1
  }
  if (this.topping1 === "peppers" || this.topping2 === "peppers" || this.topping3 === "peppers") {
    this.price +=1
  }
  if (this.topping1 === "spinach" || this.topping2 === "spinach" || this.topping3 === "spinach") {
    this.price +=1
  }
  if (this.topping1 === "mushrooms" || this.topping2 === "mushrooms" || this.topping3 === "mushrooms") {
    this.price +=2
  }
  if (this.topping1 === "black olives" || this.topping2 === "black olives" || this.topping3 === "black olives") {
    this.price +=2
  }
  if (this.topping1 === "pineapple" || this.topping2 === "pineapple" || this.topping3 === "pineapple") {
    this.price +=2
  }
}

Pizza.prototype.newPizza = function() {
  this.size = "";
  this.crust = "";
  this.protein = "";
  this.topping1 = "";
  this.topping2 = "";
  this.topping3 = "";
  this.price = 6;
}


// User Interface Logic

$(document).ready(function() {
  $("#pizzaselector").submit(function(event) {
    event.preventDefault();

    const pizzaSize = $("#pizzasize").val();
    const pizzaCrust = $("#pizzacrust").val();
    const pizzaProtein = $("#pizzaprotein").val()
    const pizzaTopping1 = $("#pizzatopping1").val();
    const pizzaTopping2 = $("#pizzatopping2").val();
    const pizzaTopping3 = $("#pizzatopping3").val();

    let userPizza = new Pizza(pizzaSize, pizzaCrust, pizzaProtein, pizzaTopping1, pizzaTopping2, pizzaTopping3)
    const pizzaPrice = userPizza.totalPrice();
    $("#pizzaprice").show();
    $("#finalpizzaprice").text(pizzaPrice);
    userPizza.newPizza();  
  });

  $("#newpizza").click(function() {
    $("#pizzaselector").trigger("reset")
    $("#pizzaprice").slideToggle();      
  })
});



  // if (this.size === "undefined" || this.crust === "undefined") {
  //   return $("#error").show();
  // }


  // Pizza.prototype.toppingsPrice = function() {
  //   if (this.topping1 === "onions" || this.topping2 === "onions" || this.topping3 === "onions") {
  //     this.price +=1
  //   }
  //   if (this.topping1 === "peppers" || this.topping2 === "peppers" || this.topping3 === "peppers") {
  //     this.price +=1
  //   }
  //   if (this.topping1 === "spinach" || this.topping2 === "spinach" || this.topping3 === "spinach") {
  //     this.price +=1
  //   }
  //   if (this.topping1 === "mushrooms" || this.topping2 === "mushrooms" || this.topping3 === "mushrooms") {
  //     this.price +=2
  //   }
  //   if (this.topping1 === "black olives" || this.topping2 === "black olives" || this.topping3 === "black olives") {
  //     this.price +=2
  //   }
  //   if (this.topping1 === "pineapple" || this.topping2 === "pineapple" || this.topping3 === "pineapple") {
  //     this.price +=2
  //   }
  // }