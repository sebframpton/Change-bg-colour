function reloadPage() {
  window.location.reload();
}

function color() {
  if (document.getElementById("btn").style.backgroundColor == "blue") {
    document.getElementById("btn").style.backgroundColor = "green";
  } else if (document.getElementById("btn").style.backgroundColor == "green") {
    document.getElementById("btn").style.backgroundColor = "black";
  } else if (document.getElementById("btn").style.backgroundColor == "black") {
    document.getElementById("btn").style.backgroundColor = "grey";
  } else if (document.getElementById("btn").style.backgroundColor == "grey") {
    document.getElementById("btn").style.backgroundColor = "yellow";
  } else if (document.getElementById("btn").style.backgroundColor == "yellow") {
    document.getElementById("btn").style.backgroundColor = "red";
  } else if (document.getElementById("btn").style.backgroundColor == "red") {
    document.getElementById("btn").style.backgroundColor = "purple";
  } else if (document.getElementById("btn").style.backgroundColor == "purple") {
    document.getElementById("btn").style.backgroundColor = "white";
  } else {
    document.getElementById("btn").style.backgroundColor == "blue";
    document.getElementById("btn").style.backgroundColor = "pink";
  }
}
function fun() {
  t = setInterval(color, 1000);
}

function stop() {
  clearInterval(t);
}
