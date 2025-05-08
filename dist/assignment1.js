"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    // 
    function squareAsync(n) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (n < 0) {
                        reject(new Error("Negative number not allowed"));
                    }
                    else {
                        resolve(n * n);
                    }
                }, 1000);
            });
        });
    }
    // 
}
{
    function filterByRating(items) {
        let filteredBooks = [];
        items.filter(item => {
            if (item.rating >= 4) {
                filteredBooks = [...filteredBooks, item];
            }
        });
        return filteredBooks;
    }
    //
}
{
    // 
    function concatenateArrays(...arrays) {
        let newArray = [];
        arrays.map(array => newArray = [...newArray, ...array]);
        return newArray;
    }
    // 
}
{
    // 
    class Vehicle {
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
        getInfo() {
            return `Make: ${this.make}, Year: ${this.year}`;
        }
    }
    class Car extends Vehicle {
        constructor(make, year, model) {
            super(make, year);
            this.model = model;
        }
        getModel() {
            return `Model: ${this.model}`;
        }
    }
    // 
}
{
    // 
    function processValue(value) {
        if (typeof value === "string") {
            return value.length;
        }
        return value * 2;
    }
    // 
}
{
    function getMostExpensiveProduct(products) {
        if (products.length === 0) {
            return null;
        }
        let highestPrice = 0;
        let hightestProduct = { name: "", price: 0 };
        products.map(product => {
            if (product.price > highestPrice) {
                highestPrice = product.price;
                hightestProduct = product;
            }
        });
        return hightestProduct;
    }
    // 
}
{
    // 
    let Day;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    function getDayType(day) {
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
    function squareAsync(n) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (n < 0) {
                        reject(new Error("Negative number not allowed"));
                    }
                    else {
                        resolve(n * n);
                    }
                }, 1000);
            });
        });
    }
    // 
}
