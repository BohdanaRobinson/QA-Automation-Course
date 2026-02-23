type ID = number;
let userID: ID = 123;

console.log(userID);

type Car = {
    brand: string;
    model: string;
    year: number;
};

const myCar: Car = {
    brand: "Tesla",
    model: "Y",
    year: 2025,
};

type Status = "active" | "inactive" | "pending";

let currentStatus