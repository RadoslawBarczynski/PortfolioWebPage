const text = document.querySelector(".sec-text");

const textLoad = () =>{
    setTimeout(() =>{
        text.textContent = "Junior Front-End Dev";
    }, 0);
    setTimeout(() =>{
        text.textContent = "Student";
    }, 4000);
    setTimeout(() =>{
        text.textContent = "Junior Unity Dev";
    }, 8000);
}

    textLoad();
    setInterval(textLoad, 12000);