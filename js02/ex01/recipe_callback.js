const level = ["Make a dough", "First fermentation", "Mold the dough", "Second fermentation", "Deep fry the dough"];
const interval = [300, 500, 420, 200, 500];

function randomFail() {
    if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

function bake(count) {
    if (count > 4)
        return 0;
    const timeoutID = setTimeout(function f() {
        try {
                randomFail()
            } catch (e) {
                console.error(level[count] + " " + e);
                bake(count);
                clearTimeout();
                return timeoutID;
            }
            console.log(level[count]);
            bake(count + 1);
        }, interval[count])
}

bake(0);