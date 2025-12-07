window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let percent = (scrollTop / docHeight) * 100;

    const BAR = document.getElementById("scroll-progress");

    const NEW_WIDTH = percent + "%";
    BAR.style.width = NEW_WIDTH;

    if (percent >= 100) {
        BAR.classList.add("full-gauge");
    } else {
        BAR.classList.remove("full-gauge");
    }
});