export default function setTimer(callback, interval) {
    let count = 0;
    
    setTimeout(function f() {
        if (callback(count)) {
            count++;
            setTimeout(f, interval);
        }
        else
            clearTimeout();
    }, interval)
}