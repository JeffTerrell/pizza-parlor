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

Pizza.prototype.sizePrice = function() {
  this.price = 6;
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
  this.price = 6;
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
  this.price = 6;
  if (this.protein === "chicken" || this.protein === "ham") {
    return this.price +=4;
  }
  if (this.protein === "pepperoni" || this.protein === "sausage") {
    return this.price +=2;
  }
}