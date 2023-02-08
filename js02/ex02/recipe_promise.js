const level = ["Making a dough..", "First fermentation..", "Molding the dough..", "Second fermentation..", "Deep fring the dough.."];
const interval = [3000, 5000, 4200, 2000, 5000];

function bake(count) {
    if (count > 4) {
        console.log("Bon appetit :)");
        return 0;
    }
    let promise = new Promise((resolve, reject) => {
        if (Math.random() >= 0.2) {
            setTimeout(() => {
                resolve(level[count] + "\nSUCCESS!");
            }, interval[count])
        } else {
            reject(level[count] + "\n" + "FAIL. * My chef will scold me :( *");
        }
    });
    promise.then((message) => {
        console.log(level[count] + "\nSUCCESS!");
        bake(count + 1);
    }).catch((message) => { 
        console.error(message);
        bake(count);
    });   
}
bake(0);