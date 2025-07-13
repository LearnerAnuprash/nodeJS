let heading = document.querySelector(".heading");

setInterval(() => {
  if (heading.style.backgroundColor === "black") {
    heading.style.backgroundColor = "white";
  } else {
    heading.style.backgroundColor = "black";
  }
}, 500);
