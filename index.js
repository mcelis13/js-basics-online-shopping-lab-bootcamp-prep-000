var cart = [];

function setCart(newCart) {
  cart = newCart;
};

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
};

function getCart(){
  return cart;
};

function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  var itemsObj = new Object();
  itemsObj = {'itemName': item, 'itemPrice': price};
  cart.push(itemsObj);
  console.log(`${item} has been added to your cart.`);
  return getCart();
};

function viewCart(){
  if(cart.length === 0){
    console.log('Your shopping cart is empty.');
  };

  var string = 'In your cart, ';

  for(var i = 0; i < cart.length; i++){
    if(i < cart.length -1){
      string += `you have ${cart[i]['itemName']} $${cart[i]['itemPrice']}, `;
    }else{
      string += `you have ${cart[i]['itemName']} $${cart[i]['itemPrice']}.`;
    }
  }
  
  console.log(string);
};

console.log(viewCart());

//function removeFromCart(item){
//cart is not an object// it is an array with lots of object.
//you need to iterate through the cart find the objects. get the object keys and compare them with the item
//you are looking for which you then need to delete or return that it is not here
//  if(cart.hasOwnProperty(item) === false){
//    console.log('That item is not in your cart.');
//  }else{
//    delete cart.item;
//    return getCart();
//  }
//};
//console.log(removeFromCart('strawberry'));


//function placeOrder(creditCard){
//  if(creditCard === undefined){
//    console.log(`We don't have a credit card on file for you to place your order.`);
//  }else{
//    console.log(`Your total is $${total()} , which will be charged to the card number ${creditCard}.`);
//  }
//  cart = [];
//};
//console.log(placeOrder(2324397998343));
//console.log(getCart()[0]['item']);
