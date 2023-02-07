const level = ["Making a dough..", "First fermentation..", "Molding the dough..", "Second fermentation..", "Deep fring the dough.."];
const interval = [3000, 5000, 4200, 2000, 5000];

function randomFail() {
    if (Math.random() < 0.2) throw "FAIL. * My chef will scold me :( *";
}

function bake(count) {
    if (count > 4) {
        console.log("Bon appetit :)");
        return 0;
    }
    setTimeout(() => {
        try {
                randomFail();
                console.log(level[count] + "\nSUCCESS!");
                bake(count + 1);
            } catch (e) {
                console.error(level[count] + "\n" + e);
                bake(count);
            }
        }, interval[count])
}

bake(0);