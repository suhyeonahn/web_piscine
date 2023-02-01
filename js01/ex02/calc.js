const inputForm = document.getElementById("inputForm");
const price = document.getElementById("price");
const checkbox = document.getElementById("member");
const selectGrade = document.getElementById("grade");

const productLi = document.getElementById("productLi");
const regularPriceLi = document.getElementById("regularPriceLi");
const discountPriceLi = document.getElementById("discountPriceLi");

const currentTime = document.getElementsByTagName("time")[0];
const date = new Date();
currentTime.innerHTML = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

checkbox.addEventListener("click", (event) => {
    selectGrade.disabled = event.target.checked ? false : true;
})

inputForm.addEventListener("input", (event) => {
    let target = event.target;

    if (target.id == "product")
        productLi.innerHTML = `Product name: ${target.value}`;
    if (target.id == "price") {
        regularPriceLi.innerHTML = `Regular price: ${Number(target.value).toLocaleString("ko-kr")}`;
        displayDiscountPrice();
    }
    if (target.id == "member" || target.id == "grade") {
        displayDiscountPrice();
    }
})

function calcPrice(percent) {
    let calcDiscountPrice = price.value;
    
    if (price.value == "")
        return ""
    if (percent == "5%")
        calcDiscountPrice = price.value * 0.95;
    if (percent == "10%")
        calcDiscountPrice = price.value * 0.90;
    if (percent == "15%")
        calcDiscountPrice = price.value * 0.85;

    return calcDiscountPrice;
}

function displayDiscountPrice() {
    const percent = selectGrade.options[selectGrade.options.selectedIndex].getAttribute("data-percent");
    let discountPrice = selectGrade.disabled ? price.value : calcPrice(percent);
    discountPriceLi.innerHTML = `Discount price: ${Number(discountPrice).toLocaleString("ko-kr")}`;
}
