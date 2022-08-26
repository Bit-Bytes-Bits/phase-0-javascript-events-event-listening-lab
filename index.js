const input = document.getElementById("button");

function addingEventListener() {
  input.addEventListener("click", function () {
    alert("Finally doing what buttons do. You clicked me.");
  });
}

addingEventListener()