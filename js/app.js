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

var filterProduct = "All";

var filterDist = "Any";

const init = function () {
  resetFilteredProducts();
  visualizeFilteredProducts();
};

const resetFilteredProducts = function () {
  filteredProducts = allProducts.slice();
};

const filterDistributors = function () {};

const whichButton = function () {};

const visualizeFilteredProducts = function () {};

function init2() {
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
  resetFilteredProducts();
  //todo CHECK FOR DIST
  filterDistributors();

  visualizeFilteredProducts();
});

document.querySelector("#myRadio2").addEventListener("click", function () {
  //todo SET NEW PRODUCTS
});

document.querySelector("#myRadio3").addEventListener("click", function () {
  //todo ULTRA CLEAN PRODUCTS
  //todo Duplicate Ultra Clean Entries
  //todo Implement Distributor
  resetFilteredProducts();
  var allProducts = resetJsonArray;
});

//!  122221.2014    MAIN SEQUENCE

function main() {
  init();
}

window.onload = function () {
  main();
};
