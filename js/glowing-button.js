"use strict";

window.addEventListener("load", () => {
    const BUTTONS = document.querySelectorAll("[data-glow]");

    BUTTONS.forEach(BUTTON => {
        BUTTON.insertAdjacentHTML("afterbegin", `
            <div class="btn-glow">
                <div class="btn-color"></div>
            </div>
        `);

        const GLOW = BUTTON.querySelector(".btn-glow");

        BUTTON.addEventListener("mouseenter", () => GLOW.style.opacity = "1");
        BUTTON.addEventListener("mouseleave", () => GLOW.style.opacity = "0");

        BUTTON.addEventListener("mousemove", e => {
            const RECT = BUTTON.getBoundingClientRect();
            const X = e.clientX - RECT.left;
            const Y = e.clientY - RECT.top;

            GLOW.style.left = X + "px";
            GLOW.style.top  = Y + "px";
            GLOW.style.transform = "translate(-50%, -50%)";
        });
    });
});