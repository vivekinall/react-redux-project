var p = new Promise((resolve, reject) => {

    let a = 1;
    if (a == 2) {
        resolve("Mai pass ho gya");

    } else {
        reject("mai fial ho gya");
    }
});

p.then((messgae) => {
    console.log(messgae + " resolved")
})
    .catch((messgae) => {
        console.log(messgae + " reject")
    });


const number = [1,2,3,4];
const sum1 = number.reduce((accum,curr) => accum +curr);
const sum = number.reduce((x) => x,0);
console.log(sum1);