//nesting

// let age = 5;
// if (age >= 18) {
//     if (age >= 18) {
//         if (age >= 60) {
//             console.log("senior");
//         } else {
//             console.log("middle");
//         }
//     }
// } else {
//     console.log("child");
// }


function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

getData(1, () => {
    getData(2);
});