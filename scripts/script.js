document.getElementById("main-action-button").onclick = function() {
   document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

const links = documents.querySelectorAll("menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" });
    }

}

const buttons = documents.querySelectorAll(".products-item .button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        document.getElementById("order").scrollIntoView({ behavior: "smooth" });
    }

}
const prices = document.getElementById("products-item-price");
document.getElementById("change-currency").onclick = function(e) {
const currentCurrency = e.target.innerText;
    let newCurrency = "$";
    let coefficient = 1;
    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 90;
    } else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 3;
    } else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }
    e.target.innerText = newCurrency;
    for (let i = 0; i < price.length; i++) {
        prices[i].innerText = +(prices(i).getAttribute("data-bace-price") * coefficient).toFixed(1); + " " + newCurrency;
    }
}
