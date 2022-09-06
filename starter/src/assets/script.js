/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
  {
    name: 'Curved Handle Steel Axe',
    price: 200,
    quantity: 0,
    productId: 101,
    image: new URL("C:\\Users\\jake2\\Downloads\\Weapon_Collection1\\Weapon_Collection1\\PNGS\\axe3@2x.png"),
  },
  {
    name: 'Two-Handed Steel Battle Axe',
    price: 300,
    quantity: 0,
    productId: 102,
    image: new URL("C:\\Users\\jake2\\Downloads\\Weapon_Collection1\\Weapon_Collection1\\PNGS\\axe4@2x.png"),
  }, 
  {
    name: 'Basic Short Iron Axe',
    price: 100,
    quantity: 0,
    productId: 103,
    image: new URL("C:\\Users\\jake2\\Downloads\\Weapon_Collection1\\Weapon_Collection1\\PNGS\\axe1@2x.png")
  },
  {
    name: 'Basic Curved Iron Axe',
    price: 75,
    quantity: 0,
    productId: 104,
    image: new URL("C:\\Users\\jake2\\Downloads\\Weapon_Collection1\\Weapon_Collection1\\PNGS\\axe2@2x.png")
  },
  {
    name: 'Basic Steel Curved Knife',
    price: 175,
    quantity: 0,
    productId: 105,
    image: new URL("C:\\Users\\jake2\\Downloads\\Weapon_Collection1\\Weapon_Collection1\\PNGS\\knife@2x.png")
  },
  {
    name: 'Basic Straight Small Sword',
    price: 150,
    quantity: 0,
    productId: 106,
    image: new URL("C:\\Users\\jake2\\Downloads\\Weapon_Collection1\\Weapon_Collection1\\PNGS\\knife2@2x.png")
  },
  {
    name: 'Styled Curved Long Dagger',
    price: 200,
    quantity: 0,
    productId: 107,
    image: new URL("C:\\Users\\jake2\\Downloads\\Weapon_Collection1\\Weapon_Collection1\\PNGS\\ladies_dagger@2x.png")
  },
  {
    name: 'Steel Short Broadsword',
    price: 250,
    quantity: 0,
    productId: 108,
    image: new URL("C:\\Users\\jake2\\Downloads\\Weapon_Collection1\\Weapon_Collection1\\PNGS\\short_sword@2x.png")
  },
  {
    name: 'Long Steel Broadsword',
    price: 275,
    quantity: 0,
    productId: 109,
    image: new URL("C:\\Users\\jake2\\Downloads\\Weapon_Collection1\\Weapon_Collection1\\PNGS\\sword@2x.png")
  },
  {
    name: 'Heavy Stone War Hammer',
    price: 350,
    quantity: 0,
    productId: 110,
    image: new URL("C:\\Users\\jake2\\Downloads\\Weapon_Collection1\\Weapon_Collection1\\PNGS\\warhammer1@2x.png")
  },
  {
    name: 'War Hammer of MTRM',
    price: 475,
    quantity: 0,
    productId: 1011,
    image: new URL("C:\\Users\\jake2\\Downloads\\Weapon_Collection1\\Weapon_Collection1\\PNGS\\warhammer3@2x.png")
  },
  {
    name: 'Mystical Wooden Staff',
    price: 950,
    quantity: 0,
    productId: 112,
    image: new URL("C:\\Users\\jake2\\Downloads\\Weapon_Collection1\\Weapon_Collection1\\PNGS\\wand@2x.png")
  },]

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

// Function to get product by productId
function productById(productId) {
  for (let index = 0; index < products.length; ++index) {
    if (productId === products[index].productId) {
      return products[index]
    }
  }
}


/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  for (let index = 0; index < products.length; ++index) {
    if (productId === products[index].productId) {
      if (cart.includes(products[index]) === false) {
        cart.push(products[index]);
        ++productById(productId).quantity;
        soundAdd();
    } else if (cart.includes(products[index]) === true) {
      ++productById(productId).quantity;
      soundAdd();
    }
  }
}
}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  ++productById(productId).quantity;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  if (productById(productId).quantity > 1) {
    --productById(productId).quantity;
  } else if (productById(productId).quantity === 1) {
    removeProductFromCart(productId);
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  productById(productId).quantity = 0;
  (productById(productId).quantity < 1 ? cart.splice(cart.indexOf(productById(productId)), 1) : null);

}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

function cartTotal() {
  let total = 0;
  cart.forEach((item) => {
    total += (item.price * item.quantity);
  }); return total
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  for (let index = 0; index < cart.length; ++index) {
    cart[index].quantity = 0;
  }
  cart.splice(0, cart.length - 1);
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let total = 0

function pay(amount) {
  total = total + cartTotal();
  if (total < 0) {
    total = (-1 * total)
  }
  total = amount - total;
  return total
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  currency
}