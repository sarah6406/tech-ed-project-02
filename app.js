// // get elements by ID
const cookieButton = document.getElementById("cookie-img");
const upgradeButton = document.getElementById("upgrade-button");
const cookiesNum = document.getElementById("cookies-span");
const cookiesPerSec = document.getElementById("cookiesPerSec-span");

// //make an object to keep track of cookie count
const items = {
  cookies: 11,
  upgrades: 0,
};

//if local storage exists, update items with it
const storageItems = JSON.parse(localStorage.getItem("items"));

if (storageItems != null) {
  items.cookies = storageItems.cookies;
  items.upgrades = storageItems.upgrades;
  updatePage();
}

// // function to buy cookie
function getCookie() {
  items.cookies++;
  updatePage();
  updateLS();
}

//function to buy upgrade
//this needs to be onclick!!!
function getUpgrade() {
  items.upgrades++;
  items.cookies -= 10;
    if (items.cookies < 10) {
      alert("You do not have enough cookies for upgrade!");
    } else {
      items.cookies -= 10;
    }
  updatePage();
  updateLS();
}
function updatePage() {
  cookiesNum.textContent = items.cookies;
  cookiesPerSec.textContent = items.upgrades;
}

function updateLS() {
  localStorage.setItem("items", JSON.stringify(items));
}

//   //   upgradeNum.textContent = stats.upgradeCount;
//   //   const stringifiedUpgradeNum = JSON.stringify(stats);
//   //   localStorage.setItem("stats", stringifiedUpgradeNum);
// }

// function clickCookie() {
//   console.log("cookie clicked");
// }

// cookieButton.addEventListener("click", clickCookie);

// function newUpgrade() {
//   items.upgrades++;
// }
// // addEventlistener for buy cookie
cookieButton.addEventListener("click", getCookie);
// // addEventlistener for buy upgrade
// //      remember to subtract amount of cookies from cookie count
upgradeButton.addEventListener("click", getUpgrade);
// // DOM to disable button until there are enough cookies to buy the upgrade

// if (cookieupgrade - cookiecount < 0) {
//     p-tag.textContent = "You do not have enough cookies!"
// }

// //function to update page
// function updatePage() {}
// //function to update local storage to be call within buyCookie and buyUpgrade
// function updateLS() {}
// //start the timer that will run every second forever
// setInterval(function() {
//     stats.cookieCount += stats.cps;
//     // updatePage();
//     // updateLS()

// }, 1000)

// document.getElementById( "cookie-img" ).onclick = function() {
//     console.log("image clicked")
// };

// setInterval(function () {
//   items.cookies += items.upgrades;
//   updatePage();
//   updateLS();
// }, 1000); // 1000 milliseconds == 1 second
