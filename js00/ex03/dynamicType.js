const dynamicType = {
    number : null,
    put : function (N) {
        number = N;
    },
    change : function (type) {
        let myFunc = num => Number(num);
        if (type === "String")
            number = String(number);
        if (type === "Number")
            number = Number(number);
        if (type === "Object")
            number = Object(number);
        if (type === "Array")
            //number = [number];
            number = Array.from(String(number), myFunc)
    },
    printType : function () {
        console.log(number);
    }
};

const type = dynamicType;

type.put(42); // type === Number
type.change("Array"); // convert to array with the input;
type.printType(); 


type.put(42);
type.change("String");
type.printType();

type.put(42);
type.change("Object");
type.printType();

type.put(42);
type.change("Number");
type.printType();