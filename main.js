const products = [
    {
        id: 1,
        name: "iphone 14",
        price: 100000,
        image: "./img/iphone 14.png",
        category: "iphone",
        description: "iphone 14"
    },
    {
        id: 2,
        name: "Hoddi",
        price: 25.00,
        image: "./img/hoodi (1).jpg",
        category: "clothes",
        description: "Hoddi"
    },
    {
        id: 3,
        name: "Shose",
        price: 15.00,
        image: "./img/shose (1).jpg",
        category: "shoes",
        description: "shose"
    }
    ,{
        id: 4,
        name: "hat",
        price: 10.00,
        image: "./img/shirt (1).jpg",
        category: "clothes",
        description: "shirt"
    }
    ,
    {
        id: 5,
        name: "shirt",
        price: 10.00,
        image: "./img/shirt (3).jpg",
        category: "clothes",
        description: "shirt"
    },
    {
        id : 6,
        name : "pants",
        price : 40.00,
        image : "./img/pant (2).jpg",
        category : "clothes",
        description : "pants"
    }
    ,
    {
        id : 7,
        name : "watch",
        price : 20.00,
        image : "./img/watch (1).jpg",
        category : "watch",
        description : "watch"
    },
    {
        id : 8,
        name : "headphone",
        price : 60.00,
        image : "./img/headphone (1).jpg",
        category : "headphone",
        description : "headphone"
    },
    {
        id : 9,
        name : "Bag",
        price : 100000,
        image : "./img/bag (1).jpg",
        category : "Bag",
        description : "Bag"
    },
    {
        id : 10,
        name : "macbook",
        price : 25.00,
        image : "./img/macbook.jpg",
        category : "laptop",
        description : "macbook"
    },
    {
        id : 11,
        name : "Asus RoG",
        price : 149.99,
        image : "./img/ASUS - ROG Strix G17 17_3_ Laptop - Intel Core i7 - 16GB Memory - NVIDIA GeForce RTX 2070 - 512GB SSD - Original Black.jpg",
        category : "laptop",
        description : "ROG Strix G17 17_3_ Laptop - Intel Core i7 - 16GB Memory - NVIDIA GeForce RTX 2070 - 512GB SSD - Original Black.jpg"
    }
    ,{
        id : 12,
        name : "Bag",
        price : 25.00,
        image : "./img/bag (2).jpg",
        category : "Bag",
        description : "Bag"
    },
    {
        id : 13,
        name : "Watch",
        price : 54.99,
        image : "./img/watch (2).jpg",
        category : "Watch",
        description : "Watch"
    },
    {
        id : 14,
        name : "Headphone",
        price : 100.00,
        image : "./img/headphone (2).jpg",
        category : "Headphone",
        description : "Headphone"
    },
    {
        id : 15,
        name : "Shirt",
        price : 25.00,
        image : "./img/shirt (4).jpg",
        category : "clothes",
        description : "Shirt"
    },
    {
        id : 16,
        name : "Bag",
        price : 25.00,
        image : "./img/bag (3).jpg",
        category : "Bag",
        description : "Bag"
    },
    {
        id : 17,
        name : "Watch",
        price : 54.99,
        image : "./img/watch (3).jpg",
        category : "Watch",
        description : "Watch"
    },
    {
        id : 18,
        name : "Headphone",
        price : 100.00,
        image : "./img/headphone (3).jpg",
        category : "Headphone",
        description : "Headphone"
    },
    {
        id : 19,
        name : "Shirt",
        price : 25.00,
        image : "./img/shirt (1).jpg",
        category : "clothes",
        description : "Shirt"
    },
    {
        id : 20,
        name : "Bag",
        price : 25.00,
        image : "./img/bag (4).jpg",
        category : "Bag",
        description : "Bag"
    },
    {
        id : 21,
        name : "Watch",
        price : 54.99,
        image : "./img/watch (4).jpg",
        category : "Watch",
        description : "Watch"
    }
    ,{
        id : 22,
        name : "Headphone",
        price : 100.00,
        image : "./img/headphone (4).jpg",
        category : "Headphone",
        description : "Headphone"
    },
    {
        id : 23,
        name : "Hoodi",
        price : 25.00,
        image : "./img/hoodi (2).jpg",
        category : "clothes",
        description : "Hoodi"
    },
    {
        id : 24,
        name : "Bag",
        price : 25.00,
        image : "./img/bag (5).jpg",
        category : "Bag",
        description : "Bag"
    },
    {
        id : 25,
        name : "Iphone Xs",
        price : 499.99,
        image : "./img/iPhone XS.jpg",
        category : "iphone",
        description : "Iphone Xs"
    },
    {
        id : 26,
        name : "Iphone 13",
        price : 699.99,
        image : "./img/Iphone 13 pro.jpg",
        category : "iphone",
        description : "Iphone Xs Max"
    }
    ,
    {
        id : 27,
        name : "Hoodi",
        price : 25.00,
        image : "./img/hoodi (3).jpg",
        category : "clothes",
        description : "Hoodi"
    },
    {
        id : 28,
        name : "Shose",
        price : 15.00,
        image : "./img/shose (2).jpg",
        category : "shoes",
        description : "shose"
    },
    {
        id : 29,
        name : "Shose",
        price : 15.00,
        image : "./img/shose (3).jpg",
        category : "shoes",
        description : "shose"
    },
    {
        id : 30,
        name : "Shose",
        price : 15.00,
        image : "./img/shose (4).jpg",
        category : "shoes",
        description : "shose"
    },
    {
        id : 31,
        name : "Shose",
        price : 15.00,
        image : "./img/shose (5).jpg",
        category : "shoes",
        description : "shose"
    },
    {
        id : 32,
        name : "Shose",
        price : 15.00,
        image : "./img/shose (6).jpg",
        category : "shoes",
        description : "shose"
    },
    {
        id : 33,
        name : "Shose",
        price : 15.00,
        image : "./img/shose (7).jpg",
        category : "shoes",
        description : "shose"
    },
    {
        id : 34,
        name : "Shose",
        price : 15.00,
        image : "./img/shose (8).jpg",
        category : "shoes",
        description : "shose"
    }
];
const productLists = document.querySelector(".product-list");


