//!  72519.1708 DICTIONARY ARRAYS RESOURCES

//!  21921.1621------------------------Beginning of program

// var zData = JSON.parse(zydot);

console.log(typeof zydot);
console.log(zydot.length);

//!  21921.1621----------------Initialize variables

var country;
var flavor;
var kind;
var flag;
var datecode;
var code;
var filename;
var date;
var pdf;
var printer;
var currentRow;
var theTitle;
var theNewTitle;
var theDashTitle;
var num;
var prefix;
var suffix;

var spreadsheetRow;
var prefixAndSuffix;
var webSite;
var disableWeb;
var disableIndesign;
var currentCategory;
var currentActive;
var navText;
var currentSelection = 0;
let allYears = [];

const allProducts = [...zydot];
let filteredProducts = [];
let filteredProductsL1 = [];
let filteredProductsL2 = [];

var filterProduct = "All";

var filterDist = "Any";

const init = function () {
  resetFilteredProducts();
  visualizeFilteredProducts();
};

const resetFilteredProducts = function () {
  filteredProducts = allProducts.slice();
  let filteredProductsL1 = [];
  let filteredProductsL2 = [];
};

const doFilters = function () {
  doProductFilter();
  doDistFilter();
};

const doProductFilter = function () {
  //todo  122621.1044  Handle ALL option
  resetFilteredProducts();
  if (filterProduct === "All") {
    c("hello there All");
  } else if (filterProduct === "New") {
    //todo  122621.1044  Handle New Product option
    c("hello there New");
  } else if (filterProduct === "Ultra Clean") {
    //todo  122621.1044  Handle Ultra Clean option
    c("hello there Ultra Clean");
    c({ filteredProducts });
    filteredProductsL1 = filteredProducts.filter(function (el) {
      return el.code.charAt(1) == "U" && el.code.charAt(2) == "B";
    });
    c({ filteredProducts });
    c({ filteredProductsL1 });
  } else if (filterProduct === "Ultimate Blend Drink") {
    c("hello there Ultimate Blend Drink");
    //todo  122621.1044  Handle Ultimate Blend Drink option
  } else if (filterProduct === "Ultimate Blend Mix") {
    c("hello there Ultimate Blend Mix");
    //todo  122621.1044  Handle Ultimate Blend Mix option
  } else if (filterProduct === "Euro Blend") {
    c("hello there Euro Blend");
    //todo  122621.1044  Handle Euro Blend option
  } else if (filterProduct === "Other") {
    c("hello there Other");
    //todo  122621.1044  Handle Other option
  }
};

const doDistFilter = function () {
  //todo  122621.1044  Handle Any option
  if (filterDist === "Any") {
    c("hello there Any");
  } else if (filterDist === "USA") {
    //todo  122621.1044  Handle USA option
    c("hello there USA");
    filteredProductsL2 = filteredProductsL1.filter(function (el) {
      return el.dist.charAt(0) == "z";
    });
    c({ filteredProducts });
    c({ filteredProductsL1 });
    c({ filteredProductsL2 });
  } else if (filterDist === "Agung") {
    //todo  122621.1044  Handle Agung option
    c("hello there Agung");
  } else if (filterDist === "Kulu") {
    //todo  122621.1044  Handle Kulu option
    c("hello there Kulu");
  } else if (filterDist === "La Cabra") {
    //todo  122621.1044  Handle La Cabra option
    c("hello there La Cabra");
  } else if (filterDist === "Thendro") {
    //todo  122621.1044  Handle Thendro option
    c("hello there Thendro");
  }
};

const whichButton = function () {
  $(document).ready(function () {
    $("input[type='radio']").click;
  });
};

function visualizeFilteredProducts() {
  for (var i = 0; i < zydot.length; i++) {
    c(i);
    country = zydot[i].country.charAt(0).toLowerCase();
    completeCountry = zydot[i].country;
    flavor = zydot[i].flavor.charAt(0);
    kind = zydot[i].kind.charAt(3);
    flag = "./zimages/" + country + flavor + kind + ".png";
    c(flag);
    num = i;
    c(num);
    theTitle = zydot[i].title;
    theDashTitle =
      theTitle.replace(/\s+/g, "-").toLowerCase() +
      "-" +
      zydot[i].country.toLowerCase();
    c(theDashTitle);

    ifNew = theTitle.substring(0, 3);

    datecode = zydot[i].datecode;
    code = zydot[i].code;
    filename = "./zfiles/" + datecode + "-" + code;

    date = zydot[i].date;

    pdf = zydot[i].pdf;

    printer = zydot[i].printer;
    if ((printer = ".pdf")) {
      printer = "-.pdf";
    }

    currentRow = i + 1;

    document.getElementById("gridContainer").innerHTML = `
    <div>
  
            ${zydot
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

    if ((ifNew = "NEW")) {
      theNewTitle = theTitle.replace("NEW ", '<span class="green">NEW </span>');
      theTitle = theNewTitle;
    }
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
  //todo 122621.1106    Set UB DRINK
  filterProduct = "Ultimate Blend Drink";
  doFilters();
  visualizeFilteredProducts();
});

document.querySelector("#myRadio5").addEventListener("click", function () {
  //todo 122621.1106    Set UB MIX
  filterProduct = "Ultimate Blend Mix";
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
  //todo 122621.1106    Set OTHER
  filterProduct = "Other";
  doFilters();
  visualizeFilteredProducts();
});

document.querySelector("#myRadio8").addEventListener("click", function () {
  //todo 122621.1106    Set EXPELIT
  filterProduct = "Other";
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
