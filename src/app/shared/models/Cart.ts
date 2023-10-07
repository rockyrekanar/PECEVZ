import { CartItem } from './CartItem';

export class Cart {
  items: CartItem[] = [];

  //write a function to get total price

  get totalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  // get totalPrice(): number {
  //   let totalPrice = 0;
  //   this.items.forEach((item) => {
  //     totalPrice = totalPrice + item.price;
  //   });
  //   return totalPrice;
  // }
}

// import { CartItem } from './CartItem';
//
// export class Cart {
//   items: CartItem[] = [];
//
//   // Calculate the total price using reduce
//   get totalPrice(): number {
//     return this.items.reduce((total, item) => total + item.price, 0);
//   }
//}
