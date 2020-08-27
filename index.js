function reloadPage() {
  window.location.reload();
}

function color() {
  if (document.getElementById("btn").style.backgroundColor == "darkblue") {
    document.getElementById("btn").style.backgroundColor = "darkgreen";
  } else if (
    document.getElementById("btn").style.backgroundColor == "darkgreen"
  ) {
    document.getElementById("btn").style.backgroundColor = "black";
  } else if (document.getElementById("btn").style.backgroundColor == "black") {
    document.getElementById("btn").style.backgroundColor = "grey";
  } else if (document.getElementById("btn").style.backgroundColor == "grey") {
    document.getElementById("btn").style.backgroundColor = "#19190f";
  } else {
    document.getElementById("btn").style.backgroundColor == "darkblue";
  }
}
function fun() {
  t = setInterval(color, 1000);
}

function stop() {
  clearInterval(t);
}
