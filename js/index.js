let nav = document.querySelector(".top ul .navmedia");
let left = document.querySelector(".home .flacker i:first-child");
let rigth = document.querySelector(".home .flacker i:last-child");
let arrtext = Array.from(document.querySelectorAll(".home .nav div"));
let span = Array.from(document.querySelectorAll(".pagination span"));
let img = Array.from(document.querySelectorAll(".gallery .img img"));
let order = 0;
nav.onclick = function () {
  document.querySelector(".top ul:last-child").style.display == "flex"
    ? (document.querySelector(".top ul:last-child").style.display = "none")
    : (document.querySelector(".top ul:last-child").style.display = "flex");
};
left.onclick = function () {
  order--;
  order == -1 ? (order = 2) : false;
  arrtext.forEach((e) => (e.className = "not"));
  arrtext[order].className = "active";
};
rigth.onclick = function () {
  order++;
  order == 3 ? (order = 0) : false;
  arrtext.forEach((e) => (e.className = "not"));
  arrtext[order].className = "active";
};
setInterval(() => {
  order++;
  order == 3 ? (order = 0) : false;
  arrtext.forEach((e) => (e.className = "not"));
  arrtext[order].className = "active";
}, 3000);
span.forEach((e) => {
  e.addEventListener("click", function () {
    span.forEach((s) => {
      s.classList == "active" ? false : (s.style.backgroundColor = "white");
    });
    e.style.backgroundColor = "#5cb85c";
  });
});
img.forEach((i, a) => {
  i.addEventListener("click", () => {
    document.querySelector(".gallery .click").style.display = "flex";
    document.querySelector(".gallery .click .plis").appendChild(i);
    document.querySelector(".gallery .click #delete").onclick = () => {
      document.querySelector(".gallery .img").appendChild(img[a]);
      document.querySelector(".gallery .click").style.display = "none";
    };
    document.querySelector(".gallery .click #left").onclick = () => {
      console.log(a);
      document
        .querySelector(".gallery .click .plis")
        .appendChild(img[a == 0 ? (a = 11) : (a -= 1)]);
      document
        .querySelector(".gallery .img")
        .appendChild(img[a == 11 ? 0 : a + 1]);
    };
    document.querySelector(".gallery .click #right").onclick = () => {
      document
        .querySelector(".gallery .click .plis")
        .appendChild(img[a == 11 ? (a = 0) : (a += 1)]);
      document
        .querySelector(".gallery .img")
        .appendChild(img[a == 0 ? 11 : a - 1]);
    };
  });
});
