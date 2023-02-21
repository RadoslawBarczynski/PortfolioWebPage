const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Back-End";
  }, 0);
  setTimeout(() => {
    text.textContent = "Student";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Unity Dev";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);
