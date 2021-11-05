// Business Logic

function Pizza(size, crust, protein, topping1, topping2, topping3) {
  this.size = size;
  console.log(this.size);
  this.crust = crust;
  this.protein = protein;
  this.topping1 = [topping1];
  this.topping2 = [topping2];
  this.topping3 = [topping3];
  this.price = 6;
}

Pizza.prototype.totalPrice = function() {
  if (this.size === "select" || this.crust === "select") {
    return $("#error").slideToggle();
  }
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
  for (let i=0; i<this.topping1.length; i++) {
    if ("onions" === this.topping1[i] || "spinach" === this.topping1[i] || "peppers" === this.topping1[i]) {
      this.price += 1;
    }  
    if ("mushrooms" === this.topping1[i] || "black olives" === this.topping1[i] || "pineapple" === this.topping1[i]) {
      this.price += 2;   
    }     
  }
  for (let i=0; i<this.topping2.length; i++) {
    if ("onions" === this.topping2[i] || "spinach" === this.topping2[i] || "peppers" === this.topping2[i]) {
      this.price += 1;
    }  
    if ("mushrooms" === this.topping2[i] || "black olives" === this.topping2[i] || "pineapple" === this.topping2[i]) {
      this.price += 2;   
    }
  }
  for (let i=0; i<this.topping3.length; i++) {
    if ("onions" === this.topping3[i] || "spinach" === this.topping3[i] || "peppers" === this.topping3[i]) {
      this.price += 1;
    }  
    if ("mushrooms" === this.topping3[i] || "black olives" === this.topping3[i] || "pineapple" === this.topping3[i]) {
      this.price += 2;   
    }
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
    $("#error").hide(); 

    const pizzaSize = $("#pizzasize").val();
    const pizzaCrust = $("#pizzacrust").val();
    const pizzaProtein = $("#pizzaprotein").val()
    const pizzaTopping1 = $("#pizzatopping1").val();
    const pizzaTopping2 = $("#pizzatopping2").val();
    const pizzaTopping3 = $("#pizzatopping3").val();

    let userPizza = new Pizza(pizzaSize, pizzaCrust, pizzaProtein, pizzaTopping1, pizzaTopping2, pizzaTopping3)
    const pizzaPrice = userPizza.totalPrice();
    $("#pizzaprice").show();
    $("#finalpizzaprice").html(pizzaPrice);
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
