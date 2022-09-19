/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
let base = new URL("https://jhammond23.github.io/jhammond23.github.io")
const products = [
  {
    name: 'Curved Handle Steel Axe',
    price: 200,
    quantity: 0,
    productId: 101,
    image: new URL("\\starter\\src\\images\\Weapon_Collection1\\Weapon_Collection1\\Weapons.xcassets\\axe3.imageset/axe3@2x.png", base),
  },
  {
    name: 'Two-Handed Battle Axe',
    price: 300,
    quantity: 0,
    productId: 102,
    image: new URL("\\starter\\src\\images\\Weapon_Collection1\\Weapon_Collection1\\Weapons.xcassets\\axe4.imageset\\axe4@2x.png", base),
  }, 
  {
    name: 'Basic Short Iron Axe',
    price: 100,
    quantity: 0,
    productId: 103,
    image: new URL("\\starter\\src\\images\\Weapon_Collection1\\Weapon_Collection1\\Weapons.xcassets\\axe1.imageset\\axe1@2x.png", base),
  },
  {
    name: 'Basic Curved Iron Axe',
    price: 75,
    quantity: 0,
    productId: 104,
    image: new URL("\\starter\\src\\images\\Weapon_Collection1\\Weapon_Collection1\\Weapons.xcassets\\axe2.imageset\\axe2@2x.png", base),
  },
  {
    name: 'Basic Steel Curved Knife',
    price: 175,
    quantity: 0,
    productId: 105,
    image: new URL("\\starter\\src\\images\\Weapon_Collection1\\Weapon_Collection1\\Weapons.xcassets\\knife.imageset\\knife@2x.png", base),
  },
  {
    name: 'Basic Straight Small Sword',
    price: 150,
    quantity: 0,
    productId: 106,
    image: new URL("\\starter\\src\\images\\Weapon_Collection1\\Weapon_Collection1\\Weapons.xcassets\\knife2.imageset\\knife2@2x.png", base),
  },
  {
    name: 'Styled Curved Long Dagger',
    price: 200,
    quantity: 0,
    productId: 107,
    image: new URL("\\starter\\src\\images\\Weapon_Collection1\\Weapon_Collection1\\Weapons.xcassets\\ladies_dagger.imageset\\ladies_dagger@2x.png", base),
  },
  {
    name: 'Steel Short Broadsword',
    price: 250,
    quantity: 0,
    productId: 108,
    image: new URL("\\starter\\src\\images\\Weapon_Collection1\\Weapon_Collection1\\Weapons.xcassets\\short_sword.imageset\\short_sword@2x.png", base),
  },
  {
    name: 'Long Steel Broadsword',
    price: 275,
    quantity: 0,
    productId: 109,
    image: new URL("\\starter\\src\\images\\Weapon_Collection1\\Weapon_Collection1\\Weapons.xcassets\\sword.imageset\\sword@2x.png", base),
  },
  {
    name: 'Heavy Stone War Hammer',
    price: 350,
    quantity: 0,
    productId: 110,
    image: new URL("\\starter\\src\\images\\Weapon_Collection1\\Weapon_Collection1\\Weapons.xcassets\\warhammer1.imageset\\warhammer1@2x.png", base),
  },
  {
    name: 'War Hammer of MTRM',
    price: 475,
    quantity: 0,
    productId: 1011,
    image: new URL("\\starter\\src\\images\\Weapon_Collection1\\Weapon_Collection1\\Weapons.xcassets\\warhammer3.imageset\\warhammer3@2x.png", base),
  },
  {
    name: 'Mystical Wooden Staff',
    price: 950,
    quantity: 0,
    productId: 112,
    image: new URL("\\starter\\src\\images\\Weapon_Collection1\\Weapon_Collection1\\Weapons.xcassets\\wand.imageset\\wand@2x.png", base),
  },
  {
    name: 'Hammer, the Everflow',
    price: 1500,
    quantity: 0,
    productId: 99,
    image: new URL("\\starter\\src\\images\\CSS-Cards\\Hammer card.png", base),
  },
  {
    name: 'Captain Ner0, the Seafarer',
    price: 1500,
    quantity: 0,
    productId: 98,
    image: new URL("\\starter\\src\\images\\CSS-Cards\\Ner0 card.png", base),
  },
  {
    name: 'Punjab, the Goblin King',
    price: 1500,
    quantity: 0,
    productId: 97,
    image: new URL("\\starter\\src\\images\\CSS-Cards\\Punjab card.png", base),
  },
  {
    name: 'The Minotaur King',
    price: 3000,
    quantity: 0,
    productId: 96,
    image: new URL("\\starter\\src\\images\\CSS-Cards\\MK320x540.png", base),
  },
]

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
let cart = [];

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

let pay = function pay(amount) {
  total += amount;
  let newTotal = total - cartTotal();
  return newTotal;
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