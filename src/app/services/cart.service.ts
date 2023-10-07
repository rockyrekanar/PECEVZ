import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(food: Food): void {
    const cartItemIndex = this.cart.items.findIndex(
      (item) => item.food.id === food.id
    );

    if (cartItemIndex !== -1) {
      // If the food item is already in the cart, increment its quantity
      this.cart.items[cartItemIndex].quantity++;
    } else {
      // If it's not in the cart, create a new cart item
      // const newCartItem = {
      //   food: food,
      //   quantity: 1,
      // };

      this.cart.items.push(new CartItem(food));
    }
  }

  removeFromCart(food: Food): void {
    const cartItemIndex = this.cart.items.findIndex(
      (item) => item.food.id === food.id
    );

    if (cartItemIndex !== -1) {
      // If the food item is found in the cart, remove it
      this.cart.items.splice(cartItemIndex, 1);
    }
  }

  getCart(): Cart {
    // Simply return the cart object
    return this.cart;
  }
  changeQuantity(quantity: number, foodId: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  // changeQuantity(food: Food, quantity: number) {
  //   const cartItemIndex = this.cart.items.findIndex(
  //     (item) => item.food.id === food.id
  //   );
  //   this.cart.items[cartItemIndex].quantity++;
  // }
}

// import { Injectable } from '@angular/core';
// import { Cart } from '../shared/models/Cart';
// import { Food } from '../shared/models/Food';
//
// @Injectable({
//   providedIn: 'root',
// })
// export class CartService {
//   private cart: Cart = new Cart();
//   addToCart(food: Food): void {
//     let cartItem = this.cart.items.find((item) => item.food.id === food.id);
//     if (cartItem) {
//       this.changeQuantity(food.id, cartItem.quantity + 1);
//       return;
//     }
//     this.cart.items.push(new cartItem(food));
//   }
// }
