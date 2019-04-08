const navLinks = document.querySelectorAll("nav a");
const articles = document.querySelectorAll(".content");
let activeLink = navLinks[0]; // Home

navLinks.forEach(function(navLink) {
  navLink.addEventListener("click", function(event) {
    // Deactivate current page
    activeLink.className = "";
    const urlParts = activeLink.href.split("#");
    const afterHashtag = urlParts.pop();
    const oldArticle = document.getElementById(afterHashtag);
    oldArticle.className = "content";

    // Set new page
    activeLink = this;

    // Activate new page
    activeLink.className = "active";
    document.getElementById(activeLink.href.split("#").pop()).className =
      "content show";

    event.preventDefault();
  });
});

const input = document.querySelectorAll("form input");
const label = document.querySelectorAll("form label");

let textarea = document.querySelector("form textarea");
let linkMailto = document.querySelector("form a");

//----------------------------User-information----------------------------
let username = "";
let userSurname = "";
let userAddress = "";
let userEmail = "";
let userText = "";
//------------------------------------------------------------------------

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("input", function(event) {
    let labelAddress = "label-" + event.path[0].id; // for find label

    if (this.value.length > 0) {
      document.getElementById(labelAddress).style.visibility = "visible";
    } else if (this.value.length == 0) {
      document.getElementById(labelAddress).style.visibility = "hidden";
    }

    if (event.path[0].id == "name") {
      username = this.value;
      console.log(username);
    } else if (event.path[0].id == "surname") {
      userSurname = this.value;
      console.log(userSurname);
    } else if (event.path[0].id == "address") {
      userAddress = this.value;
      console.log(userAddress);
    } else if (event.path[0].id == "email") {
      userEmail = this.value;
      console.log(userEmail);
    }
  });
}

textarea.addEventListener("input", function() {
  userText = this.value;
  console.log(userText);
});

linkMailto.addEventListener("click", function() {
  linkMailto.href = "mailto:baktiar2794@gmail.com?subject=" + userText;

  console.log(linkMailto.href);
});
console.log(linkMailto.href);
