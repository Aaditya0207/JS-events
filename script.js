// Challenge 1
function namePrint() {
  var userID = document.getElementById("user");
  if (userID) {
    userID.innerHTML = "Aaditya Kaushik";
  }
}
window.onload = namePrint();

// Challenge 2
var color = document.getElementById("btn-click");
color.addEventListener("click", function () {
  this.style.backgroundColor = "red";
});

// Challenge 3
function makeSentence() {
  var noun = document.getElementById("noun").value;
  var verb = document.getElementById("verb").value;
  var adverb = document.getElementById("adverb").value;

  var sentence = noun + " " + verb + " " + adverb + ".";

  document.getElementById("statement").innerText = sentence;
}

document.getElementById("build-button").addEventListener("click", makeSentence);

// Challenge 4.1
function clicked(event) {
  var clickedId = event.target.id;

  switch (clickedId) {
    case "grandparent":
      console.log("Grandparent clicked");
      break;
    case "parent":
      console.log("Parent clicked");
      break;
    case "child":
      console.log("Child clicked");
      console.log("Parent clicked");
      console.log("Grandparent clicked");
      break;
    default:
      break;
  }
}

document.getElementById("grandparent").addEventListener("click", clicked);
document.getElementById("parent").addEventListener("click", clicked);
document.getElementById("child").addEventListener("click", clicked);

// Challenge 4.2
function clicked(event) {
  var clickedId = event.target.id;

  switch (clickedId) {
    case "grandparent":
      console.log("Grandparent clicked");
      break;
    case "parent":
      console.log("Parent clicked");
      break;
    case "child":
      console.log("Child clicked");
      console.log("Parent clicked");
      console.log("Grandparent clicked");
      break;
    default:
      break;
  }
}

document.getElementById("grandparent").addEventListener("click", clicked, true);
document.getElementById("parent").addEventListener("click", clicked, true);
document.getElementById("child").addEventListener("click", clicked, true);

// Challenge 5
function clicked(event) {
  if (event.target.tagName === "LI" && event.target.id === "blazers") {
    console.log("blazers");
  }
}
document.getElementById("category").addEventListener("click", clicked);
