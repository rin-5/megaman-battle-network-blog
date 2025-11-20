window.addEventListener("scroll", function() {
    let scroll = this.window.scrollY;

        document.querySelector(".layer-back").style.transform = "translateY(" + scroll * 0.2 + "px)";
        document.querySelector(".layer-front").style.transform = "translateY(" + scroll * 0.5 + "px)"; 
});