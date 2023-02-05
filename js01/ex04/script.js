let prevScrollY = window.scrollY;
let prevScrollVal = "";

window.addEventListener("scroll", (event) => {
    //const rect = window.getBoundingClientRect();
    //console.log(rect);
    if ((prevScrollY > window.scrollY) && ((prevScrollVal != "up") || (prevScrollVal == ""))) {
        alert("You are scrolling up!");
        prevScrollVal = "up";
    }
    else if ((prevScrollY < window.scrollY) && ((prevScrollVal != "down") || (prevScrollVal == ""))) {
        alert("You are scrolling down!");
        prevScrollVal = "down";
    }
    prevScrollY = window.scrollY;
},{
    // code is invoced after
    // UI thread carries out the scrolling.
    passive: true
});