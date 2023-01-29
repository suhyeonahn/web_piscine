export default function helloSomeone(p) {
    if (typeof p === "string") {
        if (p === "")
            console.log("Who are you?");
        else
            console.log(`Hello ${p}`);
    }
    if (typeof p === "number") {
        if (isNaN(p))
            console.log("Age is just a number");
        if (p <= 0)
            console.log("I am Benjamin Button!");
        else
            console.log(`My age is ${p}`);
    }
    if (p === null) // Null
        console.log("I am null and void");
    if (typeof p === "undefined")
        console.log("Nobody can define me!");
}