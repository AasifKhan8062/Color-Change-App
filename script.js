let body = document.querySelector("body");
let buttons = document.querySelectorAll(".box");
buttons.forEach(function(buttons) {
  buttons.addEventListener("click", (e) => {
    if (e.target.id == "gray") {
      body.style.backgroundColor = e.target.id;
    }
    else if (e.target.id == "blue") {
      body.style.backgroundColor = e.target.id;
    }
    else if (e.target.id == "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    else if (e.target.id == "red") {
      body.style.backgroundColor = e.target.id;
    }
    else if (e.target.id == "pink") {
      body.style.backgroundColor = e.target.id;
    }
      
    else {
      body.style.backgroundColor = "white";
    }
  });
});