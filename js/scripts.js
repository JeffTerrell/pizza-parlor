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
    return this.price +=2;
  }
  if (this.size === "medium") {
    return this.price +=4;
  }
  if (this.size === "large") {
    return this.price +=6;
  }
}

Pizza.prototype.crustPrice = function() {
  if (this.crust === "thin") {
    return this.price +=1;
  }
  if (this.crust === "thick") {
    return this.price +=2;
  }
  if (this.crust === "stuffed") {
    return this.price +=3;
  }  
}

Pizza.prototype.proteinPrice = function() {
  if (this.protein === "chicken" || this.protein === "ham") {
    return this.price +=4;
  }
  if (this.protein === "pepperoni" || this.protein === "sausage") {
    return this.price +=2;
  }
}

Pizza.prototype.toppingsPrice = function() {
  if (this.topping1 === "onions" || this.topping2 === "onions" || this.topping3 === "onions") {
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