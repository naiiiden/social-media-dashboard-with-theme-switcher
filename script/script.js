const dark = document.querySelectorAll(".dark");
document.getElementById("checkbox").addEventListener("click", () => {
  dark.forEach((elem) => { 
    if (elem.style.color == "rgb(30, 32, 42)") {
        elem.style.color = "rgb(255, 255, 255)";
    } else {
        elem.style.color = "rgb(30, 32, 42)";
    };
  });
});

const darkbg = document.querySelectorAll(".darkbg");
document.getElementById("checkbox").addEventListener("click", () => {
  darkbg.forEach((elem) => { 
    if (elem.style.backgroundColor == "rgb(240, 242, 250)") {
        elem.style.backgroundColor = "rgb(37, 42, 65)";
    } else {
        elem.style.backgroundColor = "rgb(240, 242, 250)";
    };
  });
});

const darktext = document.querySelectorAll(".darktext");
document.getElementById("checkbox").addEventListener("click", () => {
  darktext.forEach((elem) => { 
    if (elem.style.color == "rgb(99, 104, 126)") {
        elem.style.color = "rgb(139, 151, 198)";
    } else {
        elem.style.color = "rgb(99, 104, 126)";
    };
  });
});

document.getElementById("checkbox").addEventListener("click", () => {
    if (document.getElementById("bg").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("bg").style.backgroundColor = "rgb(30, 32, 42)"
    } else {
        document.getElementById("bg").style.backgroundColor = "rgb(255, 255, 255";
    };

    if (document.getElementById("darkh2").style.color == "rgb(99, 104, 126)") {
        document.getElementById("darkh2").style.color = "rgb(255, 255, 255)";
    } else {
        document.getElementById("darkh2").style.color = "rgb(99, 104, 126)";
    };
});