export {};

// EXAMPLE 1 - Override a Class method in TypeScript

class Parent {
  doMath(a: number, b: number): number {
    console.log(`result is: ${a + b}`);
    return a + b;
  }
}

class Child extends Parent {
  override doMath(a: number, b: number): number {
    console.log(`result is ${a * b}`);

    // 👇️ this calls the parent's doMath method
    // super.doMath(a, b);

    return a * b;
  }
}

const child1 = new Child();

// 👇️ result is 100
child1.doMath(10, 10);

// ---------------------------------------------------

// // EXAMPLE 2 - Use the `super` keyword to call the parent's method in the child class

// class Parent {
//   doMath(a: number, b: number): number {
//     console.log(`result is: ${a + b}`);
//     return a + b;
//   }
// }

// class Child extends Parent {
//   override doMath(a: number, b: number): number {
//     console.log(`result is ${a * b}`);

//     // 👇️ this calls parent's doMath method
//     super.doMath(a, b);

//     return a * b;
//   }
// }

// const child1 = new Child();

// // 👇️ result is 100
// child1.doMath(10, 10);

// // 👉️ parent's method logs `result is: 20`

// ---------------------------------------------------

// // EXAMPLE 3 - Call the `super()` method when extending from a class with a constructor

// class Parent {
//   name = 'Parent';

//   constructor(
//     public a: number,
//     public b: number,
//   ) {
//     this.a = a;
//     this.b = b;
//   }

//   doMath(): number {
//     console.log(`result is: ${this.a + this.b}`);
//     return this.a + this.b;
//   }
// }

// class Child extends Parent {
//   override name = 'Child';

//   constructor(public override a: number) {
//     // 👇️ Call super here
//     super(a, a);

//     this.a = a;
//   }

//   override doMath(): number {
//     console.log(`result is ${this.a * this.a}`);

//     // 👇️ this calls the parent's doMath method
//     super.doMath();

//     return this.a * this.a;
//   }
// }

// const child1 = new Child(100);

// // 👇️ result is 10000
// child1.doMath();

// // 👉️ parent's method logs `result is: 200`
