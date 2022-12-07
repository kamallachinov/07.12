
let tbody = document.querySelector("tbody")
let containerProducts = document.querySelector(".container-products");
let counter = document.querySelector("span");

let basket = [];
let basketCount = 0;
basket = JSON.parse(localStorage.getItem("basket")) ?? [];
if (basket) {
    basket.forEach((element) => {
        basketCount += element.count;
    });
    counter.innerText = basketCount;
}


basket = JSON.parse(localStorage.getItem("basket"))


basket.forEach(element => {

    let tr = document.createElement("tr");
    let td_img = document.createElement("td");
    let img = document.createElement("img")
    img.setAttribute("src", "element.product.src")
    // td_img.innerHTML = element.product.src;
    let td_name = document.createElement("td");
    td_name.innerText = element.product.name;
    let td_price = document.createElement("td");
    td_price.innerText = element.product.price;
    let td_count = document.createElement("td");
    td_count.innerHTML = `<span class="minus" style="cursor:pointer">-</span><span>${element.count}</span><span class="plus" style="cursor:pointer">+</span>`;

    tr.appendChild(td_img);
    td_img.appendChild(img)
    tr.appendChild(td_name);
    tr.appendChild(td_price);
    tr.appendChild(td_count);
    tbody.appendChild(tr);
    tbody.classList.add("text-white")
    td_count.addEventListener("click", function (e) {
        // console.log(e.target.parentElement.parentElement.firstElementChild);
        console.log(e.target.parentElement.parentElement);

        if (e.target.className == "plus") {

            e.target.previousElementSibling.innerText++
            basket.forEach(element => {
                if (e.target.parentElement.parentElement.firstElementChild.src == element.product.src) {
                    element.count++
                }
            });
            counter++
            localStorage.setItem("basket", JSON.stringify(basket))

        } else if (e.target.className == "minus") {
            e.target.nextElementSibling.innerText--
            basket.forEach(element => {
                if (e.target.parentElement.parentElement.firstElementChild.src == element.product.src && element.product.count == 0) {
                    element.count--;
                    e.target.parentElement.parentElement.remove();
                }

            });
            counter--
            localStorage.setItem("basket", JSON.stringify(basket))

        }
        span.innerText == counter;

    })

});

