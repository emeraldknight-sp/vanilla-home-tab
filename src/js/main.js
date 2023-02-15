const buttonBoarding = document.getElementById("boarding");
const buttonAdd = document.getElementById("plus");
const buttonEditPickup = document.getElementById("edit-pickup");
const buttonEditDestination = document.getElementById("edit-destination");
const buttonMenuRace = document.getElementById("menu-race");
const buttonMenuNavBar = document.getElementById("nav-bar");

function changeColor(e) {
  const elements = document.querySelector("#menu-race").children;
  const childrenElements = e.target.closest(".menu .item").children;
  const element = e.target.closest(".menu");

  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove("selected");
    elements[i].firstElementChild.nextElementSibling.classList.remove(
      "selected"
    );
    elements[i].lastElementChild.classList.remove("selected");
  }

  for (let i = 0; i < childrenElements.length; i++) {
    if (childrenElements[i].tagName !== "BUTTON") {
      childrenElements[i].classList.add("selected");
      element.classList.add("selected");
    }
  }
}

buttonBoarding.addEventListener("click", () => console.log("Boarding"));

buttonAdd.addEventListener("click", () => console.log("Adding"));

buttonEditPickup.addEventListener("click", () => console.log("Edit Pickup"));

buttonEditDestination.addEventListener("click", () => console.log("Edit Destination"));

buttonMenuRace.addEventListener("click", changeColor);

buttonMenuNavBar.addEventListener("click", changeColor);
