// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

/* function findLargest(a, b, c) {
    return Math.max)(a, b, c);
    console.log(findLargest(500,20,30));
}
 */
let a 
let b
let c

function findLargest(a, b, c) {
    if (a > b && a > c) {
        return (a);
        
    } else if(b > a && b > c) {
        return (b);
    }
    else if(c > a && c > b) {
        return (c);
    }
}

console.log(findLargest(500,20,30));

