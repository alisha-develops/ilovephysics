interface car {
    brand: string;
    year: number;
    doesFly: boolean;
}

const mydreamcar: car = {
    brand: "tesla",
    year: 2026,
    doesFly: true,
};

console.log(`my dream car is a ${mydreamcar.year} ${mydreamcar.brand} and it flies: ${mydreamcar.doesFly}`);