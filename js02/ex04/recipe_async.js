const level = ["Making a dough..", "First fermentation..", "Molding the dough..", "Second fermentation..", "Deep frying the dough.."];
const interval = [3000, 5000, 4200, 2000, 5000];

function baking(count) {
    return new Promise((resolve) => {
        if (Math.random() < 0.2)
            throw level[count] + "\nFAIL. * My chef will scold me :( *";
        setTimeout(() => {
            resolve(level[count] + "\nSUCCESS!");
        }, interval[count]);
    });
}
//Version 1
//async function asyncCall(count) {
//    if (count == level.length) {
//        console.log("Bon appetit :)");
//        return 0;
//    }
//    try {
//        const message = await baking(count);
//        console.log(message);
//        asyncCall(count + 1);
//    } catch (e) {
//        console.error(e);
//        asyncCall(count);
//    }
//}
//asyncCall(0);

//Version 2
async function asyncCall() {
    for (let i = 0; i < level.length; i++) {
        try {
            const message = await baking(i);
            console.log(message);
        } catch (e) {
            console.error(e);
            try {
                const message = await baking(i);
                console.log(message);
            } catch(e) {
                console.error(e);
            }
        }
    }
    console.log("Bon appetit :)");
}
asyncCall();