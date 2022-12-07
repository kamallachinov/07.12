
let containerProducts = document.querySelector(".container-products");
let products = [
    {
        id: 1,
        name: "T-shirt",
        price: 3,
        imgSource:
            "https://www.mydesignation.com/wp-content/uploads/2019/08/malayali-tshirt-mydesignation-mockup-image-latest-golden-.jpg",
    },
    {
        id: 2,
        name: "Sweatshirt",
        price: 80,
        imgSource:
            "https://lp2.hm.com/hmgoepprod?set=source[/2e/c5/2ec58641c8bb49893d432418c2ed595b7e73c8bb.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
    },
    {
        id: 3,
        name: "Shoes",
        price: 200,
        imgSource:
            "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/b/i/0/-original-imagg5vxfjcbeyrv.jpeg?q=70",
    },
];
localStorage.setItem("products", JSON.stringify(products))
let basket = [];
let basketCount = 0;
window.addEventListener("load", function () {
    // let containerProducts = document.querySelector(".container-products");
    products.forEach((element) => {
        containerProducts.innerHTML += `
        <div class="cardProduct" id="${element.id}">
        <div class="card-body">
            <h5 class="card-title ">${element.name}</h5>
            <img src="${element.imgSource}"
                alt="" style="width: 300px; height:400px; border-radius:10px">
            <div class="buttons">
                <a href="#" class="btn btn-primary" id="addBtn">Add</a>
                <p class="btn btn-secondary price">Price: ${element.price}$</p>
            </div>
        </div>
    </div>
        `;
    });

    basket = JSON.parse(localStorage.getItem("basket")) ?? [];
    if (basket) {
        basket.forEach((element) => {
            basketCount += element.count;
        });
        counter.innerText = basketCount;
    }

});
const counter = document.querySelector("span");

containerProducts.addEventListener("click", function (e) {
    if (e.target.className == "btn btn-primary") {
        // console.log(e.target.parentElement.parentElement.firstElementChild.nextElementSibling);
        Number(counter.innerText++);
        if (basket.some(x => x.product.name == e.target.parentElement.parentElement.firstElementChild.innerText)) {
            basket.forEach(elem => {
                if (elem.product.name == e.target.parentElement.parentElement.firstElementChild.innerText) {
                    elem.count += 1;
                    return;
                }
            });
            localStorage.setItem("basket", JSON.stringify(basket))
        } else {
            let productItem = {
                product: {
                    id: e.target.parentElement.parentElement.id,
                    name: e.target.parentElement.parentElement.firstElementChild.innerText,
                    price: e.target.nextElementSibling.innerText,
                    imgSource: e.target.parentElement.parentElement.firstElementChild.nextElementSibling.src
                }, count: 1
            }
            basket.push(productItem)
        }
        basketCount++
        localStorage.setItem("basket", JSON.stringify(basket))
    }

})

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
// $('.play').on('click', function () {
//     owl.trigger('play.owl.autoplay', [1000])
// })
// $('.stop').on('click', function () {
//     owl.trigger('stop.owl.autoplay')
// })

