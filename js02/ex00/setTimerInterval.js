
export default function setTimer(callback, interval) {
    let count = 0;
    
    const intervalID = setInterval(function f() {
        if (!callback(count))
            clearInterval(intervalID);
        count++;
    }, interval)
    
}