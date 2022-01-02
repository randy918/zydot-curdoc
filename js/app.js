//!  21921.1621------------------------Beginning of program

console.log(zydot.length);

//!  21921.1621----------------Initialize variables

var country;
var flavor;
var kind;
var datecode;
var code;
var filename;
var date;
var pdf;
var printer;
var theTitle;
var theNewTitle;
var theDashTitle;

const allProducts = [...zydot];
let filteredProducts = [];
let filteredProductsL1 = [];
let filteredProductsL2 = [];

var filterProduct = "All";
var filterDist = "Any";

const init = function () {
  resetFilteredProducts();
  var filterProduct = "All";
  var filterDist = "Any";
  //  filteredProductsL2 = allProducts.slice();
  visualizeFilteredProducts();
};

const resetFilteredProducts = function () {
  filteredProducts = allProducts.slice();
  filteredProductsL1 = filteredProducts.slice();
  filteredProductsL2 = filteredProductsL1.slice();

  //  filteredProductsL1 = [];
  //  filteredProductsL2 = [];
};

const doFilters = function () {
  doProductFilter();
  doDistFilter();
};

const doProductFilter = function () {
  //todo  122621.1044  Handle ALL option
  resetFilteredProducts();
  if (filterProduct === "All") {
    filteredProductsL1 = filteredProducts.slice();
    c("hello there All");

    //todo  122621.1044  Handle New Product option
  } else if (filterProduct === "New") {
    c("hello there New");
    filteredProductsL1 = filteredProducts.filter(function (el) {
      return el.new == true;
    });
    c({ filteredProducts });
    c({ filteredProductsL1 });
    //todo  122621.1044  Handle Ultra Clean option
  } else if (filterProduct === "Ultra Clean") {
    c("hello there Ultra Clean");
    c({ filteredProducts });
    filteredProductsL1 = filteredProducts.filter(function (el) {
      return el.product == "C";
    });
    c({ filteredProducts });
    c({ filteredProductsL1 });

    //todo  122621.1044  Handle Ultimate Blend Drink option
  } else if (filterProduct === "Ultimate Blend") {
    c("hello there Ultimate Blend");
    filteredProductsL1 = filteredProducts.filter(function (el) {
      return el.product == "U";
    });
    //todo  122621.1044  Handle Euro Blend option
  } else if (filterProduct === "Euro Blend") {
    c("hello there Euro Blend");
    filteredProductsL1 = filteredProducts.filter(function (el) {
      return el.product == "E";
    });
    //todo  122621.1044  Handle Expelit option
  } else if (filterProduct === "Expelit") {
    c("hello there Euro Blend");
    filteredProductsL1 = filteredProducts.filter(function (el) {
      return el.product == "X";
    });

    //todo  122621.1044  Handle Misc option
  } else if (filterProduct === "Misc") {
    c("hello there Other");
    filteredProductsL1 = filteredProducts.filter(function (el) {
      return el.product == "M";
    });
  }
};

const doDistFilter = function () {
  //todo  122621.1044  Handle Any option
  if (filterDist === "Any") {
    filteredProductsL2 = filteredProductsL1.slice();
    c("hello there Any");
    //todo  122621.1044  Handle USA option
  } else if (filterDist === "USA") {
    c("hello there USA");
    filteredProductsL2 = filteredProductsL1.filter(function (el) {
      return el.dist == "Z";
    });

    //todo  122621.1044  Handle Agung option
  } else if (filterDist === "Agung") {
    c("hello there Agung");
    filteredProductsL2 = filteredProductsL1.filter(function (el) {
      return el.dist == "A";
    });
    //todo  122621.1044  Handle Kulu option
  } else if (filterDist === "Kulu") {
    c("hello there Kulu");
    filteredProductsL2 = filteredProductsL1.filter(function (el) {
      return el.dist == "K";
    });
    //todo  122621.1044  Handle La Cabra option
  } else if (filterDist === "La Cabra") {
    c("hello there La Cabra");
    filteredProductsL2 = filteredProductsL1.filter(function (el) {
      return el.dist == "L";
    });
    //todo  122621.1044  Handle Tangy option
  } else if (filterDist === "Tangy") {
    c("hello there Tangy");
    filteredProductsL2 = filteredProductsL1.filter(function (el) {
      return el.dist == "T";
    });
    //todo  122621.1044  Handle Thendro option
  } else if (filterDist === "Thendro") {
    c("hello there Thendro");
    filteredProductsL2 = filteredProductsL1.filter(function (el) {
      return el.dist == "O";
    });
  }
};

const whichButton = function () {
  $(document).ready(function () {
    $("input[type='radio']").click;
  });
};

