{
    // 
    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (n < 0) {
              reject(new Error("Negative number not allowed"));
            } else {
              resolve(n * n);
            }
          }, 1000);
        });
      }
    // 
}



{
    // 
    type Books = {
        title: string;
        rating: number;
    }[]

    function filterByRating(items: Books): Books {
        let filteredBooks: Books = [];
        items.filter(item => {
            if (item.rating >= 4) {
                filteredBooks = [...filteredBooks, item];
            }
        })
        return filteredBooks;
    }
    //
}



{
    // 
    function concatenateArrays<T>(...arrays: T[][]): T[] {
        let newArray: T[] = [];
        arrays.map(array => newArray = [...newArray,...array]);
        return newArray;
    }
    // 
}



{
    // 
    class Vehicle {
        private make: string;
        year: number;

        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }

        getInfo(): string {
            return `Make: ${this.make}, Year: ${this.year}`;
        }
    }

    class Car extends Vehicle {
        private model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
        }

        getModel(): string {
            return `Model: ${this.model}`;
        }
    }
    // 
}



{
    // 
    function processValue(value: string | number): number {
        if(typeof value === "string") {
            return value.length;
        }
        return value*2;
    }
    // 
}



{
    // 
    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length === 0) {
            return null;
        }

        let highestPrice: number = 0;
        let hightestProduct: Product = { name: "", price: 0 };
        products.map(product => {
            if (product.price > highestPrice) {
                highestPrice = product.price;
                hightestProduct = product;
            }
        })
        return hightestProduct;
    }
    // 
}



{
    // 
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Day): string {
        switch (day) {
            case Day.Sunday:
                return "Weekend";
            default:
                return "Weekday";
        }
    }
    // 
}



{
    // 
    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (n < 0) {
              reject(new Error("Negative number not allowed"));
            } else {
              resolve(n * n);
            }
          }, 1000);
        });
      }
    // 
}