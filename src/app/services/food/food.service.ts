import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tags';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id: number): Food {
    return this.getAll().find((food) => food.id == id)!;
  }

  getAllImages(): string {
    return 'Santhosdh';
  }

  getCount(): number {
    return 10;
  }

  getAll() {
    return [
      {
        id: 1,
        price: 19.99,
        name: 'Chicken',
        favourite: true,
        star: 4,
        tags: ['FastFood', 'Pizza'],
        imageUrl: 'assets/2.jpg',
        cookTime: '30-50',
        origins: ['Country A', 'Country B'],
      },
      {
        id: 2,
        price: 24.99,
        name: 'Product B',
        favourite: false,
        star: 3,
        tags: ['Pizza', 'Lunch'],
        imageUrl: 'assets/2.jpg',
        cookTime: '45-60',
        origins: ['Country C'],
      },
      {
        id: 3,
        price: 12.99,
        name: 'Product C',
        favourite: true,
        star: 5,
        tags: ['FastFood', 'Lunch'],
        imageUrl: 'assets/2.jpg',
        cookTime: '25-67',
        origins: ['Country A', 'Country D'],
      },
      {
        id: 4,
        price: 29.99,
        name: 'Product D',
        favourite: false,
        star: 4,
        tags: ['tag4'],
        imageUrl: 'assets/2.jpg',
        cookTime: '50-70',
        origins: ['Country B', 'Country E'],
      },
      {
        id: 5,
        price: 14.99,
        name: 'Product E',
        favourite: true,
        star: 4,
        tags: ['FastFood', 'tag5'],
        imageUrl: 'assets/2.jpg',
        cookTime: '35-50',
        origins: ['Country F'],
      },
      {
        id: 6,
        price: 22.99,
        name: 'Product F',
        favourite: true,
        star: 4,
        tags: ['Lunch', 'tag5'],
        imageUrl: 'assets/2.jpg',
        cookTime: '40-100',
        origins: ['Country C', 'Country D'],
      },
      {
        id: 7,
        price: 18.99,
        name: 'Product G',
        favourite: false,
        star: 3,
        tags: ['Pizza', 'tag4'],
        imageUrl: 'assets/2.jpg',
        cookTime: '28-50',
        origins: ['Country A'],
      },
      {
        id: 8,
        price: 32.99,
        name: 'Product H',
        favourite: true,
        star: 5,
        tags: ['FastFood', 'tag4'],
        imageUrl: 'assets/2.jpg',
        cookTime: '55-90',
        origins: ['Country E', 'Country F'],
      },
      {
        id: 9,
        price: 16.99,
        name: 'Product I',
        favourite: false,
        star: 4,
        tags: ['Pizza', 'tag5'],
        imageUrl: 'assets/2.jpg',
        cookTime: '33-50',
        origins: ['Country B', 'Country C'],
      },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags.includes(tag));
    // if (tag == 'All') return this.getAll();
    // else return this.getAll().filter((food) => food.tags.includes(tag));
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 14 },
      { name: 'Lunch', count: 14 },
      { name: 'SlowFood', count: 14 },
      { name: 'Hamburger', count: 14 },
      { name: 'Fry', count: 14 },
      { name: 'Soup', count: 14 },
    ];
  }

  // getAll(): string[] {
  //   return [
  //     'assets/1.jpg',
  //     'assets/2.jpg',
  //     'assets/3.jpg',
  //     'assets/4.jpg',
  //     'assets/5.jpg',
  //     'assets/6.jpg',
  //     'assets/7.jpg',
  //     'assets/8.jpg',
  //   ];
  // }
}
