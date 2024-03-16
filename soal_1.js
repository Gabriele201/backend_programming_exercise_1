// Gabriele / 535239201

function adalahPrima(angka) {
    if (angka <= 1) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(angka); i++) {
            if (angka % i === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log("Bilangan prima dari 1 hingga 1000:");
for (let i = 1; i <= 1000; i++) {
    if (adalahPrima(i)) {
        console.log(i);
    }
}