function visualizeFilteredProducts() {
  c({ filteredProducts });
  c({ filteredProductsL1 });
  c({ filteredProductsL2 });
  c(filteredProductsL2.length);

  if (filteredProductsL2.length === 0) {
    location.reload();
  }
  for (var i = 0; i < filteredProductsL2.length; i++) {
    country = filteredProductsL2[i].country.charAt(0).toLowerCase();
    completeCountry = filteredProductsL2[i].country;
    flavor = filteredProductsL2[i].flavor.charAt(0);
    kind = filteredProductsL2[i].kind.charAt(3);
    theTitle = filteredProductsL2[i].title;
    theDashTitle =
      theTitle.replace(/\s+/g, "-").toLowerCase() +
      "-" +
      filteredProductsL2[i].country.toLowerCase();

    ifNew = theTitle.substring(0, 3);

    datecode = filteredProductsL2[i].datecode;
    code = filteredProductsL2[i].code;
    filename = "./zfiles/" + datecode + "-" + code;

    date = filteredProductsL2[i].date;

    pdf = filteredProductsL2[i].pdf;

    printer = filteredProductsL2[i].printer;
    if ((printer = ".pdf")) {
      printer = "-.pdf";
    }

    currentRow = i + 1;

    document.getElementById("gridContainer").innerHTML = `
    <div>
  
            ${filteredProductsL2
              .map(function (product) {
                return `
                <div class="box one" id="box1">
                <div class = "sku">
                                <h2 class = "bold" class = "v-title"><span class = "blue">${
                                  product.row
                                }) &nbsp</span>${product.title}</h2>
                <h3 class = "yellow">${product.code}</h3>
                <h3 class = "yellow">${product.date}</h3>
                 <img class = "product-image" src ="./zimages/${
                   product.code
                 }-${product.datecode}.png"
                 <div>

                 <a href="./zfiles/${product.code.toLowerCase()}-${product.datecode}-${product.title.replace(/\s+/g, "-").toLowerCase()}.pdf" id="v-pdf" class='btn'>pdf</a>

                 <a href="./zfiles/${product.code.toLowerCase()}-${product.datecode}-${product.title.replace(/\s+/g, "-").toLowerCase()}${product.printer}" id="v-pdf" class='btn btn2'>printer</a>

                 </div>
                </div>
                </div></div>
                </div>
                `;
              })
              .join("")}
            `;
  }
}

//!  122521.2012    EVENT LISTENERS

document.querySelector("#myRadio1").addEventListener("click", function () {
  //todo SET ALL PRODUCTS
  filterProduct = "All";
  doFilters();
  visualizeFilteredProducts();
});

document.querySelector("#myRadio2").addEventListener("click", function () {
  //todo SET NEW PRODUCTS
  filterProduct = "New";
  doFilters();
  visualizeFilteredProducts();
});

document.querySelector("#myRadio3").addEventListener("click", function () {
  //todo 122621.1106    Set ULTRA CLEAN
  filterProduct = "Ultra Clean";
  doFilters();

  visualizeFilteredProducts();
});

document.querySelector("#myRadio4").addEventListener("click", function () {
  //todo 122621.1106    Set ULTIMATE BLEND
  filterProduct = "Ultimate Blend";
  doFilters();
  visualizeFilteredProducts();
});

document.querySelector("#myRadio6").addEventListener("click", function () {
  //todo 122621.1106    Set EURO BLEND
  filterProduct = "Euro Blend";
  doFilters();
  visualizeFilteredProducts();
});

document.querySelector("#myRadio7").addEventListener("click", function () {
  //todo 122621.1106    Set EXPElIT
  filterProduct = "Expelit";
  doFilters();
  visualizeFilteredProducts();
});

document.querySelector("#myRadio8").addEventListener("click", function () {
  //todo 122621.1106    Set MISC
  filterProduct = "Misc";
  doFilters();
  visualizeFilteredProducts();
});

document.querySelector("#myRadio9").addEventListener("click", function () {
  //todo 122621.1106    Dist ANY
  filterDist = "Any";
  doFilters();
  visualizeFilteredProducts();
});

document.querySelector("#myRadio10").addEventListener("click", function () {
  //todo 122621.1106    Dist USA & English
  filterDist = "USA";
  doFilters();
  visualizeFilteredProducts();
});

document.querySelector("#myRadio11").addEventListener("click", function () {
  //todo 122621.1106    Dist AGUNG
  filterDist = "Agung";
  doFilters();
  visualizeFilteredProducts();
});

document.querySelector("#myRadio12").addEventListener("click", function () {
  //todo 122621.1106    Dist KULU
  filterDist = "Kulu";
  doFilters();
  visualizeFilteredProducts();
});

document.querySelector("#myRadio13").addEventListener("click", function () {
  //todo 122621.1106    Dist LA CABRA
  filterDist = "La Cabra";
  doFilters();
  visualizeFilteredProducts();
});

document.querySelector("#myRadio14").addEventListener("click", function () {
  //todo 122621.1106    Dist TANGY
  filterDist = "Tangy";
  doFilters();
  visualizeFilteredProducts();
});

document.querySelector("#myRadio15").addEventListener("click", function () {
  //todo 122621.1106    Dist THENDRO
  filterDist = "Thendro";
  doFilters();
  visualizeFilteredProducts();
});

//!  122221.2014    MAIN SEQUENCE

function main() {
  init();
}

window.onload = function () {
  main();
};