//scroll change background color to header
window.addEventListener("scroll", () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

//display text
const text = ['Iphone',' Clothes', 'Shoes', 'Headphones', 'Watches','Computers'];
let i = 0;
setInterval( function(){
    i++;
    if(i === text.length){
        i = 0;
    }
    document.querySelector("#text").innerHTML = text[i];
},2000);

function displayProducts(productsArray){
    let item = "";
    for(var i in productsArray){
        item = item + `<div class="item">
                         <img src="${productsArray[i].image}" alt="${productsArray[i].name}">
                         <div class="details">
                             <h3>${productsArray[i].name}</h3>
                             <p class="price">$${productsArray[i].price}</p>
                         </div>
                         <div class="footer">
                             <button class="add-to-cart">Add to cart</button>
                             <i class="bi bi-star"></i>
                         </div>
                        </div>`;
     }
     productLists.innerHTML = item;
}

function getAllProducts() {
    displayProducts(products);
}
getAllProducts();

// Event listeners for category buttons
const filterByCategory = (c) => {
    const filteredProducts = products.filter((p) => {
        return p.category === c;
    });
    displayProducts(filteredProducts);
}
// click on button clothes display only products clothes
const clothes = document.querySelector(".clothes");
clothes.addEventListener("click", () => {
    filterByCategory("clothes");
});

// click on button bag display only products Bag
const bags = document.querySelector(".Bag");
bags.addEventListener('click', () => {
    filterByCategory("Bag");
});

// click on button watch display only products Watch
const watch = document.querySelector(".watch");
watch.addEventListener('click', () => {
    filterByCategory("watch");
});

// click on button headphone display only products Headphone
const iphone = document.querySelector(".iphone");
iphone.addEventListener('click', () => {
    filterByCategory("iphone");
});
// click on button shoes display only products shoes

const shoes = document.querySelector(".shoes");
shoes.addEventListener('click', () => {
    filterByCategory("shoes");
});

// click on button laptop display only products laptop

const laptop = document.querySelector(".laptop");
laptop.addEventListener('click', () => {
    filterByCategory("laptop");
});

// search product by input product name
function searchProducts(query){
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase());
    });
    displayProducts(filteredProducts);
}
const input = document.getElementById("search-input");
const iconsearch = document.querySelector(".searchbtn");
iconsearch.addEventListener("click", () => {
    const query = input.value;
    searchProducts(query);
});
input.addEventListener('keyup', (e) => {
    if(e.key === "Enter"){
        const query = input.value;
        searchProducts(query);
    }
    
});

const all = document.querySelector(".all");
all.addEventListener('click', () => {
    getAllProducts();
    
});






//dark mode 
// const moon = document.querySelector(".moon");

// moon.addEventListener("click", () => {
//     const body = document.querySelector("body");
//     body.classList.toggle("dark-mode");
// });

// function displayProducts(productsArray) {
//     let item = "";
//     for (var i in productsArray) {
//         item += `<div class="item">
//             <img src="${productsArray[i].image}" alt="${productsArray[i].name}">
//             <div class="details">
//                 <h3>${productsArray[i].name}</h3>
//                 <p class="price">$${productsArray[i].price}</p>
//             </div>
//             <div class="footer">
//                 <button class="add-to-cart">Add to cart</button>
//                 <i class="bi bi-star"></i>
//             </div>
//         </div>`;
//     }
//     productLists.innerHTML = item;
// }

// function getAllProducts() {
//     displayProducts(products);
// }

// getAllProducts();

// // Event listeners for category buttons
// const searchProducts = (query) =>{
//     const filteredProducts = products.filter((product) => {
//         return product.name.toLowerCase().includes(query.toLowerCase());
//     });
//     displayProducts(filteredProducts);
// }

// const filterByCategory = (category) => {
//     const filteredProducts = products.filter((product) => {
//         return product.category.toLowerCase().includes(category.toLowerCase());
//     });
//     displayProducts(filteredProducts);
// }

// const filterByPrice = (price) => {
//     const filteredProducts = products.filter((product) => {
//         return product.price === price;
//     });
//     displayProducts(filteredProducts);
// }

// document.querySelector('.clothes').addEventListener('click', () => filterByCategory('clothes'));
// document.querySelector('.shoes').addEventListener('click', () => filterByCategory('shoes'));

// document.querySelector('.Bag').addEventListener('click', () => filterByCategory('bag'));

// document.querySelector('.watch').addEventListener('click', () => filterByCategory('watch'));

// document.querySelector('.iphone').addEventListener('click', () => filterByCategory('iphone'));

// document.querySelector('.laptop').addEventListener('click', () => filterByCategory('laptop'));

// const serachbtn = document.querySelector('.searchbtn');
// const inputEl = document.querySelector('#search-input');

// serachbtn.addEventListener('click', () => {
//     const query = inputEl.value;
//     searchProducts(query);
// });
// inputEl.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         const query = inputEl.value;
//         searchProducts(query);
//     }
// } )