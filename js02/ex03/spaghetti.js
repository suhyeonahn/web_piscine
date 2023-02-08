const level = ["boilng pasta..", "blanching brocolis..", "preparing garlics and onions..", "frying bacons", "sauting the sauce and vegetables", "mixing all ingredients together"];
const interval = [10000, 1000, 2000, 2000, 3000, 3000];
let count = 0;

function cook(i) {
    let promise = new Promise((resolve, reject) => {
        if (Math.random() >= 0.2) {
            setTimeout(() => {
                if (count == 5)
                    resolve(level[i] + "\nSUCCESS!\nBon appetit :)");
                else
                    resolve(level[i] + "\nSUCCESS!");
            }, interval[i])
        } else {
            reject(level[i] + "\n" + "FAIL. * My chef will scold me :( *");
        }
    });
    promise.then((message) => {
        console.log(message);
        count++;
        if(count == 5)
            bake(5);
    }).catch((message) => { 
        console.error(message);
        cook(i);
    });
}

for (let i = 0; i < 5; i++) {
        cook(i);
}