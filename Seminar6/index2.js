// let evenCollection = document.querySelectorAll("tbody tr:nth-child(even)");
// let oddCollection = document.querySelectorAll("tbody tr:nth-child(odd)");

// if (evenCollection && evenCollection.length > 0) {
//     for (let item of evenCollection) {
//         item.bgColor = "red";
//     }
// }

// if (oddCollection && oddCollection.length > 0) {
//     for (let item of oddCollection) {
//         item.bgColor = "yellow";
//     }
// }

document.querySelector("tbody tr:first-child").bgColor = "blue";
document.querySelector("tbody tr:last-child").bgColor = "green";

let coll = document.querySelectorAll("tbody tr:nth-child(2n+1):not(tbody tr:first-child, tbody tr:last-child)");
for (let item of coll) {
    item.bgColor = "violet";
}