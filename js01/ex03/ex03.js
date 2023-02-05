const lis = document.getElementsByTagName("li");
// nodelist to array
Array.from(lis).forEach(item => {
    item.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
        event.target.style.color = "cornflowerblue";
    })
    // mouseleave - no bubbling
    item.addEventListener("mouseleave", (event) => {
        event.target.style.backgroundColor = "cornflowerblue";
        event.target.style.color = "black";
    })
    item.addEventListener("click", (event) => {
        alert(`You've selected ${event.target.innerHTML}.`);
    })
})