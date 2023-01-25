function helloSomeone(p) {
    if (typeof p === "string" ) {
        if (p === "")
            ;
    }
    if (typeof p === "number" ) {
        if (isNan(p))
            ;
        if (p <= 0)
            ;
        else
            ;
    }
    if (p === null ) // Null
        ;
    if (typeof p === "undefined" )
        ;
}

const obj = JSON.parse(text);